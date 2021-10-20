import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "projects" */ '../views/NotFound.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: '/home'
  },
  {
    path: '/projects/:id(\\d+)',
    name: 'Project',
    component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue'),
    props: (route) => ({ id: parseInt(route.params.id) })
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
