<script setup>
import { onMounted, reactive, ref } from "vue";
import { cvList } from "@/assets/js/ProjectArraysList";
import { useSeoMeta } from "@unhead/vue";
import CVFileSelector from "@/components/CVFileSelector.vue";
import AboutPortraitAnimation from "@/components/CVPortraitAnimation.vue";
import CVWebDisplayer from "@/components/CVWebDisplayer.vue";
import AboutPdfReaderModal from "@/components/CVPdfReader.vue";

const props = defineProps({
  Language: String,
  PortfolioTitle: String,
  routerLink: Array,
  themeColor: String,
});
const { Language, PortfolioTitle, routerLink } = props;
const pdfID = ref(""), aboutContent = reactive([]), cvContent = reactive([]),
  isPDFOpen = ref(false), languageCode = ref(''), openComponent = ref(''), closeDocument = ref('');

const getPDFID = (value) => {
  pdfID.value = value;
  console.log(value, pdfID.value)
},
  filterArrayValues = (array, final, cv) => {
    array.filter(content => content.code == (languageCode.value || Language)).map(content => content.data.map(item => {
      return final.push(item), item.actions.map(value => cv.push(value))
    }));
  },
  getLanguage = () => {
    if (typeof Language == 'undefined' || Language.length == 0) languageCode.value = localStorage.getItem('languageCode');
  },
  openCVReaderModal = () => {
    isPDFOpen.value = true;
    // event.stopPropagation();
  },
  openSelectedComponent = (value) => {
    openComponent.value = value;
    console.log(value, openComponent.value)
    // event.stopPropagation();
  },
  changeCloseDocument = () => {
    if ((languageCode.value || Language) == 'fr-FR') closeDocument.value = 'Fermer le document'
    else if ((languageCode.value || Language) == 'en-UK') closeDocument.value = 'Close the document'
  };

/* closeCVReaderModal = (event) => {
    isPDFOpen.value = false;
    openComponent.value = '';
    event.stopPropagation();
  }, v-click-outside="closeCVReaderModal" */
useSeoMeta({
  title: `${routerLink[0].about} - ${PortfolioTitle}`,
  description: 'About page',
});

onMounted(() => {
  getLanguage();
  filterArrayValues(cvList, aboutContent, cvContent);
  changeCloseDocument();
});
</script>

<template>
  <section class="flex flex-col justify-center items-center w-full h-full pt-12">
    <div class="flex justify-center items-center w-full h-full" id="about">
      <div v-for="about of aboutContent" class="flex flex-col justify-center items-start w-full min-h-48 px-4">
        <h1 class="text-5xl mb-4">{{ about.title }}</h1>
        <span class="text-xl mb-2">{{ about.presentation }}</span>
        <div id="about-content" class="flex flex-col-reverse items-stretch w-full text-left py-2">
          <div class="flex flex-col items-center w-auto mx-6 pt-4 pb-12 gap-6">
            <about-portrait-animation />
            <div class="flex flex-col items-center w-auto h-auto min-w-96">
              <h2 class="text-2xl font-semibold">{{ about.actiontitle }}</h2>
              <div v-for="cv in cvContent" class="flex flex-col items-start w-full h-auto">
                <RouterLink to="/#contact" class="flex flex-row items-center w-full h-auto min-w-72 min-h-12 py-2">
                  <font-awesome-icon icon="fa-solid fa-contact-card"
                    :class="[props.themeColor == 'light' ? 'border-blue-600' : 'border-blue-500']"
                    class="fa-xl size-6 border-solid border-2 p-2 rounded-xl"></font-awesome-icon>
                  <span class="text-xl mx-6 color-nav-link">{{ about.contact }}</span>
                </RouterLink>
                <button v-for="download in cv.downloadbutton" id="dl-cv" name="dlcv" :href="download.url"
                  class="flex flex-row items-center w-full min-w-72 min-h-14 py-2 border-none" download>
                  <font-awesome-icon icon="fa-solid fa-file-download"
                    :class="[props.themeColor == 'light' ? 'border-blue-600' : 'border-blue-500']"
                    class="fa-xl size-6 border-solid border-2 p-2 rounded-xl"></font-awesome-icon>
                  <span class="text-xl mx-6 color-nav-link">{{ download.title }} (PDF)</span>
                </button>
                <CVFileSelector :cvcontent="cv" @open-component="openSelectedComponent" @open-modal="openCVReaderModal"
                  @get-pdf="getPDFID" :theme-color="props.themeColor"></CVFileSelector>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center w-full h-auto">
            <h2 class="text-2xl font-semibold">CV</h2>
            <div v-if="!openComponent" class="flex flex-col w-full h-full mx-2">
              <section class="flex flex-col items-center w-full h-auto">
                <p v-for="children of about.children1" class="flex flex-col items-start mb-6 text-left text-xl">
                  <span v-for="child of children.children"
                    :class="[child.classes ? [props.themeColor == 'light' ? `${child.classes} text-blue-600` : `${child.classes} text-blue-500`] : '']">{{
                    child.content }}</span>
                </p>
              </section>
            </div>
            <div v-if="openComponent" id="cv" class="flex flex-col items-center w-full h-full">
              <button id="closecvbtn" @click="openComponent = ''"
                class="flex flex-row justify-center items-center w-auto h-auto border border-solid rounded-lg px-2 m-2 red">
                <font-awesome-icon icon="fa-solid fa-xmark" class="fa-xl p-2"></font-awesome-icon>
                <span class="p-2">{{ closeDocument }}</span>
              </button>
              <CVWebDisplayer v-if="openComponent == 'webp'" :-language="Language" :language-code="languageCode">
              </CVWebDisplayer>
              <about-pdf-reader-modal v-else-if="openComponent == 'pdf'" :pdf-id="pdfID" :is-pdf-open="isPDFOpen"
                :-language="Language"></about-pdf-reader-modal>
              <button id="closecvbtn" @click="openComponent = ''"
                class="flex flex-row justify-center items-center w-auto h-auto border border-solid rounded-lg px-2 m-2 red">
                <font-awesome-icon icon="fa-solid fa-xmark" class="fa-xl p-2"></font-awesome-icon>
                <span class="p-2">{{ closeDocument }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css">
#about,
#about-content {
  flex-direction: column;
}

#closecvbtn {
  top: 36%;
}

@media (orientation: landscape) or (min-width: 63rem) {

  #about,
  #about-content {
    flex-direction: row;
    min-height: 50.8125rem;
  }

  #closecvbtn {
    top: 6%;
  }
}
</style>