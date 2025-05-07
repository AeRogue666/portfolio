<script setup>

</script>

<template>
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
</template>

<style lang="scss">
/* Meuble à gauche */
#cabinet {
    display: none;
}

#hand {
    display: none;
}

@media (min-width: 63rem) {
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
}
</style>