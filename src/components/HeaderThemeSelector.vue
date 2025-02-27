<script setup>
import { onMounted, ref, watchEffect } from 'vue';

const props = defineProps({
    themeContent: Array,
    themeColor: String,
}),
    emits = defineEmits(['update:themecolor']);
const { themeColor } = props;
const userTheme = ref(''), userThemeLabel = ref('Le site passera au thème foncé - Thème actuel : clair'), userThemeIcon = ref('moon');

const setTheme = (theme) => {
    emits('update:themecolor', theme);
    localStorage.setItem('user-theme', theme);
    userTheme.value = theme;
    // document.documentElement.className = theme;
},
    toggleTheme = () => {
        if (userTheme.value === 'light') {
            setTheme('dark'),
                userThemeIcon.value = 'sun'
        } else {
            setTheme('light'),
                userThemeIcon.value = 'moon'
        }
        if (userTheme.value) props.themeContent.filter(value => value.id == userTheme.value).map(content => userThemeLabel.value = content.content)
    },
    getMediaPreference = () => {
        const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (hasDarkPreference) {
            return 'dark'
        } else {
            return 'light'
        }
    },
    getTheme = () => {
        return localStorage.getItem('user-theme')
    };

onMounted(() => {
    const initUserTheme = getTheme() || getMediaPreference();
    setTheme(initUserTheme);
});

watchEffect(() => {
    if (!userTheme.value) setTheme(themeColor);
    else setTheme(userTheme.value);
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
    <button @click="toggleTheme" type="button"
        class="flex flex-row justify-center items-center border-none cursor-pointer w-auto h-auto theme-toggle"
        :class="[userTheme == 'light' ? 'night' : 'day']">
        <span class="sr-only">{{ userThemeLabel }}</span>
        <font-awesome-icon :id="userThemeIcon" :icon="['fas', userThemeIcon]" width="32" height="32"
            class="w-6 h-6"></font-awesome-icon>
    </button>
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
    width: 3rem;
    /* width: calc(var(--element-size) + 2rem); */
    /* height: calc(var(--element-size) * 0.35); */
    /* padding: calc(var(--element-size) * 0.1); */
    /* border: calc(var(--element-size) * 0.025) solid var(--color-btn-border); */
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

.switch-toggle-checked,
.night {
    /* transform: translateX(calc(var(--element-size) * 0.5)) !important; */
    box-shadow: 0px 0px 5px 5px var(--color-btn);
}

.switch-toggle-unchecked,
.day {
    /* transform: translateX(calc(var(--element-size) * -0.02)) !important; */
    box-shadow: 0px 0px 5px 5px orange;
}
</style>