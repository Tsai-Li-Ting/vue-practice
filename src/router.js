import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
// import Home from './views/Home.vue'
import Login from './views/Login.vue'

export default () => createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home,
    // },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: () => import('./views/Login.vue')
    // },
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
  ]
})