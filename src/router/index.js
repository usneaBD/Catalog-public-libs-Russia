import Vue from 'vue'
import VueRouter from 'vue-router'
import Description from '@/views/Description.vue'
import FullList from '@/components/FullList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FullList',
    component: FullList
  },
  {
    path: '/descr',
    name: 'description',
    // component: () => import('../views/Description.vue')
    component: Description
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
