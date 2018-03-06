// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes.js'
import echarts from 'echarts'
import echartsGl from 'echarts-gl'
import china from './assets/china.js'
// import echarts from '../static/echarts-gl.js'
Vue.prototype.$echarts = echarts 
Vue.prototype.$echartsGl = echartsGl 
Vue.use(VueRouter)
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
