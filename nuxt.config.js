// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css','vuetify/lib/styles/main.sass','@mdi/font/css/materialdesignicons.min.css'],
    build: {
      transpile: ['vuetify','@nuxtjs/google-fonts','@nuxt/postcss8'],

    },
    googleFonts:{
      families: {
        // a simple name
        Roboto: true,
      }
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
      }
})
