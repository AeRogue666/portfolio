<script setup>
import dayjs from "dayjs";
import "dayjs/locale/fr";
import "dayjs/locale/en-gb";
import customParseFormat from "dayjs/plugin/customParseFormat";
import updateLocale from "dayjs/plugin/updateLocale";
import ProjectArticles from "@/components/ArticlesList/ArticlesList.vue";
import { projectsList } from "@/assets/js/ProjectArraysList";
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
const languageCode = ref(''), projectID = ref(0), route = useRoute(), router = useRouter();
let newProjectsList = reactive([]), projectTitlePage = ref("");

const getLanguage = () => {
  if (typeof Language == 'undefined' || Language.length == 0) languageCode.value = localStorage.getItem('languageCode');
},
  filterProjectsList = (array, final) => {
    array
      .filter((content) => content.code == (languageCode.value || Language))
      .map((content) => content.data.map((project) => final.push(project)));
  },
  filterTitle = () => {
    if ((languageCode.value || Language) == "fr-FR") {
      projectTitlePage = "Mes projets";
    } else if ((languageCode.value || Language) == ("en-UK" || "en-US")) {
      projectTitlePage = "My projects";
    }
  },
  onClickProject = (v) => {
    projectsList.map((content) =>
      content.data
        .filter((content) => content.id == v)
        .map((content) => {
          return (projectID.value = content.id);
        })
    );
    if (projectID.value !== 0)
      (route.params.id = projectID.value),
        router.push(`/projets/${route.params.id}`);
  };

useSeoMeta({
  title: `${routerLink[0].projects} - ${PortfolioTitle}`,
  description: 'Personnal projects displaying page',
});

onMounted(() => {
  getLanguage();
  filterProjectsList(projectsList, newProjectsList);
  filterTitle();
});
</script>

<template>
  <section class="flex flex-col justify-center items-center">
    <h1 class="text-center p-4 uppercase">{{ projectTitlePage }}</h1>
    <div @click="openArticleModal"
      :class="[newProjectsList.length !== 0 ? 'grid grid-articles-container' : 'flex flex-row']"
      class="w-full h-full mb-4 gap-2">
      <ProjectArticles :project-content="newProjectsList" :Language="Language" @handle-article-id="onClickProject">
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

.grid-articles-container {
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 45rem) and ((orientation: landscape) or (orientation: portrait)) {
  .grid-articles-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 72rem) and (orientation: landscape) {
  .grid-articles-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>