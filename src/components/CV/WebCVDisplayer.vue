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
const content = reactive([]), skillsContent = reactive([]), allSkills = reactive([]);
const filterArrayContent = (array, final, skills) => {
    array.filter(content => (content.code == (languageCode || Language)) && content.data).map(content => {
        return content.data.map(child => {
            skills.push(child.children4), final.push({
                adress: child.adress, altportfolio: child.altportfolio,
                children1: child.children1, children2: child.children2,
                children3: child.children3, children4: [],
                email: child.email, portfolio: child.portfolio,
                title: child.title, subtitle: child.subtitle,
            })
        })
    });
},
    filterListContent = (array, final) => {
        array.filter(content => (content.code == (languageCode || Language)) && content.data).map(content => final.push({ id: content.id, title: content.title, data: content.data }));
    },
    pushArray = (array, list, skills) => {
        list.map(item => {
            return skills.map(content => {
                content.map(child => {
                    if (child.id == item.id) {
                        array.map(content => {
                            content.children4.push({ id: item.id, title: item.title, data: [] })
                        }),
                            child.data.map(value => {
                                item.data.filter(el => el.id == value).map(result => {
                                    array.map(content => {
                                        content.children4.map(v => { if (item.id == v.id) v.data.push(result) })
                                    })
                                })
                            })
                    }
                })
            })
        });
    },
    changeLocaleLanguage = () => {
        if ((languageCode || Language) == 'fr-FR') dayjs.locale('fr');
        else if ((languageCode || Language) == 'en-UK') dayjs.locale('en');
    };
onMounted(() => {
    filterArrayContent(cvContentList, content, skillsContent);
    filterListContent(skillsList, allSkills), filterListContent(skillsITList, allSkills), filterListContent(languagesList, allSkills), filterListContent(hobbiesList, allSkills);
    pushArray(content, allSkills, skillsContent);
    changeLocaleLanguage();
});
</script>

<template>
    <section v-for="resume in content" id="webcvdisplayer" class="flex flex-col items-center w-full h-auto">
        <h1 class="text-center">{{ resume.title }}</h1>
        <span class="text-xl text-center">{{ resume.subtitle }}</span>
        <section class="flex flex-col items-center w-full h-auto">
            <p class="py-2">{{ resume.adress }} | <a type="button" name="contactbtn" class="border rounded-lg px-2 py-1"
                    :href="`mailto:` + resume.email">{{ resume.email }}</a></p>
            <a href="/" :alt="resume.altportfolio" class="border-b rounded-lg px-2 py-1">{{ resume.portfolio }}</a>
        </section>
        <section v-for="content in resume.children1" :id="content.id"
            class="flex flex-col items-start w-full h-auto px-2 pb-2">
            <h2 class="text-xl">{{ content.title }}</h2>
            <p v-for="child of content.children" class="text-lg">{{ child.content }}</p>
        </section>
        <section v-for="content in resume.children2" :id="content.id"
            class="flex flex-col items-start w-full h-auto px-2 pb-2">
            <h2 class="text-xl">{{ content.title }}</h2>
            <section v-for="job of content.data" class="flex flex-col items-start w-full h-full">
                <h3 class="flex flex-row items-start w-full h-full">{{ job.title }}
                    <p class="mx-2">| <span>{{ dayjs(job.dateStarted).format('MMMM YYYY') }}</span> - <span>{{
                        dayjs(job.dateEnded).format('MMMM YYYY') }}</span></p>
                </h3>
                <p class="flex flex-row items-start w-full h-full">{{ job.enterprise }},
                    (<span>{{ job.adress }}</span> | <a name="jobwebsitebtn" class="border-b rounded-lg px-2 py-1"
                        :href="job.url" target="_blank">{{ job.website }}</a>)
                </p>
                <ul class="flex flex-col items-start w-full h-full ml-6">
                    <li v-for="action of job.data" class="list-disc px-2">
                        <p class="text-lg max-w-9-10">{{ action.content }}</p>
                    </li>
                </ul>
            </section>
        </section>
        <section v-for="content in resume.children3" :id="content.id"
            class="flex flex-col items-start w-full h-auto px-2 pb-2">
            <h2 class="text-xl">{{ content.title }}</h2>
            <section v-for="formation of content.data" class="flex flex-col items-start w-full h-auto">
                <h3>
                    {{ formation.title }}
                    <span>{{ dayjs(formation.dateStarted).format('MMMM YYYY') }}</span> -
                    <span>{{ dayjs(formation.dateEnded).format('MMMM YYYY') }}</span>
                </h3>
                <p class="text-lg mb-2 max-w-9-10">{{ formation.enterprise }},
                    <span>{{ formation.adress }}</span> |
                    <a name="formationwebsitebtn" class="border-b rounded-lg px-2 py-1" :href="formation.url"
                        target="_blank">{{ formation.website }}</a>
                    <span v-if="formation.other"> | {{ formation.other }}</span>
                </p>
            </section>
        </section>
        <section v-for="content in resume.children4" :id="content.id"
            class="flex flex-col items-start w-full h-auto px-2 pb-2">
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

.max-w-9-10 {
    max-width: 90%;
}

@media (orientation: landscape) or (min-width: 63rem) {
    .skillsdisplayer {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}
</style>