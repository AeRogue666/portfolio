<script setup></script>

<template>
    <div class="empty-container">
        <div class="cat">
            <div class="head">
                <div class="ears">
                    <div class="ear left ha"></div>
                    <div class="ear right ha"></div>
                </div>
                <div class="eye hb ha"></div>
                <div class="eye hb ha"></div>
                <div class="glasses">
                    <div class="g-top"></div>
                    <div class="glass g-left"></div>
                    <div class="glass g-right"></div>
                </div>
                <div class="mouth"></div>
                <div class="nose hb ha"></div>
            </div>
            <div class="body hb">
                <ul class="fur">
                    <li class="stripe hb"></li>
                    <li class="stripe hb"></li>
                </ul>
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
        </div>
    </div>
</template>

<style lang="scss">
[data-theme="dark"] {
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

[data-theme="light"] {
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

.empty-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100%;

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

    .cat {
        width: 10rem;
        height: 10rem;
        background-color: var(--color-cat);
        border-radius: 20%;
        position: relative;
        top: 0;
        z-index: 1;

        .head {
            width: 100%;
            height: 60%;
            background-color: transparent;
            position: relative;

            .ears {
                width: 100%;
                height: 17%;
                top: -17%;
                left: 0;

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
                    left: 36%;
                }

                .right {
                    right: 36%;
                    transform: rotateY(180deg);
                }
            }

            .eye {
                width: 10%;
                height: 5%;
                top: 30%;
                left: 33%;

                &::before {
                    width: 0.7rem;
                    height: 0.7rem;
                    background: #fff;
                    border-radius: 50%;
                    top: 0;
                    left: 21%;
                }

                &::after {
                    width: 0.3rem;
                    height: 0.3rem;
                    background: #222;
                    border-radius: 50%;
                    top: 75%;
                    left: 37%;
                }
            }

            .eye+.eye {
                left: 57%;
            }

            .mouth {
                width: 1rem;
                height: 0.5rem;
                background-color: var(--color-eye);
                border-radius: 0 0 0.3125rem 0.3125rem;
                top: 45%;
                left: 45%;
            }

            .nose {
                width: 0.75rem;
                height: 0.75rem;
                background-color: var(--color-light);
                border-radius: 50%;
                top: 39%;
                left: 42.6%;
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

            .glasses {
                width: 42%;
                height: 10%;
                position: absolute;
                top: 30%;
                left: 28%;
                z-index: 10;

                &:hover .glass,
                &:focus .glass,
                &:hover .g-top {
                    display: none;
                }

                .g-top {
                    width: 28.57%;
                    height: 70%;
                    background-color: #3c3c3c;
                    border-radius: 0.3rem;
                    position: absolute;
                    top: 10%;
                    left: 38%;
                }

                .glass {
                    width: 2rem;
                    height: 1rem;
                    background-image: linear-gradient(to bottom, #4DE2DC, #3888D1 70%);
                    border: 3px solid #3c3c3c;
                    border-bottom: transparent;
                    position: absolute;
                    top: -0.1rem;
                }

                .g-left {
                    border-radius: 0.75rem 0.75rem 2rem 2rem;
                    left: 0;
                    transform: rotate(2deg);
                }

                .g-right {
                    border-radius: 0.75rem 0.75rem 2rem 2rem;
                    right: -0.2rem;
                    transform: rotate(-2deg);
                }
            }
        }

        .body {
            width: 100%;
            height: 40%;
            background-color: transparent;
            position: relative;

            &::before {
                width: 1.875rem;
                height: 0.75rem;
                background-color: var(--color-light);
                border-radius: 0.5rem;
                bottom: 0;
                left: 25%;
                box-shadow: 2.8125rem 0 var(--color-light);
            }

            .fur {
                width: 100%;
                height: 90%;
                top: -10%;

                .stripe {
                    width: 2rem;
                    height: 0.6rem;
                    background-color: var(--color-tail);
                    border-radius: 0 0.5rem 0.5rem 0;
                    top: 28%;
                    left: 0;

                    &::before {
                        width: 2rem;
                        height: 0.6rem;
                        background-color: var(--color-tail);
                        border-radius: 0.5rem 0 0 0.5rem;
                        bottom: 0;
                        right: -401%;
                    }
                }

                .stripe+.stripe {
                    top: 60%;
                }
            }

            .tail {
                width: 24%;
                height: 18%;
                background-color: var(--color-tail);
                border-radius: 50% / 250%;
                bottom: 0;
                right: 0;
                z-index: -1;

                .tail {
                    width: 1.6rem;
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
            }

            .tip {
                border-radius: 0 1rem 1rem 0;
            }
        }
    }
}
</style>