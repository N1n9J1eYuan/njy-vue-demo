import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require.ensure([], () => resolve(require('../components/index')))
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require.ensure([], () => resolve(require('../view/login/index')))
    },
    {
      path: '/hello',
      name: 'hello',
      component: resolve => require.ensure([], () => resolve(require('../components/hello')))
    },
    {
      path: '/systemManagement',
      name: 'systemManagement',
      component: resolve => require.ensure([], () => resolve(require('../components/systemManagement/index')))
    },
    {
      path: '/salesManagement',
      name: 'salesManagement',
      component: resolve => require.ensure([], () => resolve(require('../components/salesManagement/index')))
    }
  ]
})
