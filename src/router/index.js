import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "@/components/Home";
import Switch from "@/features/SwitchCheck";
import BottomNav from "@/features/BottomNav";
import AlertMessage from "@/features/AlertMessage";
import AvatarBadges from "@/features/AvatarBadges";
import CalendarOrg from "@/features/CalendarOrg";

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
  },
  {
    path: '/avatar_badges',
    name: 'avatar_badges',
    component: AvatarBadges
  },
  {
    path: '/calendar_org',
    name: 'calendar_org',
    component: CalendarOrg
  },

]

const router = new VueRouter({
  routes
})

export default router
