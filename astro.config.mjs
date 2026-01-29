import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    AstroPWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'logo.png', 'favicon.ico'],
      manifest: {
        name: 'Sekolah Web',
        short_name: 'SekolahWeb',
        description: 'Platform Sekolah Web Modern',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        orientation: 'portrait',
        icons: [
          {
            src: 'logo.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        navigateFallback: '/404',
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024 // 3 MB limit
      }
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});