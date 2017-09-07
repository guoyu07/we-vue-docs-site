import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import './assets/common.scss'
import App from './app'

Vue.config.productionTip = false

Vue.component('doc-header', () => import('./components/header'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
