<script setup>
import { ref } from 'vue';
const isLightVisible = ref(false);

const andTheLightAppears = () => {
  isLightVisible.value = !isLightVisible.value
};
</script>

<template>
    <div id="workplace"
        alt="Animation CSS représentant un bureau avec deux écrans, un mug, une lampe, un clavier, une souris et un poster d'un ciel étoilé en fond.">
        <div class="desk hb ha">
            <div class="screen1 hb ha">
                <div class="display1 hb ha">
                    <div class="website hb ha">
                        <div class="icon hb ha"></div>
                        <div class="rendering hb ha text-base font-semibold"></div>
                    </div>
                </div>
            </div>
            <div class="screen2 hb ha">
                <div class="display2 hb ha">
                    <div class="vscode hb ha">
                        <div class="code hb ha"></div>
                    </div>
                </div>
            </div>
            <div class="keyboard hb ha"></div>
            <div class="mouse ha"></div>
            <div class="mug hb ha">
                <div class="logo hb ha"></div>
                <ul class="smoke">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div @click="andTheLightAppears" class="lamp hb ha" alt="Cliquez sur la lampe pour l'allumer ou l'éteindre">
            </div>
            <div class="bulb"></div>
            <div :class="[isLightVisible == true ? 'visible' : 'hidden']" class="light"></div>
        </div>
        <div class="poster">
            <div class="main-container">
                <div class="stars"></div>
                <div class="stars2"></div>
                <div class="stars3"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use 'sass:math';
@use 'sass:string';

$starFieldWidth: 496;
$starFieldHeight: 246;
$numLittleStars: 500;
$numMediumStars: 250;
$numBigStars: 200;

