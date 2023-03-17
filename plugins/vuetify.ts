import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labs from 'vuetify/labs/components'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components:{
      ...labs,
      ...components,
    },
    directives,
   
  })

  nuxtApp.vueApp.use(vuetify)
})
