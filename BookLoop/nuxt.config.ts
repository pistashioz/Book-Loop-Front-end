// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '~/plugins/flowbite.js'
  ],
  ssr: true,
  css: ['~/assets/css/main.css', 'flowbite/dist/flowbite.min.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  app: {
    head: {
      title: 'Book Loop',
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js',
          type: 'text/javascript',
          defer: true
        }
      ]
    }
  },
  imports: {
    dirs: ['composables'], 
  },
  devServer: {
    port: 3360,
    host: 'localhost'
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://127.0.0.1:3360',
    }
  }
})
