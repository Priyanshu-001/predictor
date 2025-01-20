// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  sourcemap: false,
  colorMode:{
    preference: 'light'
  },
  target: 'server',
    


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
      icon: {
        // Set to false to disable local bundle mode
        serverBundle: 'remote' 
      }
})
