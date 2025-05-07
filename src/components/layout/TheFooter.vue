<script setup>
import { RouterLink } from 'vue-router';
import AppNoScript from './components/NoScript.vue';
import AppButtonScrollToTop from './components/ButtonScrollToTop.vue';
import { computed } from 'vue';

const props = defineProps({
    routerLinkContent: Array,
});
const emits = defineEmits(['update:routerContent']);
const routerContent = computed({
    get() {
        return props.routerLinkContent
    },
    set() {
        emits('update:routerContent', props.routerLinkContent)
    }
});
</script>

<template>
    <footer v-for="link of routerContent" class="flex flex-col items-center w-full h-full min-h-23 max-h-36">
        <section class="flex flex-col justify-center items-center w-full h-full mt-2 gap-2">
            <ul class="grid grid-cols-3 max-w-24 min-h-6 gap-4 mt-auto">
                <li v-for="social in link.sociallinks">
                    <a class="flex flex-row justify-center items-center h-6" :href="social.url" :title="social.title"
                        :key="social.id">
                        <font-awesome-icon :icon="[social.type, social.icon]" class="fa-xl"></font-awesome-icon>
                    </a>
                </li>
            </ul>
            <ul class="flex flex-row justify-center items-center min-h-5 gap-4 mt-auto">
                <li>
                    <RouterLink class="block color-nav-link font-semibold text-sm" to="/mentions-legales">{{
                        link.legalmentions }}</RouterLink>
                </li>
                <li>
                    <RouterLink class="block color-nav-link font-semibold text-sm" to="/politique-confidentialite">{{
                        link.privacy }}</RouterLink>
                </li>
            </ul>
            <ul class="flex flex-row justify-center items-center min-h-5 gap-4 mt-auto">
                <li>
                    <RouterLink class="block color-nav-link font-semibold text-sm" to="/#contact">{{ link.contact }}
                    </RouterLink>
                </li>
                <li>
                    <RouterLink class="block color-nav-link font-semibold text-sm" to="/cgu">{{ link.cgu }}</RouterLink>
                </li>
                <li>
                    <RouterLink class="block color-nav-link font-semibold text-sm" to="/sitemap">{{ link.sitemap }}
                    </RouterLink>
                </li>
            </ul>
            <div class="flex flex-row justify-center items-center w-full h-6 mt-auto">
                <p class="open-sans">© 2024 AurelDev - All Rights Reserved</p>
            </div>
        </section>
    </footer>
    <AppNoScript />
    <AppButtonScrollToTop />
</template>

<style></style>