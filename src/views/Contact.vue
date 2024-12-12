<script setup>
import App from "@/App.vue";
import { reactive, ref } from "vue";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import "dayjs/locale/en-gb";
import customParseFormat from "dayjs/plugin/customParseFormat";
import updateLocale from "dayjs/plugin/updateLocale";
import { contactContentList } from "@/assets/js/ProjectArraysList";
dayjs.extend(customParseFormat), dayjs.extend(updateLocale), dayjs.locale("fr"); // Le site est en français par défaut
const { ApiURL, Language } = App.components;
let contactContent = reactive([]);

contactContentList.map((content) => {
  if (content.code === Language) return contactContent.push(content);
});
</script>

<script>
export default {
  data() {
    return {
      errors: [],
      clipboard: {
        icon: "fa-copy",
      },
      isCopied: false,
      isSubmit: false,
    };
  },
  methods: {
    copyClipboard(e) {
      const clipboard = this.clipboard;
      let read = ref("");
      this.errors = [];
      const copy = navigator.clipboard
        .writeText(e.target.textContent)
        .then(() => (error) => this.errors.push(error));
      const paste = navigator.clipboard
        .readText()
        .then((content) => (read.value = content))
        .then(() => {
          if (e.target.textContent == read.value) {
            return (clipboard.icon = "fa-check-circle"), (this.isCopied = true);
          }
        });
      e.target.addEventListener("copy", (event) => {
        copy;
        paste;
        event.preventDefault();
      });
    },
  },
};
</script>

<template>
  <section
    v-for="content of contactContent"
    class="flex flex-col items-center pt-4"
  >
    <div
      class="flex flex-row justify-center items-center w-form min-h-48 bg-article-1 rounded-t-xl"
    >
      <div
        class="flex flex-col justify-center items-center text-center w-full min-w-52 min-h-36"
      >
        <h2 class="underline underline-offset-8 uppercase">
          {{ content.contact }}
        </h2>
        <div class="flex flex-col justify-center items-center min-h-18 mt-3">
          <h3 class="font-bold">Email</h3>
          <div class="flex flex-row items-center">
            <p @click="copyClipboard" class="mr-2">pro@aureldev.fr</p>
            <font-awesome-icon
              v-model="clipboard.icon"
              :icon="['fas', clipboard.icon]"
              class="m-01"
              :class="{ copied: isCopied }"
            ></font-awesome-icon>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col justify-center items-center text-center w-full min-w-52 min-h-36"
      >
        <h2 class="underline underline-offset-8 uppercase">
          {{ content.media }}
        </h2>
        <div class="flex flex-col justify-center items-center min-h-18 mt-3">
          <div
            class="flex flex-row justify-center items-center min-w-full mt-1"
          >
            <font-awesome-icon
              icon="fa-brands fa-linkedin"
              class="ml-3 mr-3 fa-2xl"
            ></font-awesome-icon>
            <a class="min-w-24" src="" target="_blank"> MonLinkedIn </a>
          </div>
          <div
            class="flex flex-row justify-center items-center min-w-full mt-1"
          >
            <font-awesome-icon
              icon="fa-brands fa-slack"
              class="ml-3 mr-3 fa-2xl"
            ></font-awesome-icon>
            <a class="min-w-24" src="" target="_blank"> MonSlack </a>
          </div>
        </div>
      </div>
    </div>
    <div
      v-for="form of content.form"
      class="flex flex-col items-center w-form p-4 pb-12 bg-article-1 rounded-b-xl md:p-10"
    >
      <h2
        class="text-center underline underline-offset-8 uppercase font-semibold"
      >
        {{ form.title }}
      </h2>
      <div
        v-for="message of form.data"
        class="flex flex-col items-center w-full h-full m-4"
      >
        <div class="flex flex-col items-start w-full h-full">
          <p v-for="children in message.children">{{ children.content }}</p>
        </div>
        <a
          type="button"
          name="contactbtn"
          href="mailto:pro@aureldev.fr"
          class="block w-9/12 h-auto m-4 text-center rounded-xl py-3 text-color-input border-2"
          >{{ message.contactbtn }}</a
        >
      </div>
    </div>
  </section>
</template>

<style>
.bg-article-1 {
  background-color: var(--color-bg-article);
}

.bg-article-2 {
  background-color: var(--color-bg-article-2);
}

.text-color-input {
  color: var(--color-text);
}

::placeholder,
::-moz-placeholder {
  color: var(--color-text);
}

.form-input,
.form-textarea,
.form-select,
.form-multiselect {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus,
.form-multiselect:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
    var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
    calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow);
  border-color: #2563eb;
}

.form-input::-moz-placeholder,
.form-textarea::-moz-placeholder,
.form-input::placeholder,
.form-textarea::placeholder {
  color: #6b7280;
  opacity: 1;
}

.form-input::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

.form-input::-webkit-date-and-time-value {
  min-height: 1.5em;
  text-align: inherit;
}

.form-input::-webkit-datetime-edit {
  display: inline-flex;
}

.form-input::-webkit-datetime-edit,
.form-input::-webkit-datetime-edit-year-field,
.form-input::-webkit-datetime-edit-month-field,
.form-input::-webkit-datetime-edit-day-field,
.form-input::-webkit-datetime-edit-hour-field,
.form-input::-webkit-datetime-edit-minute-field,
.form-input::-webkit-datetime-edit-second-field,
.form-input::-webkit-datetime-edit-millisecond-field,
.form-input::-webkit-datetime-edit-meridiem-field {
  padding-top: 0;
  padding-bottom: 0;
}

.w-form {
  width: 75%;
}

.min-w-form {
  min-width: auto;
}

.min-h-18 {
  min-height: 4.5rem;
}

.required {
  color: var(--color-btn);
}

.m-01 {
  margin: 0 0.1rem;
}

.copied {
  color: var(--color-text-link);
}

@media (min-width: 500px) {
  .w-form {
    width: 100%;
  }
}

@media (min-width: 1000px) {
  .w-form {
    width: 50%;
  }
}
</style>