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
          path: 'activity',
          name: 'activity',
          component: getView('activity'),
          meta: {
            title: 'project | Activity',
            breadcrumbs: [{ to: '/activity', text: 'Activity' }]
          }
        },
        {
          path: 'circle',
          name: 'circle',
          component: getView('circle'),
          meta: {
            title: 'project | Circle',
            breadcrumbs: [{ to: '/circle', text: 'Circle' }]
          }
        },
        {
          path: 'circleDetail',
          name: 'circleDetail',
          component: () => import('@/views/circle/circleDetail.vue'),
          meta: {
            title: 'project | Circle Detail',
            breadcrumbs: [{ to: '/circleDetail', text: 'CircleDetail' }]
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
          path: 'dynamicDetail',
          name: 'dynamicDetail',
          component: () => import('@/views/dynamic/dynamicDetail.vue'),
          meta: {
            title: 'project | Dynamic Detail',
            breadcrumbs: [{ to: '/dynamicDetail', text: 'DynamicDetail' }]
          }
        },
        {
          path: 'resource',
          name: 'resource',
          component: getView('resource'),
          meta: {
            title: 'project | Resource',
            breadcrumbs: [{ to: '/resource', text: 'Resource' }]
          }
        },
        {
          path: 'message',
          name: 'message',
          component: getView('message'),
          meta: {
            title: 'project | Message',
            breadcrumbs: [{ to: '/message', text: 'Message' }]
          }
        },
        {
          path: 'comment',
          name: 'comment',
          component: getView('comment'),
          meta: {
            title: 'project | Comment',
            breadcrumbs: [{ to: '/comment', text: 'Comment' }]
          }
        },
        {
          path: 'complaints',
          name: 'complaints',
          component: getView('complaints'),
          meta: {
            title: 'project | Complaints',
            breadcrumbs: [{ to: '/complaints', text: 'Complaints' }]
          }
        },
        {
          path: 'userlist',
          name: 'userList',
          component: getView('userList'),
          meta: {
            title: 'project | User List',
            breadcrumbs: [{ to: '/userlist', text: 'User List' }]
          },
        },
        {
          path: 'systemadmin',
          name: 'systemAdmin',
          component: getView('systemAdmin'),
          meta: {
            title: 'project | System Admin',
            breadcrumbs: [{ to: '/systemAdmin', text: 'System Admin' }]
          },
        },
        {
          path: 'account',
          name: 'account',
          component: getView('account'),
          meta: {
            title: 'project | Account',
            breadcrumbs: [{ to: '/account', text: 'Account' }]
          }
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
router.afterEach((to, from, failure) => {
  document.title = to.meta.title
})

export default router
