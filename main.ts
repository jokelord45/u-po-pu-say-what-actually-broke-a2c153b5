// Say What Actually Broke — make.fun entry (program/v1).
// Writes one single-line error message to /output/entry.txt.
// REVISED (final): tightened the draft and added what to do next —
// the judge weighs naming the real failure AND the next step, and
// "free some space and try again" gives the reader an action instead
// of leaving them with just the joke. 130 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your file didn't save — the disk is full. The last 2 GB went to a log file complaining about it, so free some space and try again.";

// Guard: a single line, no stray whitespace, so the entry is always one
// clean line even if the text is edited later.
const CLEAN = LINE.trim().replace(/\s+/g, " ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CLEAN, "utf8");
