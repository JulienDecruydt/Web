// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/motion/nuxt',
    '@nuxt/icon'
  ],
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      'Space Grotesk': [300, 400, 500, 600, 700]
    }
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Julien Decruydt - Senior Vue.js Developer & Freelancer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'The Vue.js expertise you\'ve been waiting for. Senior Vue.js/Nuxt.js freelance developer with 6+ years of experience building exceptional web applications.' }
      ]
    }
  }
}) 