<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          {{ $t('register.title') }}
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          {{ $t('register.or') }}
          <router-link to="/login" class="font-medium text-primary hover:text-primary-dark">
            {{ $t('register.login') }}
          </router-link>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="name" class="sr-only">{{ $t('register.name') }}</label>
            <input
              id="name"
              name="name"
              type="text"
              v-model="name"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              :placeholder="$t('register.name')"
            />
          </div>
          <div>
            <label for="email-address" class="sr-only">{{ $t('register.email') }}</label>
            <input
              id="email-address"
              name="email"
              type="email"
              v-model="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              :placeholder="$t('register.email')"
            />
          </div>
          <div>
            <label for="password" class="sr-only">{{ $t('register.password') }}</label>
            <input
              id="password"
              name="password"
              type="password"
              v-model="password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              :placeholder="$t('register.password')"
            />
          </div>
          <div>
            <label for="confirm-password" class="sr-only">{{
              $t('register.confirmPassword')
            }}</label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              v-model="confirmPassword"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              :placeholder="$t('register.confirmPassword')"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="isLoading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
          >
            <span v-if="isLoading">Loading...</span>
            <span v-else>{{ $t('register.signUp') }}</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import { computed } from 'vue'

const router = useRouter()
const authStore = useAuthStore()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const isLoading = ref(false)

const passwordsMatch = computed(() => {
  return password.value === confirmPassword.value
})

const handleRegister = async () => {
  if (!name.value || !email.value || !password.value) {
    return
  }

  if (!passwordsMatch.value) {
    alert('Passwords do not match')
    return
  }

  isLoading.value = true

  try {
    await authStore.register(name.value, email.value, password.value)
    router.push('/')
  } catch (error) {
    console.error('Registration failed:', error)
    // Handle registration error
  } finally {
    isLoading.value = false
  }
}
</script>
