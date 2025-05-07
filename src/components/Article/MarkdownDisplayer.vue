<script setup>
import markdownit from 'markdown-it';
const md = markdownit({
    html: true,
    linkify: true,
    typographer: true,
});

defineProps({
    source: {
        type: String,
        default: '',
    }
});
</script>

<template>
    <div v-html="md.render(source)"></div>
</template>

<style></style>