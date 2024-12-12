<script setup>
    import dayjs from 'dayjs';
    import 'dayjs/locale/fr'; import 'dayjs/locale/en-gb';
    import customParseFormat from 'dayjs/plugin/customParseFormat'; import updateLocale from 'dayjs/plugin/updateLocale'
    import ProjectArticleModalAllTags from './ProjectArticleModalAllTags.vue';
    import { reactive, ref } from 'vue';
    import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'
    dayjs.extend(customParseFormat), dayjs.extend(updateLocale), dayjs.locale('fr'); // Le site est en français par défaut

    const props = defineProps({
        projectID: {type: Number},
        projectList: {type: Array},
        isArticleOpen: {type: Boolean},
    });
    const projectID = props.projectID, projectsList = props.projectList, isTagOpen = ref(false);
    console.log('props: ', projectID, ' article: ', props.isArticleOpen);
    let projectValues = reactive([]), articleTagsList = reactive([]), errors = reactive([]);
    if(projectID !== 0) {
        console.log('selected Project: ', projectsList);
        projectsList.map(content => {return projectValues.push(content), articleTagsList = content.tags});
    }

    const clickArticleTagMenu = (event) => {
        isTagOpen.value = !isTagOpen.value
        event.stopPropagation();
    };
</script>

<template>
    <div 
        v-if="isArticleOpen == true"
        class="article-wrapper flex flex-row justify-center w-1/2 h-auto m-0 pb-2 pt-4 absolute"
    >
        <article 
            v-for="article of projectValues" 
            :key="article.id"
            class="article-one flex flex-col items-center h-auto max-h-full"
        >
            <div class="block">
                <Carousel>
                    <Slide v-for="slide of article.images" :key="slide.id">
                        <div class="flex justify-center items-center carousel__item">
                            <img 
                                :src="slide.url"
                                :alt="slide.description"
                                :aria-label="slide.labelDescription"
                                :href="slide.labelURL" 
                                :id="slide.id"
                            >
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation />
                        <Pagination />
                    </template>
                </Carousel>
            </div>
            <section class="flex flex-col items-center w-full h-full p-4">
                <div class="py-4">
                    <h1 class="py-2 text-start text-2xl">{{ article.title }}</h1>
                    <p class="mb-1 text-start text-sm font-semibold color-date">{{ article.dateCreated }} - {{ article.dateUpdated }}</p>
                    <div v-if="article.client || article.employer" class="flex flex-row items-start my-2">
                        <p v-if="article.client" class="mr-2">{{ article.for }} <span>{{ article.client }}</span></p>
                        <p>/</p>
                        <p v-if="article.employer" class="ml-2">{{ article.by }} <span>{{ article.employer }}</span></p>
                    </div>
                    <div class="py-2">
                        <p class="text-xl text-left" v-if="article.content.length !== 0">{{ article.content }}</p>
                        <div v-if="errors.length !== 0 && !article.content">
                            <p class="text-xl text-left">{{ errors.message }}</p>
                            <a class="text-base text-left" :href="errors.url">{{ errors.url }}</a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row w-full h-auto">
                    <ProjectArticleModalAllTags
                        :is-tag-open="isTagOpen"
                        :tags-list="articleTagsList"
                    ></ProjectArticleModalAllTags>
                    <div class="flex flex-row items-center relative top-auto left-1-20 bottom-3-20">
                        <button 
                            @click="(e) => {clickArticleTagMenu(e)}"
                            class="filter-btn filter-exit border-none"
                            :class="[articleTagsList.length <= 4 ? 'hidden' : '']"
                        >
                            <font-awesome-icon v-if="!isTagOpen" icon="fa-solid fa-plus-circle"></font-awesome-icon>
                            <font-awesome-icon v-if="isTagOpen" icon="fa-solid fa-xmark"></font-awesome-icon>
                        </button>
                    </div>
                    <div class="flex flex-col items-center w-full h-auto min-w-10">
                        <h3 class="text-base font-semibold text-center">Sources</h3>
                        <ol class="flex flex-row">
                            <li class="m-1">
                                <a 
                                    class="m-1 p-1 text-2xl align-text-top" 
                                    v-for="media of article.url" 
                                    :href="media.url" 
                                    target="_blank">
                                    <font-awesome-icon v-if="media.icon == 'github'" :icon="['fab', media.icon]"></font-awesome-icon>
                                    <font-awesome-icon v-if="media.icon == 'globe'" :icon="['fas', media.icon]"></font-awesome-icon>
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </article>
    </div>
</template>

<style lang="css">
    .article-wrapper {
        top: -1rem;
        z-index: 10;
    }

    .article-one {
        width: 100%;
        min-height: 75%;
        background-color: var(--color-bg-article);
        border: 1px solid var(--color-bg-article-2);
        border-radius: 10px;
    }

    @media (min-width: 1000px), (orientation: landscape) {
        .article-one {
            width: auto;
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
  
    .carousel__prev, .carousel__next {
        width: 50px;
        height: 50px;
        background-color: rgba(var(--color-background), 0.3);
        color: var(--color-nav-link);
        box-sizing: content-box;
    }

    .carousel__pagination-button--active::after {
        background-color: rgb(var(--color-nav-link));
    }

    /* Tags */
    .left-1-20 {
        left: 5%;
    }

    .bottom-3-20 {
        bottom: 20%;
    }
</style>