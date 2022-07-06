import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Catgory from '../views/catgory.vue'
import Find from '../views/find.vue'
import Cart from '../views/cart.vue'
import Mine from '../views/mine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },{
    path: '/catgory',
    name: 'catgory',
    component: Catgory
  },{
    path: '/find',
    name: 'find',
    component: Find
  },{
    path: '/cart',
    name: 'cart',
    component: Cart
  },{
    path: '/mine',
    name: 'mine',
    component: Mine
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
