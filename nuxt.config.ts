// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ]
})
