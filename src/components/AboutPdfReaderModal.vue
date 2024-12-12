<script setup>
import About from '@/views/About.vue';
const { isPDFOpen } = About.components;
const props = defineProps({
    pdfID: {type: String},
});
const emits = defineEmits(['update:pdfID']);
</script>

<template>
    <div v-if="isPDFOpen == true" class="block overflow-auto fixed top-8 z-97 min-w-pdfreader">
        <div class="w-full h-full relative">
            <embed :src="`./files/${props.pdfID}.pdf`" class="w-full min-h-240 border-none" frameborder="0"></embed>
        </div>
    </div>
</template>

<style>
.min-w-pdfreader {
    min-width: 100%;
}

.min-h-240 {
    min-height: 60rem;
}

.z-97 {
    z-index: 97;
}

@media (min-width: 1000px) {
    .min-w-pdfreader {
        min-width: 60%;
    }
}
</style>