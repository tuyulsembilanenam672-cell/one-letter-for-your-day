// One Letter for Your Day — the letter D stands for "doomscrolling":
// hours lost to an endless feed, a vivid, funny, true picture of a day.
import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "D"; // D is for doomscrolling.
const OUT_PATH = "/output/entry.txt";

// The gate allows exactly one character, A to Z, and nothing else:
// no word, no gloss, no punctuation, and no trailing newline.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`letter must be a single A-Z character, got ${JSON.stringify(LETTER)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LETTER, "utf8"); // exactly 1 byte, no newline

console.log(`Wrote ${[...LETTER].length} code point to ${OUT_PATH}`);
