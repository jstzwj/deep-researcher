<template>
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-secondary-900 dark:text-white">
            {{ $t('register.title') }}
          </h2>
          <p class="mt-2 text-center text-sm text-secondary-600 dark:text-secondary-400">
            {{ $t('register.or') }}
            <router-link to="/login" class="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
              {{ $t('register.login') }}
            </router-link>
          </p>
        </div>
        <!-- Error message display -->
        <div
          v-if="errorMessage"
          class="bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 px-4 py-3 rounded relative"
          role="alert"
        >
          <span class="block sm:inline">{{ errorMessage }}</span>
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
                class="appearance-none rounded-none relative block w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 dark:bg-transparent dark:text-white placeholder-secondary-500 text-secondary-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
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
                class="appearance-none rounded-none relative block w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 dark:bg-transparent dark:text-white placeholder-secondary-500 text-secondary-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
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
                @input="validatePassword"
                class="appearance-none rounded-none relative block w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 dark:bg-transparent dark:text-white placeholder-secondary-500 text-secondary-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                :placeholder="$t('register.password')"
                :class="{
                  'border-red-500 dark:border-red-400': errorMessage,
                  'border-green-500 dark:border-green-400': passwordValid && password.length > 0,
                }"
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
                @input="validatePassword"
                class="appearance-none rounded-none relative block w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 dark:bg-transparent dark:text-white placeholder-secondary-500 text-secondary-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                :placeholder="$t('register.confirmPassword')"
                :class="{
                  'border-red-500 dark:border-red-400': errorMessage,
                  'border-green-500 dark:border-green-400':
                    passwordsMatch && confirmPassword.length > 0,
                }"
              />
            </div>
          </div>
  
          <div>
            <button
              type="submit"
              :disabled="isLoading || !formValid"
              class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-semibold rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 dark:bg-primary-700 dark:hover:bg-primary-600 dark:focus:ring-primary-400 dark:focus:ring-offset-secondary-800"
            >
              <span v-if="isLoading">
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
              </span>
              <span v-else>{{ $t('register.signUp') }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '@/stores/auth'
  
  const router = useRouter()
  const authStore = useAuthStore()
  
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const isLoading = ref(false)
  const errorMessage = ref('')
  
  const passwordsMatch = computed(() => {
    return password.value === confirmPassword.value && password.value.length > 0
  })
  
  const passwordValid = computed(() => {
    return password.value.length >= 8 && !errorMessage.value
  })
  
  const formValid = computed(() => {
    return name.value && email.value && passwordValid.value && passwordsMatch.value
  })
  
  const validatePassword = () => {
    // Reset errors
    errorMessage.value = ''
  
    // Validate password strength
    if (password.value.length > 0 && password.value.length < 8) {
      errorMessage.value = 'Password must be at least 8 characters'
    }
    // Validate password match
    else if (confirmPassword.value.length > 0 && !passwordsMatch.value) {
      errorMessage.value = 'Passwords do not match'
    }
  }
  
  const handleRegister = async () => {
    if (!formValid.value) return
  
    isLoading.value = true
  
    try {
      await authStore.register(name.value, email.value, password.value)
      // 注册成功后跳转到首页或其他适当页面
      router.push('/')
    } catch (error) {
      console.error('Registration failed:', error)
      // 显示错误信息给用户
      if (error.message.includes('already exists')) {
        errorMessage.value = 'Username or email already exists'
      } else {
        errorMessage.value = 'Registration failed. Please try again.'
      }
    } finally {
      isLoading.value = false
    }
  }
  </script>