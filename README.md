# petr-ai-school

Lectures and a wiki for **Petr's AI School**: a multi-week course that teaches people who are not programmers to get real work done with AI agents, starting with Claude Code.

**Read it here: https://p3kj.github.io/petr-ai-school/**

## What is inside

| Folder | Contents |
| --- | --- |
| [`wiki/`](wiki/) | The student-facing wiki, an [Obsidian](https://obsidian.md/) vault: concepts, guides, lecture pages, roadmap |
| [`lectures/`](lectures/) | Slide decks in [Marp](https://marp.app/) Markdown, one file per lecture, images in `assets/` |
| [`themes/`](themes/) | Custom Marp themes shared by all decks |
| [`site/`](site/) | [Quartz 5](https://quartz.jzhao.xyz/), the static site generator that turns `wiki/` into the website (vendored as a git subtree) |
| [`scripts/`](scripts/) | `build-lectures.mjs` renders the decks to HTML and PDF for the website |

The website is rebuilt and deployed to GitHub Pages by [GitHub Actions](.github/workflows/deploy.yml) on every push to `main`.

## Working on it

Requires Node.js 22 or newer. Chromium or Chrome is needed only for PDF export.

```sh
npm run setup       # install dependencies here and in site/
npm run dev         # render decks, then serve the site at http://localhost:8080 with live reload
npm run build       # production build into site/public
npm run lectures    # render decks only (HTML + PDF) into site/quartz/static/slides/
```

- Edit the wiki by opening the `wiki/` folder as a vault in Obsidian.
- Write lectures in VS Code or JetBrains with the Marp extension; see [`lectures/README.md`](lectures/README.md).
- To keep a page or a deck off the website while you work on it, add `draft: true` to its frontmatter. It stays visible in this repository.
- To update Quartz: `npm run site:upgrade`. It pulls the Quartz subtree from the `upstream` remote, so add it once per clone: `git remote add upstream https://github.com/jackyzha0/quartz.git`. Do not run `npx quartz upgrade` or `npx quartz sync` in this repo.

## License

Course content (`wiki/`, `lectures/`, `themes/`) is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), see [LICENSE](LICENSE). Use it for learning or teaching, keep the attribution, share adaptations under the same license.

`site/` contains Quartz, which is [MIT licensed](site/LICENSE.txt) by Jacky Zhao and contributors.
