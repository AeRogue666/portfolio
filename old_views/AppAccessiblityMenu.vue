<script setup>
const toTheMain = () => {
    const main = document.querySelector('main');
    main.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
    <div class="flex flex-row w-4 h-4 relative z-50">
        <a tabindex="0" @click="toTheMain" class="w-full h-full cursor-pointer opacity-0" aria-hidden="false">Passer directement au contenu principal</a>
    </div>
</template>

<style lang="scss" scoped></style>