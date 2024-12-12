<script setup>
import App from '@/App.vue';
import dayjs from 'dayjs';
import 'dayjs/locale/fr'; import 'dayjs/locale/en-gb';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import updateLocale from 'dayjs/plugin/updateLocale'
import ProjectArticles from '@/components/ProjectArticles.vue';
import { worksList } from '@/assets/js/ProjectArraysList';
import { ref, reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const { ApiURL, Language } = App.components;
dayjs.extend(customParseFormat), dayjs.extend(updateLocale), dayjs.locale('fr'); // Le site est en français par défaut

// Works Content
let workTitlePage = reactive([]), newWorksList = reactive([]), selectedWork = reactive([]);
const filterWorksList = (array, final) => {
    array.filter(content => content.code == Language).map(content => content.data.map(work => final.push(work)));
};
const pushSelectedProjects = (value) => {
    selectedWork = reactive([]);
    newWorksList.filter(content => content.id == value).map(content => selectedWork.push(content));
}
const route = useRoute(), router = useRouter();

if (Language === 'fr-FR') {
    workTitlePage = 'Projets professionnels'
} else if (Language === ('en-UK' || 'en-US')) {
    workTitlePage = 'Professionnal works'
}
// Open Project Article
const workID = ref(0);
const isArticleOpen = ref(false);

const onClickProject = (v) => {
    worksList.map(content => content.data.filter(content => content.id == v).map(content => workID.value = content.id));
    console.log('WorkID: ', workID.value);
    pushSelectedProjects(workID.value);
    if (workID.value !== 0) route.params.id = workID.value, router.push(`/works/${route.params.id}`);
};

/* const openArticleModal = (event) => {
    if(isArticleOpen.value == true) closeArticleModal(event)
    else {
        isArticleOpen.value = true
        event.stopPropagation();
        if(route.params.id !== undefined) router.push('/works'), route.params.id = undefined, workID.value = 0;
    }
};

const closeArticleModal = (event) => {
    isArticleOpen.value = false
    event.stopPropagation();
    if(route.params.id !== undefined) router.push('/works'), route.params.id = undefined;
    workID.value = 0
}; */

if (route.params.id !== undefined) {
    newWorksList = reactive([]);
    filterWorksList(worksList, newWorksList); onClickProject(route.params.id);
    isArticleOpen.value = true;
} else {
    onMounted(() => {
        filterWorksList(worksList, newWorksList);
    });
}
</script>

<template>
    <section class="flex flex-col justify-center items-center">
        <h1 class="text-center p-4 uppercase">{{ workTitlePage }}</h1>
        <div class="flex flex-row justify-center items-center"
            :class="[newWorksList.length !== 0 ? '' : 'justify-center mt-4']">
            <div @click="openArticleModal"
                :class="[newWorksList.length !== 0 ? 'grid grid-articles-container' : 'flex flex-row']"
                class="h-full m-1">
                <ProjectArticles :project-content="newWorksList" @handle-article-id="onClickProject"></ProjectArticles>
            </div>
        </div>
    </section>
</template>

<style lang="css">
/* Projects List */

.min-h-45 {
    min-height: 11.25rem;
}

.color-bg-article {
    background-color: var(--color-bg-article);
}

.color-border-article-2 {
    border-color: var(--color-bg-article-2);
}

.color-date {
    color: var(--color-date);
}

.bluryWrapper {
    z-index: 9;
}

.grid-articles-container {
    grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 1000px),
(orientation: landscape) {
    .grid-articles-container {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>