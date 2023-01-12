import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../components/Layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: "/",
        name: "home",
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: "/index",
        name: "index",
        children:[
          {
            path:"1",
            name:"index-1",
            component: () => import('@/views/index/IndexView.vue')
          },
          {
            path:"2",
            name:"index-2",
            component: () => import('@/views/index/IndexView2.vue')
          },
        ]
      },
      {
        path: "/index2",
        name: "index2",
        component: () => import('@/views/Nav2View.vue')
      },
      {
        path: "/index3",
        name: "index3",
        component: () => import('@/views/Nav3View.vue')
      },
     ],
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
