// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt',],
  app: {
    head: {
      title: 'Book Loop',
    }
  },
  imports: {
    dirs: ['composables'], 
  },
  devServer: {
    port: 3360
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://127.0.0.1:3000',
    }
  }

})
