<script setup>
import { reactive, ref } from 'vue';
let Language = ref('fr-FR'), usedLanguage = ref('Français'), usedLabel = ref('Veuillez sélectionner votre langue'), LanguagesList = reactive([{ code: 'en-UK', alias: ['en_US', 'en-US', 'en_UK', 'en_GB', 'en-GB', 'en', 'gb'], name: 'English', label: 'Please select your language' }, { code: 'fr-FR', alias: ['fr_FR', 'fr_CA', 'fr-CA', 'fr'], name: 'Français', label: 'Veuillez sélectionner votre langue' }]), langStore = localStorage.getItem('languageCode');

const filterNavLanguage = (string) => {
    return LanguagesList.filter(content => content.code == string).map(content => { return Language.value = content.code, usedLanguage.value = content.name, content.code })
};

const filterNavAliasesLanguage = (string) => {
    return LanguagesList.map(content => {
        let filter = content.alias.filter(value => value == string);
        if (filter.length > 0) return Language.value = content.code, usedLanguage.value = content.name, content.code, usedLabel.value = content.label
    });
};
if (langStore !== '' && langStore !== null) {
    filterNavLanguage(langStore); // On sélectionne la langue choisis par l'utilisateur
} else if (langStore == null && navigator.language) {
    if (LanguagesList.length !== 0) {
        let newLang = filterNavLanguage(navigator.language); // On sélectionne la langue par défaut du navigateur
        if (newLang.length == 0) {
            newLang = filterNavAliasesLanguage(navigator.language); newLang = newLang.filter(value => value !== undefined);
        }
        localStorage.setItem('languageCode', newLang);
    } else {
        console.log('lang: ', Language.value)
        localStorage.setItem('languageCode', Language.value);
    }
} else {
    filterNavLanguage(Language);
}
localStorage.setItem('language', usedLanguage.value);
</script>
<script>
export default {
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        changeLanguage(e) {
            console.log('target: ', e.target.value)
            localStorage.setItem('languageCode', e.target.value)
            window.location.reload();
        }
    }
}
</script>

<template>
    <div class="flex flex-col justify-center items-center w-auto h-full bg-transparent relative">
        <select @change="changeLanguage" v-model="usedLanguage"
            class="block w-auto h-full min-w-28 min-h-12 text-center bg-color border solid btn-border-color rounded-lg relative z-index-99"
            name="selectlanguage" :aria-label="usedLabel">
            <option :aria-label="usedLanguage" class="hidden" disabled>
                {{ usedLanguage }}
            </option>
            <option v-for="lang of LanguagesList" :value="lang.code" :aria-label="lang.name"
                class="block w-full h-auto p-1 text-base font-semibold color-nav-link">
                {{ lang.name }}
            </option>
        </select>
    </div>
</template>

<style scoped></style>
<script>
    import { defineComponent } from 'vue'
    import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'
    const isTagOpen = ref(false);
    export default defineComponent({
        name: 'Basic',
        components: { Carousel, Slide, Pagination, Navigation,},
        methods: {
            closeArticleTagMenu(event) {
                isTagOpen.value = false
                event.stopPropagation();
            },
            clickArticleTagMenu(event) {
                isTagOpen.value = true
                event.stopPropagation();
            },
        }
    })
</script>

