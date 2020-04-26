import Vue from 'vue'
import Meta from 'vue-meta'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
Vue.use(Meta)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/seo-services/',
    name: 'seoservices',
    component: () => import(/* webpackChunkName: "about" */ '../views/seoservices.vue')
  },
  {
    path: '/contact-us/',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/contactus.vue')
  },
  {
    path: '/web-development-services/',
    component: () => import(/* webpackChunkName: "about" */ '../views/webdevelopment.vue')
  },
  {
    path: '/mobile-app-development-services/',
    component: () => import(/* webpackChunkName: "about" */ '../views/appdevelopment.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
})
export default router
