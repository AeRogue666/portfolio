<script setup>
import dayjs from "dayjs";
import "dayjs/locale/fr";
import "dayjs/locale/en-gb";
import customParseFormat from "dayjs/plugin/customParseFormat";
import updateLocale from "dayjs/plugin/updateLocale";
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { imagesList, tagsColorList } from "@/assets/js/ProjectArraysList";
import { useWindowSize } from "@/components/functions/FunctionWindowResize.vue";
import HomeEmptyAnimation from "@/components/animations/SeatingCat.vue";
dayjs.extend(customParseFormat), dayjs.extend(updateLocale); // Le site est en français par défaut

const route = useRoute();
const props = defineProps({
    projectContent: Array,
    Language: String,
});
const emits = defineEmits(["update:projectContent", 'handleArticleId']);
const { projectContent, Language } = props;

const emptyContent = reactive([]), languageCode = ref(''), noDate = ref(''), noDescription = ref(''), { width, height } = useWindowSize();

const getArticleContent = () => {
    let tempImg1 = reactive([]), tempImg2 = reactive([]), temp = reactive([]), img = reactive([]), tag = reactive([]);
    projectContent.map((content) => {
        content.tags.map((value) =>
            tag.push(tagsColorList.filter((tags) => tags.id == value).reduce((acc, value) => acc + value))
        );
        content.images.map((item, i) => {
            if (i < 1) {
                imagesList.filter((image) => image.code == (Language || languageCode.value)).map(result => {
                    tempImg1 = reactive([]);
                    return tempImg1.push(result.data.filter((image) => image.id == item).reduce((acc, value) => acc + value))
                })
                tempImg2 = reactive([...tempImg1]);
                if (isValidHttpUrl(item.url) == false && typeof item == 'number') {
                    if (route.path === '/projects' || route.path === '/projets') {
                        tempImg2.map(value => img.push({ id: value.id, title: value.title, url: `/portfolio/files/img/Projects/${content.images_folder}/${value.url}`, description: value.description }))
                    } else if (route.path === '/works' || route.path === '/pro') {
                        tempImg2.map(value => img.push({ id: value.id, title: value.title, url: `/portfolio/files/img/Works/${content.images_folder}/${value.url}`, description: value.description }))
                    }
                } else {
                    img.push({
                        id: value.id, title: value.title, url: value.url, description: value.description
                    });
                }
            }
        });
        return temp.push({
            id: content.id,
            title: content.title,
            description: content.description,
            content: content.content,
            dateCreated: dayjs(content.dateCreated).format("MMMM YYYY"),
            dateCreatedText: content.dateCreatedText,
            dateUpdated: dayjs(content.dateUpdated).format("MMMM YYYY"),
            dateUpdatedText: content.dateUpdatedText,
            by: content.by,
            for: content.for,
            employer: content.employer,
            client: content.client,
            images: img,
            tagstitle: content.tagstitle,
            tags: tag,
            url: content.url,
        }), tag = reactive([]), img = reactive([]);
    });
    return temp;
};

const getLanguage = () => {
    if (typeof Language == 'undefined' || Language.length == 0) languageCode.value = localStorage.getItem('languageCode');
},
    ifContentIsEmpty = () => {
        if ((Language || languageCode.value) == 'fr-FR') {
            emptyContent.push({ id: 1, content: "Aucun projet correspondant n'a été trouvé" });
        } else if ((Language || languageCode.value) == 'en-UK') {
            emptyContent.push({ id: 1, content: "No corresponding project have been found" });
        }
    },
    changeLocaleLanguage = () => {
        if ((languageCode.value || Language) == 'fr-FR') dayjs.locale('fr');
        else if ((languageCode.value || Language) == 'en-UK') dayjs.locale('en');
    },
    changeContentOnLanguage = () => {
        if ((languageCode.value || Language) == 'fr-FR') noDate.value = 'Aucune date définie', noDescription.value = 'Aucune description disponible'
        else if ((languageCode.value || Language) == 'en-UK') noDate.value = 'No defined date', noDescription.value = 'No available description'
    };

