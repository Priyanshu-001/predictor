import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labs from 'vuetify/labs/components'

const defaultTheme: ThemeDefinition = {
  dark: false,
  colors: {
    // background: '#D3D3D3',
    // surface: '#D3D3D3',
    primary: '#3a80f5',
    secondary: '#3a80f5',
    accent: '#ffc107',
    error: '#ff5722',
    warning: '#ff9800',
    info: '#3b82f6',
    success: '#8bc34a'
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    theme:{
      defaultTheme:'defaultTheme',
      themes:{
        defaultTheme
    },
    },
    ssr: true,
    components:{
      ...labs,
      ...components,
    },
    directives,
   
  })

  nuxtApp.vueApp.use(vuetify)
})
