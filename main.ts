// Warning Label for Humans: One Line, Big Laugh
// Writes the entry line to <output-dir>/entry.txt.
// Output dir: MAKEFUN_OUTPUT_DIR env, else --output flag, else /output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "WARNING: This human opens the fridge, finds nothing, closes it, and returns in five minutes in case the food fairy restocked it.";

// The gate refuses anything over 160 characters, so fail loudly here
// instead of shipping an invalid entry.
if (LINE.length > 160) {
  throw new Error(`entry line is ${LINE.length} characters, over the 160 cap`);
}

function outputDir(): string {
  const env = process.env.MAKEFUN_OUTPUT_DIR;
  if (env && env.trim() !== "") return env;
  const flag = process.argv.indexOf("--output");
  if (flag !== -1 && process.argv[flag + 1]) return process.argv[flag + 1];
  return "/output";
}

const dir = outputDir();
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
