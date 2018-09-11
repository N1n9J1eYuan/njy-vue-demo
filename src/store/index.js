import Vue from 'vue'
import Vuex from 'vuex'
// import moduleA from './moduleA/index'
Vue.use(Vuex)
const storeContext = require.context('@/store/modules', true, /\.js$/)
const store = new Vuex.Store()
storeContext.keys().forEach((modules) => {
  store.registerModule(modules.replace(/(^\.\/)|(\.js$)/g, ''), storeContext(modules).default)
})
Vue.prototype.$store = store
export default store
