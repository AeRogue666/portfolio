<script setup>

</script>

<template>
    <div class="flex flex-col justify-center items-center w-full h-96 my-4">
        <div class="cartoon hb" alt="Portrait d'Aurélien GASNIER, auteur de ce portfolio, réalisé en CSS.">
            <div class="neck"></div>
            <div class="shoulder"></div>
            <div class="back-hair r ha hb"></div>
            <div class="ear ha"></div>
            <div class="head">
                <div class="forehead ha hb"></div>
                <div class="hair-top r"></div>
                <div class="eye r ha hb"></div>
                <div class="eye r ha hb"></div>
                <div class="glasses">
                    <div class="g-top"></div>
                    <div class="glass g-left"></div>
                    <div class="glass g-right"></div>
                </div>
                <div class="beard ha hb"></div>
                <div class="top-lip hb">
                    <div class="lip r ha"></div>
                </div>
                <div class="nose ha hb"></div>
                <div class="eyebrow"></div>
                <div class="eyebrow"></div>
            </div>
            <div class="background hb"></div>
        </div>
    </div>
</template>

<style lang="scss">
.cartoon {
    --skin: #fca;
    --hair: #512800;
    --iris: #542a0e;
    --line-face: #da8;
    --shirt: #fff;
    position: relative;
    width: 20rem;
    height: 20rem;
    bottom: 0;
    left: 0;
    // transform: translate(-39%, 0%);

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

    .r {
        border-radius: 100%;
    }

    .head {
        width: 52%;
        height: 74%;
        background: var(--skin);
        border-radius: 100% / 30% 30% 120% 120%;
        top: 10%;
        left: 50%;
        transform: translate(-50%, 0);
        box-shadow: 1.25vmin 1.5vmin 0 0vmin var(--hair), -1.25vmin 1.5vmin 0 0vmin var(--hair), -4vmin -10vmin var(--hair), 4vmin -10vmin var(--hair); // 2.25vmin 5.5vmin 0 0vmin var(--hair), -2.25vmin 5.5vmin 0 0vmin var(--hair), -4vmin -10vmin var(--hair), 4vmin -10vmin var(--hair);

        .hair-top {
            width: 59%;
            height: 10%;
            background: var(--hair);
            left: 20%; // 50%;
            top: -4%;
            transform: unset // translate(-50%, 0);
        }

        .forehead {
            width: 60%;
            height: 0.5%;
            background: #0000000d;
            top: 16%;
            left: 20%; // 50%;
            transform: unset; // translate(-50%, 0);

            &::before {
                width: 70%;
                height: 100%;
                background: #00000009;
                top: -1rem;
                left: 15%;
            }
        }

        .eyebrow {
            width: 40%;
            height: 12%;
            border-radius: 0 50% 0 0;
            box-shadow: -0.45rem -1.78rem 0 -0.6rem var(--hair); // -0.75vmin -3vmin 0 -1vmin var(--hair);
            top: 29%;
            left: 61%;
        }

        .eyebrow+.eyebrow {
            border-radius: 50% 0 0 0;
            box-shadow: 0.45rem -1.78rem 0 -0.6rem var(--hair); // 0.75vmin -3vmin 0 -1vmin var(--hair);
            left: 2%;
        }

        .eye {
            width: 30%;
            height: 13%;
            background: #fff;
            border-radius: 100% / 90%;
            top: 33%;
            left: 9%;
            // box-shadow: inset 0rem 4.6rem 0rem -4.1rem rgba(0, 0, 0, 0.1), inset 0rem 3.7rem 0rem -3.2rem var(--skin), 0rem -3rem 1rem -1rem rgba(0, 0, 0, 0.05);
            box-shadow: inset 0 4vmin 0 -3.3vmin rgba(0, 0, 0, 0.1), inset 0 4vmin 0 -3.3vmin var(--skin), 0 -3vmin 3vmin -1vmin rgba(0, 0, 0, 0.05);

            /* Paupière haute dégradé - Paupière haute couleur - Paupière haute Blur  */
            &::before {
                width: 1rem;
                height: 1rem;
                background: #222;
                border-radius: 50%;
                top: 63%;
                left: 50%;
                transform: translate(-50%, -50%);
                box-shadow: 0 0 0 0.2rem var(--iris);
            }

            &::after {
                width: 0.3rem;
                height: 0.3rem;
                background: #fff;
                border-radius: 50%;
                top: 39%;
                left: 55%;
                box-shadow: 0.5rem 0.1rem 0 -0.1rem #fff; // 0.5vmin 0.1rem 0 -0.1rem #fff;
            }
        }

        .eye+.eye {
            left: 61%;
        }

        .glasses {
            width: 90px * 2 + 22px + 10px;
            height: 65px;
            position: absolute;
            top: 30%;
            left: -11%;
            z-index: 10;

            &:hover .glass,
            &:focus .glass {
                background-image: linear-gradient(to bottom, #4DE2DC, #3888D1 70%);
            }

            .g-top {
                width: 27px;
                height: 10px;
                background-color: #3c3c3c;
                border-radius: 5px;
                position: absolute;
                top: 10%;
                left: 41%;
            }

            .glass {
                width: 90px;
                height: 65px;
                background-image: linear-gradient(to bottom, transparent, #a5a28b 90%);
                border: 3px solid #3c3c3c;
                border-bottom: transparent;
                position: absolute;
                top: 0;
            }

            .g-left {
                border-radius: 12px 12px 33px 29px;
                left: 0;
                transform: rotate(2deg);

                &::after {
                    content: "";
                    width: 10px;
                    height: 10px;
                    background-color: #3c3c3c;
                    border-radius: 30%;
                    position: absolute;
                    top: 12%;
                    left: -10%;
                    transform: rotate(90deg);
                }
            }

            .g-right {
                border-radius: 12px 12px 29px 33px;
                left: 90px + 22px;
                transform: rotate(-2deg);

                &::after {
                    content: "";
                    width: 10px;
                    height: 10px;
                    background-color: #3c3c3c;
                    border-radius: 30%;
                    position: absolute;
                    top: 12%;
                    right: -10%;
                    transform: rotate(90deg);
                }
            }
        }

        .nose {
            width: 16%;
            height: 40%;
            border-radius: 0 2rem 5rem 5rem; // 0 2vmin 5vmin 5vmin;
            border: 0.3rem solid var(--line-face);
            border-right: 0.3rem solid var(--line-face);
            border-left-color: transparent;
            border-top: 0;
            left: 42%; // 50%;
            top: 27%;
            transform: unset; // translate(-50%, 0);
            background: var(--skin);

            &::before,
            &::after {
                width: 1.5rem;
                height: 1.5rem;
                border: 0.3rem solid var(--line-face);
                border-radius: 50%;
                border-top-color: transparent;
            }

            &::before {
                border-left-color: transparent;
                bottom: -3%;
                right: -1.5rem;
                box-shadow: inset -1.1rem -0.65rem var(--skin); // inset -1.1vmin -0.65vmin var(--skin);
            }

            &::after {
                border-bottom: 0.3rem solid var(--line-face);
                border-right-color: transparent;
                background: var(--skin);
                bottom: -3%;
                left: -1.2rem;
            }
        }

        .top-lip {
            width: 34%;
            height: 9%;
            top: 73%;
            left: 34%;
            z-index: 10;

            &::before {
                width: 68px;
                height: 20px;
                border-top: 16px solid var(--skin);
                border-radius: 46%;
                top: -1px;
                left: -9%;
            }

            .lip {
                width: 100%;
                height: 90%;
                background: var(--skin);
                box-shadow: inset 0 0 0 5rem rgba(128, 0, 0, 0.2); // inset 0 0 0 5vmin rgba(128, 0, 0, 0.2);

                &::after {
                    width: 90%;
                    height: 1px;
                    background-color: rgba(128, 0, 0, 0.2);
                    top: 45%;
                    left: 7%;
                }
            }
        }

        .beard {
            width: 73%;
            height: 37%;
            background: var(--hair);
            bottom: -5%;
            left: 14%;
            border-radius: 100% / 80% 80% 110% 110%;

            &::before,
            &::after {
                width: 2rem;
                height: 2.4rem;
                background-color: var(--skin);
                border-radius: 36%;
                top: 27%;
            }

            &::before {
                left: 15%;
            }

            &::after {
                right: 15%;
            }
        }
    }

    .ear {
        width: 14%;
        height: 24%;
        background: var(--skin);
        border-radius: 70% 70% 50% 100%;
        top: 30%;
        left: 16%;
        transform: rotate(-4deg);

        &::after {
            width: 100%;
            height: 100%;
            border-radius: 70% 70% 100% 50%;
            background: var(--skin);
            transform: rotate(10deg);
            left: 10.6rem;
            top: 10%;
        }
    }

    .back-hair {
        width: 20%;
        height: 30%;
        background: var(--hair);
        color: var(--hair);
        left: 20%;
        top: 10%;
        box-shadow: -1.6rem 0, -1.6rem -2rem, 9.6rem -2rem; // -4vmin 0, -4vmin -5vmin, 24vmin -5vmin;

        &::after,
        &::before {
            width: 80%;
            height: 25%;
            background: var(--hair);
            border-radius: 50%;
        }

        &::before {
            top: -37%;
            left: 40%;
            transform: rotate(-10deg);
            box-shadow: 6rem -1rem, 2rem -1.6rem 0 0.4rem; // 16vmin -2vmin, 5vmin -4vmin 0 1vmin;
        }

        &::after {
            top: -43%;
            left: 80%;
            transform: rotate(10deg);
            box-shadow: -1.56rem -1.44rem, 2.4rem -2.4rem; // -3.9vmin -3.6vmin, 6vmin -6vmin;
        }
    }

    .neck {
        width: 30%;
        height: 20%;
        background: var(--skin);
        top: 75%;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .shoulder {
        width: 120%;
        height: 25%;
        border-radius: 100% 100% 0 0;
        background: var(--skin);
        bottom: -13%;
        left: -10%;
        background-image: radial-gradient(at 50% 0%, var(--skin) 23%, var(--shirt) 0);
    }

    .background {
        width: 25rem;
        height: 27rem;
        background-color: steelblue;
        top: -16%;
        left: -12%;
        z-index: -1;

        &::before {
            width: 107%;
            height: 106%;
            border: 1rem solid black;
            top: -4%;
            left: -4%;
        }
    }
}

@media (min-width: 1000px) {
    .cartoon {
        .head {
            box-shadow: 0.3rem 0.9rem 0 0rem var(--hair), -0.3rem 0.9rem 0 0rem var(--hair), -1.2rem -3.6rem var(--hair), 1.2rem -3.6rem var(--hair);
            // 0.25vmin 1.5vmin 0 0vmin var(--hair), -0.25vmin 1.5vmin 0 0vmin var(--hair), -2vmin -6vmin var(--hair), 2vmin -6vmin var(--hair); // 1.25vmin 3.5vmin 0 0vmin var(--hair), -1.25vmin 3.5vmin 0 0vmin var(--hair), -2vmin -6vmin var(--hair), 2vmin -6vmin var(--hair);

            .eyebrow {
                top: 30%;
            }
        }

        .back-hair {
            box-shadow: 9rem 0, 9rem -2.3rem, -1.2rem -1.2rem; // 15vmin 0, -2vmin -2vmin, 15vmin -4vmin;

            &::before {
                box-shadow: 5.5rem -0.5rem, 4.2rem -0.9rem 0 0.2rem; // 9vmin -1vmin, 7vmin -1vmin 0 1vmin;
            }

            &::after {
                box-shadow: -1rem -1.2rem, 1rem -1.8rem; // -1.2vmin -2.3vmin, 1vmin -3vmin;
            }
        }
    }
}
</style>