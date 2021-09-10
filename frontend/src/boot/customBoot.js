import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { sumBy } from 'lodash'

import { reactive } from 'vue'

import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

import wings from 'wings4'

import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do

  app.use(VueChartkick)

  app.config.globalProperties.$dbCon = wings('http://localhost:3030')
  app.config.globalProperties.$dbCon.authenticate()

  app.config.globalProperties.$dbCon.on('login', ({ user }) => {
    app.config.globalProperties.$global.user = user
  })

  app.config.globalProperties.$dbCon.on('logout', ({ user }) => {
    app.config.globalProperties.$global.user = null
  })

  app.config.globalProperties.$pdfMake = pdfMake

  app.config.globalProperties.$axios = axios

  app.config.globalProperties.$shopAPI = axios.create({
    baseURL: 'https://fakestoreapi.com'
  })

  // app.config.globalProperties.$cart = ref([])
  app.config.globalProperties.$sumBy = sumBy
  app.config.globalProperties.$formatCurrency = (number) => new Intl.NumberFormat('tl-PH', { style: 'currency', currency: 'PHP' }).format(number)

  app.config.globalProperties.$global = reactive({
    user: null,
    search: '',
    cart: []
  })
})
