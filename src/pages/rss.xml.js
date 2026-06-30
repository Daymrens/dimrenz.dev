import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export const GET = async () => {
  const posts = await getCollection('blog');
  return rss({
    title: 'dimrenz.dev',
    description: 'Dime Renz Apor — aspiring developer, building software and making music.',
    site: 'https://dimrenz.vercel.app',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
};
