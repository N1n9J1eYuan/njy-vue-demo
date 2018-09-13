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
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
