<script setup>
import { onMounted, reactive, ref } from "vue";
import anime from "animejs/lib/anime.es.js";
import { notFoundContentList } from "@/assets/js/ProjectArraysList";
import { useSeoMeta } from "@unhead/vue";
import NotFoundFireplaceAnimation from "@/components/NotFoundFireplaceAnimation.vue";
import NotFoundCabinetAnimation from "@/components/NotFoundCabinetAnimation.vue";
import NotFoundVanishingCabinetAnimation from "@/components/NotFoundVanishingCabinetAnimation.vue";

const props = defineProps({
  Language: String,
  PortfolioTitle: String,
  routerLink: Array,
  themeColor: String,
});
const { Language, PortfolioTitle, routerLink } = props, languageCode = ref(''), isVanishingCabinetBirdVisible = ref(false), isChimneyColumnBirdVisible = ref(false);

let notFoundContent = reactive([]);
const filterArrayContent = (array, final) => {
  array.filter(content => content.code == (languageCode.value || Language)).map(content => final.push(content))
},
  getLanguage = () => {
    if (typeof Language == 'undefined' || Language.length == 0) languageCode.value = localStorage.getItem('languageCode');
  },
  openTheVanishingCabinet = () => {
  anime({
    targets: "#vanishingcabinet .doors .left",
    width: 32,
    duration: 1000,
    easing: "easeInOutCirc",
    complete: () => {
      isVanishingCabinetBirdVisible.value = true;
    },
  })
},
  birdFlying = () => {
    anime({
      targets: '#bird1',
      keyframes: [
        { translateY: -30 },
        { translateX: -50 },
        { translateY: -60 },
        { translateX: -100 },
        { translateY: -90 },
        { translateX: -150 },
        { translateY: -120 },
        { translateX: -200 },
        { translateY: -150 },
        { translateX: -250 },
        { translateY: -180 },
        { translateX: -270 },
      ],
      duration: 1500,
      complete: () => {
        (isChimneyColumnBirdVisible.value = true),
          (isVanishingCabinetBirdVisible.value = false);
      },
    })
  };

useSeoMeta({
  title: `${routerLink[0].notfound} - ${PortfolioTitle}`,
  description: 'Error 404 Not Found page',
});

onMounted(() => {
  getLanguage();
  filterArrayContent(notFoundContentList, notFoundContent);
});

/* const openTheVanishingCabinetAndLetTheBirdFlyTimeLine = () => {
  const tl = anime.timeline({
    duration: 1000,
  });
  tl.add({
    targets: "#vanishingcabinet .doors .left",
    width: 32,
    duration: 1000,
    easing: "easeInOutCirc",
    complete: () => {
      isVanishingCabinetBirdVisible.value = true;
    },
  }) .add({
    targets: "#bird1",
    keyframes: [
      { translateY: -30 },
      { translateX: -50 },
      { translateY: -60 },
      { translateX: -100 },
      { translateY: -90 },
      { translateX: -150 },
      { translateY: -120 },
      { translateX: -200 },
      { translateY: -150 },
      { translateX: -250 },
      { translateY: -180 },
      { translateX: -270 },
    ],
    delay: 1200,
    duration: 2400,
    easing: "steps(12)",
    begin: () => {
      console.log("ok");
    },
    complete: () => {
      (isChimneyColumnBirdVisible.value = true),
        (isVanishingCabinetBirdVisible.value = false);
    },
  });
}; */
</script>

