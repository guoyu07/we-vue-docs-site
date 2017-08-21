import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import './assets/common.scss'
import DocHeader from './components/header'
import App from './app'
// import 'highlight.js/styles/github.css'

Vue.config.productionTip = false

Vue.component('doc-header', DocHeader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
