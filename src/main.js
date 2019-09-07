// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mui from './assets/mui/js/mui.min.js'
import './assets/mui/css/mui.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
Vue.prototype.axios = axios

import $ from 'jquery'
Vue.prototype.$ = $

Vue.prototype.mui = mui

Vue.use(ElementUI);

require("./mock");
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
