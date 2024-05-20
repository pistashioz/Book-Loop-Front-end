// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt',],
  app: {
    head: {
      title: 'Book Loop',
    }
  },
  imports: {
    dirs: ['composables'], 
  },
})
