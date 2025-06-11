[![npm version](https://img.shields.io/npm/v/monospace-web-theme.svg)](https://www.npmjs.com/package/monospace-web-theme)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

# monospace-web-theme

A pure CSS + JavaScript theme that enforces a character-aligned grid, monospace typography, and responsive design.

> _Live demo: [CameronBrooks11.github.io/monospace-web-theme](https://CameronBrooks11.github.io/monospace-web-theme/)_

---

## Usage

### Raw HTML

```html
<head>
  <!-- …other tags… -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/monospace-web-theme@1.0.0/dist/monospace.min.css"
  />
</head>
<body>
  <!-- your content… -->
  <script src="https://cdn.jsdelivr.net/npm/monospace-web-theme@1.0.0/dist/monospace.min.js"></script>
</body>
```

### npm / Bundler

```bash
npm install monospace-web-theme
```

In your JavaScript entrypoint (e.g. index.js):

```js
import "monospace-web-theme/dist/monospace.min.css";
import "monospace-web-theme/dist/monospace.min.js";
```

## 🌈 Theme Flavours

The default style is high-contrast black-on-white (and inverted in dark mode). To try some different colour styles, set a `data-theme` attribute on `<html>`:

```html
<html data-theme="twilight"></html>
```

**Supported themes:**

- **rose** – romantic pinks
- **ocean** – cool aquas
- **forest** – soft greens
- **desert** – warm sands
- **twilight** – dusky purples
- **sepia** – editorial browns
- **glacier** – icy blues
- **clay** – muted earth
- **midnight** – dark mode primary
- **sandstone** – soft red earth

_All themes support `prefers-color-scheme: dark` automatically._

## Demo

A standalone demo page is included under demo/demo.html. To preview locally:

1. Clone this repo and install dependencies:

```bash
git clone https://github.com/CameronBrooks11/monospace-web-theme.git
cd monospace-web-theme
npm install
npm run build
```

2. Serve from the project root so that ../dist/… paths resolve:

```bash
live-server --open=demo/demo.html
```

3. Open http://127.0.0.1:8080/demo/demo.html in your browser.

## Advanced Pandoc-driven Example

If you’re looking for a more turnkey Markdown → HTML workflow (Pandoc + GitHub Actions), check out [the-monospace-web](https://github.com/CameronBrooks11/the-monospace-web). It uses this theme as an npm dependency and publishes a fully responsive, character-aligned site from your `.md` files.

## Build & Publish

1. Install dependencies

```bash
npm install
```

2. Build the CSS/JS

```bash
npm run build
```

- `dist/monospace.css` – concatenated (unminified) CSS
- `dist/monospace.min.css` – minified CSS (cssnano, calc disabled)
- `dist/monospace.js` – compiled ES5 JS
- `dist/monospace.min.js` – minified JS (terser)

3. Verify package contents

```bash
npm pack --dry-run
```

Ensure only `dist/*`, `README.md`, `LICENSE`, and `package.json` appear.

4. Publish to npm

Bump the version in package.json, create a Git tag (e.g. `git tag v0.0.1`), then:

```bash
git push --tags
npm publish
```

## Contributing

1. Fork this repository and clone your fork.
2. Create a new branch for your change.
3. Modify `src/reset.css`, `src/theme.css`, or `src/script.js` as needed.
4. Rebuild locally and confirm the [demo](#demo).
5. Commit your changes, push to your branch, and open a pull request.

## License

This project is released under the [MIT License](./LICENSE).

## Repository & Issues

- Source: https://github.com/CameronBrooks11/monospace-web-theme
- Issues: https://github.com/CameronBrooks11/monospace-web-theme/issues
