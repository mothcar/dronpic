import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Introduce from './views/Introduce.vue'
import Greeting from './views/Greeting.vue'
import Opening from './views/Opening.vue'
import Closing from './views/Closing.vue'
import Award from './views/Award.vue'
import Team from './views/Team.vue'
import Private from './views/Private.vue'
import Accurate from './views/Accurate.vue'
import Free from './views/Free.vue'
import Feagure from './views/Feagure.vue'
import Gravity from './views/Gravity.vue'
import Balloon from './views/Balloon.vue'
import Junior from './views/Junior.vue'
import Rules from './views/Rules.vue'
import Stadium from './views/Stadium.vue'
import Facility from './views/Facilities.vue'
import Outline from './views/Outline.vue'
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
      path: '/introduce',
      name: 'introduce',
      component: Introduce
    },
    {
      path: '/greeting',
      name: 'greeting',
      component: Greeting
    },
    {
      path: '/opening',
      name: 'opening',
      component: Opening
    },
    {
      path: '/closing',
      name: 'closing',
      component: Closing
    },
    {
      path: '/award',
      name: 'award',
      component: Award
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/private',
      name: 'private',
      component: Private
    },
    {
      path: '/accurate',
      name: 'accurate',
      component: Accurate
    },
    {
      path: '/free',
      name: 'free',
      component: Free
    },
    {
      path: '/feagure',
      name: 'feagure',
      component: Feagure
    },
    {
      path: '/gravity',
      name: 'gravity',
      component: Gravity
    },
    {
      path: '/balloon',
      name: 'balloon',
      component: Balloon
    },
    {
      path: '/junior',
      name: 'junior',
      component: Junior
    },
    {
      path: '/rules',
      name: 'rules',
      component: Rules
    },
    {
      path: '/stadium',
      name: 'stadium',
      component: Stadium
    },
    {
      path: '/facility',
      name: 'facility',
      component: Facility
    },
    {
      path: '/outline',
      name: 'outline',
      component: Outline
    },
    {
      path: '/org',
      name: 'org',
      component: Org
    }
  ]
})
