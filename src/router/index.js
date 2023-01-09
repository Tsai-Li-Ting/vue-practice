import { createRouter, createWebHistory } from 'vue-router'
import Home from "./../views/Home.vue";
import Login from "./../views/Login.vue";

const routes = [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
    ]

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    mode: 'history',
    routes
  })


  export default router
