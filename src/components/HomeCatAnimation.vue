<script setup>
</script>

<template>
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

.cat-container {
    width: 15rem; /* 21.875rem */
    height: 6rem;
    position: relative;

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

@media (orientation: landscape) or (min-width: 63rem) {
    .cat-container {
        height: 14.4rem;
    }
}
</style>