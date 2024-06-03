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
  ],
  ssr: true,
  css: [
    'flowbite/dist/flowbite.min.css',
    '~/assets/css/main.css'
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
    }
  },
  components: true,
});
