export const iconMap: Record<string, string> = {
  currency: 'currency',
  medi: 'media',
  omni: 'markdown',
  invest: 'chart',
};

export function getIconBySlug(slug: string, fallback: string = 'currency'): string {
  const key = Object.keys(iconMap).find((k) => slug.includes(k));
  return key ? iconMap[key] : fallback;
}
