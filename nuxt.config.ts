// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  nitro: {
    preset: 'cloudflare_pages',
  },
  modules: [
    '@nuxt/content',
    "@nuxt/fonts",
    '@nuxtjs/color-mode',
    "@nuxthub/core",
    "@nuxt/image",
    '@unocss/nuxt',
  ],

  routeRules: {
    '/': { prerender: true }
  },
  compatibilityDate: '2024-07-23'
})