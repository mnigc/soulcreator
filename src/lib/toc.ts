import GithubSlugger from 'github-slugger';

export type TocItem = { depth: number; text: string; slug: string };

const FENCE = /^\s*(```|~~~)/;
const HEADING = /^(#{1,6})\s+(.+?)\s*#*$/;

/** Markdown inline syntax that never reaches the rendered heading text. */
function plain(text: string): string {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\*\*|__|~~|\*|_/g, '')
    .trim();
}

/**
 * Headings of a markdown body, with the same anchors Astro's renderer generates
 * (github-slugger over the heading text, in document order, duplicates suffixed).
 * Every heading is slugged — including h1 and the ones we skip — so the counters stay aligned.
 */
export function getToc(body: string, range: [number, number] = [2, 3]): TocItem[] {
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];
  let inFence = false;

  for (const line of body.split(/\r?\n/)) {
    if (FENCE.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = HEADING.exec(line);
    if (!match) continue;

    const depth = match[1].length;
    const text = plain(match[2]);
    const slug = slugger.slug(text);
    if (depth >= range[0] && depth <= range[1]) items.push({ depth, text, slug });
  }

  return items;
}
