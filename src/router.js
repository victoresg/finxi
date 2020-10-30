import Vue from 'vue'
import Router from 'vue-router'
import Notes from './views/Notes.vue'
import Content from '@/components/layout/Content'

Vue.use (Router)

export default new Router ({
    mode: 'history',
    routes: [
      {
        path: '/notes',
        name: 'notes',
        component: Notes
      },
      {
        path: '/',
        name: 'Content',
        component: Content
      }
    ]
  })