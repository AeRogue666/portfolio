<script setup>
import { onMounted, reactive, ref } from "vue";
import { homePageContentList, aboutList } from "@/assets/js/ProjectArraysList";
import { useSeoMeta } from "@unhead/vue";
import HomeWorkplaceAnimation from "@/components/HomeWorkplaceAnimation.vue";
import HomeAboutSection from "@/components/HomeAboutSection.vue";
import HomeSkillsSection from "@/components/HomeSkillsSection.vue";
import HomeContactSection from "@/components/HomeContactSection.vue";

const props = defineProps({
  ApiURL: String,
  Language: String,
  PortfolioTitle: String,
  routerLink: Array,
  themeColor: String,
});

const { Language, PortfolioTitle, routerLink } = props;

let { ApiURL } = props;
if (typeof ApiURL == 'undefined') {
  ApiURL = import.meta.env.VITE_API_URL
}
console.log(ApiURL, Language);
const homePageContent = reactive([]), homeAboutSectionContent = reactive([]), languageCode = ref('');
const filterArrayContent = (array, final) => {
  array.filter(content => content.code == (languageCode.value || Language)).map(content => final.push(content))
},
  getLanguage = () => {
    if (typeof Language == 'undefined' || Language.length == 0) languageCode.value = localStorage.getItem('languageCode');
  };

onMounted(() => {
  getLanguage();
  filterArrayContent(homePageContentList, homePageContent);
  filterArrayContent(aboutList, homeAboutSectionContent);
});

useSeoMeta({
  title: `${routerLink[0].home} - ${PortfolioTitle}`,
  description: 'Portfolio homepage',
});
</script>

<template>
  <section v-for="home of homePageContent" class="flex flex-col items-center w-full h-full">
    <div id="hero-container" class="flex flex-col justify-center w-screen h-screen">
      <div id="hero" class="flex flex-col items-center w-full h-auto">
        <div id="heroheader" class="flex items-center w-auto h-auto relative">
          <div class="flex justify-center items-center w-auto h-auto">
            <home-workplace-animation />
          </div>
          <div class="flex flex-col items-start w-full">
            <div class="flex flex-col items-start p-4">
              <p class="text-xl">{{ home.introduction }}!</p>
              <h1 class="text-5xl font-semibold my-4">
                {{ home.title1 }}
                <span :class="[props.themeColor == 'light' ? 'text-blue-600' : 'text-blue-500']"
                  class="font-semibold">{{ home.making }}</span>
                {{ home.title2 }}
                <span :class="[props.themeColor == 'light' ? 'text-blue-600' : 'text-blue-500']" class="font-semibold"
                  target="_blank">code</span>,
              </h1>
              <span class="text-2xl font-semibold">
                {{ home.subtitle1 }}
                <font-awesome-icon :title="home.heart" icon="fa-solid fa-heart"
                  :class="[props.themeColor == 'light' ? 'text-blue-600' : 'text-blue-500']" />
                {{ home.subtitle2 }}.</span>
              <p class="my-2 text-xl quote">
                <q cite="about">{{ home.quote }}</q>
              </p>
            </div>
            <ul class="grid grid-cols-3 items-start w-auto h-auto">
              <li v-for="link of home.sociallinks">
                <a class="flex flex-col justify-center items-center w-full h-full" :href="link.url"
                  :aria-label="link.title" target="_blank">
                  <font-awesome-icon :icon="[link.type, link.icon]" class="fa-xl size-9"></font-awesome-icon>
                  <p class="text-xl px-2">{{ link.content }}</p>
                </a>
              </li>
            </ul>
            <div id="homecontact" class="flex flex-col items-start w-auto h-auto p-4 relative">
              <div class="flex flex-col items-start">
                <div class="flex flex-col items-start">
                  <a href="#contact" class="flex flex-row items-center w-auto h-full min-w-auto min-h-12">
                    <font-awesome-icon icon="fa-solid fa-contact-card"
                      :class="[props.themeColor == 'light' ? 'border-blue-600' : 'border-blue-500']"
                      class="fa-xl size-6 border-solid border-2 p-2 rounded-xl"></font-awesome-icon>
                    <span class="text-xl mx-6 color-nav-link">{{ home.contactme }}</span>
                  </a>
                  <a href="cv" class="flex flex-row items-center w-auto h-full min-w-auto min-h-12">
                    <font-awesome-icon icon="fa-solid fa-person"
                      :class="[props.themeColor == 'light' ? 'border-blue-600' : 'border-blue-500']"
                      class="fa-xl size-6 border-solid border-2 p-2 rounded-xl"></font-awesome-icon>
                    <span class="text-xl mx-6 color-nav-link">{{ home.about }}</span>
                  </a>
                </div>
                <button v-for="cv of home.cv" id="dl-cv" name="dlcv" :href="cv.url"
                  class="flex flex-row items-center w-auto h-full min-w-auto min-h-12 border-none" download>
                  <font-awesome-icon icon="fa-solid fa-file-download"
                    :class="[props.themeColor == 'light' ? 'border-blue-600' : 'border-blue-500']"
                    class="fa-xl size-6 border-solid border-2 p-2 rounded-xl"></font-awesome-icon>
                  <span class="text-xl mx-6 color-nav-link">{{ cv.title }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="projectsarrow" class="absolute">
          <RouterLink to="/#aboutcontainer" title="Lien interne - Flèche permettant de descendre dans la page">
            <font-awesome-icon icon="fa-solid fa-arrow-down"></font-awesome-icon>
          </RouterLink>
        </div>
      </div>
    </div>
    <HomeAboutSection :about-content="homeAboutSectionContent"></HomeAboutSection>
    <HomeSkillsSection :completed-projects-title="home.completedproject"
      :preferred-languages-title="home.preferredlanguage" :preferred-technologies-title="home.preferredtechnos"
      :theme-color="props.themeColor">
    </HomeSkillsSection>
    <HomeContactSection :content="home"></HomeContactSection>
  </section>
</template>

<style lang="css">
#heroheader {
  flex-direction: column;
}

#projectsarrow {
  padding: 0.576rem 1rem;
  border: 1px solid;
  border-radius: 10%;
  top: 86.4vh;
  right: 3vw;
}

.max-h-150 {
  max-height: 38rem;
}

.max-h-162 {
  max-height: 40.68rem;
}

.min-h-79vh {
  min-height: 70vh;
}

.mb-5vh {
  margin-bottom: 5vh;
}

.top-negate-24 {
  top: 0;
}

.quote {
  display: block;
}

@media (min-width: 74.6875rem) {
  #heroheader {
    flex-direction: row;
  }

  #projectsarrow {
    top: 75vh;
    right: 2vw;
  }

  .top-negate-24 {
    top: -3.7rem;
  }

  .min-h-79vh {
    min-height: 79vh;
  }
}

@media (min-width: 62.4rem) and (max-width: 75rem) {
  .quote {
    display: none;
  }
}

@media (min-width: 75rem) {
  #projectsarrow {
    top: 83.5vh;
  }

  .top-negate-24 {
    top: -5.78rem;
  }
}
</style>