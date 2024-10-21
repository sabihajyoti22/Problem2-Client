import { createRouter, createWebHistory } from 'vue-router'
import routes from "./routes"
import { useAuthStore } from '../store/module/auth'

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to, _from, next) => {
  if (!useAuthStore().getUser.email && to.name === 'dashboard') {
    return next({ name: 'home' })
  } else {
    return next()
  }
})

export default router