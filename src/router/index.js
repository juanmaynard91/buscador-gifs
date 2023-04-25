import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    //keepAlive: La próxima vez que el usuario visite esa vista, se cargará desde la caché en lugar de volver a cargarla desde cero.
    meta: { keepAlive: true } 
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About'),
    meta: { keepAlive: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
