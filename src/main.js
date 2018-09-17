// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as fetch from './api'
import store from './store'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import './common/css/element-variables.scss'
Vue.use(ElementUI)
Vue.use(echarts)
Vue.config.productionTip = false
Vue.prototype.$fetch = fetch.default
Vue.prototype.setCookie = (name, value, expiredays) => {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = name + '=' + escape(value) +
    ((expiredays === null) ? '' : ';expires=' + exdate.toGMTString())
}
Vue.prototype.getCookie = (name) => {
  if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(name + '=')
    if (start !== -1) {
      start = start + name.length + 1
      let end = document.cookie.indexOf(';', start)
      if (end === -1) end = document.cookie.length
      return unescape(document.cookie.substring(start, end))
    }
  }
  return ''
}
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !Vue.prototype.getCookie('langlibUserName')) {
    next({
      name: 'Login'
    })
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
