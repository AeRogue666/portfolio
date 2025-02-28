<script setup>
import { ref } from 'vue';
const isLightVisible = ref(false);

const andTheLightAppears = () => {
    isLightVisible.value = !isLightVisible.value
};
</script>

<template>
    <div class="window-container">
        <div class="window hb ha">
            <div class="cat-container">
                <div class="cat">
                    <div class="head hb">
                        <div class="ears">
                            <div class="ear left ha"></div>
                            <div class="ear right ha"></div>
                        </div>
                        <div class="eye hb"></div>
                        <div class="mouth"></div>
                        <div class="nose hb ha"></div>
                    </div>
                    <div class="body hb ha">
                        <div class="tail-inside"></div>
                    </div>
                    <div class="tail">
                        <div class="tail">
                            <div class="tail">
                                <div class="tail">
                                    <div class="tail">
                                        <div class="tail tip"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bubble"></div>
                </div>
            </div>
            <div class="background">
                <div @click="andTheLightAppears" class="lamp hb ha"></div>
                <div class="bulb"></div>
                <div :class="[isLightVisible == true ? 'visible' : 'hidden']" class="light"></div>
                <div class="apartment">
                    <div class="leftwall ha"></div>
                    <div class="rightwall"></div>
                    <div class="door hb ha">
                        <div class="door-outer hb ha"></div>
                        <div class="door-inner hb ha"></div>
                    </div>
                    <div class="cabinet">
                        <div class="top"></div>
                        <div class="drawers">
                            <div class="top-left">
                                <div class="btn"></div>
                            </div>
                            <div class="top-right">
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
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.dark {
    --color-bg-window: #2c2c2c;
    --color-outline-window: #2d2624;
    --color-border-window: #2ca6d2;
    --color-lamp: #435d75;
    --color-cat: #f19b34;
    --color-light: #c6daff;
    --color-eye: #2c2c2c;
    --color-nose: #ef9295;
    --color-tail: #d07233;
    --color-carpet: #ff451b;
    --color-wall: #6f440e;
    --color-wall-lighted: #7c4c10;
    --color-wall-shadowed: #633c0d;
    --color-door: #691d0b;
    --color-cabinet: #a5612a;
}

.light {
    --color-bg-window: #2c2c2c;
    --color-outline-window: #85706a;
    --color-border-window: #cad2d4;
    --color-lamp: #395980;
    --color-cat: #f19b1a;
    --color-light: #fff;
    --color-eye: #2c2c2c;
    --color-nose: #ef927b;
    --color-tail: #d07219;
    --color-carpet: #ff4500;
    --color-wall: #f19b34;
    --color-wall-lighted: #ef9e3e;
    --color-wall-shadowed: #df9234;
    --color-door: #ff4500;
    --color-cabinet: #a5612a;
}

