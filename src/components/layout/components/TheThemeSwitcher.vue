<script setup>
import { getStorage, saveStorage } from '@/assets/js/storageFunctions.js';
import { useThemeStore } from '@/stores/themeStore.js';
import { storeToRefs } from 'pinia';
import { onMounted, ref, reactive, watchEffect } from 'vue';

const themeContent = reactive([{ id: 'light', label: 'Light mode', icon: 'sun' },{ id: 'dark', label: 'Dark mode', icon: 'moon' }]);

const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);

const userTheme = ref(currentTheme), userThemeLabel = ref('Light mode'), userThemeIcon = ref('sun');

const setTheme = (theme) => {
    saveStorage('theme', theme);
    userTheme.value = theme;
    themeStore.setTheme(theme);
},
    toggleTheme = () => {
        if (userTheme.value === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
        if (userTheme.value) {
            themeContent
                .filter((value) => value.id == userTheme.value)
                .map((content) => { return userThemeLabel.value = content.label, userThemeIcon.value = content.icon })
        }
    },
    getMediaPreference = () => {
        const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
        console.log(hasDarkPreference);
        if (hasDarkPreference) {
            return 'dark'
        } else {
            return 'light'
        }
    },
    getTheme = () => {
        return getStorage('theme')
    };

onMounted(() => {
    const initUserTheme = getMediaPreference() || getTheme();
    setTheme(initUserTheme);
});

watchEffect(() => {
    if (!userTheme.value) setTheme('light');
    else setTheme(userTheme.value);
    document.documentElement.setAttribute('data-theme', userTheme.value);
});
/* <label for="checkbox" :aria-label="userThemeLabel" class="switch-label m-2"
        :style="[width > 1000 ? `width: ${width / 30 / 16}rem` : '']">
        <input @change="toggleTheme" id="checkbox" name="checkboxtheme" type="checkbox" class="switch-checkbox" />
        🌙☀️
        <div class="flex flex-row justify-center items-center switch-toggle" :class="[
            { 'switch-toggle-checked': userTheme === 'dark' },
            { 'switch-toggle-unchecked': userTheme === 'light' },
        ]"
            :style="[width > 1000 ? `width: calc(var(--element-size) * ${width / 200 / 16}); height: calc(var(--element-size) * ${width / 200 / 16});` : '']">
            <span role="img" class="flex flex-col justify-center items-center w-full h-full" :style="[
                userTheme === 'dark' ? 'color: white;' : 'color: black;',
            ]">
                <font-awesome-icon :icon="['fas', userThemeIcon]"
                    :style="[width > 1000 ? `width: ${width / 100 / 16}rem; height: auto;` : '']"></font-awesome-icon>
            </span>
        </div>
    </label> 
    // { 'switch-toggle-checked': themeColor === 'dark' }, { 'switch-toggle-unchecked': themeColor === 'light' }
    */
</script>

<template>
    <label for="checkbox" :aria-label="userThemeLabel" class="switch-label m-2">
        <input @change="toggleTheme" id="checkbox" name="checkboxtheme" type="checkbox" class="switch-checkbox" />
        <div class="flex flex-row justify-center items-center switch-toggle" :class="[
            { 'switch-toggle-checked': userTheme === 'dark' },
            { 'switch-toggle-unchecked': userTheme === 'light' },
        ]">
            <span role="img" class="flex flex-col justify-center items-center w-full h-full" :style="[
                userTheme === 'dark' ? 'color: white;' : 'color: black;',
            ]">
                <font-awesome-icon :icon="['fas', userThemeIcon]"></font-awesome-icon>
            </span>
        </div>
    </label>
</template>

<style lang="css" scoped>
.theme-toggle {
    width: calc(var(--element-size) * 0.5);
    height: calc(var(--element-size) * 0.5);
    background-color: rgb(var(--color-background));
    border-radius: 50%;
    transform: translateX(0);
    transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-checkbox {
    display: inline-block;
    width: 0;
    height: 0;
    position: absolute;
    opacity: 0;
}

.switch-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*  */
    width: 3rem;
    /* width: calc(var(--element-size));  */
    /* height: calc(var(--element-size) * 0.37); */
    /* padding: calc(var(--element-size) * 0.1); */
    /* border: calc(var(--element-size) * 0.025) solid gray; */
    /* border-radius: 1rem; */
    /* font-size: calc(var(--element-size) * 0.3); */
    cursor: pointer;
    position: relative;
    z-index: 1;
}

.switch-toggle {
    width: calc(var(--element-size) * 0.5);
    height: calc(var(--element-size) * 0.5);
    background-color: rgb(var(--color-background));
    border-radius: 50%;
    position: absolute;
    top: auto;
    left: 0;
    transform: translateX(0);
    transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
    /* transform: translateX(calc(var(--element-size) * 0.5)) !important; */
    box-shadow: 0px 0px 5px 5px var(--color-btn);
}

.switch-toggle-unchecked {
    /* transform: translateX(calc(var(--element-size) * -0.02)) !important; */
    box-shadow: 0px 0px 5px 5px orange;
}
</style>