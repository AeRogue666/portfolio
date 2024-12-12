<script setup>
import App from "@/App.vue";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import "dayjs/locale/en-gb";
import customParseFormat from "dayjs/plugin/customParseFormat";
import updateLocale from "dayjs/plugin/updateLocale";
import ProjectArticles from "@/components/ProjectArticles.vue";
import { projectsList } from "@/assets/js/ProjectArraysList";
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const { ApiURL, Language } = App.components;

dayjs.extend(customParseFormat), dayjs.extend(updateLocale), dayjs.locale("fr"); // Le site est en français par défaut
// Project Content
let newProjectsList = reactive([]), projectTitlePage = ref(""), selectedProject = reactive([]);

const filterProjectsList = (array, final) => {
  array
    .filter((content) => content.code == Language)
    .map((content) => content.data.map((project) => final.push(project)));
};
const pushSelectedProjects = (value) => {
  selectedProject = reactive([]);
  newProjectsList
    .filter((content) => content.id == value)
    .map((content) => selectedProject.push(content));
};
const route = useRoute(),
  router = useRouter();

if (Language === "fr-FR") {
  projectTitlePage = "Mes projets";
} else if (Language === ("en-UK" || "en-US")) {
  projectTitlePage = "My projects";
}

// Open Project Article
const projectID = ref(0);
const onClickProject = (v) => {
  projectsList.map((content) =>
    content.data
      .filter((content) => content.id == v)
      .map((content) => {
        return (projectID.value = content.id);
      })
  );
  console.log("ProjectID: ", projectID.value);
  pushSelectedProjects(projectID.value);
  if (projectID.value !== 0)
    (route.params.id = projectID.value),
      router.push(`/projets/${route.params.id}`);
};

onMounted(() => {
  filterProjectsList(projectsList, newProjectsList);
});
</script>

<template>
  <section class="flex flex-col">
    <h1 class="text-center p-4 uppercase">{{ projectTitlePage }}</h1>
    <div class="flex flex-row" :class="[newProjectsList.length !== 0 ? '' : 'justify-center mt-4']">
      <div @click="openArticleModal" :class="[
        newProjectsList.length !== 0
          ? 'grid grid-articles-container'
          : 'flex flex-row',
      ]" class="h-full m-1">
        <ProjectArticles :project-content="newProjectsList" @handle-article-id="onClickProject"></ProjectArticles>
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