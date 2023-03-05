import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'pageA',
          component: () => import('../views/pageA.vue'),
        },
        {
          path: 'pageB',
          name: 'pageB',
          component: () => import('../views/pageB.vue'),
        },
      ],
    },
    // {
    //   path: '/',
    //   name: 'pageA',
    //   component: () => import('../views/pageA.vue'),
    // },
    // {
    //   path: '/pageB',
    //   name: 'pageB',
    //   component: () => import('../views/pageB.vue'),
    // },
  ]
})

export default router
