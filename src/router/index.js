import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/index')
    },
    {
      path: '/doc/:id?',
      name: 'doc',
      component: () => import('@/components/doc')
    },
    {
      path: '/changelog',
      name: 'changelog',
      component: () => import('@/components/changelog')
    },
    {
      path: '/test',
      name: 'changelog',
      component: () => import('@/assets/docs/changelog.md')
    }
  ]
})
