import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "@/components/Home";
import Switch from "@/features/Switch";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/switch',
    name: 'switch',
    component: Switch
  }
]

const router = new VueRouter({
  routes
})

export default router
