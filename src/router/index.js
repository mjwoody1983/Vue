import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "@/components/Home";
import Switch from "@/features/SwitchCheck";
import BottomNav from "@/features/BottomNav";
import AlertMessage from "@/features/AlertMessage";

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
  },
  {
    path: '/bottom_navigation',
    name: 'bottom_navigation',
    component: BottomNav
  },
  {
    path: '/alert_message',
    name: 'alert_message',
    component: AlertMessage
  }

]

const router = new VueRouter({
  routes
})

export default router
