<script setup>

</script>

<template>
    <div id="vanishingcabinet">
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
</template>

<style lang="scss">
/* Armoire à disparaître */
#vanishingcabinet {
    display: none;
}

@media (min-width: 63rem) {
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
</style>