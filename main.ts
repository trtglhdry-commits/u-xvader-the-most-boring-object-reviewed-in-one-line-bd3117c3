import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Most Boring Object, Reviewed in One Line.
// One funny, true line about the dustpan: it gathers everything you sweep
// toward it, then leaves one thin line of dirt behind, every single time.
const ENTRY =
  "The dustpan: gathers everything you sweep toward it, then leaves one thin line of dirt behind, every single time.";

// Runtime guard: the sealed scorer requires UTF-8 text of 1-200
// characters, not only whitespace, on a single line.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error("entry violates the 1-200 character single-line gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
