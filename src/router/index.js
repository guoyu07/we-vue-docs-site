import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Doc from '@/components/doc'
import Changelog from '@/components/changelog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/doc/:id?',
      name: 'doc',
      component: Doc
    },
    {
      path: '/changelog',
      name: 'changelog',
      component: Changelog
    }
  ]
})
