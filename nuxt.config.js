import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  ssr: true, // Enable SSR for hybrid rendering
  sourcemap: process.env.NODE_ENV === 'development',

  colorMode: {
    preference: 'light',
  },

  css: [
    '~/assets/css/main.css',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  build: {
    transpile: ['vuetify'],
    analyze: true,
  },

  vite: {
    plugins: [vuetify()],
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
    shim: false,
  },

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
    '@nuxt/icon',
  ],

  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900]
    },
    display: 'swap',
    prefetch: true,
    preload: true,
    preconnect: true,
  },

  icon: {
    serverBundle: 'remote',
    clientBundle: {
      icons: [
        "openmoji:bridge-at-night",
        "openmoji:desktop-computer",
        "openmoji:charge-plug",
        "openmoji:satellite",
        "openmoji:atom-symbol",
        "openmoji:gear",
        "openmoji:crystal-ball",
        "openmoji:airplane",
        "openmoji:input-numbers",
        "openmoji:test-tube",
        "openmoji:money-bag",
        "openmoji:graduation-cap",
        "openmoji:deciduous-tree",
        "openmoji:factory",
        "openmoji:dna",
        "openmoji:tractor",
        "openmoji:eiffel-tower",
        "openmoji:robot"
      ]
    }
  },

  nitro: {
    prerender: {
      routes: [
        '/', // Homepage
        '/colleges', // Matches /colleges (on your Netlify setup)
        '/courses', // Matches /courses
      ],
    },
  },
});