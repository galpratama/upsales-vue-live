import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

import type Category from '@/types/category'

export const useCategoryStore = defineStore('category', () => {
  const api_url = import.meta.env.VITE_API_URL

  // State
  const categories = ref<Category[]>([])

  // Actions
  async function fetchCategories() {
    try {
      const { data } = await axios.get(api_url + '/category')
      categories.value = data.result.data
    } catch (error) {
      categories.value = []
      console.log(error)
    }
  }

  return { categories, fetchCategories }
})
