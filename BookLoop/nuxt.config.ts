// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@pinia/nuxt', 
    '@pinia-plugin-persistedstate/nuxt'
  ],
  plugins: [
    '~/plugins/flowbite.js',
  ],
  ssr: true,
  css: ['flowbite/dist/flowbite.min.css', ],
  app: {
    head: {
      title: 'Book Loop',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css'
        }
      ]
    }
  },
  imports: {
    dirs: ['composables'],
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3360/',
    }
  },


  
  components: true, // Enable auto-import of components
});
