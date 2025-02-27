<script setup>
import { onMounted, ref } from 'vue';
const scrollTimer = ref(0), scrollY = ref(0);

const handleScroll = () => {
    if (scrollTimer.value) return;
    scrollTimer.value = setTimeout(() => {
        scrollY.value = window.scrollY;
        clearTimeout(scrollTimer.value);
        scrollTimer.value = 0;
    }, 100);
},
    toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});
</script>

<template>
    <button v-show="scrollY > 150" @click="toTop" type="button" id="pagetop"
        class="flex flex-row justify-center items-center w-12 h-12 p-2 border border-solid rounded-lg fixed right-0 bottom-0"
        aria-label="Back to top button">
        <span class="arrow" aria-hidden="true" focusable="false">
            <font-awesome-icon icon="fa-solid fa-arrow-up"></font-awesome-icon>
        </span>
    </button>
</template>

<style>
.arrow {
    font-size: 1rem;
}
</style>