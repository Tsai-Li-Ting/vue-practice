import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import Home from './views/Home.vue'

export default () => createRouter({
  history: createWebHistory(),
  routes: [    
    {
      path: '/',
      name: 'Login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { requireAuth: true }, // 用來作為此頁是否需要權限驗證的設定
    },
  ]
})