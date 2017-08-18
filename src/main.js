import 'babel-polyfill'
import Vue from 'vue'
// import VueRouter from 'vue-router'
// import jQuery from 'jquery'

import './assets/css/common.scss'

import App from './app.vue'

Vue.component('doc-header', require('./header.vue'))

new Vue({
  el: '#app',
  render: h => h(App)
})
