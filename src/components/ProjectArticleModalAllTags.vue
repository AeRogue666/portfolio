<script setup>
const props = defineProps({
    isTagOpen: { type: Boolean },
    tagsList: { type: Array },
});
</script>

<template>
    <div class="flex flex-col justify-center items-center w-full h-auto max-w-120 min-w-20 min-h-52 max-h-52">
        <h2 class="text-base font-semibold text-center">Tags</h2>
        <ol :class="[tagsList.length >= 5 ? 'grid grid-cols-3 justify-items-center' : 'flex flex-row justify-center items-start']"
            class="w-88 min-h-16">
            <li v-for="(tag, i) of tagsList" :key="tag.id" class="w-full h-full py-2 px-1 text-left">
                <p v-if="i <= 5 && tag !== undefined" :id="tag.id" :style="'border-color:' + tag.color"
                    class="block w-full h-full text-center text-base font-semibold p-2 border-2 border-solid rounded-xl">
                    {{ tag.title }}
                </p>
                <p v-if="(i > 5 && !(i >= 9)) && isTagOpen == true && tag !== undefined" :id="tag.id"
                    :style="'border-color:' + tag.color"
                    class="block w-full h-full text-center text-base font-semibold p-2 border-2 border-solid rounded-xl">
                    {{ tag.title }}
                </p>
            </li>
        </ol>
    </div>
</template>

<style>
.w-88 {
    width: 22.125rem;
}

.max-w-120 {
    max-width: 30.45rem;
}
</style>