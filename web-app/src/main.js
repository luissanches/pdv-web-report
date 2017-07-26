// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import VueBaseActions from './VueBaseActions'

Vue.use(Quasar)
Vue.use(VueResource)
Vue.use(Vuex)

Vue.http.options.root = 'http://45.76.157.69:3000/'

Quasar.start(() => {
  new Vue({
    router,
    store: require('./store/store').default,
    render: h => h(require('./App'))
  }).$mount('#q-app')
})
