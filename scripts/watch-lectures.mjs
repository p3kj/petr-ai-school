#!/usr/bin/env node
// Live preview for the Marp decks while you edit them in an editor.
//
// Three modes, all of them reloading the open page when a deck, an asset or a theme is saved:
//
//   server mode (default)  Marp CLI's own server over lectures/. One slide at a time, arrow keys,
//                          the same view the site shows. Nothing is written to disk.
//   --html                 Renders each deck to lectures/<deck>.html and re-renders on every save.
//                          Open the file directly (PhpStorm's built-in browser, file://).
//                          lectures/*.html is already in .gitignore.
//   --scroll               A reading view: every slide at full size, stacked under each other like
//                          the pages of a PDF, one scrollbar. Served from memory, nothing written.
//                          Slide width: --width 1000, or ?w=1200 on the URL.
//
// The site build is untouched by all of this; that is scripts/build-lectures.mjs, writing into site/.
// Drafts are included everywhere here, unlike on the site.
//
// Usage:  node scripts/watch-lectures.mjs [deck] [--html|--scroll] [--port 4321] [--width 1000]
//   deck  one deck, with or without .md. Servers print its URL; --html renders only that deck.

import fs from "node:fs"
import http from "node:http"
import os from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { marpCli } from "@marp-team/marp-cli"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const lecturesDir = path.join(root, "lectures")
const assetsDir = path.join(lecturesDir, "assets")
const themesDir = path.join(root, "themes")

const args = process.argv.slice(2)
const takesValue = ["--port", "-p", "--width"]
const option = (names, fallback) => {
  const i = args.findIndex((a) => names.includes(a))
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback
}
const valueIndexes = new Set(args.flatMap((a, i) => (takesValue.includes(a) ? [i + 1] : [])))
const port = Number(option(["--port", "-p"], process.env.PORT ?? 4321))
const width = Number(option(["--width"], 1000))
const deckArg = args.find((a, i) => !a.startsWith("-") && !valueIndexes.has(i))

const decks = () =>
  fs
    .readdirSync(lecturesDir)
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .sort()
    .map((f) => path.basename(f, ".md"))

const deck = deckArg ? path.basename(deckArg, ".md") : null
if (deck && !fs.existsSync(path.join(lecturesDir, `${deck}.md`))) {
  console.error(`lectures/${deck}.md does not exist`)
  process.exit(1)
}

const common = ["--theme-set", themesDir, "--no-config-file"]

if (args.includes("--scroll")) {
  await scrollServer()
} else if (args.includes("--html")) {
  // Output goes next to the source so the decks' relative assets/ paths keep working.
  // The files are listed one by one, not as a folder, to keep README.md out of it.
  const targets = (deck ? [deck] : decks()).map((d) => path.join(lecturesDir, `${d}.md`))
  console.log(`\nRendering ${deck ? `lectures/${deck}.md` : "every deck in lectures/"} on each save.`)
  if (deck) console.log(`Open:  lectures/${deck}.html`)
  console.log(`Keep this running: the page reloads only while it does. Ctrl+C to stop.\n`)
  process.exit(await marpCli([...targets, "--watch", ...common]))
} else {
  process.env.PORT = String(port)
  const base = `http://localhost:${port}/`
  console.log(`\nMarp preview: ${base}`)
  if (deck) console.log(`This deck:    ${base}${deck}.md`)
  console.log(`Save the .md file and the page reloads. Ctrl+C to stop.\n`)
  process.exit(await marpCli([lecturesDir, "--server", ...common]))
}

