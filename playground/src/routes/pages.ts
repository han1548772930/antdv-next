import type { RouteRecordRaw } from 'vue-router'

export const pagesRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/index-cn',
    component: () => import('@/pages/index.vue'),
  },
]
