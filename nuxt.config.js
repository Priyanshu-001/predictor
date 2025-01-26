// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  sourcemap: process.env.NODE_ENV === 'development',
  colorMode: {
    preference: 'light'
  },
  target: 'server',
  css: ['~/assets/css/main.css', 'vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify', '@nuxt/postcss8'],
    extractCSS: true,
    analyze: true,
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},

    },
  },
  typescript: {
    shim: false
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
    '@nuxt/icon',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify()
      ))
    },

  ],
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900]
    },
    display: 'swap',
    prefetch: true,
    preload: true,
  },
  icon: {
    clientBundle: {
      // list of icons to include in the client bundle
      icons: [
        "fluent-emoji:bridge-at-night",
        "fluent-emoji:desktop-computer",
        "fluent-emoji:electric-plug",
        "fluent-emoji:satellite-antenna",
        "fluent-emoji:atom-symbol",
        "fluent-emoji:gear",
        "fluent-emoji:crystal-ball",
        "fluent-emoji:airplane-departure",
        "fluent-emoji:input-numbers",
        "fluent-emoji:man-scientist",
        "fluent-emoji:money-with-wings",
        "fluent-emoji:graduation-cap",
        "fluent-emoji:palm-tree",
        "fluent-emoji:factory",
        "fluent-emoji:dna",
        "fluent-emoji:tractor",
        "fluent-emoji:tokyo-tower",
        "fluent-emoji:robot"
      ],
      sizeLimitKb: 400,
    }
  }
})
