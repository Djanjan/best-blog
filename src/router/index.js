import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start-page',
    component: () => import('../views/Start.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/app',
    name: 'app',
    component: () => import('../views/App.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: 'article/:id',
        name: 'article',
        component: () => import('../views/Article.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/About.vue')
      },
      {
        path: 'editor',
        name: 'editor',
        component: () => import('../views/Editor.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('../views/Settings.vue')
      },
      {
        path: '*',
        name: 'app-not-found',
        component: () => import('../views/AppNotFound.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
