// https://nuxt.com/docs/api/configuration/nuxt-config

import { theme } from '#tailwind-config';

export default defineNuxtConfig({
  devServer: {
    port: 8000, // default: 3000
  },
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/ui'
  ],
})
