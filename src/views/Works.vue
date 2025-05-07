<script setup>
import dayjs from "dayjs";
import "dayjs/locale/fr";
import "dayjs/locale/en-gb";
import customParseFormat from "dayjs/plugin/customParseFormat";
import updateLocale from "dayjs/plugin/updateLocale";
import ProjectArticles from "@/components/ArticlesList/ArticlesList.vue";
import { worksList } from "@/assets/js/ProjectArraysList";
import { ref, reactive, onMounted } from "vue";
import { useSeoMeta } from "@unhead/vue";
import { useRoute, useRouter } from "vue-router";
dayjs.extend(customParseFormat), dayjs.extend(updateLocale), dayjs.locale("fr"); // Le site est en français par défaut

const props = defineProps({
    Language: String,
    PortfolioTitle: String,
    routerLink: Array,
});
const { Language, PortfolioTitle, routerLink } = props;
const languageCode = ref(''), workID = ref(0), route = useRoute(), router = useRouter();
let workTitlePage = ref(''), newWorksList = reactive([]);

const getLanguage = () => {
    if (typeof Language == 'undefined' || Language.length == 0) languageCode.value = localStorage.getItem('languageCode');
},
    filterWorksList = (array, final) => {
        array
            .filter((content) => content.code == (languageCode.value || Language))
            .map((content) => content.data.map((work) => final.push(work)));
    },
    filterTitle = () => {
        if ((languageCode.value || Language) == "fr-FR") {
            workTitlePage.value = "Projets professionnels";
        } else if ((languageCode.value || Language) == ("en-UK" || "en-US")) {
            workTitlePage.value = "Professionnal works";
        }
    },
    onClickProject = (v) => {
        worksList.map((content) =>
            content.data
                .filter((content) => content.id == v)
                .map((content) => (workID.value = content.id))
        );
        if (workID.value !== 0)
            (route.params.id = workID.value), router.push(`/works/${route.params.id}`);
    };

useSeoMeta({
    title: `${routerLink[0].works} - ${PortfolioTitle}`,
    description: 'Professionnal works displaying page',
});

onMounted(() => {
    getLanguage();
    filterWorksList(worksList, newWorksList);
    filterTitle();
});
</script>

<template>
    <section class="flex flex-col justify-center items-center">
        <h1 class="text-center p-4 uppercase">{{ workTitlePage }}</h1>
        <div @click="openArticleModal" :class="[
            newWorksList.length !== 0 ? 'grid grid-articles-container' : 'flex flex-row'
        ]" class="w-full h-full mb-4 gap-2">
            <ProjectArticles :project-content="newWorksList" :-language="Language" @handle-article-id="onClickProject">
            </ProjectArticles>
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