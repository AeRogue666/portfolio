<script setup>
const props = defineProps({
    pdfId: String,
    isPdfOpen: Boolean,
    Language: String,
});
</script>

<template>
    <div v-if="isPdfOpen == true" class="block w-full h-full overflow-auto min-w-pdfreader">
        <iframe :src="`./files/pdf/${props.pdfId}.pdf`" type="application/pdf" class="w-full min-h-240 border-none" frameborder="0" :lang="Language"></iframe>
    </div>
</template>

<style lang="css">
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