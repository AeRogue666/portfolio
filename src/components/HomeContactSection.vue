<script setup>
const props = defineProps({
    content: Object,
    themeColor: String,
});
const { content } = props;
</script>

<template>
    <div v-for="contact in content.contact" id="contact"
        class="flex flex-col justify-center items-center w-full h-auto mt-2 mb-auto">
        <h2 class="text-4xl font-semibold py-4">Contact</h2>
        <div class="flex flex-col items-center w-full h-auto">
            <h3 class="text-xl font-semibold">{{ contact.title }}</h3>
            <ul class="grid grid-notenough-3 items-center w-auto h-auto">
                <li v-for="link of content.sociallinks">
                    <a class="flex flex-row items-center" :href="link.url" :aria-label="link.title" :id="link.id">
                        <font-awesome-icon :icon="[link.type, link.icon]"
                            class="fa-xl size-6 ml-3 mr-3"></font-awesome-icon>
                        <p class="text-xl">{{ link.content }}</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="flex flex-col items-center w-full h-auto py-2">
            <h3 class="tex-xl font-semibold">{{ contact.subtitle }}</h3>
            <ul class="grid grid-notenough-2 items-center w-auto h-auto">
                <li>
                    <a href="about" class="flex flex-row justify-center items-center w-max">
                        <font-awesome-icon icon="fa-solid fa-person"
                            :class="[props.themeColor == 'light' ? 'border-blue-600' : 'border-blue-500']"
                            class="fa-xl size-6 border-solid border-2 p-2 rounded-xl"></font-awesome-icon>
                        <span class="text-xl mx-6 color-nav-link">{{ content.about }}</span>
                    </a>
                </li>
                <li>
                    <button v-for="cv of content.cv" id="notenough-dlcv" name="notenoughdlcv" :href="cv.url"
                        class="flex flex-row items-center w-auto h-full min-w-auto min-h-12 border-none" download>
                        <font-awesome-icon icon="fa-solid fa-file-download"
                            :class="[props.themeColor == 'light' ? 'border-blue-600' : 'border-blue-500']"
                            class="fa-xl size-6 border-solid border-2 p-2 rounded-xl"></font-awesome-icon>
                        <span class="text-xl mx-6 color-nav-link">{{ cv.title }}</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
#contact {
    background-color: var(--color-bg-article);
}

.grid-notenough-2,
.grid-notenough-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media (orientation: landscape) or (min-width: 62.4rem) {
    .grid-notenough-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .grid-notenough-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}
</style>