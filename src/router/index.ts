import { createRouter, createWebHistory } from 'vue-router'

import AuthLayout from '@/views/auth/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "auth",
      path: "/auth",
      component: AuthLayout,
      children: [
        {
          name: "registration",
          path: "registration",
          component: () => import("@/views/auth/RegistrationPage.vue")
        },
        {
          name: "login",
          path: "login",
          component: () => import("@/views/auth/LoginPage.vue")
        },
      ]
    },
    {
      name: "root",
      path: "/",
      component: () => import("@/views/AppLayout.vue"),
      children: [
        {
          name: "notification",
          path: "notification",
          component: () => import("@/views/NotificationsPage.vue")
        },
        {
          name: "market",
          path: "market",
          component: () => import("@/views/MarketPlaceList.vue")
        },
        {
          name: "market details",
          path: "market/:name",
          component: () => import("@/views/MarketPlaceDetailsPage.vue"),
          props: true
        },
        {
          name: "profile",
          path: "profile",
          component: () => import("@/views/ProfilePage.vue")
        },
        {
          name: "transaction",
          path: "transaction",
          component: () => import("@/views/TransactionPage.vue")
        },
        {
          name: "management",
          path: "management",
          component: () => import("@/views/ProfilePage.vue")
        },
        {
          name: "dashboard",
          path: "dashboard",
          component: () => import("@/views/TransactionPage.vue")
        },
      ]
    }
  ]
})

export default router
