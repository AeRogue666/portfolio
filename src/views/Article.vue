<script setup>
import dayjs from 'dayjs';
import 'dayjs/locale/fr'; import 'dayjs/locale/en-gb';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import updateLocale from 'dayjs/plugin/updateLocale'
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { projectsList, worksList, tagsColorList, imagesList, galleryList } from '@/assets/js/ProjectArraysList';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { useSeoMeta } from '@unhead/vue';
import ProjectArticleModalAllTags from '@/components/Article/TagsListDisplayer.vue';
import ProjectArticleModalMdRender from '@/components/Article/MarkdownDisplayer.vue';
dayjs.extend(customParseFormat), dayjs.extend(updateLocale); // Le site est en français par défaut

const props = defineProps({
    Language: String,
    PortfolioTitle: String,
    routerLink: Array,
});
const { Language, PortfolioTitle, routerLink } = props, route = useRoute(), projectID = ref(route.params.id), isTagOpen = ref(false), languageCode = ref('');
let projectValues = reactive([]), articleTagsList = reactive([]), errors = reactive([]);

const filterArraysList = (array, final, tags) => {
    let tempImg1 = reactive([]), tempImg2 = reactive([]), img = reactive([]);
    array.filter(content => content.code == (languageCode.value || Language)).map(content =>
        content.data.filter(content => content.id == projectID.value).map(content => {
            return content.tags.map(value => tags.push(tagsColorList.filter(tag => tag.id == value).reduce((acc, value) => acc + value))), content.images.map((value) => {
                imagesList.filter((image) => image.code == (languageCode.value || Language)).map(result => {
                    return tempImg1.push(result.data.filter((image) => image.id == value).reduce((acc, value) => acc + value))
                })
                tempImg2 = [...tempImg1];
                tempImg1 = reactive([]);
                if ((route.path == '/projects/' + projectID.value || route.path == '/projets/' + projectID.value)) {
                    tempImg2.map(value => img.push({ id: value.id, title: value.title, url: `/portfolio/files/img/Projects/${content.images_folder}/${value.url}.png`, description: value.description }));
                } else if ((route.path == '/works/' + projectID.value || route.path == '/pro/' + projectID.value) && isValidHttpUrl(img.url) == false) {
                    tempImg2.map(value => img.push({ id: value.id, title: value.title, url: `/portfolio/files/img/Works/${content.images_folder}/${value.url}.png`, description: value.description }));
                }
            }), final.push({
                id: content.id,
                title: content.title,
                description: content.description,
                content: content.content,
                dateCreated: dayjs(content.dateCreated).format("MMMM YYYY"),
                dateCreatedText: content.dateCreatedText,
                dateUpdated: dayjs(content.dateUpdated).format("MMMM YYYY"),
                dateUpdatedText: content.dateUpdatedText,
                images: img,
                tagstitle: content.tagstitle,
                tags: tags,
                url: content.url,
                mdlink: content.mdlink,
            })
        }
        ));
},
    clickArticleTagMenu = (event) => {
        isTagOpen.value = !isTagOpen.value
        event.stopPropagation();
    },
    renderingArticleContent = async (array) => {
        array.map(async content => {
            if (content.mdlink.length !== 0) {
                const files = await fetch(`/portfolio/files/md/${Language}/${content.mdlink}`).then(res => res.text());
                if (files.length !== 595) array[array.findIndex(value => value.id == content.id)].content = files
                else {
                    if (Language == 'fr-FR') array[array.findIndex(value => value.id == content.id)].content = 'Pas de contenu'
                    else if (Language == 'en-UK') array[array.findIndex(value => value.id == content.id)].content = 'No content'
                }
            } else {
                if (Language == 'fr-FR') array[array.findIndex(value => value.id == content.id)].content = 'Pas de contenu'
                else if (Language == 'en-UK') array[array.findIndex(value => value.id == content.id)].content = 'No content'
            }
        })
    },
    getLanguage = () => {
        if (typeof Language == 'undefined' || Language.length == 0) languageCode.value = localStorage.getItem('languageCode');
    },
    changeLocaleLanguage = () => {
        if ((languageCode.value || Language) == 'fr-FR') dayjs.locale('fr');
        else if ((languageCode.value || Language) == 'en-UK') dayjs.locale('en');
    },
    changeI18nLanguage = () => {
        galleryList.filter(content => content.code == (languageCode.value || Language)).map(content => {
            return content.data.map(value => carouselConfig.i18n = value)
        });
    },
    carouselConfig = {
        itemsToShow: 1,
        wrapAround: true,
        i18n: {},
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

onMounted(() => {
    if (route.path == '/works/' + projectID.value || route.path == '/pro/' + projectID.value) {
        filterArraysList(worksList, projectValues, articleTagsList);
        useSeoMeta({
            title: `${routerLink[0].works} - ${PortfolioTitle}`,
            description: 'Professionnal work article page',
        });
    }
    else if (route.path == '/projects/' + projectID.value || route.path == '/projets/' + projectID.value) {
        filterArraysList(projectsList, projectValues, articleTagsList);
        useSeoMeta({
            title: `${routerLink[0].projects} - ${PortfolioTitle}`,
            description: 'Personnal project article page',
        });
    }
    renderingArticleContent(projectValues);
    getLanguage();
    changeLocaleLanguage();
    changeI18nLanguage();
});
</script>

<template>
    <section class="flex flex-row justify-center w-full h-full m-0 pb-2 pt-4">
        <article v-for="article of projectValues" :key="article.id"
            class="flex flex-col items-center h-auto max-h-full article-one" aria-labelledby="#articleTitle"
            aria-describedby="#articleContent">
            <div class="flex flex-col items-center w-full h-full py-2">
                <h1 id="articleTitle" class="my-2 text-start text-2xl line-clamp-2">{{ article.title }}</h1>
            </div>
            <div class="block w-full h-full">
                <Carousel v-bind="carouselConfig">
                    <Slide v-for="slide of article.images" :key="slide.id">
                        <figure class="flex flex-col justify-center items-center carousel__item" rel="preload"
                            aria-hidden="false">
                            <img :id="slide.id" :src="slide.url" :alt="slide.description" width="100%">
                            <figcaption class="flex flex-col items-start">
                                <span class="text-base">{{ slide.description }}</span>
                                <span class="text-xs">{{ slide.title }}</span>
                            </figcaption>
                        </figure>
                    </Slide>
                    <template #addons>
                        <Navigation />
                        <Pagination style="bottom: 0;" />
                    </template>
                </Carousel>
            </div>
            <section class="flex flex-col items-center w-full h-full p-4">
                <div class="flex flex-col items-start w-full h-full py-4">
                    <p v-if="(article.dateCreated !== 'Invalid Date' && article.dateCreated.length !== 0) || (article.dateUpdated !== 'Invalid Date' && article.dateUpdated.length !== 0)"
                        class="mb-1 text-start text-sm font-semibold color-date">
                        <span :title="article.dateCreatedText">{{ article.dateCreated }}</span>
                        -
                        <span :title="article.dateUpdatedText">{{ article.dateUpdated }}</span>
                    </p>
                    <div v-if="article.client || article.employer" class="flex flex-row items-start my-2">
                        <p v-if="article.client" class="mr-2">{{ article.for }} <span>{{ article.client }}</span></p>
                        <p>/</p>
                        <p v-if="article.employer" class="ml-2">{{ article.by }} <span>{{ article.employer }}</span></p>
                    </div>
                    <div class="py-2">
                        <div id="articleContent" class="text-xl text-left" v-if="article.content.length !== 0">
                            <ProjectArticleModalMdRender :source="article.content" />
                        </div>
                        <div v-if="errors.length !== 0 && !article.content">
                            <p class="text-xl text-left">{{ errors.message }}</p>
                            <a class="text-base text-left" :href="errors.url">{{ errors.url }}</a>
                        </div>
                    </div>
                </div>
                <div class="flex projectsize w-full h-auto">
                    <div class="flex flex-row w-full h-full">
                        <ProjectArticleModalAllTags :is-tag-open="isTagOpen" :tags-list="articleTagsList">
                        </ProjectArticleModalAllTags>
                        <div class="flex flex-row items-center w-auto h-max relative top-1/4">
                            <button name="openTagsList" title="Click on this button to open the tags list"
                                @click="(e) => { clickArticleTagMenu(e) }" class="filter-btn filter-exit border-none"
                                :class="[articleTagsList.length <= 6 ? 'hidden' : '']">
                                <font-awesome-icon v-if="!isTagOpen" icon="fa-solid fa-plus-circle"></font-awesome-icon>
                                <font-awesome-icon v-if="isTagOpen" icon="fa-solid fa-xmark"></font-awesome-icon>
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-col items-center w-full h-auto min-w-10">
                        <h2 class="text-base font-semibold text-center">Sources</h2>
                        <ol class="flex flex-row justify-start items-center">
                            <li v-for="media of article.url" class="m-1">
                                <a v-if="media.icon == 'github'" class="m-1 p-1 text-2xl align-text-top"
                                    :href="media.url" alt="Lien externe vers le github de ce projet" target="_blank">
                                    <font-awesome-icon :icon="['fab', media.icon]" title="github icon">
                                    </font-awesome-icon>
                                    <span class="p-2 text-xl">Source code</span>
                                </a>
                                <a v-if="media.icon == 'globe'" class="m-1 p-1 text-2xl align-text-top"
                                    :href="media.url" alt="Lien externe vers le github de ce projet" target="_blank">
                                    <font-awesome-icon :icon="['fas', media.icon]" title="globe icon">
                                    </font-awesome-icon>
                                    <span class="p-2 text-xl">Website</span>
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </article>
    </section>
</template>

<style lang="css">
.article-one {
    width: 100%;
    min-height: 75%;
    background-color: var(--color-bg-article);
    border: 1px solid var(--color-bg-article-2);
    border-radius: 10px;
}

@media (min-width: 1000px),
(orientation: landscape) {
    .article-one {
        width: 95%;
    }
}

/* Carousel */
.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    width: 50px;
    height: 50px;
    background-color: rgba(var(--color-background), 0.3);
    color: var(--color-nav-link);
    box-sizing: content-box;
}

.carousel__pagination-button--active::after,
.carousel__pagination-button::after {
    width: 1rem;
    height: 1rem;
    border: 1px solid;
    border-radius: 50%;
}

.carousel__pagination-button--active::after {
    background-color: rgb(var(--color-nav-link));
}

/* Tags */
.projectsize {
    flex-direction: column;
    align-items: center;
}

@media (min-width: 1000px) {
    .projectsize {
        flex-direction: row;
        align-items: flex-start;
    }
}
</style>