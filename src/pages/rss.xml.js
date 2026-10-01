import rss from '@astrojs/rss';
import { getPosts } from '../lib/content';

/** RSS 只输出最近的文章,避免条目无限膨胀。 */
const MAX_ITEMS = 100;

export async function GET(context) {
  const posts = (await getPosts()).slice(0, MAX_ITEMS);
  return rss({
    title: 'SoulCreator',
    description: 'SoulCreator — 独立开发者的效率工具与文章',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/zh/writing/${post.id}/`,
    })),
  });
}
