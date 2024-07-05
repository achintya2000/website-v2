// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-particles", "vuetify-nuxt-module"],
  ui: {
    icons: ['mdi']
  },
  particles: {
    mode: 'full',
    lazy: false
  },
  vuetify: {
    vuetifyOptions: {

    },
  },
  features: {
    inlineStyles: false
  }
})