// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: 'content-wind',
  // Workaround for Stackblitz on RC12
  experimental: {
    writeEarlyHints: false
  }
})
