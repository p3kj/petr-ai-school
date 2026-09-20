#!/usr/bin/env node
// Renders every published Marp deck in lectures/ to HTML (+ PDF) for the website.
//
// Output goes to site/quartz/static/slides/. Quartz's Static emitter copies that folder verbatim
// to public/static/slides/, so a deck ends up at
//   https://<site>/static/slides/<slug>.html   and   .../static/slides/<slug>.pdf
// lectures/assets/ is copied alongside so the decks' relative image paths keep working.
//
// Why the output is excluded from git via .git/info/exclude and NOT via .gitignore:
// Quartz globs its files with gitignore rules applied (globby `gitignore: true`, including parent
// .gitignore files). A .gitignore rule for the slides folder would hide the decks from the build.
// .git/info/exclude is honoured by git but not read by globby. This script keeps that rule present.
//
// A deck is skipped when its frontmatter has `draft: true` (same convention as wiki pages)
// or lacks `marp: true`. README.md is never a deck.
//
// Usage:  node scripts/build-lectures.mjs [--no-pdf]

import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"
import { fileURLToPath } from "node:url"
import { marpCli } from "@marp-team/marp-cli"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const lecturesDir = path.join(root, "lectures")
const assetsDir = path.join(lecturesDir, "assets")
const themesDir = path.join(root, "themes")
const outDirRel = "site/quartz/static/slides/"
const outDir = path.join(root, outDirRel)
const wantPdf = !process.argv.includes("--no-pdf")

const frontmatterOf = (md) => md.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? ""
const flag = (fm, key) => new RegExp(`^${key}:\\s*(true|yes)\\s*$`, "mi").test(fm)

ensureGitExclude(outDirRel)

// Start clean so removed or newly drafted decks do not linger on the site.
fs.rmSync(outDir, { recursive: true, force: true })
fs.mkdirSync(outDir, { recursive: true })

if (fs.existsSync(assetsDir)) {
  fs.cpSync(assetsDir, path.join(outDir, "assets"), { recursive: true })
  for (const name of fs.readdirSync(assetsDir)) {
    if (/\s|[A-Z]|[<>:"|*?#&%']/.test(name)) {
      console.warn(`warning: asset name is not URL-friendly, rename it: assets/${name}`)
    }
  }
}

process.chdir(lecturesDir)

const decks = fs
  .readdirSync(lecturesDir)
  .filter((f) => f.endsWith(".md") && f !== "README.md")
  .sort()

const rendered = []
for (const file of decks) {
  const fm = frontmatterOf(fs.readFileSync(file, "utf8"))
  if (!flag(fm, "marp")) {
    console.log(`skip  ${file} (no "marp: true")`)
    continue
  }
  if (flag(fm, "draft")) {
    console.log(`skip  ${file} (draft)`)
    continue
  }
  const slug = path.basename(file, ".md")
  if (!/^[a-z0-9][a-z0-9._-]*$/.test(slug)) {
    throw new Error(`deck filename must be lowercase kebab-case: ${file}`)
  }

  const common = [file, "--theme-set", themesDir, "--no-config-file"]
  await run([...common, "-o", path.join(outDir, `${slug}.html`)])
  if (wantPdf) {
    await run([
      ...common,
      "--pdf",
      "--allow-local-files",
      "--pdf-outlines",
      "-o",
      path.join(outDir, `${slug}.pdf`),
    ])
  }
  rendered.push(slug)
  console.log(`built ${file}`)
}

console.log(`\n${rendered.length} deck(s) in ${outDirRel}: ${rendered.join(", ") || "-"}`)
process.exit(0)

async function run(args) {
  const status = await marpCli(args)
  if (status > 0) {
    console.error(`marp failed (exit ${status}): ${args.join(" ")}`)
    process.exit(status)
  }
}

// Make sure git ignores the output folder without a .gitignore entry (see header comment).
function ensureGitExclude(rule) {
  let excludeFile
  try {
    excludeFile = execFileSync("git", ["rev-parse", "--git-path", "info/exclude"], {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim()
  } catch {
    return // not a git checkout (or no git); nothing to do
  }
  excludeFile = path.resolve(root, excludeFile)
  const current = fs.existsSync(excludeFile) ? fs.readFileSync(excludeFile, "utf8") : ""
  if (current.split(/\r?\n/).includes(rule)) return
  fs.mkdirSync(path.dirname(excludeFile), { recursive: true })
  const sep = current.length && !current.endsWith("\n") ? "\n" : ""
  fs.appendFileSync(
    excludeFile,
    `${sep}# added by scripts/build-lectures.mjs: rendered decks (a .gitignore rule would hide them from Quartz)\n${rule}\n`,
  )
  console.log(`git: registered ${rule} in ${path.relative(root, excludeFile)}`)
}