function isValidHttpUrl(string) {
    let url;
    try {
        url = new URL(string);
    } catch (e) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

const articleContent = computed({
    get() {
        return getArticleContent();
    },
    set() {
        emits("update:projectContent", props.projectContent);
    },
});

onMounted(() => {
    getLanguage();
    changeLocaleLanguage();
    if (projectContent.length == 0) ifContentIsEmpty();
    changeContentOnLanguage();
});
// <a class="underline transition-all duration-300 ease-in-out hover:decoration-8 motion-reduce:hover:transition-none decoration-2 focus:outline outline-inherit outline-offset-1"></a>
</script>

<template>
    <article
        v-for="(article, i) of articleContent" :key="article.id + '-' + i" 
        @click="$emit('handleArticleId', article.id)"
        class="flex flex-col items-center w-auto h-full m-1 p-0 min-w-80 min-h-45 max-w-full color-bg-article border border-solid color-border-article rounded-xl"
        alt="Cliquez directement sur l'article pour y accéder">
        <figure v-for="image of article.images" :title="image.title"
            class="flex flex-col justify-center items-center w-full h-full figure" aria-hidden="false">
            <picture class="w-full h-full rounded-t-xl">
                <source media="(max-width: 799px)" :srcset="`${image.url}_480w.png`">
                <img :id="image.id" :src="`${image.url}.png`" :alt="image.description" class="w-full h-full rounded-t-xl">
            </picture>
        </figure>
        <div class="flex flex-col items-center h-full mx-2 pt-4">
            <h2 class="w-full h-auto min-h-12 max-h-36 my-2 text-start text-2xl line-clamp-2 text-ellipsis">
                {{ article.title }}
            </h2>
            <p class="min-w-36 max-w-60 min-h-5 mb-1 text-start text-base font-semibold color-date">
                <span v-if="article.dateCreated !== 'Invalid Date' || article.dateUpdated !== 'Invalid Date'">
                    <span :title="article.dateCreatedText">{{ article.dateCreated }}</span> -
                    <span :title="article.dateUpdatedText">{{ article.dateUpdated }}</span>
                </span>
                <span v-else>{{ noDate }}</span>
            </p>
            <div class="flex flex-row items-start my-2">
                <p v-if="article.client && article.employer">
                    <span class="mr-2">{{ article.for }} {{ article.client }}</span>
                    <span>/</span>
                    <span class="ml-2">{{ article.by }} {{ article.employer }}</span>
                </p>
            </div>
            <div class="flex flex-col items-start py-2">
                <p class="max-h-40 line-clamp-5 text-xl text-left text-ellipsis">
                    <span v-if="article.description">{{ article.description }}</span>
                    <span v-else class="red">{{ noDescription }}</span>
                </p>
            </div>
            <div :class="[width > 600 || height > 600 ? 'flex-col' : 'flex-row']"
                class="flex justify-start items-center w-full h-auto mt-auto">
                <div :class="[width > 1000 && height > 600 ? 'flex-col' : 'flex-row']"
                    class="flex justify-center w-full min-h-32 max-h-48 mb-1">
                    <ul :title="article.tagstitle" class="grid grid-cols-2 items-start content-center">
                        <li v-for="(tag, i) of article.tags" :key="tag.id" class="w-auto h-auto py-2 px-1 text-left">
                            <p v-if="i <= 5 && tag !== undefined" :class="'border-' + tag.color"
                                class="block w-full h-full text-center text-base font-semibold p-2 border-2 border-solid rounded-xl">
                                <font-awesome-icon v-if="tag.icon" :icon="['fab', tag.icon]"
                                    class="text-normal"></font-awesome-icon>
                                {{ tag.title }}
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col items-center w-full h-auto min-w-10">
                    <h3 class="text-base font-semibold text-center">Sources</h3>
                    <ol class="flex flex-row justify-start items-center">
                        <li v-for="media of article.url" class="m-1">
                            <a v-if="media.icon == 'github'" class="m-1 p-1 text-2xl align-text-top" :href="media.url"
                                alt="Lien externe vers le github de ce projet" target="_blank">
                                <font-awesome-icon :icon="['fab', media.icon]" title="github icon"></font-awesome-icon>
                                <span class="p-2 text-xl">Source code</span>
                            </a>
                            <a v-if="media.icon == 'globe'" class="m-1 p-1 text-2xl align-text-top" :href="media.url"
                                alt="Lien externe vers le github de ce projet" target="_blank">
                                <font-awesome-icon :icon="['fas', media.icon]" title="globe icon"></font-awesome-icon>
                                <span class="p-2 text-xl">Website</span>
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </article>
    <div class="flex flex-col items-center w-full h-full m-1 p-0 min-w-80 min-h-45 rounded-xl"
        v-if="projectContent && projectContent.length == 0">
        <div v-for="project of emptyContent" :key="project.id"
            class="flex flex-col justify-center items-center max-w-max">
            <HomeEmptyAnimation />
            <p class="m-1 text-xl red">{{ project.content }}</p>
        </div>
    </div>
</template>

<style lang="css">
@media (orientation:landscape) or (min-width: 63rem) {
    .figure {
        max-height: 228px;
    }
}
</style>