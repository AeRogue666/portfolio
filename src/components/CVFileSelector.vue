<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const props = defineProps({
    cvcontent: Object,
    themeColor: String,
});
const { cvcontent } = props;
const emits = defineEmits(['openComponent', 'getPdf', 'openModal']), isOpen = ref(false);
</script>

<template>
    <div class="flex flex-col items-start w-auto h-auto py-2">
        <button v-for="open in cvcontent.openbutton" @click="isOpen = !isOpen"
            class="flex flex-row items-center w-full h-auto min-w-72" :aria-expanded="isOpen">
            <font-awesome-icon icon="fa-solid fa-file"
                :class="[props.themeColor == 'light' ? 'border-blue-600' : 'border-blue-500']"
                class="fa-xl size-6 border-solid border-2 p-2 rounded-xl"></font-awesome-icon>
            <span class="w-auto h-auto text-xl mx-6 color-nav-link">{{ open.title }}</span>
            <span class="w-0 h-0 mx-2 arrow" :class="[isOpen == true ? 'arrow-up' : 'arrow-down']"></span>
        </button>
        <div v-if="isOpen == true" class="flex flex-col items-start w-full h-auto min-w-28 min-h-16">
            <button v-for="select in cvcontent.selectbutton"
                @click="emits('getPdf', select.url); emits('openModal'); emits('openComponent', 'pdf');" id="openpdfcv"
                name="openpdfcv" class="flex flex-row items-center w-full min-h-12 py-2 border-none">
                <font-awesome-icon icon="fa-solid fa-file-pdf"
                    :class="[props.themeColor == 'light' ? 'border-blue-600' : 'border-blue-500']"
                    class="fa-xl size-6 border-solid border-2 p-2 rounded-xl"></font-awesome-icon>
                <span class="mx-6 color-nav-link">{{ select.title }} PDF</span>
            </button>
            <RouterLink v-for="select in cvcontent.selectbutton" @click="emits('openComponent', 'webp')" to="#webcv"
                id="openwebcv" name="openwebcv" class="flex flex-row items-center w-full min-h-12 py-2 border-none">
                <font-awesome-icon icon="fa-solid fa-eye"
                    :class="[props.themeColor == 'light' ? 'border-blue-600' : 'border-blue-500']"
                    class="fa-xl size-6 border-solid border-2 p-2 rounded-xl"></font-awesome-icon>
                <span class="mx-6 color-nav-link">{{ select.title }} WEB</span>
            </RouterLink>
            <a v-for="newpage in cvcontent.newpagebutton" id="newpage-cv" name="newpagecv" :href="newpage.url"
                class="flex flex-row items-center w-full min-h-12 py-2 border-none">
                <font-awesome-icon icon="fa-solid fa-file"
                    :class="[props.themeColor == 'light' ? 'border-blue-600' : 'border-blue-500']"
                    class="fa-xl size-6 border-solid border-2 p-2 rounded-xl"></font-awesome-icon>
                <span class="flex flex-row items-center w-full mx-6 color-nav-link"
                    aria-label="Ce bouton va vous renvoyer vers une une nouvelle page et ouvrir le PDF">
                    {{ newpage.title }}
                    <font-awesome-icon icon="fa-solid fa-info-circle"
                        title="Ce bouton va vous renvoyer vers une une nouvelle page et ouvrir le PDF"
                        class="ml-2"></font-awesome-icon>
                    <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square"
                        :title="`Le lien du PDF est: ` + cvcontent.pageurl" class="ml-2"></font-awesome-icon>
                </span>
            </a>
        </div>
    </div>
</template>

<style scoped>
.arrow {
    border-left: 0.3rem solid transparent;
    border-right: 0.3rem solid transparent;
}

.arrow-up {
    border-bottom: 0.3rem solid;
}

.arrow-down {
    border-top: 0.3rem solid;
}
</style>