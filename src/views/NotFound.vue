<script setup>
import App from "@/App.vue";
import { reactive, ref } from "vue";
import anime from "animejs/lib/anime.es.js";
import { notFoundContentList } from "@/assets/js/ProjectArraysList";
const { ApiURL, Language } = App.components;
let notFoundContent = reactive([]);

notFoundContentList
  .filter((content) => content.code == Language)
  .map((content) => content.data.map((content) => notFoundContent.push(content)));
const isVanishingCabinetBirdVisible = ref(false), isChimneyColumnBirdVisible = ref(false);

const openTheVanishingCabinetAndLetTheBirdFlyTimeLine = () => {
  const tl = anime.timeline({
    duration: 2300,
  });
  tl.add({
    targets: "#vanishingcabinet .doors .left",
    width: 32,
    duration: 1000,
    easing: "easeInOutCirc",
    complete: () => {
      isVanishingCabinetBirdVisible.value = true;
    },
  }).add({
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
};
</script>

<template>
  <section
    v-for="nav of notFoundContent"
    class="flex flex-col items-center w-full"
  >
    <div id="animationwrapper" class="block w-full h-96 relative z-50">
      <div id="fireplace">
        <div class="smoke-column"></div>
        <div class="top"></div>
        <div class="chimney"></div>
        <div class="chimney-shadow"></div>
        <div class="chimney-fire-wrapper">
          <div id="flame-1" class="flame"></div>
          <div id="flame-2" class="flame"></div>
          <div id="flame-3" class="flame"></div>
          <ul class="metalbars">
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="bottom"></div>
      </div>
      <div id="cabinet">
        <div id="hand">
          <div class="hand-top">
            <ul class="fingers">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="thumb">
            <div class="finger"></div>
          </div>
          <div class="palm"></div>
          <div class="wrist"></div>
        </div>
        <div class="top"></div>
        <div class="drawers">
          <div class="top-left">
            <div class="btn"></div>
          </div>
          <div class="top-right">
            <div class="btn"></div>
          </div>
          <div class="bottom-center">
            <div class="btn"></div>
          </div>
        </div>
        <div class="bottom">
          <ul class="legs">
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div
        id="vanishingcabinet"
        @click.once="openTheVanishingCabinetAndLetTheBirdFlyTimeLine"
      >
        <div class="top"></div>
        <div class="doors">
          <div class="left">
            <div class="btn"></div>
          </div>
          <div class="right">
            <div class="btn"></div>
          </div>
        </div>
        <div class="bottom">
          <ul class="legs">
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div id="bird1" v-if="isVanishingCabinetBirdVisible == true">
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
            <span class="text-blue-500">"{{ nav.text2 }}"</span>.
          </p>
          <p class="text-xl font-semibold">{{ nav.text3 }}</p>
        </div>
        <ul class="flex flex-col justify-center items-center">
          <li
            v-for="link of nav.data"
            class="block w-full m-2 p-3 border-none color-nav-link text-xl font-semibold duration-500"
          >
            <a
              :href="link.url"
              class="flex flex-row items-center w-full min-w-72 min-h-12"
            >
              <font-awesome-icon
                :icon="link.icon"
                class="fa-xl size-6 border-2 border-solid p-2 btn-border-color rounded-xl"
              />
              <span class="text-xl mx-6 color-nav-link">{{ link.title }}</span>
            </a>
          </li>
        </ul>
        <div class="flex flex-row justify-center items-center w-full p-4">
          <p class="text-xl font-semibold">
            <span>{{ nav.text4 }}</span>
            <span class="text-blue-500">"{{ nav.text5 }}"</span>.
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
/* Cheminée */
#fireplace {
  width: 440px;
  height: 340px;
  background-color: rgb(82, 81, 81);
  position: absolute;
  left: 50%;
  top: 0;
  transform: translatex(-50%) scale(0.6);
  transform-origin: center bottom;
  #fireplace::before {
    width: 400px;
    height: 400px;
    background-color: gray;
    position: absolute;
    left: 20px;
    top: 0px;
    content: "";
  }
  .smoke-column {
    width: 315px;
    height: 250px;
    background-color: gray;
    position: absolute;
    left: 15%;
    bottom: 100%;
    z-index: 0;
  }
  .top {
    width: 100%;
    height: 40px;
    background-color: gray;
    position: absolute;
    top: -40px;
    left: 0px;
    &::before {
      width: 420px;
      height: 14px;
      background-color: rgb(104, 104, 104);
      position: absolute;
      left: 10px;
      bottom: -14px;
      content: "";
    }
  }
  .chimney {
    width: 280px;
    height: 258px;
    border: 16px solid transparent;
    border-top: 16px solid rgb(78, 78, 78);
    border-radius: 50%;
    position: absolute;
    bottom: -92px;
    left: 50%;
    transform: translatex(-50%);
    z-index: 10;
    &::before,
    &::after {
      width: 16px;
      height: 149px;
      background-color: rgb(78, 78, 78);
      position: absolute;
      bottom: 62px;
      content: "";
    }
    &::before {
      left: 26px;
    }
    &::after {
      right: 26px;
    }
  }
  .chimney-shadow {
    width: 270px;
    height: 270px;
    border: 20px solid transparent;
    border-radius: 50%;
    border-top: 20px solid rgb(54, 54, 54);
    position: absolute;
    bottom: -115px;
    left: 50%;
    transform: translatex(-50%);
    z-index: 9;
    &::before,
    &::after {
      width: 30px;
      height: 170px;
      background-color: rgb(54, 54, 54);
      position: absolute;
      bottom: 60px;
      content: "";
    }
    &::before {
      left: 28px;
    }
    &::after {
      right: 28px;
    }
  }
  .chimney-fire-wrapper {
    width: 180px;
    height: 150px;
    background-color: rgb(48, 48, 48);
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translatex(-50%);
    z-index: 8;
    .metalbars {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100px;
      height: 50px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 5;
      li:nth-child(1),
      li:nth-child(2) {
        width: 5px;
        height: 52px;
        background-color: rgb(68, 68, 68);
        bottom: -5px;
      }
      li:nth-child(1) {
        left: 15px;
      }
      li:nth-child(2) {
        right: 15px;
      }
    }
    .flame {
      width: 75px;
      height: 75px;
      background: #00bd7e;
      border-radius: 0% 40% 60% 40%;
      position: relative;
      transform: scaleX(0.7);
      filter: drop-shadow(0 0 10px #027e55);
    }
    #flame-1 {
      width: 95px;
      height: 95px;
      background: #00bd7e;
      border-radius: 0% 50% 70% 50%;
      top: 30%;
      left: 25%;
      transform: scale(1);
      animation: scale-up 2s ease-in-out infinite;
      z-index: 1;
    }
    #flame-2 {
      top: -20%;
      left: 10%;
      animation: scale-up 2s ease-in-out infinite;
      z-index: 0;
    }
    #flame-3 {
      top: -70%;
      left: 50%;
      animation: scale-up 3s ease-in-out infinite;
      z-index: 2;
    }
  }
  .bottom {
    width: 480px;
    height: 60px;
    background-color: rgb(104, 104, 104);
    position: absolute;
    bottom: -60px;
    left: -20px;
    z-index: 15;
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

/* Meuble à gauche */
#cabinet {
  display: none;
}
#hand {
  display: none;
}
/* Armoire à disparaître */
#vanishingcabinet {
  display: none;
}

