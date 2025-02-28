<script setup>
import{o as s,a as o,f as e,F as y,d as b,n as A,t as r,g as c,k as S,A as $,i as N,r as v,p as z,u as i,z as D,h as F,q as O,s as I,b as p,w,v as P,e as j,y as R}from"./index-23Y44sVN.js";import{d as L,c as U,u as q}from"./updateLocale-F-rhiN9r.js";import{C as E,N as W,P as G,S as H}from"./carousel-wJXBlPeJ.js";const J={class:"flex flex-col justify-center items-center w-full h-auto min-w-20"},K=["id"],Q=["id"],X={__name:"ProjectArticleModalAllTags",props:{isTagOpen:{type:Boolean},tagsList:{type:Array}},setup(x){return(C,u)=>(s(),o("div",J,[u[0]||(u[0]=e("h2",{class:"text-base font-semibold text-center"},"Tags",-1)),e("ol",{class:S([[x.tagsList.length>=5?"grid grid-cols-3 justify-items-center":"flex flex-row justify-center items-start"],"min-h-16"])},[(s(!0),o(y,null,b(x.tagsList,(n,d)=>(s(),o("li",{key:n.id,class:"w-full h-full pr-2 py-1 text-left"},[d<=5&&n!==void 0?(s(),o("a",{key:0,id:n.id,style:A("border-color:"+n.color),class:"block w-full h-full text-center text-base font-semibold p-2 border-2 rounded-xl"},r(n.title),13,K)):c("",!0),d>5&&x.isTagOpen==!0&&n!==void 0?(s(),o("a",{key:1,id:n.id,style:A("border-color:"+n.color),class:"block w-full h-full text-center text-base font-semibold p-2 border-2 rounded-xl"},r(n.title),13,Q)):c("",!0)]))),128))],2)]))}},Y={class:"flex flex-row justify-center w-full h-full m-0 pb-2 pt-4"},Z={class:"block w-full h-full"},ee={class:"flex flex-row justify-center items-center carousel__item"},te=["src","alt","href","id"],se={class:"flex flex-col items-center w-full h-full p-4"},le={class:"flex flex-col items-start w-full h-full py-4"},oe={id:"articleTitle",class:"py-2 text-start text-2xl"},ne={class:"mb-1 text-start text-sm font-semibold color-date"},ae={key:0,class:"flex flex-row items-start my-2"},re={key:0,class:"mr-2"},ie={key:1,class:"ml-2"},ce={class:"py-2"},ue={key:0,id:"articleContent",class:"text-xl text-left"},de={key:1},fe={class:"text-xl text-left"},pe=["href"],xe={class:"flex flex-row items-start w-full h-auto"},me={class:"flex flex-row items-center w-auto h-full relative top-auto left-1-20 bottom-3-20"},he={class:"flex flex-col items-center w-full h-auto min-w-10"},_e={class:"flex flex-row justify-start items-center"},ye={class:"m-1"},be=["href"],ge=["href"],je={__name:"ProjectArticleModal",setup(x){L.extend(U),L.extend(q),L.locale("fr");const{Language:C}=$.components,u=D(),n=N(u.params.id),d=N(!1);console.log("projectID (Modal): ",n.value);let g=v([]),m=v([]),h=v([]);const T=(_,a,f)=>{_.filter(t=>t.code==C).map(t=>t.data.filter(l=>l.id==n.value).map(l=>(a.push(l),l.tags.map(M=>f.push(F.filter(k=>k.id==M).reduce((k,V)=>k+V))))))},B=_=>{d.value=!d.value,_.stopPropagation()};return z(()=>{u.path=="/works/"+n.value||u.path=="/pro/"+n.value?T(O,g,m):(u.path=="/projects/"+n.value||u.path=="/projets/"+n.value)&&T(I,g,m)}),(_,a)=>{const f=R("font-awesome-icon");return s(),o("section",Y,[(s(!0),o(y,null,b(i(g),t=>(s(),o("article",{key:t.id,class:"article-one flex flex-col items-center h-auto max-h-full","aria-labelledby":"articleTitle","aria-describedby":"articleContent"},[e("div",Z,[p(i(E),null,{addons:w(()=>[p(i(W)),p(i(G))]),default:w(()=>[(s(!0),o(y,null,b(t.images,l=>(s(),j(i(H),{key:l.id},{default:w(()=>[e("div",ee,[e("img",{src:l.url,alt:l.description,href:l.imageURL,id:l.id},null,8,te)])]),_:2},1024))),128))]),_:2},1024)]),e("section",se,[e("div",le,[e("h1",oe,r(t.title),1),e("p",ne,r(t.dateCreated)+" - "+r(t.dateUpdated),1),t.client||t.employer?(s(),o("div",ae,[t.client?(s(),o("p",re,[P(r(t.for)+" ",1),e("span",null,r(t.client),1)])):c("",!0),a[1]||(a[1]=e("p",null,"/",-1)),t.employer?(s(),o("p",ie,[P(r(t.by)+" ",1),e("span",null,r(t.employer),1)])):c("",!0)])):c("",!0),e("div",ce,[t.content.length!==0?(s(),o("p",ue,r(t.content),1)):c("",!0),i(h).length!==0&&!t.content?(s(),o("div",de,[e("p",fe,r(i(h).message),1),e("a",{class:"text-base text-left",href:i(h).url},r(i(h).url),9,pe)])):c("",!0)])]),e("div",xe,[p(X,{"is-tag-open":d.value,"tags-list":i(m)},null,8,["is-tag-open","tags-list"]),e("div",me,[e("button",{name:"openTagsList",title:"Click on this button to open the tags list",onClick:a[0]||(a[0]=l=>{B(l)}),class:S(["filter-btn filter-exit border-none",[i(m).length<=6?"hidden":""]])},[d.value?c("",!0):(s(),j(f,{key:0,icon:"fa-solid fa-plus-circle"})),d.value?(s(),j(f,{key:1,icon:"fa-solid fa-xmark"})):c("",!0)],2)]),e("div",he,[a[4]||(a[4]=e("h2",{class:"text-base font-semibold text-center"},"Sources",-1)),e("ol",_e,[(s(!0),o(y,null,b(t.url,l=>(s(),o("li",ye,[l.icon=="github"?(s(),o("a",{key:0,class:"m-1 p-1 text-2xl align-text-top",href:l.url,alt:"Lien externe vers le github de ce projet",target:"_blank"},[p(f,{icon:["fab",l.icon],title:"github icon"},null,8,["icon"]),a[2]||(a[2]=e("span",{class:"p-2 text-xl"},"Source code",-1))],8,be)):c("",!0),l.icon=="globe"?(s(),o("a",{key:1,class:"m-1 p-1 text-2xl align-text-top",href:l.url,alt:"Lien externe vers le github de ce projet",target:"_blank"},[p(f,{icon:["fas",l.icon],title:"globe icon"},null,8,["icon"]),a[3]||(a[3]=e("span",{class:"p-2 text-xl"},"Website",-1))],8,ge)):c("",!0)]))),256))])])])])]))),128))])}}};export{je as default};
  // Executes logic and send it to childs components
  let categoriesList = reactive([]), tempList = reactive([]), tagsList = reactive([]), removedTag = reactive([]), checkedCategories = reactive([]);
  const getAllCategories = async() => {
    categoriesList.splice(0, categoriesList.length), tempList.splice(0, tempList.length);
    const getCategories = await fetch(`${ApiURL}/items/category?fields=id,title,filtertag`).then(response => response.json()).then(result => result.data);
    const getFilterTags = await fetch(`${ApiURL}/items/filtertag?fields=tag,title`).then(response => response.json()).then(result => result.data);
    getFilterTags.map(content => {return categoriesList.push({id: content.tag, title: content.title, data:[]})});
    categoriesList.map((tag,i) => {
      return getCategories.map(content => {if(tag.id == content.filtertag) return categoriesList[i].data.push({id: content.id, title: content.title})})
    });
    getCategories.map(content => {return tempList.push({id: content.id, title: content.title})});
    return categoriesList.sort((a,b) => {let x = a.id.toLowerCase(), y = b.id.toLowerCase(); return x < y ? 1 : -1})
  };
  const makeTagsList = (array) => {
    let i = 0; tagsList.splice(0, tagsList.length)
    array.map(value => {
      return tempList.map(temp => {
        if(temp.id == value[i]) return tagsList.push(temp), i++
      })
    })
  };
  const removeTagOnTagsList = (value) => {
    if(tagsList.length == 0 && (checkedCategories.length == 0 || checkedCategories[0].length == 0)) {
      return tagsList = reactive([]), checkedCategories = reactive([])
    }
    tagsList.map((content,i) => {
      if(content.id == value) {
        return tagsList.splice(i, 1), checkedCategories.map(content => content.filter((obj,i) => {if(obj == value) content.splice(i,1)}))
      }
    });
  };
  const onCheckedCategoriesChange = (value) => {
    if(value && value.length !== 0) {
      if(value.length > 1) checkedCategories.splice(1, value.length-1);
      getFilteredProjects(value); makeTagsList(value);
    }
  };
  
  watch(removedTag, () => nextTick(removeTagOnTagsList(removedTag)), {deep: true});
  watch(checkedCategories, (newCategory) => {
    // if(newCategory[0].length == 0) getAllProjects();
    nextTick(onCheckedCategoriesChange(checkedCategories)), {deep: true}
  });
  watch(checkedCategories, () => nextTick(removeTagOnTagsList(removedTag)), {deep: true});
  // Executes logic after the component is mounted
  onMounted(() => {
    getAllProjects();
    getAllCategories();
  });
  // Executes logic after the component is updated
  onUpdated(() => {
    getAllCategories();
  });
