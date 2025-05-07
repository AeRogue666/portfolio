import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useLanguageStore = defineStore('language-store', () => {
  const currentLanguage = ref('');

  const setNewLanguage = (language) => {
    currentLanguage.value = language;
  }

  return { currentLanguage, setNewLanguage }
});