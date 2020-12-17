import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Career from '../views/Career.vue'
import Demo from '../views/Demo.vue'
import FreeTrial from '../views/FreeTrial.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/career',
    name: 'Career',
    component: Career
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/free-trial',
    name: 'FreeTrial',
    component: FreeTrial
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
