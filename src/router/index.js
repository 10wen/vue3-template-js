import { createRouter, createWebHistory } from 'vue-router'

const getView = (name) => {
  return () => import(`@/views/${name}/index.vue`)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: getView('login'),
      meta: {
        title: 'project | Login'
      }
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('@/layout/index.vue'),
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: getView('home'),
          meta: {
            title: 'project | Home',
            breadcrumbs: [{ to: '/home', text: 'Home' }]
          }
        },
        {
          path: 'user',
          name: 'User',
          component: getView('user'),
          meta: {
            title: 'project | user',
            breadcrumbs: [{ to: '/user', text: 'User' }]
          }
        },
        {
          path: 'home',
          name: 'home',
          component: getView('home'),
          meta: {
            title: 'project | Home',
            breadcrumbs: [{ to: '/home', text: 'Home' }]
          }
        },
        {
          path: 'home',
          name: 'home',
          component: getView('home'),
          meta: {
            title: 'project | Home',
            breadcrumbs: [{ to: '/home', text: 'Home' }]
          }
        }
      ]
    }
  ]
})

export default router
