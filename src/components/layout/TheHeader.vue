<script setup>
import { RouterLink } from 'vue-router';
import AppBurgerNav from "./components/ThePhoneNavbar.vue";
import TheThemeSwitcher from './components/TheThemeSwitcher.vue';
import TheLanguageSelector from './components/TheLanguagesSelector.vue';
import { onMounted, ref } from 'vue';
import { useWindowSize } from '@/components/functions/FunctionWindowResize.vue';

const props = defineProps({
    Language: String,
    routerLinkContent: Array,
}),
    emits = defineEmits(['update:language'])

const { routerLinkContent } = props,
    { width } = useWindowSize(),
    isPhoneNavbarOpen = ref(false),
    scrollTimer = ref(0),
    scrollY = ref(0);

const openPhoneNavbar = (event) => {
    isPhoneNavbarOpen.value = !isPhoneNavbarOpen.value;
    event.stopPropagation();
},
    closePhoneNavbar = (event) => {
        isPhoneNavbarOpen.value = false;
        event.stopPropagation();
    },
    handleScroll = () => {
        if (scrollTimer.value) return;
        scrollTimer.value = setTimeout(() => {
            scrollY.value = window.scrollY;
            clearTimeout(scrollTimer.value);
            scrollTimer.value = 0;
        }, 100);
    },
    toTheMain = () => {
        const main = document.querySelector('main');
        main.scrollIntoView({ behavior: 'smooth' });
    },
    setLanguage = (value) => {
        emits('update:language', value)
    };

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

</script>

<template>
    <header>
        <section v-for="link of routerLinkContent" id="header-section" :class="[scrollY > 24 ? 'fixed' : 'relative']"
            class="flex flex-row justify-start items-center w-full h-auto bg-inherit">
            <div class="flex flex-row justify-center items-center w-full">
                <nav tabindex="-1">
                    <a ref="skipLink" @click="toTheMain"
                        class="sr-only focus:not-sr-only focus:outline outline-inherit outline-offset-1">
                        {{ link.maincontent }}</a>
                </nav>
                <div class="flex flex-col items-center w-auto h-auto px-4 text-center" id="navbar-mobile">
                    <button @click="openPhoneNavbar" id="navbarbtnselector" type="button"
                        class="block w-9 h-9 leading-none cursor-pointer border-0 border-transparent color-nav-link"
                        :aria-expanded="isPhoneNavbarOpen" target="_top">
                        <span class="sr-only">{{ link.openmenu }}</span>
                        <font-awesome-icon :icon="['fas', 'fa-bars']" class="fa-2xl"></font-awesome-icon>
                    </button>
                    <AppBurgerNav :is-phone-navbar-open="isPhoneNavbarOpen" :nav-content="routerLinkContent"
                        :-language="Language" @closing-phone-navbar="closePhoneNavbar"
                        v-click-outside="closePhoneNavbar"></AppBurgerNav>
                    <div v-if="isPhoneNavbarOpen" v-click-outside="closePhoneNavbar" class="opacityPhoneNavbar"></div>
                </div>
                <div class="flex flex-row items-center w-auto h-auto min-w-60">
                    <p name="logo" class="flex flex-col items-center w-full h-full min-w-60 my-4">
                        <span class="text-5xl font-semibold color-nav-link"
                            :style="[width >= 1000 ? `font-size: clamp(3rem, 3.7vw, 5rem);` : '']">AurelDev</span>
                        <span>
                            {{ link.made }}
                            <font-awesome-icon icon="fa-solid fa-heart"
                                :class="[props.themeColor == 'light' ? 'text-blue-600' : 'text-blue-500']"
                                :title="link.love" /></span>
                    </p>
                </div>
            </div>
            <div class="flex flex-row justify-start items-center" id="navbar-desktop-container">
                <nav id="navbar-desktop" class="flex flex-row w-full h-full"
                    :style="[width >= 1000 ? `font-size: clamp(1.1rem, 3.7vw + 1rem, 1.25rem);` : '']"
                    :aria-label="link.navlinks">
                    <RouterLink class="block p-2 color-nav-link font-semibold duration-500" to="/">
                        {{ link.home }}
                    </RouterLink>
                    <RouterLink class="block p-2 color-nav-link font-semibold duration-500" to="/projets">
                        {{ link.projects }}
                    </RouterLink>
                    <RouterLink class="block p-2 color-nav-link font-semibold duration-500" to="/works">
                        {{ link.works }}
                    </RouterLink>
                    <RouterLink class="block p-2 color-nav-link font-semibold duration-500" to="/#contact">
                        {{ link.contact }}
                    </RouterLink>
                    <RouterLink class="block p-2 color-nav-link font-semibold duration-500" to="/cv">
                        {{ link.about }}
                    </RouterLink>
                </nav>
            </div>
            <div class="flex flex-row justify-center items-center w-full gap-3">
                <TheThemeSwitcher />
                <TheLanguageSelector :-language-code="props.Language" @update:languagecode="setLanguage" />
            </div>
        </section>
    </header>
</template>

<style lang="scss" scoped>
#navbar-desktop-container {
    width: auto;
}

#navbar-desktop {
    display: none;
}

#navbar-mobile {
    z-index: 99;
}

.open-sans {
    font-family: "Open Sans", sans-serif;
    font-optical-sizing: auto;
    font-variation-settings: "wdth" 100;
}

.opacityPhoneNavbar {
    min-width: 100vh;
    min-height: 100vh;
    background-color: rgb(var(--color-background));
    opacity: 0.5;
    position: fixed;
    top: 5.625rem;
    left: 0;
    z-index: 97;
}

.min-h-23 {
    min-height: 5.88rem;
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
}
</style>