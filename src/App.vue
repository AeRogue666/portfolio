<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import { reactive, ref, watchEffect } from "vue";
import { LanguagesList, routerLinkContentList } from "./assets/js/ProjectArraysList";
const ApiURL = ref(''), Language = ref('fr-FR'), PortfolioTitle = ref('Portfolio d\'AurelDev'), routerLinkContent = reactive([]), themeColor = ref('light');

const getApiURL = () => {
  return ApiURL.value = import.meta.env.VITE_API_URL
},
  getLanguage = () => {
    if (!localStorage.getItem('languageCode')) {
      localStorage.setItem('languageCode', Language.value);
      document.documentElement.lang = 'fr';
      getLanguage();
    } else {
      LanguagesList.filter(value => value.code == Language.value).map(content => document.documentElement.lang = content.lang);
    }
  },
  getTheme = () => {
    if(!localStorage.getItem('user-theme')) {
      localStorage.setItem('user-theme', themeColor.value = 'light');
      document.documentElement.className = 'light';
      getTheme();
    } else {
      localStorage.setItem('user-theme', themeColor.value);
      document.documentElement.className = themeColor.value;
    }
  },
  setLanguage = (value) => {
    Language.value = value;
    getLanguage();
  }, 
  setTheme = (value) => {
    themeColor.value = value;
    getTheme();
  };

watchEffect(() => {
  getLanguage();
  getApiURL();
  getTheme();
  if (Language.value) {
    routerLinkContent.splice(0, routerLinkContent.length);
    routerLinkContentList.filter((content) => content.code == Language.value).map((content) => content.data.map((data) => { return routerLinkContent.push(data) }));
  }
});
</script>

<template>
  <TheHeader :router-link-content="routerLinkContent" :-language="Language" :theme-color="themeColor" @update:language="setLanguage" @update:themecolor="setTheme" />

  <main>
    <Suspense>
      <RouterView v-slot="Language" :Language="Language" :PortfolioTitle="PortfolioTitle"
        :routerLink="routerLinkContent" :themeColor="themeColor" :key="Language + $router.fullPath" />
    </Suspense>
  </main>

  <TheFooter :router-link-content="routerLinkContent" />
</template>

<style></style>