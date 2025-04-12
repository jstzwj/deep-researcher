import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isLoggedIn = ref(false)

  // Initialize from localStorage if available
  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    user.value = JSON.parse(storedUser)
    isLoggedIn.value = true
  }

  function login(email, password) {
    // This would be an API call in a real application
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock successful login
        const userData = {
          id: '1',
          name: 'Jane Smith',
          email,
          memberSince: new Date(),
          plan: 'Premium',
          reportsGenerated: 27,
        }

        user.value = userData
        isLoggedIn.value = true

        // Store in localStorage
        localStorage.setItem('user', JSON.stringify(userData))

        resolve(userData)
      }, 500)
    })
  }

  function register(name, email, password) {
    // This would be an API call in a real application
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock successful registration
        const userData = {
          id: '1',
          name,
          email,
          memberSince: new Date(),
          plan: 'Free',
          reportsGenerated: 0,
        }

        user.value = userData
        isLoggedIn.value = true

        // Store in localStorage
        localStorage.setItem('user', JSON.stringify(userData))

        resolve(userData)
      }, 500)
    })
  }

  function logout() {
    user.value = null
    isLoggedIn.value = false
    localStorage.removeItem('user')
    router.push('/login')
  }

  return {
    user,
    isLoggedIn,
    login,
    register,
    logout,
  }
})
