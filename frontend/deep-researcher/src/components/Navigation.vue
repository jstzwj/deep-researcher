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

          <template v-if="authStore.isLoggedIn">
            <!-- Profile dropdown -->
            <div class="ml-4 relative flex-shrink-0">
              <div>
                <button
                  @click="isProfileOpen = !isProfileOpen"
                  class="bg-white dark:bg-gray-700 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    :src="authStore.user?.avatar || 'https://avatar.vercel.sh/placeholder'"
                    alt="User avatar"
                  />
                </button>
              </div>
              <!-- Profile dropdown panel -->
              <div
                v-if="isProfileOpen"
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
              >
                <router-link
                  to="/profile"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  @click="isProfileOpen = false"
                >
                  {{ $t('nav.profile') }}
                </router-link>
                <button
                  @click="logout"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  {{ $t('logout') }}
                </button>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="flex space-x-2">
              <router-link
                to="/login"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#7770ee] hover:bg-primary-dark"
              >
                {{ $t('login.signIn') }}
              </router-link>
              <router-link
                to="/register"
                class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                {{ $t('register.signUp') }}
              </router-link>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()
const isProfileOpen = ref(false)

const navItems = [
  { path: '/', label: 'nav.home' },
  { path: '/research', label: 'nav.research' },
  { path: '/history', label: 'nav.history' },
  { path: '/profile', label: 'nav.profile' },
]

const logout = async () => {
  await authStore.logout()
  isProfileOpen.value = false
  router.push('/login')
}
</script>