@media (min-width: 1000px) {
  #cabinet {
    display: block;
    width: 300px;
    height: 90px;
    background-color: dimgray;
    position: absolute;
    top: 68%;
    bottom: 0;
    left: 0;
    transform: translatex(20%) scale(1);
    transform-origin: center bottom;
    .top {
      width: 100%;
      height: 5px;
      background-color: gray;
      position: relative;
      top: 0;
      left: 0;
    }
    .drawers {
      width: 100%;
      height: 40px;
      background-color: transparent;
      border-bottom: 2px solid black;
      position: relative;
      top: 0;
      .top-left,
      .top-right {
        width: 50%;
        height: 100%;
        background-color: transparent;
        position: absolute;
        top: 0;
        .btn {
          width: 10px;
          height: 5px;
          background-color: gray;
          position: absolute;
          top: 50%;
          left: 50%;
        }
      }
      .top-left {
        border-right: 1px solid black;
        left: 0;
      }
      .top-right {
        border-left: 1px solid black;
        right: 0;
      }
      .bottom-center {
        width: 100%;
        height: 50px;
        background-color: transparent;
        position: absolute;
        top: 100%;
        .btn {
          width: 20px;
          height: 5px;
          background-color: gray;
          position: absolute;
          top: 50%;
          left: 50%;
        }
      }
    }
    .bottom {
      width: 100%;
      height: 5px;
      background-color: gray;
      position: absolute;
      bottom: -5px;
      .legs {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 0;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        li:nth-child(1),
        li:nth-child(2) {
          width: 5px;
          height: 12px;
          background-color: rgb(68, 68, 68);
          position: relative;
        }
        li:nth-child(1) {
          left: 0;
        }
        li:nth-child(2) {
          right: 0;
        }
      }
    }
  }
  #hand {
    display: block;
    width: 50px;
    height: 50px;
    background-color: transparent;
    position: absolute;
    top: -50%;
    left: 50%;
    .fingers {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -40%;
      li:nth-child(1),
      li:nth-child(2),
      li:nth-child(3),
      li:nth-child(4) {
        width: 5px;
        background-color: gray;
        position: absolute;
      }
      li:nth-child(1) {
        height: 23px;
        top: -6%;
        left: 20%;
      }
      li:nth-child(2) {
        height: 25px;
        top: -10%;
        left: 37%;
      }
      li:nth-child(3) {
        height: 20px;
        top: 0;
        right: 37%;
      }
      li:nth-child(4) {
        height: 15px;
        top: 10%;
        right: 20%;
      }
    }
    .thumb {
      width: 20px;
      height: 10px;
      background-color: gray;
      position: absolute;
      top: 25%;
      left: 5%;
      .finger {
        width: 7px;
        height: 20px;
        background-color: gray;
        border-bottom-left-radius: 10px;
        position: absolute;
        bottom: 0;
        left: -10%;
      }
    }
    .palm {
      width: 30px;
      height: 30px;
      background-color: gray;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      position: absolute;
      top: 0;
      left: 20%;
      z-index: 1;
    }
    .wrist {
      width: 20px;
      height: 20px;
      background-color: gray;
      position: absolute;
      top: 50%;
      left: 32%;
      z-index: 0;
    }
  }
  #vanishingcabinet {
    display: block;
    width: 100px;
    height: 150px;
    background-color: dimgray;
    position: absolute;
    top: 54%;
    right: 20%;
    transform: translatex(20%) scale(1);
    transform-origin: center bottom;
    .top {
      width: 100%;
      height: 5px;
      background-color: gray;
      position: absolute;
      top: 0;
    }
    .doors {
      width: 100%;
      height: 95%;
      background-color: black;
      position: absolute;
      top: 5px;
      left: 0;
      .left,
      .right {
        width: 50%;
        height: 100%;
        background-color: gray;
        position: absolute;
        top: 0;
        .btn {
          width: 5px;
          height: 15px;
          background-color: dimgray;
          position: absolute;
          top: 50%;
        }
      }
      .left {
        border-right: 1px solid black;
        left: 0;
        .btn {
          left: 70%;
        }
      }
      .right {
        border-left: 1px solid black;
        right: 0;
        .btn {
          right: 70%;
        }
      }
    }
    .bottom {
      width: 100%;
      height: 5px;
      background-color: gray;
      position: absolute;
      bottom: 0;
      .legs {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 0;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        li:nth-child(1),
        li:nth-child(2) {
          width: 5px;
          height: 12px;
          background-color: rgb(68, 68, 68);
          position: relative;
        }
        li:nth-child(1) {
          left: 0;
        }
        li:nth-child(2) {
          right: 0;
        }
      }
    }
  }
}

@keyframes scale-up {
  0%,
  100% {
    transform: scale(1) rotatez(45deg);
  }
  50%,
  90% {
    transform: scale(0.96) rotatez(45deg);
  }
  30%,
  75% {
    transform: scale(0.9) rotatez(45deg);
  }
}
</style>