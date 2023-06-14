import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

import type User from '@/types/user'

export const useUserStore = defineStore('user', () => {
  const API_URL = import.meta.env.VITE_API_URL

  // State
  const user = ref<User>({})

  // Computed
  const isLoggedIn = computed(() => {
    return localStorage.getItem('access_token') !== null
  })

  // Actions
  async function fetchUser() {
    try {
      const { data } = await axios.get(API_URL + '/user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      user.value = data
    } catch (error) {
      user.value = {}
      console.log(error)
    }
  }

  return { user, fetchUser, isLoggedIn }
})
