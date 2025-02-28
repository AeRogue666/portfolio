<script setup>
import { reactive, ref } from 'vue';
const Language = ref('fr-FR'), usedLanguage = ref('Français'), usedLabel = ref('Veuillez sélectionner votre langue'), langStore = localStorage.getItem('languageCode'), LanguagesList = reactive([{ code: 'en-UK', alias: ['en_US', 'en-US', 'en_UK', 'en_GB', 'en-GB', 'en', 'gb'], name: 'English', label: 'Please select your language', lang: 'en' }, { code: 'fr-FR', alias: ['fr_FR', 'fr_CA', 'fr-CA', 'fr'], name: 'Français', label: 'Veuillez sélectionner votre langue', lang: 'fr' }]);

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
// localStorage.setItem('language', usedLanguage.value);
const changeLanguage = (e) => {
    console.log('target: ', e.target.value)
    localStorage.setItem('languageCode', e.target.value)
    window.location.reload();
};
</script>

<template>
    <div class="flex flex-col justify-center items-center w-auto h-full bg-transparent relative">
        <select @change="changeLanguage" v-model="usedLanguage"
            class="block w-auto h-full min-w-28 min-h-12 text-center bg-color border solid btn-border-color rounded-lg relative z-index-99"
            name="selectlanguage" :aria-label="usedLabel">
            <option :aria-label="usedLanguage" class="hidden" disabled>
                {{ usedLanguage }}
            </option>
            <option v-for="lang of LanguagesList" :value="lang.code" :aria-label="lang.name" :lang="lang.lang"
                class="block w-full h-auto p-1 text-base font-semibold color-nav-link">
                {{ lang.name }}
            </option>
        </select>
    </div>
</template>

<style scoped></style>