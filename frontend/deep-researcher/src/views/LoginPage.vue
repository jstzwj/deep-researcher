<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          {{ $t('login.title') }}
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          {{ $t('login.or') }}
          <router-link to="/register" class="font-medium text-violet-600 hover:text-violet-500">
            {{ $t('login.register') }}
          </router-link>
        </p>
      </div>

      <!-- Error message display -->
      <div
        v-if="errorMessage"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <span class="block sm:inline">{{ errorMessage }}</span>
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
              class="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-base"
              :placeholder="$t('login.email')"
              :class="{ 'border-red-500': errors.email }"
            />
            <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
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
              class="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-base"
              :placeholder="$t('login.password')"
              :class="{ 'border-red-500': errors.password }"
            />
            <p v-if="errors.password" class="mt-1 text-sm text-red-600">{{ errors.password }}</p>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              v-model="rememberMe"
              class="h-4 w-4 text-primary focus:ring-primary border-gray-300 dark:border-gray-600 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900 dark:text-gray-300">
              {{ $t('login.rememberMe') }}
            </label>
          </div>

          <div class="text-sm">
            <router-link
              to="/forgot-password"
              class="font-medium text-primary hover:text-primary-dark"
            >
              {{ $t('login.forgotPassword') }}
            </router-link>
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="isLoading"
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-semibold rounded-md text-white bg-violet-500 hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
          >
            <span v-if="isLoading" class="flex items-center">
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
            <span v-else>{{ $t('login.signIn') }}</span>
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
const errorMessage = ref('')
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
  errorMessage.value = ''

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
          errorMessage.value = 'Invalid email or password'
          break
        case 400:
          errorMessage.value =
            'Validation error: ' + (error.response.data.detail || 'Invalid request')
          break
        case 500:
          errorMessage.value = 'Server error. Please try again later.'
          break
        default:
          errorMessage.value = 'Login failed. Please try again.'
      }
    } else {
      errorMessage.value = 'Network error. Please check your connection.'
    }
  } finally {
    isLoading.value = false
  }
}
</script>
