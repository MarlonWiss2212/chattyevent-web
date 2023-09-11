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
  ]
})
