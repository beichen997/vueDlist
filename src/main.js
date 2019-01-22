import Vue from 'vue'
import App from './App'
import router from './router/premisssion'

// 引入scss
import './assets/scss/reset.css'
import './assets/font/iconfont.css'
// 引入elemnet
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
