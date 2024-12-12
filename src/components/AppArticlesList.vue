<script setup>
    import App from '@/App.vue';
    import dayjs from 'dayjs';
    import 'dayjs/locale/fr'; import 'dayjs/locale/en-gb';
    import customParseFormat from 'dayjs/plugin/customParseFormat';
    import updateLocale from 'dayjs/plugin/updateLocale'
    import { computed, reactive } from 'vue';
    import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'
    import { tagsColorList } from '@/assets/js/ProjectArraysList';
    dayjs.extend(customParseFormat), dayjs.extend(updateLocale), dayjs.locale('fr'); // Le site est en français par défaut

    const { Language } = App.components;
    const config = {
        itemsToShow: 1,
        wrapAround: true,
    };
    const props = defineProps({
        projectContent: {type: Array},
        HandleArticleId: {type: Function},
    });
    const emits = defineEmits(['update:projectContent', 'HandleArticleId']);
    const articleContent = computed({
        get() {
            let temp = reactive([]), temptag = reactive([]);
            props.projectContent.map((content,i) => {
                if(i !== 5) {
                    temptag = reactive([]); content.tags.map(value => temptag.push(tagsColorList.filter(tags => tags.id == value).reduce((acc,value) => acc + value)));
                    return temp.push({id: content.id, title: content.title, by: content.by, for: content.for, employer: content.employer, client: content.client, images: content.images, tagstitle: content.tagstitle, tags: temptag, url: content.url})
                }
            });
            return temp
        },
        set() {
            emits('update:projectContent', props.projectContent);
        }
    });
    const emptyContent = reactive([]);
    if(Language === 'fr_FR') {
        emptyContent.push({id:1, content:'Aucun projet correspondant n\'a été trouvé'})
    } else if (Language === ('en_UK' || 'en_US')) {
        emptyContent.push({id:1, content:'No corresponding project have been found'})
    }
</script>

<template>
    <Carousel v-bind="config" class="w-full">
        <Slide v-for="(article,i) of articleContent" :key="article.id">
            <article 
                class="flex flex-col items-center w-full h-full m-1 p-0 min-w-80 min-h-45 max-w-md color-bg-article border border-solid color-border-article rounded-xl carousel__item"
                :key="article.id + '-' + i" 
                @click="$emit('HandleArticleId', article.id);" 
            >
                <div v-if="projectContent && projectContent.length > 0">
                    <div v-for="image of article.images" class="flex flex-row justify-center items-center">
                        <img 
                            :id="image.id"
                            :src="image.url"
                            :alt="image.description"
                            :href="image.imageURL"
                            class="block rounded-xl"
                        >
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="w-auto h-full min-w-96 mx-2 py-4">
                            <h1 class="py-2 text-start text-2xl">{{ article.title }}</h1>
                            <div v-if="article.client || article.employer" class="flex flex-row items-start my-2">
                                <p v-if="article.client" class="mr-2 text-base font-semibold">{{ article.for }} {{ article.client }}</p>
                                <p>/</p>
                                <p v-if="article.employer" class="ml-2 text-base font-semibold">{{ article.by }} {{ article.employer }}</p>
                            </div>
                            <div class="flex flex-row justify-start w-full h-full min-h-28 mb-1">
                                <ol :title="article.tagstitle" class="grid grid-cols-3 items-start">
                                    <li 
                                        v-for="(tag,i) of article.tags"
                                        :key="tag.id"
                                        class="w-auto h-auto pr-2 py-1 text-left"
                                    >
                                        <a 
                                            v-if="i <= 2 && tag !== undefined"
                                            :style="'border-color:' + tag.color"
                                            class="block w-full h-full text-center text-base font-semibold p-2 border-2 rounded-xl"
                                        >
                                            {{ tag.title }}
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Slide>
        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
    <div v-for="project of emptyContent">
        <div 
            class="flex flex-col items-center w-auto h-full m-1 p-0 min-w-80 min-h-45 max-w-md rounded-xl" 
            v-if="projectContent.length == 0"
            :key="project.id"
        >
            <div class="flex flex-col items-center">
                <h2 class="m-1 text-xl">{{ project.content }}</h2>
            </div>
        </div>
    </div>
</template>

<style lang="css">
    .carousel__item {
        min-height: 200px;
        background-color: transparent;
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

    .carousel__icon {
        width: 100%;
        height: 100%;
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