<script setup>
    import App from '@/App.vue';
    import dayjs from 'dayjs';
    import 'dayjs/locale/fr'; import 'dayjs/locale/en-gb';
    import customParseFormat from 'dayjs/plugin/customParseFormat'; import updateLocale from 'dayjs/plugin/updateLocale';
    import { computed, reactive } from 'vue';
    import { tagsColorList } from '@/assets/js/ProjectArraysList';
    
    dayjs.extend(customParseFormat), dayjs.extend(updateLocale), dayjs.locale('fr'); // Le site est en français par défaut
    const { Language } = App.components;
    const props = defineProps({
        projectContent: {type: Array},
        HandleArticleId: {type: Function},
    });
    const emits = defineEmits(['update:projectContent', 'HandleArticleId']);
    const articleContent = computed({
        get() {
            let temp = reactive([]), temptag = reactive([]);
            props.projectContent.map(content => {
                temptag = reactive([]); content.tags.map(value => temptag.push(tagsColorList.filter(tags => tags.id == value).reduce((acc,value) => acc + value)));
                return temp.push({id: content.id, title: content.title, description: content.description, content: content.content, dateCreated: dayjs(content.dateCreated).format('MMMM YYYY'), dateCreatedText: content.dateCreatedText, dateUpdated: dayjs(content.dateUpdated).format('MMMM YYYY'), dateUpdatedText: content.dateUpdatedText, by: content.by, for: content.for, employer: content.employer, client: content.client, images: content.images, tagstitle: content.tagstitle, tags: temptag, url: content.url})
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
    <article 
        class="flex flex-col items-center w-auto h-full m-1 p-0 min-w-80 min-h-45 max-w-md color-bg-article border border-solid color-border-article rounded-xl"
        v-for="(article,i) of articleContent"  
        :key="article.id + '-' + i" 
        @click="$emit('HandleArticleId', article.id);"
    >
        <div v-if="projectContent && projectContent.length > 0">
            <div 
                v-for="image of article.images" 
                class="flex flex-row justify-center items-center"
            >
                <img 
                    :id="image.id"
                    :src="image.url"
                    :alt="image.description"
                    :href="image.labelURL"
                    class="block rounded-xl"
                >
                <!-- :aria-label="image.labelDescription" -->
            </div>
            <div class="flex flex-col items-center">
                <div class="mx-2 py-4">
                    <h1 class="py-2 text-start text-2xl">{{ article.title }}</h1>
                    <p class="mb-1 text-start text-sm font-semibold color-date">
                        <span :title="article.dateCreatedText">{{ article.dateCreated }}</span> -
                        <span :title="article.dateUpdatedText">{{ article.dateUpdated }}</span>
                    </p>
                    <div v-if="article.client || article.employer" class="flex flex-row items-start my-2">
                        <p v-if="article.client" class="mr-2">{{ article.for }} <span>{{ article.client }}</span></p>
                        <p>/</p>
                        <p v-if="article.employer" class="ml-2">{{ article.by }} <span>{{ article.employer }}</span></p>
                    </div>
                    <div class="flex flex-col items-start py-2">
                        <p class="text-xl text-left" v-if="article.description">{{ article.description }}</p>
                        <p class="text-xl text-left red" v-if="!article.description">Aucune description disponible</p>
                    </div>
                    <div class="flex flex-col justify-start items-center w-full h-full">
                        <div class="flex flex-row justify-start w-full h-full min-h-28 mb-1">
                            <ol :title="article.tagstitle" class="grid grid-cols-3 items-start">
                                <li 
                                    v-for="(tag,i) of article.tags"
                                    :key="tag.id"
                                    class="w-auto h-auto pr-2 py-1 text-left"
                                >
                                    <a 
                                        v-if="i <= 8 && tag !== undefined"
                                        :style="'border-color:' + tag.color"
                                        class="block w-full h-full text-center text-base font-semibold p-2 border-2 rounded-xl"
                                    >
                                        {{ tag.title }}
                                    </a>
                                </li>
                            </ol>
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
                </div>
            </div>
        </div>
    </article>
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