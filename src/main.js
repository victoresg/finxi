import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import core from './core'
import router from '@/router'

core.inject()
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')