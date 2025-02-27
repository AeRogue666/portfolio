<script setup>

</script>

<template>
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
</template>

<style lang="scss">
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