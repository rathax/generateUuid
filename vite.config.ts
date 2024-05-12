import { fileURLToPath, URL } from 'node:url'
import svgLoader from 'vite-svg-loader'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import { resolve, dirname } from 'node:path'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/

export default defineConfig((options) => {
  return {
    ssgOptions: {
      // SSG Vue-i18n workaround
      crittersOptions: {}
    },

    plugins: [
      vue(),
      svgLoader(),
      VueI18nPlugin({
        /* options */
        // locale messages resource pre-compile option
        include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
        strictMessage: false,
        fullInstall: false,
        ssr: options.isSsrBuild,
        runtimeOnly: true
      }),
      VitePWA({
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
        injectRegister: 'script-defer',
        workbox: { skipWaiting: true },
        manifest: {
          name: 'UUID Generator',
          short_name: 'UUID',
          description: 'UUID Generator: Quickly Create Universally Unique Identifiers Online',
          theme_color: '#1f2937',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
            }
          ]
        }
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
