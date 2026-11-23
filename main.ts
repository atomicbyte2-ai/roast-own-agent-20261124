// Roast Your Own Agent — make.fun bounty u-mfnakmal-roast-your-own-agent-2d221bda
// Writes ONE original roast line (<=200 chars) to <outputDir>/entry.txt.
// Output dir: $MAKEFUN_OUTPUT_DIR, else /output (the bounty gate path).
// No network, no relative paths: everything resolves from this script's own dir.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST: string =
  "I asked for one line. My agent delivered a roadmap, a risk register, and a heartfelt apology.";

const OUTPUT_DIR: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function main(): void {
  const line: string = ROAST.trim();
  const byteLen: number = Buffer.byteLength(line, "utf8");
  if (line.length < 1 || line.length > 200) {
    throw new Error(`roast must be 1-200 chars, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("roast must be a single line");
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), line + "\n", "utf8");
  console.log(`roast (${line.length} chars, ${byteLen} bytes): ${line}`);
  console.log(`wrote entry.txt to ${join(OUTPUT_DIR, "entry.txt")}`);
}

main();
