import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
// import store from './store'
import './assets/common.scss'
import App from './app'
// import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

// sync(store, router)

Vue.component('doc-header', () => import('./components/header'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