#workplace {
    --wood: #d6d6d6;
    --wall: rgb(255, 255, 0);
    width: 40rem;
    height: 22.5rem;
    background-color: transparent;
    position: relative;
    bottom: 1rem;

    div {
        position: absolute;
        box-sizing: border-box;
    }

    .hb::before,
    .ha::after {
        content: "";
        display: block;
        position: absolute;
        box-sizing: border-box;
    }

    .b {
        border: 0.5vmin solid;
    }

    .desk {
        width: 500px;
        height: 20px;
        background-color: var(--wood);
        border-radius: 10px;
        bottom: 10%;
        left: 12%;
        z-index: 1;

        &::before,
        &::after {
            width: 20px;
            height: 70px;
            background-color: #737373;
            border-radius: 0 0 20px 20px;
            bottom: -350%;
        }

        &::before {
            left: 20%;
        }

        &::after {
            left: 75%;
        }

        .screen1 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 168px;
            height: 105px;
            background-color: black;
            bottom: 300%;
            left: 12%;

            &::before {
                width: 15px;
                height: 30px;
                background-color: black;
                bottom: -29%;
                left: 45%;
            }

            &::after {
                width: 50px;
                height: 10px;
                background-color: black;
                bottom: -38%;
                left: 34%;
            }

            .display1 {
                width: 90%;
                height: 90%;
                background-color: rgb(var(--color-background));

                &::before {
                    content: '';
                    width: 100%;
                    height: 0.5rem;
                    background-color: lightcyan;
                    bottom: 0;
                    left: 50%;
                    transform: translate(-50%);
                    z-index: 3;
                }

                &::after {
                    width: 100%;
                    height: 0.5rem;
                    background-color: rgb(var(--color-background));
                    top: 0;
                    left: 50%;
                    transform: translate(-50%);
                    z-index: 3;
                }

                .website {
                    width: 100%;
                    height: 100%;
                    background-color: rgb(var(--color-background));
                    color: var(--color-text);
                    border-top: 7px solid var(--color-bg-article);
                    border-radius: 4px;
                    font-size: 0.5rem;
                    top: 0%;
                    left: 0%;

                    &::before {
                        content: '';
                        width: 30%;
                        height: 30%;
                        background-color: rgb(59 130 246);
                        top: 15%;
                        left: 3%;
                    }

                    .icon {
                        width: 30%;
                        height: 30%;
                        bottom: 30%;
                        right: 20%;

                        &::before {
                            content: '';
                            width: 0.5rem;
                            height: 0.5rem;
                            background-color: rgb(59 130 246);
                            border-radius: 0.15rem;
                            bottom: 1rem;
                            left: 30%;
                        }

                        &::after {
                            content: '';
                            width: 0.5rem;
                            height: 0.5rem;
                            background-color: rgb(59 130 246);
                            border-radius: 0.15rem;
                            bottom: 1rem;
                            left: 5%;
                        }
                    }

                    .rendering {
                        width: 61%;
                        height: 20%;
                        background-color: transparent;
                        top: 15%;
                        right: 0;

                        &::before {
                            content: '';
                            animation: render 4.1s 2.5s linear alternate infinite;
                        }

                        @keyframes render {

                            0%,
                            70% {
                                content: "";
                            }

                            75%,
                            100% {
                                content: "Hello world!";
                            }
                        }
                    }
                }
            }
        }

        .screen2 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 183px;
            height: 120px;
            background-color: black;
            bottom: 352%;
            right: 12%;

            &::before {
                width: 15px;
                height: 40px;
                background-color: black;
                bottom: -34%;
                left: 45%;
            }

            &::after {
                width: 60px;
                height: 10px;
                background-color: black;
                bottom: -41%;
                left: 33%;
            }

            .display2 {
                width: 90%;
                height: 90%;
                background-color: rgb(var(--color-background));

                &::before {
                    width: 100%;
                    height: 0.5rem;
                    background-color: lightcyan;
                    bottom: 0;
                    left: 50%;
                    transform: translate(-50%);
                    z-index: 3;
                }

                .vscode {
                    width: 100%;
                    height: 100%;
                    background-color: rgb(var(--color-background));
                    color: white;
                    border-top: 7px solid var(--color-bg-article);
                    border-radius: 4px;
                    font-size: 0.5rem;
                    top: 0%;
                    left: 0%;

                    &::before {
                        content: '';
                        width: 10%;
                        height: 100%;
                        background-color: var(--color-bg-article-2);
                        top: 0%;
                        left: 0%;
                    }

                    .code {
                        width: 90%;
                        height: 100%;
                        background-color: transparent;
                        top: 0%;
                        right: 0%;

                        &::before {
                            content: '<h1></h1>';
                            color: rgb(var(--color-text));
                            animation: type 4s 2.5s linear alternate infinite;
                        }

                        &::after {
                            content: '<div class="flex flex-row items-start w-auto h-auto"><a src="/" title="Mon Github" target="_blank"></a><a src="/" title="Mon LinkedIn" target="_blank"></a></div>';
                            color: rgb(var(--color-text));
                            top: 10%;
                            left: 0;
                        }

                        @keyframes type {
                            0% {
                                content: "<h1></h1>";
                            }

                            5% {
                                content: "<h1>|</h1>";
                            }

                            10% {
                                content: "<h1></h1>";
                            }

                            15% {
                                content: "<h1>|</h1>";
                            }

                            20% {
                                content: "<h1>H|</h1>";
                            }

                            25% {
                                content: "<h1>He|</h1>";
                            }

                            30% {
                                content: "<h1>Hel|</h1>";
                            }

                            35% {
                                content: "<h1>Hell|</h1>";
                            }

                            40% {
                                content: "<h1>Hello|</h1>";
                            }

                            45% {
                                content: "<h1>Hello |</h1>";
                            }

                            50% {
                                content: "<h1>Hello w|</h1>";
                            }

                            55% {
                                content: "<h1>Hello wo|</h1>";
                            }

                            60% {
                                content: "<h1>Hello wor|</h1>";
                            }

                            65% {
                                content: "<h1>Hello worl|</h1>";
                            }

                            70% {
                                content: "<h1>Hello world|</h1>";
                            }

                            75% {
                                content: "<h1>Hello world!|</h1>";
                            }

                            80% {
                                content: "<h1>Hello world!</h1>";
                            }

                            85% {
                                content: "<h1>Hello world!|</h1>";
                            }

                            90% {
                                content: "<h1>Hello world!</h1>";
                            }

                            95% {
                                content: "<h1>Hello world!|</h1>";
                            }

                            100% {
                                content: "<h1>Hello world!</h1>";
                            }
                        }
                    }
                }
            }
        }

        .keyboard {
            width: 126px;
            height: 5px;
            background-color: black;
            bottom: 110%;
            left: 36%;

            &::before {
                width: 100%;
                height: 5px;
                background-color: black;
                z-index: 1;
            }

            &::after {
                width: 10px;
                height: 5px;
                box-shadow: 0 -0.2rem 0 0 var(--wood), 0.9rem -0.2rem 0 0 var(--wood), 1.8rem -0.2rem 0 0 var(--wood), 2.7rem -0.2rem 0 0 var(--wood), 3.5rem -0.2rem 0 0 var(--wood), 4.3rem -0.2rem 0 0 var(--wood), 5.1rem -0.2rem 0 0 var(--wood), 5.9rem -0.2rem 0 0 var(--wood), 6.8rem -0.2rem 0 0 var(--wood);
                left: 3px;
            }
        }

        .mouse {
            width: 15px;
            height: 5px;
            background-color: gray;
            border-radius: 50% 50% 0 0;
            bottom: 110%;
            right: 35%;

            &::after {
                width: 5px;
                height: 5px;
                background-color: white;
                border-radius: 25% 25% 0 0;
                bottom: 50%;
                left: 36%;
            }
        }

        .mug {
            width: 30px;
            height: 33px;
            background-color: white;
            bottom: 100%;
            left: 20%;

            &::after {
                width: 6px;
                height: 30px;
                border: 6px solid white;
                border-radius: 0 50% 50% 0;
                border-left-color: transparent;
                bottom: 5%;
                left: 90%;
            }

            .logo {
                width: 20px;
                height: 20px;
                border: 10px solid red;
                border-radius: 50%;
                top: 5px;
                left: 4px;

                &::before {
                    width: 50%;
                    height: 50%;
                    border: 5px solid white;
                    border-radius: 50%;
                    bottom: -5px;
                    right: -5px;
                }

                &::after {
                    width: 25%;
                    height: 25%;
                    border: 3px solid white;
                    border-radius: 50%;
                    bottom: 3px;
                    right: -11px;
                }
            }

            .smoke {
                display: flex;
                flex-direction: row;
                width: 30px;
                height: 30px;
                position: absolute;
                animation: wave 4s infinite linear;
                animation-fill-mode: forwards;

                li {
                    display: inline-block;
                    width: 14px;
                    height: 10px;
                    margin: 0 3px;
                    background-color: #faf1d9;
                    border-radius: 0 100%;
                    transform: rotate(12deg);
                }
            }

            @keyframes wave {
                0% {
                    opacity: 0;
                    transform: translateY(-5px);
                }

                50% {
                    opacity: 1;
                    transform: translateY(-15px);
                }

                100% {
                    opacity: 0;
                    transform: translateY(-25px);
                }
            }
        }

        .lamp {
            width: 30px;
            height: 40px;
            background-color: black;
            border: 1px solid black;
            border-bottom: 2px solid dimgray;
            border-radius: 50% 50% 0 0;
            bottom: 420%;
            right: 3%;
            transform: rotate(-10deg);
            transform-origin: center right;
            z-index: 1;

            &::before {
                width: 10px;
                height: 60px;
                border: 7px solid dimgray;
                border-radius: 50% 0 0 0;
                border-right: 1px solid transparent;
                bottom: -110%;
                left: -46%;
                transform: rotate(10deg);
            }

            &::after {
                width: 25px;
                height: 20px;
                background-color: black;
                border: 5px solid black;
                border-radius: 30% 30% 0 0;
                bottom: -156%;
                left: -93%;
                transform: rotate(10deg);
            }
        }

        .bulb {
            height: 30px;
            width: 20px;
            border: 1px solid #737373;
            border-top-color: transparent;
            border-radius: 10% 10% 50% 50%;
            position: absolute;
            top: -376%;
            left: 93%;
            z-index: 0;
        }

        .light {
            width: 3.125rem;
            height: 0;
            border: 6rem solid #ff6;
            clip-path: polygon(0% 140%, 19% -24%, 75% 100%);
            position: absolute;
            top: -330%;
            left: 86%;
            opacity: 0.3;
            z-index: -2;
        }
    }

    .poster {
        width: 500px;
        height: 250px;
        top: 9%;
        left: 12%;

        .main-container {
            display: block;
            width: inherit;
            height: inherit;
            background: linear-gradient(to bottom, #201c2f 0%, #100751 100%);
            position: relative;
        }

        @function create-stars($n) {
            $stars: "496px 246px #FFF";
            @for $i from 2 through $n {
                $stars: "#{$stars} , #{math.random($starFieldWidth)}px #{math.random($starFieldHeight)}px #FFF";
            }
            @return string.unquote($stars);
        }

        @mixin star-template($numStars, $starSize) {
            width: $starSize;
            height: $starSize;
            background: transparent;
            border-radius: 50%;
            box-shadow: create-stars($numStars);
            z-index: 0;

            &:after {
                content: " ";
                width: $starSize;
                height: $starSize;
                background: transparent;
                border-radius: 50%;
                position: absolute;
                top: 0;
                box-shadow: create-stars($numStars);
            }
        }

        .stars {
            @include star-template($numLittleStars, 1px);
        }

        .stars2 {
            @include star-template($numMediumStars, 2px);
        }

        .stars3 {
            @include star-template($numBigStars, 3px);
        }
    }
}
</style>