<template>
  <section v-for="nav of notFoundContent" class="flex flex-col items-center w-full">
    <div id="animationwrapper" class="block w-full h-96 relative z-50">
      <NotFoundFireplaceAnimation />
      <NotFoundCabinetAnimation />
      <NotFoundVanishingCabinetAnimation @click.once="openTheVanishingCabinet" />
      <div id="bird1" v-show="isVanishingCabinetBirdVisible" @click.once="birdFlying">
        <div class="head">
          <div class="eye1">
            <div class="eyeball"></div>
          </div>
          <div class="beak"></div>
        </div>
        <div class="feather1"></div>
        <div class="feather2">
          <div class="inner"></div>
        </div>
      </div>
      <div id="bird2" v-if="isChimneyColumnBirdVisible == true">
        <div class="head">
          <div class="eye1">
            <div class="eyeball"></div>
          </div>
          <div class="eye2">
            <div class="eyeball"></div>
          </div>
          <div class="beak"></div>
        </div>
        <div class="feather1"></div>
        <div class="feather2">
          <div class="inner"></div>
        </div>
      </div>
      <div class="ground"></div>
    </div>
    <div class="flex flex-col justify-center items-center w-full h-full">
      <div class="flex flex-col items-center w-full">
        <h1 class="text-5xl font-semibold py-4">{{ nav.title }}</h1>
        <h2 class="text-2xl font-semibold">{{ nav.subtitle }}</h2>
      </div>
      <div class="flex flex-col items-center w-full">
        <div class="flex flex-col items-center text-start p-4">
          <p class="text-xl font-semibold">
            <span>{{ nav.text1 }}</span>
            <span :class="[props.themeColor == 'light' ? 'text-blue-600' : 'text-blue-500']">"{{ nav.text2 }}"</span>.
          </p>
          <p class="text-xl font-semibold">{{ nav.text3 }}</p>
        </div>
        <ol class="flex flex-col justify-center items-center">
          <li v-for="link of nav.data"
            class="block w-full m-2 p-3 border-none color-nav-link text-xl font-semibold duration-500">
            <a :href="link.url" class="flex flex-row items-center w-full min-w-72 min-h-12">
              <font-awesome-icon :icon="link.icon"
                :class="[props.themeColor == 'light' ? 'border-blue-600' : 'border-blue-500']"
                class="fa-xl size-6 border-2 border-solid p-2 rounded-xl" />
              <span class="text-xl mx-6 color-nav-link">{{ link.title }}</span>
            </a>
          </li>
        </ol>
        <div class="flex flex-row justify-center items-center w-full p-4">
          <p class="text-xl font-semibold">
            <span>{{ nav.text4 }}</span>
            <span :class="[props.themeColor == 'light' ? 'text-blue-600' : 'text-blue-500']">"{{ nav.text5 }}"</span>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
/* Animation Wrapper */
#animationwrapper {
  width: 100%;
  height: auto;
  min-height: 384px;

  .ground {
    width: 100%;
    height: 15px;
    background-color: rgb(200, 90, 70);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translatex(-50%);
  }
}

#bird1,
#bird2 {
  width: 40px;
  height: 20px;
  background-color: #ffb700;
  border-radius: 0 0 200px 200px;
  position: absolute;
  bottom: 10%;
  right: 20%;

  .head {
    width: 20px;
    height: 16px;
    background-color: #ffa200;
    border-radius: 100px 100px 0 0;
    position: relative;
    top: -82%;
    left: 0%;

    .eye1,
    .eye2 {
      width: 10px;
      height: 10px;
      background-color: white;
      border-radius: 50%;
      position: relative;
      bottom: -3px;
      right: 0;

      .eyeball {
        width: 5px;
        height: 5px;
        background-color: black;
        border-radius: 50%;
        position: relative;
        top: 4px;
        right: 0;
      }
    }

    .beak {
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-right: 15px solid #ff7b00;
      position: relative;
      bottom: 7px;
      right: 16px;
    }
  }

  .feather1 {
    width: 0;
    height: 0;
    border-top: 30px solid #ffaa00;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: relative;
    bottom: 40px;
    left: 40px;
    transform: rotate(45deg);
  }

  .feather2 {
    width: 45px;
    height: 21px;
    background-color: #ffb700;
    border-radius: 0 0 170px 170px;
    position: relative;
    bottom: 46px;
    right: -10px;
    animation: flap 1s infinite ease;
    transform-origin: right;

    .inner {
      width: 35px;
      height: 17px;
      background-color: #ffc300;
      border-radius: 0 0 120px 120px;
      position: relative;
      right: 0;
    }
  }

  @keyframes flap {
    50% {
      transform: rotate(10deg);
      transform-origin: center left;
    }
  }

  @keyframes fly {
    50% {
      transform: translateY(50px);
    }
  }
}

#bird2 {
  position: absolute;
  top: 24%;
  left: 57%;

  .head {
    top: -79% !important;

    .eyeball {
      top: 3px !important;
      left: 2px;
    }

    .eye1 {
      bottom: -3px;
      left: -3px;
    }

    .eye2 {
      bottom: 7px;
      right: -12px;
    }
  }

  .beak {
    right: 0 !important;
    transform: rotate(-50deg);
    z-index: 1;
  }

  .feather1 {
    left: unset;
    right: -54px;
  }

  .feather2 {
    animation: none;
  }
}
</style>