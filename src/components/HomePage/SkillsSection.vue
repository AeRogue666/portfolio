<script setup>
import { projectsList, worksList, tagsColorList } from '@/assets/js/ProjectArraysList';
import { onMounted, reactive, ref } from 'vue';

const props = defineProps({
    Language: String,
    completedProjectsTitle: String,
    preferredLanguagesTitle: String,
    preferredTechnologiesTitle: String,
    themeColor: String,
});
const { Language, completedProjectsTitle, preferredLanguagesTitle, preferredTechnologiesTitle } = props,
    languageCode = ref(''), realizedProjects = reactive([]), preferredLanguages = reactive([]),
    preferredTechnologies = reactive([]), languagesIdList = reactive([1, 2, 3]), technologiesIdList = reactive([4, 5, 9, 11, 14, 16]);

const filterInfosValues = (array, final, list) => {
    if (list) {
        list.map(value => {
            return array.filter(content => content.id == value).map(content => {
                final.push({ id: content.id, title: content.title, color: content.color })
            });
        })
    } else array.filter(content => (content.code == (languageCode.value || Language)) && content.data).map(content => { return content.data.map(value => final.push(value)) })
};
const filterProjectValues = (array) => {
    let projectNb = reactive([]), workNb = reactive([]);
    filterInfosValues(projectsList, projectNb), filterInfosValues(worksList, workNb);
    array.push({ projectNumber: (projectNb.length + workNb.length) })
};
const getLanguage = () => {
    if (typeof Language == 'undefined' || Language.length == 0) languageCode.value = localStorage.getItem('languageCode');
};

onMounted(() => {
    getLanguage();
    filterInfosValues(tagsColorList, preferredLanguages, languagesIdList);
    filterInfosValues(tagsColorList, preferredTechnologies, technologiesIdList);
    filterProjectValues(realizedProjects);
});
</script>

<template>
    <div id="infoscontainer" class="flex flex-col items-center w-full h-auto mt-2 mb-auto">
        <div v-if="completedProjectsTitle" id="infoscontainer__number"
            class="flex flex-col justify-center items-center w-full h-auto">
            <h3 class="text-2xl font-semibold">{{ completedProjectsTitle }}</h3>
            <div v-for="project of realizedProjects" class="flex flex-col items-center">
                <p class="text-2xl font-semibold">
                    <span :class="[props.themeColor == 'light' ? 'text-blue-600' : 'text-blue-500']">{{
                        project.projectNumber }}</span>
                    <span>+</span>
                </p>
            </div>
        </div>
        <div id="infoscontainer__preferred" class="flex justify-center items-center w-full h-full gap-3">
            <div v-if="preferredLanguagesTitle" class="flex flex-col items-center w-auto h-auto mb-auto">
                <h3 class="text-2xl font-semibold">{{ preferredLanguagesTitle }}</h3>
                <ul class="grid grid-cols-3 items-center w-full h-auto">
                    <li v-for="icon in preferredLanguages"
                        class="flex flex-row justify-center items-center w-full h-auto text-5xl">
                        <p class="w-full h-full text-xl text-center border-2 mx-1 my-0.5 px-1 rounded-lg"
                            :class="`border-` + icon.color">{{ icon.title }}</p>
                    </li>
                </ul>
            </div>
            <div v-if="preferredTechnologiesTitle" class="flex flex-col items-center w-auto h-auto mb-auto">
                <h3 class="text-2xl font-semibold">{{ preferredTechnologiesTitle }}</h3>
                <ul class="grid grid-cols-3 items-center w-full h-auto">
                    <li v-for="icon in preferredTechnologies"
                        class="flex flex-row justify-center items-center w-full h-auto text-5xl">
                        <p class="w-full h-full text-xl text-center border-2 mx-1 my-0.5 px-1 rounded-lg"
                            :class="`border-` + icon.color">{{ icon.title }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
#infoscontainer__preferred {
    flex-direction: column;
}

@media (orientation: landscape) or (min-width: 1000px) {
    #infoscontainer__preferred {
        flex-direction: row;
    }
}
</style>