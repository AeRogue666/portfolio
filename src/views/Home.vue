<script setup>
import app from "@/App.vue";
import AppArticlesList from "@/components/AppArticlesList.vue";
import HomeWorkplaceAnimation from "@/components/HomeWorkplaceAnimation.vue";
import HomeCatAnimation from "@/components/HomeCatAnimation.vue";
import { reactive, ref, onMounted } from "vue";
import router from "@/router/router";
import { worksList, projectsList, homePageContentList } from "@/assets/js/ProjectArraysList";

const { ApiURL, Language } = app.components;
console.log(ApiURL, Language);
let homePageContent = reactive([]), newWorksList = reactive([]), newProjectsList = reactive([]);

homePageContentList
  .filter((content) => content.code == Language)
  .map((content) => homePageContent.push(content));

const filterArraysList = (array, final) => {
  array
    .filter((content) => content.code == Language)
    .map((content) => content.data.map((value) => final.push(value)));
},
  redirectToProjectsPage = (e) => {
    router.push(`/projects/${e}`);
  },
  redirectToWorksPage = (e) => {
    router.push(`/works/${e}`);
  };

onMounted(() => {
  filterArraysList(worksList, newWorksList);
  filterArraysList(projectsList, newProjectsList);
});
</script>

<template>
  <section v-for="home of homePageContent" class="flex flex-col items-center">
    <div id="hero" class="flex flex-col items-center w-full min-h-screen relative top-negate-24">
      <div id="heroheader" class="flex items-center min-h-79vh">
        <div class="w-full h-full min-h-96">
          <home-workplace-animation />
        </div>
        <div class="flex flex-col items-start w-full">
          <div class="flex flex-col items-start p-4">
            <p class="text-xl">{{ home.introduction }}!</p>
            <h1 class="text-5xl font-semibold my-4">
              {{ home.title1 }}
              <a class="text-blue-500 font-semibold" href="/projects">{{
                home.making
                }}</a>
              {{ home.title2 }}
              <a class="text-blue-500 font-semibold" href="https://github.com/AeRogue666" target="_blank">code</a>,
            </h1>
            <h2 class="text-2xl font-semibold">
              {{ home.subtitle1 }}
              <font-awesome-icon icon="fa-solid fa-heart" class="skyblue" :title="home.heart" />
              {{ home.subtitle2 }}.
            </h2>
            <p class="my-2 text-xl">
              <q cite="/about">{{ home.quote }}</q>
            </p>
          </div>
          <div class="flex flex-row items-start w-auto h-auto">
            <a src="https://www.slack.com/" title="Lien externe vers ma page Slack" target="_blank">
              <div class="block text-center mx-2">
                <font-awesome-icon icon="fa-brands fa-slack" class="fa-xl size-9"></font-awesome-icon>
              </div>
            </a>
            <a src="https://www.linkedin.com/" title="Lien externe vers ma page LinkedIn" target="_blank">
              <div class="block text-center mx-2">
                <font-awesome-icon icon="fa-brands fa-linkedin" class="fa-xl size-9"></font-awesome-icon>
              </div>
            </a>
            <a src="https://www.github.com/AeRogue666" title="Lien externe vers ma page Github" target="_blank">
              <div class="block text-center mx-2">
                <font-awesome-icon icon="fa-brands fa-github" class="fa-xl size-9"></font-awesome-icon>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="homecontact" class="flex h-auto py-4">
        <div class="flex flex-row items-center">
          <a href="/contact" class="flex flex-row items-center w-auto min-w-auto min-h-12 p-3">
            <font-awesome-icon icon="fa-solid fa-contact-card"
              class="fa-xl size-6 border-solid border-2 p-2 btn-border-color rounded-xl"></font-awesome-icon>
            <span class="text-xl mx-6 color-nav-link">{{
              home.contactme
              }}</span>
          </a>
          <a href="/a-propos" class="flex flex-row items-center w-auto min-w-auto min-h-12 p-3">
            <font-awesome-icon icon="fa-solid fa-person"
              class="fa-xl size-6 border-solid border-2 p-2 btn-border-color rounded-xl"></font-awesome-icon>
            <span class="text-xl mx-6 color-nav-link">{{ home.about }}</span>
          </a>
        </div>
        <button v-for="cv of home.cv" id="dl-cv" name="dlcv" :href="cv.url"
          class="flex flex-row items-center w-auto min-w-auto min-h-12 p-3 border-none" download>
          <font-awesome-icon icon="fa-solid fa-file-download"
            class="fa-xl size-6 border-solid border-2 p-2 btn-border-color rounded-xl"></font-awesome-icon>
          <span class="text-xl mx-6 color-nav-link">{{ cv.title }}</span>
        </button>
      </div>
      <div id="projectsarrow" class="absolute">
        <a href="#projects" title="Lien interne - Flèche permettant de descendre dans la page">
          <font-awesome-icon icon="fa-solid fa-arrow-down"></font-awesome-icon>
        </a>
      </div>
    </div>
    <div id="projects" class="flex flex-col justify-center items-center w-full mb-4">
      <div v-for="pro in home.pro" class="flex flex-col items-center w-full mt-28">
        <div class="flex flex-row items-center w-full">
          <h2 class="text-xl font-semibold mx-4">{{ pro.title }}</h2>
          <a type="link" name="focusWorks" href="/works" :title="pro.titleText" class="border-none">
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-blue-500"></font-awesome-icon>
          </a>
        </div>
        <div class="flex flex-row items-start w-full my-4 px-2">
          <app-articles-list :project-content="newWorksList"
            @handle-article-id="redirectToWorksPage"></app-articles-list>
        </div>
      </div>
      <div class="flex flex-col items-center w-full">
        <div v-for="perso in home.perso" class="flex flex-row items-center w-full mt-4">
          <h2 class="text-xl font-semibold mx-4">{{ perso.title }}</h2>
          <a type="link" name="focusProjects" href="/projects" :title="perso.titleText" class="border-none">
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-blue-500"></font-awesome-icon>
          </a>
        </div>
        <div class="flex flex-row items-start w-full my-4 px-2">
          <app-articles-list :project-content="newProjectsList"
            @handle-article-id="redirectToProjectsPage"></app-articles-list>
        </div>
      </div>
    </div>
    <div id="notenough" class="flex justify-center items-center w-full h-auto min-h-64">
      <div class="flex flex-col justify-center items-center w-auto h-auto px-6">
        <h2 class="text-2xl font-semibold">{{ home.notenoughtitle }}?</h2>
        <p class="text-xl font-semibold">{{ home.notenoughcontent }}:</p>
        <div id="notenoughlinks" class="flex flex-col items-center min-w-max">
          <a href="/contact" class="flex flex-row items-center w-3/4 min-w-auto min-h-12 p-3">
            <font-awesome-icon icon="fa-solid fa-contact-card"
              class="fa-xl size-6 border-solid border-2 p-2 btn-border-color rounded-xl"></font-awesome-icon>
            <span class="text-xl mx-6 color-nav-link">{{ home.contact }}</span>
          </a>
          <a href="/about" class="flex flex-row items-center w-3/4 min-w-auto min-h-12 p-3">
            <font-awesome-icon icon="fa-solid fa-person"
              class="fa-xl size-6 border-solid border-2 p-2 btn-border-color rounded-xl"></font-awesome-icon>
            <span class="text-xl mx-6 color-nav-link">{{ home.about }}</span>
          </a>
          <a href="/faq" class="flex flex-row items-center w-3/4 min-w-auto min-h-12 p-3">
            <font-awesome-icon icon="fa-solid fa-question"
              class="fa-xl size-6 border-solid border-2 p-2 btn-border-color rounded-xl"></font-awesome-icon>
            <span class="text-xl mx-6 color-nav-link">{{ home.faq }}</span>
          </a>
        </div>
      </div>
      <div id="catanimation" class="flex flex-col items-center min-w-max" alt="animation d'un chat qui dort">
        <home-cat-animation />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#heroheader {
  flex-direction: column;
}

#homecontact {
  flex-direction: column;
  align-items: start;
  width: auto;
}

#projectsarrow {
  bottom: 10%;
}

#notenough {
  flex-direction: column;
  background-color: var(--color-bg-article);
  min-height: 39vh;
}

#notenoughlinks {
  width: 100%;
}

#catanimation {
  width: auto;
  min-height: 25.7rem;
}

.top-negate-24 {
  top: 0;
}

.min-h-79vh {
  min-height: 70vh;
}

@media (min-width: 1000px) {
  #heroheader {
    flex-direction: row;
  }

  #homecontact {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  #projectsarrow {
    top: 90%;
    /* bottom: 7.3%; */
  }

  #notenough {
    flex-direction: row;
  }

  #notenoughlinks {
    width: 50%;
  }

  .top-negate-24 {
    top: -5.78rem;
  }

  .min-h-79vh {
    min-height: 79vh;
  }
}
</style>