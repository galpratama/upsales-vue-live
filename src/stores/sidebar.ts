import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  const isToggled = ref(true)
  const toggle = () => {
    isToggled.value = !isToggled.value
  }
  return { isToggled, toggle }
})
