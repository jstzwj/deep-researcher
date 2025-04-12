import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ResearchReportPage from '@/views/ResearchReportPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/research',
      name: 'research',
      component: ResearchReportPage,
    },
  ],
})

export default router
