#!/usr/bin/env node
// scripts/generate-flavours.js

const fs = require("fs");
const path = require("path");

// adjust path if your JSON lives elsewhere
const jsonPath = path.resolve(__dirname, "../src/flavours.json");
const themes = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

let out = `/* ========== Flavour Overrides (Light + Dark Mode) ========== */\n\n`;

for (const [name, cfg] of Object.entries(themes)) {
  const sel = `[data-theme="${name}"]`;
  // light mode
  out +=
    `${sel} {\n` +
    `  --background-color: ${cfg.light.bg};\n` +
    `  --background-color-alt: ${cfg.light.bgAlt};\n` +
    `  --text-color: ${cfg.light.text};\n` +
    `  --text-color-alt: ${cfg.light.textAlt};\n` +
    `}\n\n`;
  // dark mode
  out +=
    `@media (prefers-color-scheme: dark) {\n` +
    `  ${sel} {\n` +
    `    --background-color: ${cfg.dark.bg};\n` +
    `    --background-color-alt: ${cfg.dark.bgAlt};\n` +
    `    --text-color: ${cfg.dark.text};\n` +
    `    --text-color-alt: ${cfg.dark.textAlt};\n` +
    `  }\n` +
    `}\n\n`;
}

fs.writeFileSync(path.resolve(__dirname, "../src/flavours.css"), out, "utf-8");

console.log("✅ Generated src/flavours.css");
