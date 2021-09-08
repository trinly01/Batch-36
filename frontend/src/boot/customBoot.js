import { boot } from 'quasar/wrappers'
import axios from 'axios'

import { reactive } from 'vue'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do

  app.config.globalProperties.$axios = axios

  app.config.globalProperties.$shopAPI = axios.create({
    baseURL: 'https://fakestoreapi.com'
  })

  // app.config.globalProperties.$cart = ref([])
  // app.config.globalProperties.$bool = ref(false)
  app.config.globalProperties.$formatCurrency = (number) => new Intl.NumberFormat('tl-PH', { style: 'currency', currency: 'PHP' }).format(number)

  app.config.globalProperties.$global = reactive({
    user: null,
    search: '',
    cart: []
  })
})
