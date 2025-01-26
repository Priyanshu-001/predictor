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
    collections: [
      {
        prefix: 'fluent-emoji',
        icons: [
          "bridge-at-night",
          "desktop-computer",
          "electric-plug",
          "satellite-antenna",
          "atom-symbol",
          "gear",
          "crystal-ball",
          "airplane-departure",
          "input-numbers",
          "man-scientist",
          "money-with-wings",
          "graduation-cap",
          "palm-tree",
          "factory",
          "dna",
          "tractor",
          "tokyo-tower",
          "robot"
        ]
      }
    ]
  }
})
