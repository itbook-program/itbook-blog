import Vue from 'vue'
import App from './App'
import store from './store'
import UUID from 'vue-uuid'
import MpvueRouterPatch from 'mpvue-router-patch'
Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(require('vue-moment'))
Vue.use(MpvueRouterPatch)
Vue.use(UUID)

const app = new Vue(App)
app.$mount()
