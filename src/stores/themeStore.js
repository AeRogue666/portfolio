import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme-store', () => {
  const currentTheme = ref('light')
  function setTheme(theme) {
    currentTheme.value = theme
  }
  return { setTheme, currentTheme }
})
