<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-secondary-900 dark:text-white">
          {{ $t('login.title') }}
        </h2>
        <p class="mt-2 text-center text-sm text-secondary-600 dark:text-secondary-400">
          {{ $t('login.or') }}
          <router-link
            to="/register"
            class="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
          >
            {{ $t('login.register') }}
          </router-link>
        </p>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">{{ $t('login.email') }}</label>
            <input
              id="email-address"
              name="email"
              type="email"
              v-model="email"
              required
              autocomplete="email"
              class="appearance-none rounded-none relative block w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 dark:bg-transparent dark:text-white placeholder-secondary-400 text-secondary-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 text-base"
              :placeholder="$t('login.email')"
              :class="{ 'border-red-500 dark:border-red-400': errors.email }"
            />
            <p v-if="errors.email" class="mt-1 text-sm text-red-600 dark:text-red-400">
              {{ errors.email }}
            </p>
          </div>
          <div>
            <label for="password" class="sr-only">{{ $t('login.password') }}</label>
            <input
              id="password"
              name="password"
              type="password"
              v-model="password"
              required
              autocomplete="current-password"
              class="appearance-none rounded-none relative block w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 dark:bg-transparent dark:text-white placeholder-secondary-400 text-secondary-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 text-base"
              :placeholder="$t('login.password')"
              :class="{ 'border-red-500 dark:border-red-400': errors.password }"
            />
            <p v-if="errors.password" class="mt-1 text-sm text-red-600 dark:text-red-400">
              {{ errors.password }}
            </p>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              v-model="rememberMe"
              class="h-4 w-4 text-primary-600 dark:text-primary-400 focus:ring-primary-500 border-secondary-300 dark:border-secondary-600 rounded"
            />
            <label
              for="remember-me"
              class="ml-2 block text-sm text-secondary-900 dark:text-secondary-300"
            >
              {{ $t('login.rememberMe') }}
            </label>
          </div>

          <div class="text-sm">
            <router-link
              to="/forgot-password"
              class="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
            >
              {{ $t('login.forgotPassword') }}
            </router-link>
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="isLoading"
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-semibold rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 dark:bg-primary-700 dark:hover:bg-primary-600 dark:focus:ring-primary-400 dark:focus:ring-offset-secondary-800"
          >
            <span v-if="isLoading" class="flex items-center text-gray-200">
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {{ $t('login.loading') }}
            </span>
            <span class="text-gray-200" v-else>{{ $t('login.signIn') }}</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useToast } from 'vue-toastification'

const router = useRouter()
const authStore = useAuthStore()
const toast = useToast()

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const isLoading = ref(false)
const errors = ref({
  email: '',
  password: '',
})

const validateForm = () => {
  let valid = true
  errors.value = { email: '', password: '' }

  if (!email.value) {
    errors.value.email = 'Email is required'
    valid = false
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    errors.value.email = 'Please enter a valid email address'
    valid = false
  }

  if (!password.value) {
    errors.value.password = 'Password is required'
    valid = false
  } else if (password.value.length < 6) {
    errors.value.password = 'Password must be at least 6 characters'
    valid = false
  }

  return valid
}

const handleLogin = async () => {
  if (!validateForm()) return

  isLoading.value = true

  try {
    const response = await authStore.login({
      username: email.value,
      password: password.value,
    })

    if (response) {
      // Store token in localStorage if remember me is checked
      if (rememberMe.value) {
        localStorage.setItem('authToken', response.access_token)
      } else {
        sessionStorage.setItem('authToken', response.access_token)
      }

      toast.success('Login successful!')
      router.push('/')
    }
  } catch (error) {
    console.error('Login failed:', error)
    if (error.response) {
      switch (error.response.status) {
        case 401:
          toast.error('Invalid email or password')
          break
        case 400:
          toast.error('Validation error: ' + (error.response.data.detail || 'Invalid request'))
          break
        case 500:
          toast.error('Server error. Please try again later.')
          break
        default:
          toast.error('Login failed. Please try again.')
      }
    } else {
      toast.error('Network error. Please check your connection.')
    }
  } finally {
    isLoading.value = false
  }
}
</script>
