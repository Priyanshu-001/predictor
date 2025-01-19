// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  colorMode:{
    preference: 'light'
  },
  target: 'server',
    nitro: {
    prerender: {
      routes: ['/', '/colleges','/courses']
    },
        },
    generate: {
      routes: ['/', '/colleges', "/courses"], // Only these routes will be pre-rendered
    },


    css: ['~/assets/css/main.css','vuetify/lib/styles/main.sass','@mdi/font/css/materialdesignicons.min.css'],
    build: {
      transpile: ['vuetify','@nuxtjs/google-fonts','@nuxt/postcss8'],
      extractCSS:true,
      analyze: true,

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
          tailwindcss: { config: './tailwind.config.js' },        // With prefix
        },
      },
    typescript: {
        shim: false
      },
      modules:[
        '@nuxt/ui',
        async (options, nuxt) => {
          nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
            vuetify()
          ))
      }],

})
