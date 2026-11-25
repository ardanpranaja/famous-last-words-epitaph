// Famous Last Words: The Funniest Epitaph
// Entry program. Writes one one-line tombstone epitaph to entry.txt.
//
// Contract:
//   - Input: none (the entry line is a constant in this file).
//   - Output: a single line of UTF-8 text, 1-150 characters, at
//     (process.env.MAKEFUN_OUTPUT_DIR ?? '/output')/entry.txt.
//   - Side effects: creates the output directory if needed, writes
//     entry.txt, logs the character count to stdout.
//   - Failure modes: exits non-zero if the line is empty, only
//     whitespace, longer than 150 characters, or spans more than
//     one line; exits non-zero if the file cannot be written.
//     The gate counts characters, so validation counts characters
//     too — never bytes, never words.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "He died doing what he loved: ignoring the warning label.";

const MAX_CHARS = 150;

function validateEntry(line: string): void {
  if (line.length === 0 || line.trim().length === 0) {
    throw new Error("entry line must not be empty or only whitespace");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `entry line is ${line.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be exactly one line");
  }
}

function main(): void {
  validateEntry(ENTRY_LINE);
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  const outputPath = join(outputDir, "entry.txt");
  writeFileSync(outputPath, ENTRY_LINE, "utf8");
  console.log(`Wrote ${ENTRY_LINE.length} characters to ${outputPath}`);
}

main();
