<script setup>
import App from "@/App.vue";
import { reactive, ref } from "vue";
import AboutPdfReaderModal from "@/components/AboutPdfReaderModal.vue";
import AboutPortraitAnimation from "@/components/AboutPortraitAnimation.vue";
import { aboutList } from "@/assets/js/ProjectArraysList";
const { ApiURL, Language } = App.components;

const pdfID = ref(""),
  aboutContent = reactive([]),
  cvContent = reactive([]);
const getPDFID = (value) => {
  pdfID.value = value;
};

aboutList
  .filter((content) => content.code == Language)
  .map((content) => {
    return (
      aboutContent.push(content),
      cvContent.push({
        dltitle: content.dltitle,
        dlurl: content.dlurl,
        opentitle: content.opentitle,
        openurl: content.openurl,
        pagetitle: content.pagetitle,
        pageurl: content.pageurl,
      })
    );
  });
</script>
<script>
const isPDFOpen = ref(false);
export default {
  data() {
    return {
      isPDFOpen: isPDFOpen,
    };
  },
  components: {
    isPDFOpen,
  },
  methods: {
    openCVReaderModal(event) {
      isPDFOpen.value = true;
      event.stopPropagation();
    },
    closeCVReaderModal(event) {
      isPDFOpen.value = false;
      event.stopPropagation();
    },
  },
};
</script>

<template>
  <section class="flex flex-col justify-center items-center pt-12">
    <div class="flex justify-center items-center" id="about">
      <div
        class="flex flex-col justify-center items-start min-h-48 px-4"
        v-for="about of aboutContent"
      >
        <h1 class="text-5xl mb-4">{{ about.title }}</h1>
        <h2 class="text-xl mb-2">{{ about.presentation }}</h2>
        <div
          id="about-content"
          class="flex items-stretch w-full text-left py-2"
        >
          <div class="flex flex-col items-center w-auto mx-4 pt-4 pb-12">
            <about-portrait-animation />
            <div
              v-for="cv in cvContent"
              class="flex flex-col items-center px-6 py-4"
            >
              <div class="flex flex-col items-center w-full h-full min-w-96">
                <button
                  id="dl-cv"
                  name="dlcv"
                  :href="cv.dlurl"
                  class="flex flex-row items-center w-full min-w-72 min-h-12 m-2 p-3 border-none"
                  download
                >
                  <font-awesome-icon
                    icon="fa-solid fa-file-download"
                    class="fa-xl size-6 border-solid border-2 p-2 btn-border-color rounded-xl"
                  ></font-awesome-icon>
                  <span class="text-xl mx-6 color-nav-link">{{
                    cv.dltitle
                  }}</span>
                </button>
                <button
                  @click="
                    (e) => {
                      getPDFID(cv.openurl);
                      openCVReaderModal(e);
                    }
                  "
                  id="page-cv"
                  name="pagecv"
                  class="flex flex-row items-center w-full min-w-72 min-h-12 m-2 p-3 border-none"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-eye"
                    class="fa-xl size-6 border-solid border-2 p-2 btn-border-color rounded-xl"
                  ></font-awesome-icon>
                  <span class="mx-6 color-nav-link">{{ cv.opentitle }}</span>
                </button>
                <a
                  id="newpage-cv"
                  name="newpagecv"
                  :href="cv.pageurl"
                  target="_blank"
                  class="flex flex-row items-center w-full min-h-12 m-2 p-3 border-none"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-file"
                    class="fa-xl size-6 border-solid border-2 p-2 btn-border-color rounded-xl"
                  ></font-awesome-icon>
                  <span
                    class="flex flex-row items-center w-full mx-6 color-nav-link"
                    aria-label="Ce bouton va ouvrir un PDF dans un nouvel onglet"
                  >
                    {{ cv.pagetitle }}
                    <font-awesome-icon
                      icon="fa-solid fa-info-circle"
                      title="Ce bouton va ouvrir un PDF dans un nouvel onglet"
                      class="ml-2"
                    ></font-awesome-icon>
                    <font-awesome-icon
                      icon="fa-solid fa-arrow-up-right-from-square"
                      :title="`Le lien du PDF est: ` + cv.pageurl"
                      class="ml-2"
                    ></font-awesome-icon>
                  </span>
                </a>
                <a
                  href="/contact"
                  class="flex flex-row items-center w-full min-w-72 min-h-12 m-2 p-3"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-contact-card"
                    class="fa-xl size-6 border-solid border-2 p-2 btn-border-color rounded-xl"
                  ></font-awesome-icon>
                  <span class="text-xl mx-6 color-nav-link">{{
                    about.contact
                  }}</span>
                </a>
              </div>
            </div>
            <div class="flex flex-col justify-center items-center w-full">
              <h2 class="text-xl font-semibold">Mes réseaux</h2>
              <div
                class="flex flex-row justify-center items-center min-w-full min-h-18 mt-3"
              >
                <a class="color-nav-link" src="" target="_blank">
                  <font-awesome-icon
                    icon="fa-brands fa-linkedin"
                    class="ml-3 mr-3 fa-2xl"
                  ></font-awesome-icon>
                </a>
                <a class="color-nav-link" src="" target="_blank">
                  <font-awesome-icon
                    icon="fa-brands fa-slack"
                    class="ml-3 mr-3 fa-2xl"
                  ></font-awesome-icon>
                </a>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-start">
            <div
              v-for="children of about.children"
              class="flex flex-col items-start"
            >
              <p
                v-for="child of children.children"
                class="flex mb-6 text-left text-xl"
              >
                {{ child.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <about-pdf-reader-modal
        :pdf-i-d="pdfID"
        :update:pdf-i-d="pdfID"
        v-click-outside="closeCVReaderModal"
      ></about-pdf-reader-modal>
    </div>
  </section>
</template>

<style lang="scss">
#about,
#about-content,
#cv {
  flex-direction: column;
}

@media (min-width: 1000px) {
  #about,
  #about-content,
  #cv {
    flex-direction: row;
    min-height: 50.8125rem;
  }
}
</style>