// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nuxtIcon: {
    size: '24px', // default <Icon> size applied
    class: 'wtf', // default <Icon> class applied
    aliases: {
      'nuxt': '',
    }
  },
  modules: ["nuxt-svgo"]
})