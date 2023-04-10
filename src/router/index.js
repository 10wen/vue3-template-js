import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/userStore'

const getView = (name) => {
  return () => import(`@/views/${name}/index.vue`)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
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
          name: 'home',
          component: getView('home'),
          meta: {
            title: 'project | Home',
            breadcrumbs: [{ to: '/home', text: 'Home' }]
          }
        },
        {
          path: 'dynamic',
          name: 'dynamic',
          component: getView('dynamic'),
          meta: {
            title: 'project | Dynamic',
            breadcrumbs: [{ to: '/dynamic', text: 'Dynamic' }]
          }
        },
        {
          path: 'userlist',
          name: 'userList',
          component: () => import('@/views/user/userList.vue'),
          meta: {
            title: 'project | User List',
            breadcrumbs: [{ to: '/user', text: 'User' }]
          },
        },
        {
          path: 'rolelist',
          name: 'roleList',
          component: () => import('@/views/user/roleList.vue'),
          meta: {
            title: 'project | Role List',
            breadcrumbs: [{ to: '/user', text: 'User' }]
          },
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // const userStore = useUserStore()
  // const whiteRoutes = ['/login']
  // if (userStore.token) {
  //   if (to.path === '/login') {
  //     next('/')
  //   } else next()
  // } else if (!whiteRoutes.includes(to.path)) {
  //   next('/login')
  // } else next()
  next()
})

export default router
