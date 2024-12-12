<script setup>
    import App from '@/App.vue';
    import dayjs from 'dayjs';
    import 'dayjs/locale/fr'; import 'dayjs/locale/en-gb';
    import customParseFormat from 'dayjs/plugin/customParseFormat'; 
    import updateLocale from 'dayjs/plugin/updateLocale'
    import ProjectArticleModalAllTags from '@/components/ProjectArticleModalAllTags.vue';
    import { onMounted, reactive, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import { projectsList, worksList, tagsColorList } from '@/assets/js/ProjectArraysList';
    import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'

    dayjs.extend(customParseFormat), dayjs.extend(updateLocale), dayjs.locale('fr'); // Le site est en français par défaut
    const { Language } = App.components;
    const route = useRoute(), projectID = ref(route.params.id), isTagOpen = ref(false);

    console.log('projectID (Modal): ', projectID.value);
    let projectValues = reactive([]), articleTagsList = reactive([]), errors = reactive([]);
    const filterArraysList = (array, final, tags) => {
        array.filter(content => content.code == Language).map(content => content.data.filter(content => content.id == projectID.value).map(content => {return final.push(content), content.tags.map(value => tags.push(tagsColorList.filter(tag => tag.id == value).reduce((acc,value) => acc + value)));}));
    };
    const clickArticleTagMenu = (event) => {
        isTagOpen.value = !isTagOpen.value
        event.stopPropagation();
    };

    onMounted(() => {
        if(route.path == '/works/' + projectID.value || route.path == '/pro/' + projectID.value) filterArraysList(worksList, projectValues, articleTagsList);
        else if(route.path == '/projects/' + projectID.value || route.path == '/projets/' + projectID.value) filterArraysList(projectsList, projectValues, articleTagsList);
    });
</script>

<template>
    <section 
        class="flex flex-row justify-center w-full h-full m-0 pb-2 pt-4"
    >
        <article 
            v-for="article of projectValues" 
            :key="article.id"
            class="article-one flex flex-col items-center h-auto max-h-full"
            aria-labelledby="articleTitle"
            aria-describedby="articleContent"
        >
            <div class="block w-full h-full">
                <Carousel>
                    <Slide v-for="slide of article.images" :key="slide.id">
                        <div class="flex flex-row justify-center items-center carousel__item">
                            <img 
                                :src="slide.url"
                                :alt="slide.description"
                                :href="slide.imageURL" 
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
                <div class="flex flex-col items-start w-full h-full py-4">
                    <h1 id="articleTitle" class="py-2 text-start text-2xl">{{ article.title }}</h1>
                    <p class="mb-1 text-start text-sm font-semibold color-date">{{ article.dateCreated }} - {{ article.dateUpdated }}</p>
                    <div v-if="article.client || article.employer" class="flex flex-row items-start my-2">
                        <p v-if="article.client" class="mr-2">{{ article.for }} <span>{{ article.client }}</span></p>
                        <p>/</p>
                        <p v-if="article.employer" class="ml-2">{{ article.by }} <span>{{ article.employer }}</span></p>
                    </div>
                    <div class="py-2">
                        <p id="articleContent" class="text-xl text-left" v-if="article.content.length !== 0">{{ article.content }}</p>
                        <div v-if="errors.length !== 0 && !article.content">
                            <p class="text-xl text-left">{{ errors.message }}</p>
                            <a class="text-base text-left" :href="errors.url">{{ errors.url }}</a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row items-start w-full h-auto">
                    <ProjectArticleModalAllTags
                        :is-tag-open="isTagOpen"
                        :tags-list="articleTagsList"
                    ></ProjectArticleModalAllTags>
                    <div class="flex flex-row items-center w-auto h-full relative top-auto left-1-20 bottom-3-20">
                        <button 
                            name="openTagsList"
                            title="Click on this button to open the tags list"
                            @click="(e) => {clickArticleTagMenu(e)}"
                            class="filter-btn filter-exit border-none"
                            :class="[articleTagsList.length <= 6 ? 'hidden' : '']"
                        >
                            <font-awesome-icon v-if="!isTagOpen" icon="fa-solid fa-plus-circle"></font-awesome-icon>
                            <font-awesome-icon v-if="isTagOpen" icon="fa-solid fa-xmark"></font-awesome-icon>
                        </button>
                    </div>
                    <div class="flex flex-col items-center w-full h-auto min-w-10">
                        <h2 class="text-base font-semibold text-center">Sources</h2>
                        <ol class="flex flex-row justify-start items-center">
                            <li v-for="media of article.url" class="m-1">
                                <a 
                                    v-if="media.icon == 'github'"
                                    class="m-1 p-1 text-2xl align-text-top" 
                                    :href="media.url"
                                    alt="Lien externe vers le github de ce projet"
                                    target="_blank">
                                    <font-awesome-icon :icon="['fab', media.icon]" title="github icon"></font-awesome-icon>
                                    <span class="p-2 text-xl">Source code</span>
                                </a>
                                <a 
                                    v-if="media.icon == 'globe'"
                                    class="m-1 p-1 text-2xl align-text-top" 
                                    :href="media.url"
                                    alt="Lien externe vers le github de ce projet"
                                    target="_blank">
                                    <font-awesome-icon :icon="['fas', media.icon]" title="globe icon"></font-awesome-icon>
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

    @media (min-width: 1000px), (orientation: landscape) {
        .article-one {
            width: 75%;
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