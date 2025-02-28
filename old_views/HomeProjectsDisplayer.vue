<script setup>
import dayjs from "dayjs";
import "dayjs/locale/fr";
import "dayjs/locale/en-gb";
import customParseFormat from "dayjs/plugin/customParseFormat";
import updateLocale from "dayjs/plugin/updateLocale";
import { imagesList, tagsColorList } from '@/assets/js/ProjectArraysList';
import { computed, onMounted, reactive, ref } from 'vue';
import HomeEmptyAnimation from "./HomeEmptyAnimation.vue";
dayjs.extend(customParseFormat), dayjs.extend(updateLocale), dayjs.locale("fr"); // Le site est en français par défaut

const props = defineProps({
    projectContent: Array,
    HandleArticleId: Function,
    Language: String,
    homeProjectInfo: Array,
});

const emits = defineEmits(['update:projectContent', 'HandleArticleId']);

const { Language, projectContent, homeProjectInfo } = props, languageCode = ref(''), emptyContent = reactive([]);
let projectDisplayer = reactive([]);

const filterInfosValues = (final) => {
    let tempImg1 = reactive([]), tempImg2 = reactive([]), img = reactive([]), tag = reactive([]); final = reactive([]);
    projectContent.map((content, i) => {
        if (i !== 5) {
            content.images.map((item, i) => {
                if (i < 1) {
                    imagesList.filter((image) => image.code == (languageCode.value || Language)).map(result => {
                        tempImg1 = reactive([]);
                        return tempImg1.push(result.data.filter((image) => image.id == item).reduce((acc, value) => acc + value))
                    });
                    tempImg2 = reactive([...tempImg1]);
                    if (isValidHttpUrl(item.url) == false && typeof item == 'number') {
                        if (!content.employer && !content.client) {
                            tempImg2.map(value => img.push({ id: value.id, title: value.title, url: `/portfolio/files/img/Project${content.id}/${value.url}.png`, description: value.description }))
                        } else {
                            tempImg2.map(value => img.push({ id: value.id, title: value.title, url: `/portfolio/files/img/Work${content.id}/${value.url}.png`, description: value.description }))
                        }
                    } else {
                        img.push({ id: value.id, title: value.title, url: value.url, description: value.description });
                    }
                }
            }),
                content.tags.map((value, i) => {
                    if (i < 3) tag.push(tagsColorList.filter((tags) => tags.id == value).reduce((acc, value) => acc + value))
                }
                );
            return final.push({
                id: content.id,
                title: content.title,
                description: content.description,
                by: content.by,
                for: content.for,
                employer: content.employer,
                client: content.client,
                images: img,
                tagstitle: content.tagstitle,
                tags: tag,
            }), img = reactive([]), tag = reactive([])
        }
    });
    return final
};

const getLanguage = () => {
    if (typeof Language == 'undefined' || Language.length == 0) languageCode.value = localStorage.getItem('languageCode');
};

const ifContentIsEmpty = () => {
    if ((Language || languageCode.value) == 'fr-FR') {
        emptyContent.push({ id: 1, content: "Aucun projet correspondant n'a été trouvé" });
    } else if ((Language || languageCode.value) == 'en-UK') {
        emptyContent.push({ id: 1, content: "No corresponding project have been found" });
    }
};

const homeProjectsDisplayer = computed({
    get() {
        return filterInfosValues(projectDisplayer)
    },
    set() {
        emits('update:projectContent', props.projectContent);
    }
});

onMounted(() => {
    getLanguage();
    if (projectContent.length == 0) ifContentIsEmpty()
});

function isValidHttpUrl(string) {
    let url;
    try {
        url = new URL(string);
    } catch (e) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}
</script>

<template>
    <div id="projects1" class="flex flex-col justify-center items-center w-full h-full">
        <div v-for="home in homeProjectInfo" class="flex flex-row justify-start items-center w-full h-full">
            <h2 class="font-semibold text-xl mx-4">{{ home.title }}</h2>
            <a type="link" name="focusWorks" href="works" :title="home.titleText" class="border-none">
                <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-blue-500"></font-awesome-icon>
            </a>
        </div>
        <div v-if="projectContent.length > 0" id="projectscontainer"
            class="grid items-center w-auto h-auto mb-2 gap-6 overflow-hidden">
            <article v-for="project in homeProjectsDisplayer" :key="project.id"
                @click="$emit('HandleArticleId', project.id)"
                class="flex flex-col justify-center items-center w-full h-full border rounded-lg">
                <div class="flex flex-row items-center">
                    <figure v-for="img in project.images" :title="img.title" class="w-full h-full">
                        <img :id="img.id" :src="img.url" :alt="img.description" class="block rounded-t-lg" rel="preload"
                            width="430" height="212">
                    </figure>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <h2 class="w-full h-full py-2 text-start text-xl line-clamp-1 text-ellipsis">{{ project.title }}
                    </h2>
                    <div v-if="project.client && project.employer" class="flex flex-row items-start my-2">
                        <p>
                            <span class="mr-2">{{ project.for }} {{ project.client }}</span>
                            <span>/</span>
                            <span class="ml-2">{{ project.by }} {{ project.employer }}</span>
                        </p>
                    </div>
                    <ul :title="project.tagstitle" class="grid grid-cols-3 items-start content-center mb-2 gap-2">
                        <li v-for="tag in project.tags" :key="tag.id" class="w-auto h-auto text-left mb-auto">
                            <p :style="'border-color:' + tag.color"
                                class="w-full h-full text-center text-base p-1 font-semibold border border-solid rounded-lg">
                                {{ tag.title }}</p>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
        <div class="flex flex-col justify-center items-center w-full h-auto" v-else>
            <div v-for="project of emptyContent" :key="project.id"
                class="flex flex-col justify-center items-center max-w-md">
                <HomeEmptyAnimation />
                <h3 class="m-1 text-xl red">{{ project.content }}</h3>
            </div>
        </div>
    </div>
</template>

<style>
#projectscontainer {
    grid-template-columns: repeat(1, 1fr);
}

@media (orientation: landscape) or (min-width: 1000px) {
    #projectscontainer {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>