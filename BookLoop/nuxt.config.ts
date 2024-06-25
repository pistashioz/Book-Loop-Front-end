export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@pinia/nuxt', 
    '@pinia-plugin-persistedstate/nuxt'
  ],
  plugins: [
    '~/plugins/flowbite.js',
    '~/plugins/darkMode.js',
    { src: '~/plugins/draggable', mode: 'client' }
  ],
  ssr: false,
  css: [
    'flowbite/dist/flowbite.min.css',
    '~/assets/css/input.css'
  ],
  app: {
    head: {
      title: 'Book Loop',
    }
  },
  imports: {
    dirs: ['composables'],
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3360/',
      sasurl: process.env.SAS_URL
    }
  },
  components: true,
  hooks: {
    'pages:extend' (pages) {
      // Adiciona a rota personalizada para 'new'
      pages.push({
        name: 'new-listing',
        path: '/listings/new',
        file: '~/pages/listings/new/index.vue'
      })

      // Garante que a rota dinâmica ainda funcione
      pages.push({
        name: 'listing-id',
        path: '/listings/:listingId',
        file: '~/pages/listings/[listingId].vue'
      })
    }
  }
})