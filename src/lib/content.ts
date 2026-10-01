import { getCollection } from 'astro:content';
import type { Locale } from '../i18n';

/** Tools of one locale, sorted by frontmatter order. */
export async function getTools(locale: Locale) {
  const entries = await getCollection('tools', ({ id }) => id.startsWith(locale + '/'));
  return entries
    .map((entry) => ({ entry, slug: entry.id.slice(locale.length + 1) }))
    .sort((a, b) => a.entry.data.order - b.entry.data.order);
}

export type Post = Awaited<ReturnType<typeof getPosts>>[number];

/** All published posts (written in Chinese; the en site lists them as-is). */
export async function getPosts() {
  const posts = await getCollection('writing', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
