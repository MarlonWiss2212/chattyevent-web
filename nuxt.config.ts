// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }]
    },
  },
  imports: {
    dirs: [
      'interfaces/**'
    ]
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  i18n: {
    strategy: "prefix",
    defaultLocale: "en",
    detectBrowserLanguage: true,
    locales: ["es", "en", "de", "pt", "it", "nl", "fr"],
    vueI18n: "./i18n.config.ts",
  }
})