</script>
<script>
  const isFilterOpen = ref(false); const isArticleOpen = ref(false);
  export default {
    data() {
      return {
        isFilterOpen: isFilterOpen,
        isArticleOpen: isArticleOpen,
        errors: [],
      }
    },
    components: {
      isFilterOpen, isArticleOpen
    },
    methods: {
      closeFilterDropdown(event) {
        isFilterOpen.value = false
        event.stopPropagation();
      },
      clickFilterMenu(event) {
        isFilterOpen.value = true
        event.stopPropagation();
      },
      closeArticleDropdown(event) {
        isArticleOpen.value = false
        event.stopPropagation();
      },
      clickArticle(event) {
        isArticleOpen.value = true
        event.stopPropagation();
      },
    },
  }
</script>

<template>
  <section class="flex flex-col">
    <h1 class="text-center p-4 uppercase">{{ projectTitlePage }}</h1>
    <div class="flex flex-row">
      <button 
        id="filterbtnprojects"
        name="filterbtnprojects"
        type="menu"
        class="filter-btn filter-exit" 
        aria-label="Bouton pour ouvrir le menu des filtres"
        @click="(e) => clickFilterMenu(e)"
      >
        <font-awesome-icon icon="fa-solid fa-filter"></font-awesome-icon>
      </button>
      <ProjectFilterMenu 
        :categories-list="categoriesList"
        :checked-categories="checkedCategories"
        :update:categories-list="categoriesList"
        :update:checked-categories="checkedCategories"
        v-click-outside="(e) => closeFilterDropdown(e)" 
      ></ProjectFilterMenu>
      <ProjectTagsBar 
        :tags-list="tagsList"
        :update:tags-list="tagsList"
        :removed-tag="removedTag"
        :update:removed-tag="removedTag"
      ></ProjectTagsBar>
    </div>
  </section>
  <section class="flex flex-col items-center">
    <ProjectSliderWrapper 
      :project-i-d="projectID" 
      :key="projectID" 
      v-click-outside="(e) => closeArticleDropdown(e)"
      :is-article-open="isArticleOpen"
    ></ProjectSliderWrapper>
  </section>
  <section 
    class="flex flex-row" 
    :class="[projectsList.length !== 0 ? '' : 'justify-center mt-4']"
  >
    <div 
      :class="[projectsList.length !== 0 ? 'grid grid-articles-container' : 'flex flex-row']" 
      class="h-full m-1"
    >
      <a @click="(e) => clickArticle(e)">
        <ProjectArticles 
          :project-content="projectsList"
          @handle-article-id="(e) => onClickProject(e)"
        ></ProjectArticles>
      </a>
    </div>
  </section>
</template>

<style lang="css">
  /* Projects List */
  .min-h-45 {
    min-height: 11.25rem;
  }

  .color-bg-article {
    background-color: var(--color-bg-article);
  }

  .color-border-article-2 {
    border-color: var(--color-bg-article-2);
  }

  .color-date {
    color: var(--color-date);
  }
  
  .grid-articles-container {
    grid-template-columns: repeat(1, 1fr);
  }
  
  @media (min-width: 1000px), (orientation: landscape) {
    .grid-articles-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>