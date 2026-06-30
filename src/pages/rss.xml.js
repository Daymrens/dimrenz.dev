import rss from '@astrojs/rss';

export const GET = () => rss({
  title: 'dimrenz.dev',
  description: 'Dime Renz Apor — aspiring developer, building software and making music.',
  site: 'https://dimrenz.vercel.app',
  items: [],
  customData: `<language>en-us</language>`,
});
