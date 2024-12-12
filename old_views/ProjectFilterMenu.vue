<script setup>
    import app from '../App.vue';
    import dayjs from 'dayjs';
    import 'dayjs/locale/fr'; 
    import 'dayjs/locale/en-gb';
    import customParseFormat from 'dayjs/plugin/customParseFormat'; 
    import updateLocale from 'dayjs/plugin/updateLocale'
    import Projects from '../../old_views/Projects.vue';
    import { ref, computed, reactive, onMounted, onUpdated, watch, nextTick } from 'vue';
    
    const { ApiURL, Language } = app.components, { isFilterOpen } = Projects.components;
    dayjs.extend(customParseFormat), dayjs.extend(updateLocale), dayjs.locale('fr'); // Le site est en français par défaut
    
    const props = defineProps({
        categoriesList: {type: Array},
        checkedCategories: {type: Array},
    });
    const emits = defineEmits(['update:categoriesList','update:checkedCategories']);
    let checkedCategories = reactive(props.checkedCategories), checked = reactive([]);
    const categories = reactive(props.categoriesList);
    // Executes logic after the submit have been send
    let errors = reactive([]);
    const submitFilterForm = () => {
        checkedCategories.push(checked); checked = reactive([]); 
        // checkedCategories perd sa réactivité après avoir été clear de son contenu par le tableau contenu dans la vue Projects.vue
        // Quand on tente de push un nouveau contenu dans checkedCategories, soit il ne prends pas soit il le prends mais ajoute le tableau vide de l'ancien contenu
        // Ce qui fait buguer le code. Peut être faudrait-il tout faire sans soumission par un formulaire.
        if(checkedCategories.length == 0) errors.push('Veuillez sélectionner une catégorie !');
        else console.log('checkedCategories: ', checkedCategories), emits('update:checkedCategories', checkedCategories);
    };
    const addAndRemoveFilter = (value) => {
        if(checked.length == 0) checked.push(value);
        else {
            const index = checked.indexOf(value);
            if(index > -1) checked.splice(index, 1); else checked.push(value); 
        }
        isSelected(checked);
    };
    const resetSelection = () => {
        if(checked.length > 0) checked = reactive([]);
    };
    const isSelected = (array) => {
        if(array.length > 0) {
            array.map(value => {
                return categories.map(category => {
                    category.data.map((content,i) => {
                        if(content.id == value) return category.data.splice(i,1), category.data.push({id: content.id, title: content.title, checked: true})
                    });
                    return category.data.sort((a,b) => {let x = a.id, y = b.id; return x > y ? 1 : -1})
                })
            });
        } else {
            categories.map(category => {
                category.data.map((content,i) => {
                    if(content.checked) return category.data.splice(i,1), category.data.push({id: content.id, title: content.title})
                });
                return category.data.sort((a,b) => {let x = a.id, y = b.id; return x > y ? 1 : -1})
            })
        }
    };
    watch(checkedCategories, (newCategory) => {
        if(newCategory[0].length == 0 && checked.length == 0) {
            isSelected(checked);
        }
        nextTick(submitFilterForm), {deep: true}
    });
    // Executes logic after the component have been mounted
    onMounted(() => {
        submitFilterForm;
    });
    // Executes logic after the component is updated
    onUpdated(() => {
        checkedCategories;
    });
    /* Inspirations pour le filter : */
    // https://cdn.prod.website-files.com/65d605a3b4417479c154329f/66d0eee4a67fec00a425330f_66d0ecf4d17efe7c5b4b6f14_mobile-filter-1.png
    // https://cdn.prod.website-files.com/65d605a3b4417479c154329f/65ef0348d7e75a035d9d4d81_Positioning-3-Sidebar.gif
    // https://cdn.prod.website-files.com/65d605a3b4417479c154329f/66d0eee4a67fec00a4253312_66d0ecfe67ecc181f8f07402_mobile-filter-2.png
</script>

