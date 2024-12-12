<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppBurgerNav from "@/components/AppBurgerNav.vue";
import AppBurgerLanguages from "@/components/AppBurgerLanguages.vue";
import { provide, reactive, ref } from "vue";
import { routerLinkContentList } from "./assets/js/ProjectArraysList";
import anime from "animejs/lib/anime.es.js";

let routerLinkContent = reactive([]);
routerLinkContentList
  .filter((content) => content.code == Language)
  .map((content) => {
    return content.data.map((data) => {
      return routerLinkContent.push(data);
    });
  });
</script>
<script>
const Language = localStorage.getItem("languageCode");
const ApiURL = import.meta.env.VITE_API_URL;
const isPhoneNavbarOpen = ref(false);
export default {
  data() {
    return {
      userTheme: "dark",
      userThemeLabel: "Le site passera en thème foncé",
      userThemeIcon: "sun",
      isPhoneNavbarOpen: isPhoneNavbarOpen,
    };
  },
  components: {
    Language,
    ApiURL,
  },
  setup() {
    const newSelectedLang = ref("");
    const editedLanguage = (content) => {
      newSelectedLang.value = content;
    };
    return {
      editedLanguage,
    };
  },
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme), this.headerAnimation();
  },
  methods: {
    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light") {
        this.setTheme("dark");
        this.userThemeIcon = "moon";
        this.userThemeLabel = "Le site passera en thème clair";
      } else {
        this.setTheme("light");
        this.userThemeIcon = "sun";
        this.userThemeLabel = "Le site passera en thème foncé";
      }
    },
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark";
      } else {
        return "light";
      }
    },
    getTheme() {
      return localStorage.getItem("user-theme");
    },
    openPhoneNavbar(event) {
      isPhoneNavbarOpen.value = !isPhoneNavbarOpen.value;
      event.stopPropagation();
    },
    closePhoneNavbar(event) {
      isPhoneNavbarOpen.value = false;
      event.stopPropagation();
    },
    headerAnimation() {
      anime({
        targets: document.querySelectorAll(".pathHeader"),
        loop: false,
        direction: "alternate",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 700,
        delay: (el, i) => i * 500,
      });
    },
  },
};
</script>