.window-container {
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;

    * {
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

    .window {
        width: 16rem;
        height: 23rem;
        background-color: transparent;
        outline: 0.75rem solid var(--color-outline-window);
        border-left: 0.3rem solid var(--color-border-window);
        border-right: 0.3rem solid var(--color-border-window);
        position: relative;
        z-index: 1;

        &::before,
        &::after {
            background: linear-gradient(var(--color-border-window) 50%, var(--color-outline-window) 50%);
        }

        &::before {
            width: 19rem;
            height: 1rem;
            bottom: -1rem;
            left: -2rem;
        }

        &::after {
            width: 16.875rem;
            height: 1rem;
            top: 12rem;
            left: -0.5rem;
        }
    }
}

.cat-container {
    width: 16rem;
    /* 21.875rem */
    height: 12.5rem;
    position: relative;
    bottom: -46%;
    left: 0;

    * {
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

    .shadow {
        width: 19rem;
        height: 0.6rem;
        background-color: black;
        opacity: 0.2;
        border-radius: 0.624rem;
        bottom: 0;
        left: 9%;
    }

    .carpet {
        width: 19rem;
        height: 0.6rem;
        background-color: var(--color-carpet);
        bottom: 12%;
        left: 9%;

        &::after {
            width: 100%;
            height: 0.6rem;
            background-color: var(--color-light);
            bottom: -100%;
            transform-origin: top;
            transform: perspective(18.75rem) rotateX(-30deg);
        }
    }

    .cat {
        width: 5rem;
        height: 4.3rem;
        background-color: var(--color-cat);
        border-radius: 1rem 5rem 5rem 1rem;
        bottom: 0;
        right: 6%;

        .head {
            &::before {
                width: 5rem;
                height: 4.3rem;
                background-color: var(--color-cat);
                border-radius: 5rem;
                top: 0;
                right: -3rem;
            }

            .ears {
                width: 2.1875rem;
                height: 1rem;
                bottom: 0;
                left: 0.624rem;

                .ear {
                    width: 1rem;
                    height: 1rem;
                    background-color: var(--color-cat);
                    border-top-left-radius: 1.25rem;
                    bottom: 0;

                    &::after {
                        width: 70%;
                        height: 70%;
                        background-color: var(--color-light);
                        border-top-left-radius: 1.25rem;
                        bottom: 0;
                        left: 20%;
                    }
                }

                .left {
                    left: 0;
                    animation: ear-move 7s none infinite;

                    @keyframes ear-move {
                        0% {
                            transform: scaleY(1);
                        }

                        5% {
                            transform: scaleY(0);
                        }

                        10%,
                        100% {
                            transform: scaleY(1);
                        }
                    }
                }

                .right {
                    left: 1.4375rem;
                }
            }

            .eye,
            .eye::before {
                width: 0.624rem;
                height: 0.4375rem;
                border: 0.1rem solid var(--color-eye);
                border-top: none;
                border-radius: 0 0 1rem 1rem;
            }

            .eye {
                top: 1.125rem;
                left: 1rem;
            }

            .eye::before {
                left: 2rem;
            }

            .mouth {
                width: 1.1rem;
                height: 1rem;
                background-color: var(--color-eye);
                border-radius: 0 0 0.3125rem 0.3125rem;
                top: 2.375rem;
                left: 1.6875rem;
                animation: mouth-move 6s infinite;
                transform-origin: top;

                @keyframes mouth-move {
                    50% {
                        transform: scaleY(0.7);
                    }
                }
            }

            .nose {
                width: 0.75rem;
                height: 0.75rem;
                background-color: var(--color-light);
                border-radius: 50%;
                top: 2rem;
                left: 1.5625rem;
                box-shadow: 12px 0 var(--color-light);

                &::before {
                    width: 0.75rem;
                    height: 0.5rem;
                    background-color: var(--color-light);
                    left: 0.375rem;
                }

                &::after {
                    width: 0;
                    height: 0;
                    border-top: 0.5rem solid var(--color-nose);
                    border-left: 0.3125rem solid transparent;
                    border-right: 0.3125rem solid transparent;
                    bottom: 0.375rem;
                    left: 0.375rem;
                }
            }
        }

        .body {
            width: 8.75rem;
            height: 5.625rem;
            background-color: var(--color-cat);
            border-radius: 3.75rem 3.75rem 0 0;
            bottom: 0;
            right: 4.0625rem;
            animation: sleep 6s infinite;
            transform-origin: bottom right;

            &::before {
                width: 1.875rem;
                height: 0.75rem;
                background-color: var(--color-light);
                border-radius: 0.5rem;
                bottom: 0;
                left: 1.375rem;
                box-shadow: 2.8125rem 0 var(--color-light);
            }

            &::after {
                width: 0.6rem;
                height: 4rem;
                background-color: var(--color-tail);
                border-radius: 0.5rem;
                bottom: 28%;
                left: 32%;
                box-shadow: 2rem 0 var(--color-tail);
            }

            @keyframes sleep {
                50% {
                    transform: scale(1.05, 0.9);
                }
            }

            .tail-inside {
                width: 20%;
                height: 16%;
                background-color: var(--color-tail);
                border-radius: 50% / 250%;
                bottom: 0;
                right: 87%;
            }
        }

        .tail {
            width: 90%;
            height: 18%;
            background-color: var(--color-tail);
            border-radius: 50% / 250%;
            bottom: 0;
            right: 160%;
            z-index: 1;

            .tail {
                width: 1.5625rem;
                height: 100%;
                background-color: inherit;
                border-top-right-radius: 50% 50%;
                border-bottom-right-radius: 50% 50%;
                left: 90%;
                transform: rotate(0deg);
                transform-origin: center left;
                animation: tail-movement 6s none infinite;

                @keyframes tail-movement {
                    5% {
                        transform: rotate(0);
                    }

                    50% {
                        transform: rotate(-10deg);
                    }

                    70%,
                    100% {
                        transform: rotate(0);
                    }
                }
            }

            .tip {
                border-radius: 0 20px 20px 0;
            }
        }

        .bubble {
            width: 1.2rem;
            height: 1.2rem;
            background-color: var(--color-light);
            opacity: 0.4;
            border-radius: 3.125rem;
            border-bottom-left-radius: 0.5rem;
            top: 20%;
            left: 57%;
            animation: bubble-scale 6s infinite;

            @keyframes bubble-scale {
                50% {
                    transform: scale(1.6);
                }
            }
        }
    }
}

.background {
    width: 16rem;
    height: 23rem;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    .lamp {
        width: 5.625rem;
        height: 3.75rem;
        background-color: var(--color-lamp);
        border: 1px solid var(--color-lamp);
        border-radius: 50% 50% 0 0;
        top: 7%;
        left: 3%;
        transform: rotate(-5deg);
        transform-origin: center right;
        z-index: -1;

        &::before {
            width: 1px;
            height: 2rem;
            border: 0.1875rem solid var(--color-lamp);
            top: -57%;
            left: 39%;
        }

        &::after {
            width: 0;
        }
    }

    .bulb {
        width: 1rem;
        height: 2rem;
        border: 1px solid black;
        border-top-color: transparent;
        border-radius: 10% 10% 50% 50%;
        position: absolute;
        top: 20%;
        left: 18%;
        transform: rotate(-7deg);
        z-index: -3;
    }

    .light {
        width: 3.125rem;
        height: 0;
        border: 10rem solid transparent; // border: 5.5rem solid transparent; border-top: none;
        clip-path: polygon(32% -55%, 0 213%, 79% 102%); // border-bottom: 18rem solid #FF6;
        background-color: #ffff66;
        position: absolute;
        top: 14%;
        left: -23%; // left: -9%;
        transform: rotate(-3deg); // transform: rotate(-7deg);
        opacity: 0.3;
        z-index: -2;
    }
}

.apartment {
    width: 100%;
    height: 100%;
    z-index: -5;

    .leftwall {
        width: 33%;
        height: 100%;
        background-color: var(--color-wall);
        left: 0;
        z-index: -6;

        &::after {
            content: '';
            width: 20%;
            height: 100%;
            background-color: var(--color-wall);
            right: -20%;
        }
    }

    .rightwall {
        width: 39%;
        height: 102%;
        background-color: var(--color-wall);
        clip-path: polygon(1000% 0%, 0% 0%, 3% 110%);
        transform: rotateZ(-1deg);
        right: 0;
        z-index: -6;
    }

    .door {
        width: 30%;
        height: 100%;
        background-color: (var(--color-door));
        top: 0;
        left: 37%;
        z-index: -5;

        &::before {
            width: 100%;
            height: 10%;
            background-color: var(--color-wall);
            top: 0;

        }

        .door-inner {
            width: 100%;
            height: 90%;
            background-color: transparent;
            bottom: 0;

            &::after {
                width: 1rem;
                height: 1rem;
                background-color: var(--color-bg-window);
                border-radius: 50%;
                top: 60%;
                right: 10%;
                z-index: 1;
            }
        }

        .door-outer {
            width: 100%;
            height: 90%;
            background-color: transparent;
            border: 2px solid var(--color-bg-window);
            border-bottom: none;
            bottom: 0;
            left: 0;
            z-index: 1;

            &::after {
                width: 5%;
                height: 113%;
                border: 2px solid var(--color-wall-shadowed);
                bottom: 0;
                left: -14%;
                box-shadow: 5.6rem 0 var(--color-wall-shadowed);
                z-index: 1;
            }
        }
    }
}

.cabinet {
    width: 5rem;
    height: 20rem;
    background-color: var(--color-cabinet);
    position: relative;
    bottom: -12%;
    left: 0;

    .top {
        width: 100%;
        height: 5px;
        background-color: var(--color-outline-window);
        position: relative;
        top: 0;
        left: 0;
    }

    .drawers {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border-bottom: 2px solid var(--color-outline-window);
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
                background-color: var(--color-light);
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
    }

    .bottom {
        width: 100%;
        height: 5px;
        background-color: var(--color-outline-window);
        position: absolute;
        bottom: -5px;
    }
}
</style>