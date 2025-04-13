import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

// Create axios instance with base URL from .env
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_PATH || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
})

interface Credentials {
  username: string
  password: string
}

export const useAuthStore = defineStore('auth', () => {
  const token = ref(null)
  const user = ref(null)

  const login = async (credentials: Credentials) => {
    try {
      const response = await api.post(
        '/token',
        new URLSearchParams({
          username: credentials.username,
          password: credentials.password,
          grant_type: 'password',
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )

      token.value = response.data.access_token
      user.value = await fetchUser()

      return response.data
    } catch (error) {
      throw error
    }
  }

  const register = async (username: string, email: string, password: string) => {
    try {
      const response = await api.post('/register', {
        username,
        email,
        password,
      })

      token.value = response.data.access_token
      user.value = await fetchUser()

      return response.data
    } catch (error: any) {
      if (error.response) {
        // Handle specific error messages from backend
        if (error.response.data.detail) {
          throw new Error(error.response.data.detail)
        }
      }
      throw error
    }
  }

  const fetchUser = async () => {
    try {
      const response = await api.get('/users/me', {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
      return response.data
    } catch (error) {
      throw error
    }
  }

  const logout = () => {
    token.value = null
    user.value = null
    localStorage.removeItem('authToken')
    sessionStorage.removeItem('authToken')
  }

  return { token, user, login, register, logout, fetchUser }
})
