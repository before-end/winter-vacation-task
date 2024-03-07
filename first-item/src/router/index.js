import { createRouter, createWebHistory } from 'vue-router'

import pinia from '@/stores'
import { storeToRefs } from 'pinia'

import { useUserStore } from '@/stores/userstore'

let userStore = useUserStore(pinia)
let { count } = storeToRefs(userStore)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user',
      component: () => import('@/views/userview.vue'),
    },
    {
      path: '/merchantLogin',
      component: () => import('@/views/merchantview.vue'),
    },
    {
      path: '/user/shoppingcart',
      component: () => import('@/views/shoppingcartview.vue'),
    },
    {
      path: '/user/order',
      component: () => import('@/views/orderview.vue'),
    },
    {
      path: '/userregister',
      component: () => import('@/views/userRegister.vue'),
    },
    {
      path: '/userlogin',
      component: () => import('@/views/userLogin.vue'),
    },
    {
      path: '/merchant',
      component: () => import('@/views/merchantmess.vue')
    },
    {
      path: '/merchant/goodShelf',
      component: () => import('@/views/goodShelf.vue')
    }
  ]
})

export default router
