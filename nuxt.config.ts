// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/fonts", '@nuxtjs/color-mode', "@nuxthub/core"],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-07-23'
})