<template>
    <div class="article-wrapper" v-if="isArticleOpen == true">
        <article class="article-one" v-for="article of projectValues" :key="article.id">
            <div>
                <button 
                    class="filter-btn filter-exit close-article" 
                    ref="closeArticleBtn" 
                    @click="isArticleOpen = false"
                >
                    <font-awesome-icon icon="fa-solid fa-xmark"></font-awesome-icon>
                </button>
                <div class="article-slider-wrapper">
                    <Carousel>
                        <Slide v-for="slide of article.image" :key="slide.id">
                            <div class="carousel__item">
                                <img 
                                    :src="slide.value"
                                    :alt="slide.description"
                                    :aria-label="slide.labelDescription"
                                    :href="slide.labelURL" 
                                    :id="slide.id"
                                >
                            </div>
                        </Slide>
                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                    <!-- <div class="arrow-container">
                        <svg
                            @click="" :class="{arrow: true, 'arrow--left': true}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path>
                        </svg>
                        <svg
                            @click="" :class="{arrow: true,'arrow--right': true}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
                        </svg>
                    </div> -->
                </div>
            </div>
            <section class="article-content-wrapper margin1rem">
                <div class="article-content">
                <h1 class="article-title">{{ article.title }}</h1>
                <p class="article-date-time">{{ article.dateCreated }} - {{ article.dateEnded }}</p>
                <div class="article-desc-container margin1rem">
                    <p class="article-description text-left">{{ article.content }}</p>
                </div>
                </div>
                <div class="article-tags-wrapper">
                    <ProjectArticleModalAllTags 
                        :is-tag-open="isTagOpen"
                        :tags-list="articleTagsList"
                        v-click-outside="closeArticleTagMenu"
                    ></ProjectArticleModalAllTags>
                    <div class="article-tags-btn-container">
                        <button 
                            v-if="isTagOpen == false" 
                            class="filter-btn filter-exit" 
                            @click="(e) => {clickArticleTagMenu(e)}"
                        >
                            <font-awesome-icon icon="fa-solid fa-plus-circle"></font-awesome-icon>
                        </button>
                        <button 
                            v-if="isTagOpen == true" 
                            class="filter-btn filter-exit" 
                            @click="(e) => {closeArticleTagMenu(e)}"
                        >
                            <font-awesome-icon icon="fa-solid fa-xmark"></font-awesome-icon>
                        </button>
                    </div>
                    <div class="article-media-container">
                        <h3 class="tags-title">Sources</h3>
                        <ol class="links-list">
                            <li class="tags-list-li">
                                <a 
                                    class="media-short-format" 
                                    v-for="media of article.url" 
                                    :href="media.url" 
                                    target="_blank">
                                    <font-awesome-icon v-if="media.icon == 'github'" :icon="['fab', media.icon]"></font-awesome-icon>
                                    <font-awesome-icon v-if="media.icon == 'globe'" :icon="['fas', media.icon]"></font-awesome-icon>
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </article>
    </div>
</template>

<style>
    .article-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 50%;
        height: auto;
        margin: 0.3rem 0;
        position: absolute;
        top: -1rem;
        z-index: 10;
    }
    .article-one {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: auto;
        min-height: 75%;
        max-height: 100%;
        background-color: var(--color-bg-article);
        border: 1px solid var(--color-bg-article-2);
        border-radius: 10px;
    }
    .close-article {
        position: absolute;
        z-index: 11;
    }
    /* Slider Container */
    .article-slider-wrapper {
        display: block;
    }
    /* Article Content */
    .article-content-wrapper {
        display: flex;
        flex-direction: column;
        width: inherit;
    }
    .article-tags-wrapper {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: auto;
    }
    .article-tags-btn-container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .article-media-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: auto;
    }
    .tags-list {
        display: grid;
        grid-template-columns: repeat(5 , 1fr);
        justify-items: center;
    }
    .links-list {
        display: flex;
        flex-direction: row;
    }
    .tags-list-li {
        margin: 0.3rem;
    }
    .tags-title {
        font-size: medium;
        font-weight: 600;
        text-align: center;
        color: var(--color-title);
    }
    .tags {
        display: block;
        width: max-content;
        height: auto;
        font-size: small;
        font-weight: 600;
    }
    @media (min-width: 1000px), (orientation: landscape) {
        .article-one {
            width: auto;
        }
    }
    .margin1rem {
        margin: 1rem;
    }
    .text-left {
        text-align: left;
    }
    /* Carousel */
    .carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel__slide {
    padding: 10px;
  }
  
  .carousel__prev, .carousel__next {
    box-sizing: content-box;
    color: var(--color-nav-link);
    width: 50px;
    height: 50px;
  }
  .carousel__pagination-button--active {
    color: var(--color-nav-link);
  }
</style>