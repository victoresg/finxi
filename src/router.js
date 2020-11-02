import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home'
import Details from './views/details/Details'

Vue.use (Router)

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detalhes',
      name: 'Details',
      component: Details
    }
  ]
})