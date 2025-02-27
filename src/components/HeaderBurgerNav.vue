<script setup>
import { computed } from 'vue';
const props = defineProps({
    isPhoneNavbarOpen: Boolean,
    navContent: Array,
    Language: String,
});
const emits = defineEmits(['update:navContent', 'closingPhoneNavbar']);

const navBarContent = computed({
    get() {
        return props.navContent
    },
    set() {
        return emits('update:navContent', props.navContent)
    }
});
</script>

<template>
    <aside
        class="flex flex-col justify-start items-center w-9/12 min-h-full border border-solid border-gray-200 rounded-xl absolute top-full left-0 z-index-99 navbar-container"
        v-if="props.isPhoneNavbarOpen">
        <nav v-for="(nav, i) of navBarContent" :key="i" class="flex flex-col w-full p-4 text-start z-index-99"
            :aria-label="nav.navlinks">
            <button @click="(e) => $emit('closingPhoneNavbar', e)"
                class="block w-full h-auto border-none text-lg font-semibold" name="buttonclosephonenavbar" :aria-label="nav.closemenu">
                <font-awesome-icon icon="fa-solid fa-xmark"></font-awesome-icon>
                <span class="mx-2">{{ nav.closemenu }}</span>
            </button>
            <RouterLink
                class="flex flex-row items-center w-auto min-w-72 min-h-12 m-2 p-3 border-none color-nav-link text-xl font-semibold duration-500 navlink"
                to="/">
                <font-awesome-icon icon="fa-solid fa-home"
                    class="fa-xl size-6 border-2 border-solid p-2 btn-border-color rounded-xl" />
                <span class="text-xl mx-6 color-nav-link">{{ nav.home }}</span>
            </RouterLink>
            <RouterLink
                class="flex flex-row items-center w-auto min-w-72 min-h-12 m-2 p-3 border-none color-nav-link text-xl font-semibold duration-500 navlink"
                to="/projects">
                <font-awesome-icon icon="fa-solid fa-pen"
                    class="fa-xl size-6 border-2 border-solid p-2 btn-border-color rounded-xl" />
                <span class="text-xl mx-6 color-nav-link">{{ nav.projects }}</span>
            </RouterLink>
            <RouterLink
                class="flex flex-row items-center w-auto min-w-72 min-h-12 m-2 p-3 border-none color-nav-link font-semibold duration-500 navlink"
                to="/works">
                <font-awesome-icon icon="fa-solid fa-user"
                    class="fa-xl size-6 border-2 border-solid p-2 btn-border-color rounded-xl" />
                <span class="text-xl mx-6 color-nav-link">{{ nav.works }}</span>
            </RouterLink>
            <RouterLink
                class="flex flex-row items-center w-auto min-w-72 min-h-12 m-2 p-3 border-none color-nav-link text-xl font-semibold duration-500 navlink"
                to="/contact">
                <font-awesome-icon icon="fa-solid fa-contact-card"
                    class="fa-xl size-6 border-2 border-solid p-2 btn-border-color rounded-xl" />
                <span class="text-xl mx-6 color-nav-link">{{ nav.contact }}</span>
            </RouterLink>
            <RouterLink
                class="flex flex-row items-center w-auto min-w-72 min-h-12 m-2 p-3 border-none color-nav-link text-xl font-semibold duration-500 navlink"
                to="/about">
                <font-awesome-icon icon="fa-solid fa-person"
                    class="fa-xl size-6 border-2 border-solid p-2 btn-border-color rounded-xl" />
                <span class="text-xl mx-6 color-nav-link">{{ nav.about }}</span>
            </RouterLink>
        </nav>
    </aside>
</template>

<style scoped>
.navbar-container {
    background: rgb(var(--color-background));
    animation: menu 0.3s ease forwards;
}

.navlink {
    border: 1px solid transparent;
    border-radius: 10px;
}

.navlink:hover,
.navlink:focus,
.navlink:focus-visible {
    background-color: rgba(var(--color-nav-link), 0.3);
}
</style>