// --scroll: render with Marp's "bare" template (plain <svg> slides, no presentation JavaScript),
// then override its page CSS so the slides stack vertically at a readable size.
async function scrollServer() {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "marp-scroll-"))
  const clients = new Set()
  const cache = new Map() // deck -> { mtimeMs, html }

  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://localhost:${port}`)
    const name = decodeURIComponent(url.pathname.slice(1)).replace(/\.(md|html)$/, "")

    if (url.pathname === "/__reload") {
      res.writeHead(200, {
        "content-type": "text/event-stream",
        "cache-control": "no-cache",
        connection: "keep-alive",
      })
      res.write("retry: 1000\n\n")
      clients.add(res)
      req.on("close", () => clients.delete(res))
      return
    }
    if (url.pathname.startsWith("/assets/")) return sendAsset(res, url.pathname)
    if (!name) return send(res, 200, "text/html", indexPage())
    if (!decks().includes(name)) return send(res, 404, "text/plain", `no deck named ${name}`)

    try {
      const slideWidth = Number(url.searchParams.get("w")) || width
      send(res, 200, "text/html", scrollPage(await render(name), slideWidth))
    } catch (err) {
      send(res, 500, "text/plain", String(err))
    }
  })

  server.listen(port, () => {
    const base = `http://localhost:${port}/`
    console.log(`\nMarp scroll view: ${base}`)
    if (deck) console.log(`This deck:        ${base}${deck}`)
    console.log(`Slides ${width}px wide; add ?w=1400 to the URL to change it.`)
    console.log(`Save the .md file and the page reloads, keeping your scroll position. Ctrl+C to stop.\n`)
  })

  let pending
  for (const dir of [lecturesDir, themesDir]) {
    fs.watch(dir, { recursive: true }, () => {
      cache.clear() // a theme or an asset changed too, and those are not in the cache key
      clearTimeout(pending)
      pending = setTimeout(() => {
        for (const client of clients) client.write("data: reload\n\n")
      }, 150)
    })
  }

  async function render(name) {
    const source = path.join(lecturesDir, `${name}.md`)
    const { mtimeMs } = fs.statSync(source)
    const hit = cache.get(name)
    if (hit && hit.mtimeMs === mtimeMs) return hit.html
    const out = path.join(tmpDir, `${name}.html`)
    const status = await marpCli([source, "--template", "bare", "-o", out, ...common])
    if (status > 0) throw new Error(`marp failed (exit ${status})`)
    const html = fs.readFileSync(out, "utf8")
    cache.set(name, { mtimeMs, html })
    return html
  }
}

// Marp's bare template gives each <svg> slide the full viewport height and snaps scrolling to it.
// These rules, injected last so they win, turn that into a continuous page of slides.
function scrollPage(html, slideWidth) {
  const extras = `
<style>
  html, body { height: auto !important; overflow: visible !important; scroll-snap-type: none !important; background: #1c1c1e !important; }
  body { display: flex !important; flex-direction: column; align-items: center; gap: 28px; padding: 28px 16px; }
  body > svg { height: auto !important; width: min(${slideWidth}px, 100%) !important; scroll-snap-align: none !important; box-shadow: 0 4px 18px rgba(0, 0, 0, .45); border-radius: 4px; background: #fff; }
</style>
<script>
  const key = "marp-scroll:" + location.pathname
  addEventListener("beforeunload", () => sessionStorage.setItem(key, String(scrollY)))
  const saved = sessionStorage.getItem(key)
  if (saved) addEventListener("load", () => scrollTo(0, Number(saved)))
  new EventSource("/__reload").onmessage = () => location.reload()
</script>
`
  return html.replace("</body>", `${extras}</body>`)
}

function indexPage() {
  const items = decks()
    .map((d) => `<li><a href="/${d}">${d}</a></li>`)
    .join("")
  return `<!DOCTYPE html><meta charset="utf-8"><title>Marp scroll view</title>
<style>body{font:16px/1.6 system-ui;margin:3rem auto;max-width:34rem}a{color:#2563eb}</style>
<h1>Decks</h1><ul>${items}</ul>`
}

function sendAsset(res, pathname) {
  const file = path.join(assetsDir, path.normalize(decodeURIComponent(pathname.slice("/assets/".length))))
  if (!file.startsWith(assetsDir) || !fs.existsSync(file)) return send(res, 404, "text/plain", "not found")
  const types = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
    ".avif": "image/avif",
  }
  send(res, 200, types[path.extname(file).toLowerCase()] ?? "application/octet-stream", fs.readFileSync(file))
}

function send(res, status, type, body) {
  res.writeHead(status, { "content-type": type, "cache-control": "no-store" })
  res.end(body)
}
