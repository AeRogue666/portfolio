<script setup>
    import { ref, reactive, watch, nextTick, onMounted } from 'vue';
    const props = defineProps({
        tagsList: {type: Array},
        removedTag: {type: Array},
    });
    const emits = defineEmits(['update:tagsList','update:removedTag']);
    const tags = reactive(props.tagsList);
    let tagRemoved = reactive(props.removedTag);
    const olTagsContainer = ref(null);

    const removeTag = (value) => {
        tagRemoved.splice(0, tagRemoved.length);
        return tags.map(content => {
            if(content.id == value) return tagRemoved.push(value);
        });
    };
    const onTagsChange = () => {
        // scroll tags-container to end
        olTagsContainer.value.scrollTo(olTagsContainer.value.scrollWidth, 0);
        // emits new tags values
        emits('update:tagsList', tags); emits('update:removedTag', tagRemoved);
    };
    watch(tags, () => nextTick(onTagsChange), {deep: true});
    watch(tagRemoved, () => nextTick(onTagsChange), {deep: true});
    onMounted(() => {
        removeTag;
        onTagsChange;
    });
</script>

<template>
    <div class="tags-wrapper">
        <ol 
            class="tags-container" 
            ref="olTagsContainer"
        >
            <li 
                v-for="(tag,i) in tags" 
                :key="i" 
                class="tag-li"
            >
                <button 
                    class="tag-delete" 
                    type="submit"
                    @click.prevent="removeTag(tag.id)" 
                    :name="'tag-' + tag.id"
                    :value="tag.id" 
                    :key="tag.id + '-' + i"
                >
                    <span class="tag">
                        <font-awesome-icon 
                            icon="fa-solid fa-xmark" 
                            class="tag-xmark"
                        ></font-awesome-icon> 
                        {{ tag.title }}
                    </span>
                </button>
            </li>
        </ol>
    </div>
</template>

<style>
    /* Tags Container List */
    .tags-wrapper {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: auto;
        min-width: 50%;
        max-width: 90%;
        min-height: 3rem;
        border: 1px solid var(--color-title);
        background-color: var(--color-background);
    }
    #project-tags-form {
        display: block;
        width: auto;
        height: 100%;
        overflow-x: scroll;
        scrollbar-width: none;
    }
    .tags-container {
        display: flex;
        flex-direction: row;
        padding-right: 1rem;
        overflow-x: auto;
        scroll-behavior: smooth;
        scrollbar-color: var(--color-btn) var(--color-bg-article);
        scrollbar-width: thin;
    }
    .tag-li {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: auto;
        height: auto;
        margin: 0.3rem;
        padding: 0.3rem;
    }
    .tag-delete {
        display: flex;
        align-items: center;
        color: var(--color-text);
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
    }
    .tag {
        display: flex;
        align-items: center;
        width: max-content;
        height: auto;
        min-width: 60px;
        min-height: 30px;
        margin: 0 0.3rem;
        padding: 0.2rem;
        border: 1px solid var(--color-btn-border);
        border-radius: 10px;
    }
    .tag:hover {
        background-color: var(--color-btn-hover);
    }
    .tag-xmark {
        margin: 0.3rem;
    }
    .tag-xmark:hover {
        opacity: 0.5;
    }
</style>