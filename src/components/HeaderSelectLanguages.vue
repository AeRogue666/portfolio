<script setup>
import { ref, reactive, watchEffect } from "vue";
import { LanguagesList } from "@/assets/js/ProjectArraysList";
import { useWindowSize } from "./FunctionWindowResize.vue";
const props = defineProps({
    LanguageCode: String,
}),
    emits = defineEmits(['update:languagecode']);

const { LanguageCode } = props, Language = reactive([]), isOpen = ref(false), { width, height } = useWindowSize();
const newLangCode = ref('');
const filterNavLanguage = (string) => {
    return LanguagesList.filter((content) => content.code == string).map(
        (content) => {
            return (
                Language.push({
                    code: content.code,
                    name: content.name,
                    label: content.label,
                    lang: content.lang,
                })
            );
        }
    );
},
    filterNavAliasesLanguage = (string) => {
        return LanguagesList.map((content) => {
            let filter = content.alias.filter((value) => value == string);
            if (filter.length > 0)
                return (
                    content.code,
                    Language.push({
                        code: content.code,
                        name: content.name,
                        label: content.label,
                        lang: content.lang,
                    })
                );
        });
    },
    setLanguage = (newCode) => {
        newLangCode.value = newCode;
        emits('update:languagecode', newLangCode.value);
        localStorage.setItem("languageCode", newLangCode.value);
        Language.splice(0, Language.length);
    };

watchEffect(() => {
    Language.splice(0, Language.length);
    if (!newLangCode.value) filterNavLanguage(LanguageCode);
    else filterNavLanguage(newLangCode.value);
});
// ${width/10/16/3}rem
</script>

<template>
    <div class="flex flex-col justify-center items-center w-auto h-full bg-transparent relative">
        <div class="flex flex-row justify-center items-center w-auto h-full min-w-28 min-h-12 text-center bg-color border solid rounded-lg relative z-index-99"
            :style="[width > 1000 ? `width: ${width / 10 / 16}rem; height: auto;` : '']">
            <button v-for="lang in Language" @click="isOpen = !isOpen" :value="lang.code" :aria-expanded="isOpen"
                :aria-label="lang.name" :lang="lang.lang"
                class="block w-full h-auto p-1 text-base font-semibold color-nav-link"
                :style="[width >= 1000 ? `font-size: clamp(1.1rem, 1vw, 1.5rem);` : '']">
                {{ lang.name }}
            </button>
            <div class="w-0 h-0 arrow absolute right-1" :class="[isOpen == true ? 'arrow-up' : 'arrow-down']"></div>
            <div v-if="isOpen == true"
                class="flex flex-col justify-center items-center w-full h-auto min-w-28 min-h-16 bg-color border solid rounded-lg -mt-0.5 absolute top-12">
                <button v-for="lang in LanguagesList" @click="setLanguage(lang.code)" :value="lang.code"
                    :aria-label="lang.name" :lang="lang.lang"
                    class="block w-full h-full min-h-12 p-1 text-base font-semibold color-nav-link relative"
                    :style="[width >= 1000 ? `font-size: clamp(1.1rem, 1vw, 1.5rem);` : '']">
                    {{ lang.name }}
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.arrow {
    border-left: 0.3rem solid transparent;
    border-right: 0.3rem solid transparent;
}

.arrow-up {
    border-bottom: 0.3rem solid;
}

.arrow-down {
    border-top: 0.3rem solid;
}
</style>