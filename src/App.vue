<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import { reactive, ref, watchEffect } from "vue";
import { LanguagesList, routerLinkContentList } from "./assets/js/ProjectArraysList";
import { getStorage } from "./assets/js/storageFunctions.js";

const ApiURL = ref(""),
  Language = ref("fr-FR"),
  PortfolioTitle = ref("Portfolio d'AurelDev"),
  routerLinkContent = reactive([]),
  themeColor = ref(getStorage('theme'));

const getApiURL = () => {
    return (ApiURL.value = import.meta.env.VITE_API_URL);
  },
  getLanguage = () => {
    if (!localStorage.getItem("languageCode")) {
      localStorage.setItem("languageCode", Language.value);
      document.documentElement.lang = "fr";
      getLanguage();
    } else {
      LanguagesList.filter((value) => value.code == Language.value).map(
        (content) => (document.documentElement.lang = content.lang)
      );
    }
  },
  setLanguage = (value) => {
    Language.value = value;
    getLanguage();
  };

watchEffect(() => {
  getLanguage();
  getApiURL();
  if (Language.value) {
    routerLinkContent.splice(0, routerLinkContent.length);
    routerLinkContentList
      .filter((content) => content.code == Language.value)
      .map((content) =>
        content.data.map((data) => {
          return routerLinkContent.push(data);
        })
      );
  }
});
</script>

<template>
  <TheHeader
    :router-link-content="routerLinkContent"
    :-language="Language"
    @update:language="setLanguage"
  />

  <main>
    <Suspense>
      <RouterView
        v-slot="Language"
        :Language="Language"
        :PortfolioTitle="PortfolioTitle"
        :routerLink="routerLinkContent"
        :themeColor="themeColor"
        :key="Language + $router.fullPath"
      />
    </Suspense>
  </main>

  <TheFooter :router-link-content="routerLinkContent" />
</template>

<style></style>