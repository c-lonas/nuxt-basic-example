// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui'
  ],
})
