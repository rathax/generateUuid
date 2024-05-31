// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nuxtIcon: {
    size: '24px', // default <Icon> size applied
    class: '', // default <Icon> class applied
    aliases: {
      'nuxt': '',
    }
  },
  modules: ["nuxt-svgo"]
})