<template>
    <aside 
        class="filter-container" 
        ref="filterMenu" 
        v-if="isFilterOpen" 
        id="filtercontainer"
    >
        <section class="filter-header">
            <h3 class="filter-title">
                <font-awesome-icon icon="fa-solid fa-filter"></font-awesome-icon> 
                Filter
            </h3>
            <button 
                class="filter-btn filter-exit" 
                ref="closeMenuBtn" 
                @click="isFilterOpen = false"
            >
                <font-awesome-icon icon="fa-solid fa-xmark"></font-awesome-icon>
            </button>
        </section>
        <section class="filter-main" :class="{ 'padding-bottom': checked.length == 0 }">
            <form 
                @submit.prevent="submitFilterForm" 
                action="" 
                method="post" 
                role="form" 
                id="filterForm"
            >
                <p>checked: {{ checked }}</p>
                <p>checkedCategories: {{ checkedCategories }}</p>
                <div 
                    class="filter-box" 
                    v-for="content in categoriesList"
                >
                    <h3 class="filter-box-title">{{ content.title }}</h3>
                    <div class="filter-box-content">
                        <label 
                            v-for="(category, i) in content.data" 
                            :for="'project-type-' + category.id" 
                            class="filter-label" 
                            :key="i + '-label-' + category.id"
                        >
                            <input 
                                type="checkbox" 
                                :id="'project-type-' + category.id" 
                                :name="'project-type-' + category.id" 
                                :value="category.id"
                                @click="addAndRemoveFilter(category.id)"
                                v-model="checked"
                                class="filter-checkbox"
                                :key="i + '-input-' + category.id"
                            >
                            <span 
                                class="filter-span" 
                                :class="{'selected': category.checked}"
                            >{{ category.title }}</span>
                        </label>
                    </div>
                </div>
                <div class="filter-box"></div>
                <button 
                    class="filter-submit-btn" 
                    type="submit" 
                    v-if="checked.length > 0"
                >
                    <font-awesome-icon icon="fa-solid fa-check"></font-awesome-icon> 
                    Appliquer
                </button>
                <button 
                    class="filter-submit-btn" 
                    type="reset" 
                    value="reset" 
                    @click="resetSelection"
                > 
                    Réinitialiser
                </button>
            </form>
        <!-- <div class="filter-box" v-show="errors.length > 0">
                <li 
                v-for="(error, i) in errors" 
                :key="i" 
                class="filter-error"
                >
                <p class="filter-error-paragraph">{{ error }}</p>
                </li>
            </div> -->
        </section>
    </aside>
</template>

<style lang="css">
    /* Filter container */
    .filter-container {
        display: flex;
        flex-direction: column;
        width: auto;
        height: auto;
        min-width: 75%;
        min-height: 75%;
        background-color: var(--color-background);
        border: 1px solid var(--color-nav-link);
        border-radius: 0 10px 10px 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 90;
    }
    .filter-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .filter-title {
        margin: 0 1rem;
        font-size: medium;
        font-weight: 600;
    }
    .filter-btn {
        display: block;
        width: 50px;
        height: 50px;
    }
    .filter-icon {
        vertical-align: middle;
    }
    .filter-exit {
        border: unset;
    }
    .filter-main {
        display: flex;
        flex-direction: column;
    }
    #filterForm {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .padding-bottom {
        padding-bottom: 1rem;
    }
    .filter-box {
        display: flex;
        flex-direction: column;
    }
    .filter-box-title {
        display: block;
        font-size: large;
        font-weight: 600;
        text-align: center;
    }
    .filter-box-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 0.5rem;
    }
    .filter-submit-btn {
        display: block;
        width: 75%;
        height: auto;
        margin: 1rem;
        padding: 0.5rem;
        border-radius: 10px;
    }
    /* Filter Checkboxes */
    .filter-label {
        display: block;
        margin: 0.3rem;
    }
    .filter-span {
        display: block;
        width: 100%;
        height: 100%;
        min-width: 6rem;
        min-height: 1rem;
        margin: 0;
        padding: 0.3rem;
        text-align: center;
        background-color: var(--color-bg-article);
        color: var(--color-text-link);
        border: 1px solid var(--color-btn-border);
        border-radius: 5px;
    }
    .filter-span:hover, .selected {
        background-color: var(--color-text-link-hover);
        color: var(--color-nav-link);
        border: 1px solid var(--color-btn-border);
    }
    .filter-checkbox {
        width: inherit;
        height: inherit;
        position: absolute;
        opacity: 0;
    }
    .filter-error {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 0;
        padding: 0.3rem;
    }
    .filter-error-paragraph {
        display: block;
        width: 75%;
        text-align: center;
        font-size: medium;
        font-weight: 600;
        color: red;
    }
    @media (min-width: 1000px), (orientation: landscape) {
        .filter-container {
            min-width: 15rem;
            min-height: 30rem;
        }
    }
</style>