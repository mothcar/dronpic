import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Opening from './views/Opening.vue'
import Org from './views/Org.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/opening',
      name: 'opening',
      component: Opening
    },
    {
      path: '/org',
      name: 'org',
      component: Org
    }
  ]
})
