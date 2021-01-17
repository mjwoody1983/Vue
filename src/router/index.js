import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "@/components/Home";
import Switch from "@/features/SwitchCheck";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/switch_check',
    name: 'switch_check',
    component: Switch
  }
]

const router = new VueRouter({
  routes
})

export default router
