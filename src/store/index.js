import Vue from 'vue'
import Vuex from 'vuex'
// import moduleA from './moduleA/index'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)
const storeContext = require.context('@/store/modules', true, /\.js$/)
const store = new Vuex.Store({
  plugins: [createLogger()]
})
storeContext.keys().forEach((modules) => {
  store.registerModule(modules.replace(/(^\.\/)|(\.js$)/g, ''), storeContext(modules).default)
})
Vue.prototype.$store = store
export default store
