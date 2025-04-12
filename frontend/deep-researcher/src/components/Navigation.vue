<template>
  <nav class="bg-white dark:bg-gray-800 shadow-sm">
    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <h1 class="text-xl font-bold text-primary">Deep Researcher</h1>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="border-transparent text-gray-500 dark:text-gray-300 hover:border-primary hover:text-primary dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              :class="{ 'border-primary text-primary dark:text-white': $route.path === item.path }"
            >
              {{ $t(item.label) }}
            </router-link>
          </div>
        </div>
        <div class="flex items-center">
          <LanguageSwitcher class="mr-4" />
          <div class="flex-shrink-0">
            <button
              v-if="authStore.isLoggedIn"
              @click="authStore.logout"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              {{ $t('logout') }}
            </button>
            <router-link
              v-else
              to="/login"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
            >
              {{ $t('login.signIn') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { ref, onMounted } from 'vue'

const authStore = useAuthStore()
const isLoggedIn = ref(false)

onMounted(() => {
  isLoggedIn.value = authStore.isLoggedIn
})

const navItems = [
  { path: '/', label: 'nav.home' },
  { path: '/research', label: 'nav.research' },
  { path: '/history', label: 'nav.history' },
  { path: '/profile', label: 'nav.profile' },
]
</script>
