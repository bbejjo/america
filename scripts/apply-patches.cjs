#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const markerFile = path.join(
  process.cwd(),
  "node_modules",
  "vite-plugin-ssg",
  "src",
  "server-entry.tsx"
);
const markerText = "toImportPath";

const alreadyPatched =
  fs.existsSync(markerFile) &&
  fs.readFileSync(markerFile, "utf8").includes(markerText);

if (alreadyPatched) {
  console.log(
    "[patch] vite-plugin-ssg already patched; skipping patch-package on cached node_modules."
  );
  process.exit(0);
}

const result = spawnSync("npx", ["patch-package"], {
  stdio: "inherit",
  shell: true,
});

process.exit(result.status || 0);