<template>
  <header>
    <section class="flex flex-row justify-start items-center w-full">
      <div class="flex flex-row justify-center items-center w-full">
        <div class="flex flex-col items-center w-auto h-auto px-4 text-center" id="navbar-mobile">
          <a class="block w-9 h-9 leading-none cursor-pointer border-0 border-transparent color-nav-link"
            aria-label="Ouvrir le menu de navigation" id="navbarbtnselector" :aria-expanded="isPhoneNavbarOpen"
            role="button" tabindex="0" target="_top" @click="openPhoneNavbar">
            <font-awesome-icon :icon="['fas', 'fa-bars']" class="fa-2xl"></font-awesome-icon>
          </a>
          <AppBurgerNav :is-phone-navbar-open="isPhoneNavbarOpen" :nav-content="routerLinkContent"
            v-click-outside="closePhoneNavbar"></AppBurgerNav>
          <div v-if="isPhoneNavbarOpen" v-click-outside="closePhoneNavbar" style="
              min-width: 100vh;
              min-height: 100vh;
              background-color: rgb(var(--color-background));
              opacity: 0.5;
              position: fixed;
              top: 5.625rem;
              left: 0;
              z-index: 97;
            "></div>
        </div>
        <div class="flex flex-row items-center w-auto h-auto min-w-60">
          <p name="logo" class="flex flex-col items-center w-full h-full min-w-60 my-4">
            <span class="text-5xl font-semibold color-nav-link">AurelDev</span>
          </p>
        </div>
      </div>
      <div class="flex flex-row justify-start items-center" id="navbar-desktop-container">
        <nav v-for="link of routerLinkContent" id="navbar-desktop" class="flex flex-row">
          <RouterLink class="block p-2 color-nav-link font-semibold duration-500" to="/">{{ link.home }}</RouterLink>
          <RouterLink class="block p-2 color-nav-link font-semibold duration-500" to="/projets">{{ link.projects }}</RouterLink>
          <RouterLink class="block p-2 color-nav-link font-semibold duration-500" to="/works">{{ link.works }}</RouterLink>
          <RouterLink class="block p-2 color-nav-link font-semibold duration-500" to="/contact">{{ link.contact }}</RouterLink>
          <RouterLink class="block p-2 color-nav-link font-semibold duration-500" to="/about">{{ link.about }}</RouterLink>
        </nav>
      </div>
      <div class="flex flex-row justify-center items-center w-full">
        <label for="checkbox" :aria-label="userThemeLabel" class="switch-label m-2">
          <input @change="toggleTheme" id="checkbox" name="checkboxtheme" type="checkbox" class="switch-checkbox" />
          <!-- 🌙☀️ -->
          <div class="flex flex-row justify-center items-center switch-toggle" :class="[
            { 'switch-toggle-checked': userTheme === 'dark' },
            { 'switch-toggle-unchecked': userTheme === 'light' },
          ]">
            <span role="img" class="flex flex-col justify-center items-center w-full h-full" :style="[
              userTheme === 'dark' ? 'color: white;' : 'color: black;',
            ]">
              <font-awesome-icon :icon="['fas', userThemeIcon]"></font-awesome-icon>
            </span>
          </div>
        </label>
        <AppBurgerLanguages @selectedLanguage="editedLanguage"></AppBurgerLanguages>
      </div>
    </section>
  </header>

  <main>
    <Suspense>
      <RouterView />
    </Suspense>
  </main>

  <footer v-for="link of routerLinkContent" class="text-sm leading-6 mt-12 pt-24">
    <div class="flex flex-col items-center">
      <div class="flex flex-row justify-center items-center w-full">
        <div class="flex h-full text-center footer-links">
          <RouterLink class="block p-2 color-nav-link font-semibold duration-500" to="/mentions-legales">{{ link.legalmentions }}</RouterLink>
          <RouterLink class="block p-2 color-nav-link font-semibold duration-500" to="/cgu">{{ link.cgu }}</RouterLink>
          <RouterLink class="block p-2 color-nav-link font-semibold duration-500" to="/politique-confidentialite">{{ link.privacy }}</RouterLink>
        </div>
        <div class="flex h-full text-center footer-links">
          <RouterLink class="block p-2 color-nav-link font-semibold duration-500" to="/faq">{{ link.faq }}</RouterLink>
          <RouterLink class="block p-2 color-nav-link font-semibold duration-500" to="/sitemap">{{ link.sitemap }}</RouterLink>
        </div>
      </div>
      <div class="flex flex-row m-auto">
        <a class="text-2xl p-2">
          <font-awesome-icon icon="fa-brands fa-slack fa-xl" />
        </a>
        <a class="text-2xl p-2">
          <font-awesome-icon icon="fa-brands fa-linkedin fa-xl" />
        </a>
      </div>
    </div>
    <div class="flex flex-row items-center pt-4 pb-20">
      <div class="flex flex-col items-center w-full h-full">
        <p class="text-center text-normal font-semibold">
          © 2024 AurelDev - All Rights Reserved
        </p>
        <p class="text-center text-normal">
          <b>{{ link.portfolio }}</b>
          {{ link.made }}
          <font-awesome-icon icon="fa-solid fa-heart" class="skyblue" :title="link.love" />
          {{ link.by }}
          <a href="/" class="color-nav-link">AurelDev</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
#navbar-desktop-container {
  width: auto;
}

#navbar-desktop {
  display: none;
}

#navbar-mobile {
  z-index: 99;
}

/* Switch Light/Dark */
.container-center {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(var(--color-background));
}

.card {
  width: 300px;
  height: 200px;
  padding: 2rem 4rem;
  background-color: var(--color-bg-article);
  border: 1px solid var(--color-btn-border);
  border-radius: 4px;
  text-align: center;
}

.switch-checkbox {
  display: none;
  width: 0;
  height: 0;
  position: absolute;
  opacity: 0;
  /* pointer-events: none; */
}

.switch-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 3rem;
  /* width: calc(var(--element-size) + 2rem); */
  /* height: calc(var(--element-size) * 0.35); */
  /* padding: calc(var(--element-size) * 0.1); */
  /* border: calc(var(--element-size) * 0.025) solid var(--color-btn-border); */
  /* border-radius: 1rem; */
  /* font-size: calc(var(--element-size) * 0.3); */
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.switch-toggle {
  width: calc(var(--element-size) * 0.5);
  height: calc(var(--element-size) * 0.5);
  background-color: rgb(var(--color-background));
  border-radius: 50%;
  position: absolute;
  top: auto;
  left: 0;
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
  /* transform: translateX(calc(var(--element-size) * 0.5)) !important; */
  box-shadow: 0px 0px 5px 5px var(--color-btn);
  color: var(--color-btn);
}

.switch-toggle-unchecked {
  transform: translateX(calc(var(--element-size) * -0.02)) !important;
  box-shadow: 0px 0px 5px 5px orange;
}

.footer-links {
  flex-direction: column;
  width: 100%;
}

.open-sans {
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-variation-settings: "wdth" 100;
}

@media (min-width: 1000px) {
  #navbar-desktop-container {
    width: 100%;
  }

  #navbar-desktop {
    display: flex;
    width: max-content;
  }

  #navbar-mobile {
    display: none;
  }

  .footer-links {
    flex-direction: row;
    width: auto;
  }
}
</style>