// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {get, post} from './utils/http'
/** **** 全局注册axios ******/
import axios from 'axios'

Vue.use(ElementUI)
Vue.prototype.axios = axios
// 定义全局变量
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
