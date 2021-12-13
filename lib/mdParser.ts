import fs from 'fs';

import { micromark } from 'micromark';

export function parseMarkdown(path: string) {
  const buf = fs.readFileSync(path);
  const out = micromark(buf);
  return out;
}
