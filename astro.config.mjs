import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  site: 'https://dimrenz.vercel.app',
  integrations: [sitemap()],
  vite: {
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['icon-192.png', 'icon-512.png'],
        manifest: {
          name: 'dimrenz.dev',
          short_name: 'dimrenz.dev',
          description: 'Personal portfolio of Dime Renz Apor — full-stack developer & music enthusiast',
          theme_color: '#2563eb',
          background_color: '#ffffff',
          display: 'standalone',
          icons: [
            { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
            { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,jpg,woff2}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/ghchart\.rshah\.org\/.*/i,
              handler: 'NetworkFirst',
              options: { cacheName: 'github-charts', expiration: { maxEntries: 5, maxAgeSeconds: 86400 } },
            },
          ],
        },
      }),
    ],
  },
});
