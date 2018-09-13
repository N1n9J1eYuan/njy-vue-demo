import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require.ensure([], () => resolve(require('../components/index')))
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require.ensure([], () => resolve(require('../components/Login')))
    },
    {
      path: '/hello',
      name: 'hello',
      component: resolve => require.ensure([], () => resolve(require('../components/hello')))
    }
  ]
})
