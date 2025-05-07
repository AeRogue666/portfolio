import './assets/css/style.css' // import rendered global css by tailwind

import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router'
import { library } from '@fortawesome/fontawesome-svg-core' // import the fontawesome core
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' // import font awesome icon component
import { faBars, faHeart, faHome, faPen, faPerson, faContactCard, faFilter, faXmark, faCheck, faPlusCircle, faGlobe, faCopy, faCheckCircle, faFileDownload, faEye, faFilePdf, faFile, faSun, faMoon, faArrowDown, faArrowRight, faUser, faArrowUpRightFromSquare, faInfoCircle, faQuestion, faArrowUp, faCode } from '@fortawesome/free-solid-svg-icons' // import specific icons (we can use 'fas' to call solid style icons)
import { faSlack, faLinkedin, faGithub, faFontAwesome, faVuejs, faReact, faBootstrap, faCss, faHtml5, faSquareJs, faAccessibleIcon, faNode, faNodeJs, faMarkdown, faGit } from '@fortawesome/free-brands-svg-icons'
import ClickOutsideDirective from './directives/ClickOutsideDirective';
library.add(faBars, faHeart, faHome, faPen, faPerson, faContactCard, faSlack, faLinkedin, faGithub, faFontAwesome, faFilter, faXmark, faCheck, faPlusCircle, faGlobe, faCopy, faCheckCircle, faFileDownload, faEye, faFilePdf, faFile, faSun, faMoon, faArrowDown, faArrowRight, faUser, faArrowUpRightFromSquare, faInfoCircle, faQuestion, faArrowUp, faVuejs, faReact, faBootstrap, faCss, faHtml5, faSquareJs, faAccessibleIcon, faNode, faNodeJs, faMarkdown, faGit, faCode) // add icons to the library

const app = createApp(App), head = createHead(), pinia = createPinia()
// app.config.compilerOptions.isCustomElement = (tag) => ['ProjectFullSize'].includes(tag);

app.component('font-awesome-icon', FontAwesomeIcon)
    .directive('click-outside', ClickOutsideDirective)
    .use(router)
    .use(head)
    .use(pinia)
    .mount('#app')