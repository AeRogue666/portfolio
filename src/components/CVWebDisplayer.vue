<script setup>
import dayjs from 'dayjs';
import 'dayjs/locale/fr'; import 'dayjs/locale/en-gb';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import updateLocale from 'dayjs/plugin/updateLocale'
import { onMounted, reactive } from 'vue';
import { cvContentList, hobbiesList, languagesList, skillsITList, skillsList } from '@/assets/js/ProjectArraysList';
dayjs.extend(customParseFormat), dayjs.extend(updateLocale); // Le site est en français par défaut

const props = defineProps({
    Language: String,
    languageCode: String,
});
const { Language, languageCode } = props;
const content = reactive([]), allSkills = reactive([]);
const filterArrayContent = (array, final) => {
    array.filter(content => (content.code == (languageCode || Language)) && content.data).map(content => final.push(content.data.reduce((acc, value) => acc + value)));
},
    filterListContent = (array, final) => {
        array.filter(content => (content.code == (languageCode || Language)) && content.data).map(content => final.push({ id: content.id, title: content.title, data: content.data }));
    },
    pushArray = (array, list) => {
        let temp = reactive([]);
        temp = [...array];
        list.map(item => {
            return temp.map(content => {
                return content.children4.map(child => {
                    if (child.id == item.id) {
                        return child.data.map(value => {
                            return item.data.filter(el => el.id == value).map(content => {
                                return array.map(child => {
                                    return child.children4.filter(obj => obj.id == item.id).map(result => result.data.push(content))
                                })
                            })
                        })
                    }
                })
            })
        })
        return array.map(content => {
            return content.children4.map(child => {
                return child.data.map((value, i) => {
                    if (typeof value == 'number') child.data.splice(i, 1)
                })
            })
        })
    },
    changeLocaleLanguage = () => {
        if ((languageCode || Language) == 'fr-FR') dayjs.locale('fr');
        else if ((languageCode || Language) == 'en-UK') dayjs.locale('en');
    };
onMounted(() => {
    filterArrayContent(cvContentList, content);
    filterListContent(skillsList, allSkills), filterListContent(skillsITList, allSkills), filterListContent(languagesList, allSkills), filterListContent(hobbiesList, allSkills);
    pushArray(content, allSkills);
    changeLocaleLanguage();
});
</script>

<template>
    <section v-for="resume in content" id="webcvdisplayer"
        class="flex flex-col items-center w-full h-auto p-2 border rounded-lg">
        <h1 class="text-center">{{ resume.title }}</h1>
        <span class="text-xl text-center">{{ resume.subtitle }}</span>
        <section class="flex flex-col items-center w-full h-auto">
            <p class="py-2">{{ resume.adress }} | <a type="button" name="contactbtn" class="border rounded-lg px-2 py-1"
                    :href="`mailto:` + resume.email">{{ resume.email }}</a></p>
            <a href="/" :alt="resume.altportfolio" class="border-b rounded-lg px-2 py-1">{{ resume.portfolio }}</a>
        </section>
        <section v-for="content in resume.children1" :id="content.id"
            class="flex flex-col items-start w-full h-auto pb-2">
            <h2 class="text-xl">{{ content.title }}</h2>
            <p v-for="child of content.children" class="text-lg mx-2">{{ child.content }}</p>
        </section>
        <section v-for="content in resume.children2" :id="content.id"
            class="flex flex-col items-start w-full h-auto pb-2">
            <h2 class="text-xl">{{ content.title }}</h2>
            <section v-for="job of content.data" class="flex flex-col items-start w-full h-full mx-2">
                <h3 class="flex flex-row items-start w-full h-full">{{ job.title }}
                    <p class="mx-2">| <span>{{ dayjs(job.dateStarted).format('MMMM YYYY') }}</span> - <span>{{
                        dayjs(job.dateEnded).format('MMMM YYYY') }}</span></p>
                </h3>
                <p class="flex flex-row items-start w-full h-full">{{ job.enterprise }},
                    (<span>{{ job.adress }}</span> | <a name="jobwebsitebtn" class="border-b rounded-lg px-2 py-1"
                        :href="job.url" target="_blank">{{ job.website }}</a>)
                </p>
                <ul class="flex flex-col items-start w-full h-full mx-6">
                    <li v-for="action of job.data" class="list-disc px-4">
                        <p class="text-lg">{{ action.content }}</p>
                    </li>
                </ul>
            </section>
        </section>
        <section v-for="content in resume.children3" :id="content.id"
            class="flex flex-col items-start w-full h-auto pb-2">
            <h2 class="text-xl">{{ content.title }}</h2>
            <section v-for="formation of content.data" class="flex flex-col items-start w-full h-auto mx-2">
                <h3>
                    {{ formation.title }}
                    <span>{{ dayjs(formation.dateStarted).format('MMMM YYYY') }}</span> -
                    <span>{{ dayjs(formation.dateEnded).format('MMMM YYYY') }}</span>
                </h3>
                <p class="text-lg mb-2">{{ formation.enterprise }},
                    <span>{{ formation.adress }}</span> |
                    <a name="formationwebsitebtn" class="border-b rounded-lg px-2 py-1" :href="formation.url"
                        target="_blank">{{ formation.website }}</a>
                    <span v-if="formation.other"> | {{ formation.other }}</span>
                </p>
            </section>
        </section>
        <section v-for="content in resume.children4" :id="content.id"
            class="flex flex-col items-start w-full h-auto pb-2">
            <h2 class="text-xl">{{ content.title }}</h2>
            <ul class="grid skillsdisplayer items-start w-full h-full gap-2">
                <li v-for="skill in content.data" class="mx-2">
                    <p class="text-lg">{{ skill.content }} <span v-if="skill.level">({{ skill.level }})</span></p>
                </li>
            </ul>
        </section>
    </section>
</template>

<style>
.skillsdisplayer {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (orientation: landscape) or (min-width: 63rem) {
    .skillsdisplayer {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}
</style>