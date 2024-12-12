<script setup>
    const props = defineProps({
        isTagOpen: {type: Boolean},
        tagsList: {type: Array},
    });
</script>

<template>
    <div class="flex flex-col justify-center items-center w-full h-auto min-w-20">
        <h2 class="text-base font-semibold text-center">Tags</h2>
        <ol 
            :class="[tagsList.length >= 5 ? 'grid grid-cols-3 justify-items-center' : 'flex flex-row justify-center items-start']"
            class="min-h-16"
        >
            <li 
                v-for="(tag,i) of tagsList" 
                :key="tag.id"
                class="w-full h-full pr-2 py-1 text-left"
            >
                <a 
                    v-if="i <= 5 && tag !== undefined"
                    :id="tag.id"
                    :style="'border-color:' + tag.color"
                    class="block w-full h-full text-center text-base font-semibold p-2 border-2 rounded-xl"
                >
                    {{ tag.title }}
                </a>
                <a  
                    v-if="i > 5 && isTagOpen == true && tag !== undefined" 
                    :id="tag.id"
                    :style="'border-color:' + tag.color"
                    class="block w-full h-full text-center text-base font-semibold p-2 border-2 rounded-xl"
                >
                    {{ tag.title }}
                </a>
            </li>
        </ol>
    </div>
</template>

<style>

</style>