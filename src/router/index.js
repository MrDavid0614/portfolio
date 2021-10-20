import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

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
    path: '/projects',
    name: 'Projects',
    // route level code-splitting
    // this generates a separate chunk (projects.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
  },
  {
    path: '/projects/:id(\\d+)',
    name: 'Project',
    component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue'),
    props: (route) => ({ id: parseInt(route.params.id) }),
    beforeEnter: (to, _, next) => {
      const id = parseInt(to.params.id)
      const isIdInState = Boolean(store.getters.getProjectById(id))
      if (!isIdInState) {
        next({
          name: 'NotFound',
          params: {
            error: 'Error: You need to click a project to see it.'
          }
        })

        return
      }

      next()
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
