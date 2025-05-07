<script setup>
import { skillsITList } from '@/assets/js/ProjectArraysList';
import { onMounted, reactive, ref } from 'vue';
import HomeCatAnimation from '@/components/animations/SleepingCat.vue';

const props = defineProps({
    Language: String,
    aboutContent: Array,
});
const { Language, aboutContent } = props, languageCode = ref(''), aboutSkills = reactive([]);

const filterArrayContent = (array, final) => {
    array.filter(content => (content.code == (languageCode.value || Language)) && content.data).map(content => final.push(content.data));
},
    getLanguage = () => {
        if (typeof Language == 'undefined' || Language.length == 0) languageCode.value = localStorage.getItem('languageCode');
    };

onMounted(() => {
    getLanguage();
    filterArrayContent(skillsITList, aboutSkills);
});
</script>

<template>
    <div v-for="about of aboutContent" id="aboutcontainer" class="flex flex-col items-center w-screen h-full mb-auto">
        <h2 class="text-4xl font-semibold py-4">{{ about.title }}</h2>
        <div id="aboutcontent" class="flex justify-center items-center w-full h-auto">
            <section class="flex flex-col justify-center items-center w-full h-auto p-4">
                <p v-for="child of about.children1" class="text-xl my-2">{{ child.content }}</p>
            </section>
            <div class="flex flex-row items-center w-auto h-auto">
                <HomeCatAnimation />
            </div>
        </div>
        <div id="jobscontainer" class="flex flex-col items-center w-full h-full">
            <ul class="border border-solid">
                <li v-for="children of about.children2"
                    class="flex flex-col items-start w-full h-full p-2 border-solid">
                    <h3 class="flex flex-row items-center text-2xl font-semibold">
                        <font-awesome-icon :icon="['fas', children.icon]"
                            :class="[props.themeColor == 'light' ? 'border-blue-600' : 'border-blue-500']"
                            class="fa-xl size-6 border-solid border-1 p-2 rounded-xl"></font-awesome-icon>
                        <span class="px-2">{{ children.title }}</span>
                    </h3>
                    <section class="flex flex-col items-start w-full h-auto">
                        <div v-for="child of children.children"
                            class="flex flex-col justify-start items-start w-full h-auto">
                            <p class="text-xl">{{ child.content }}</p>
                        </div>
                    </section>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
#aboutcontent {
    flex-direction: column;
}

#jobscontainer ul {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media (orientation: landscape) or (min-width: 63rem) {
    #aboutcontent {
        flex-direction: row;
    }
}
</style>