import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import createRouter from './router'

createApp(App)
  .use(createRouter())
  .mount('#app')
