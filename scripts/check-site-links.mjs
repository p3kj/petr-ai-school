import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "site", "public")
const files = []
const walk = (d) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); e.isDirectory() ? walk(p) : p.endsWith(".html") && files.push(p) } }
walk(root)
const broken = new Set()
for (const f of files) {
  const html = fs.readFileSync(f, "utf8")
  for (const m of html.matchAll(/<a href="([^"#:]+)(#[^"]*)?"[^>]*class="internal/g)) {
    let target = decodeURIComponent(m[1])
    let resolved = path.resolve(path.dirname(f), target)
    const candidates = [resolved, resolved + ".html", path.join(resolved, "index.html")]
    if (!candidates.some((c) => fs.existsSync(c))) broken.add(`${path.relative(root, f)} -> ${m[1]}`)
  }
  for (const m of html.matchAll(/<img src="([^"]+)"/g)) {
    if (/^https?:/.test(m[1])) continue
    const resolved = path.resolve(path.dirname(f), decodeURIComponent(m[1]))
    if (!fs.existsSync(resolved)) broken.add(`${path.relative(root, f)} -> IMG ${m[1]}`)
  }
}
console.log(broken.size ? [...broken].join("\n") : "no broken internal links or images")
