import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import ResearchPage from '@/views/ResearchPage.vue'
import ReportPage from '@/views/ReportPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import UserProfilePage from '@/views/UserProfilePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage,
    },
    {
      path: '/research',
      name: 'research',
      component: ResearchPage,
    },
    {
      path: '/report',
      name: 'report',
      component: ReportPage,
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserProfilePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
  ],
})

export default router
