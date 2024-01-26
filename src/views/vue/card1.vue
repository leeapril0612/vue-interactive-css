<script setup lang="ts">
import TweenMax, { Power4, Power3 } from 'gsap'
import { onMounted, onUnmounted, ref } from 'vue'
const _cards = ref()
const windowWidth = ref(0)
const windowHeight = ref(0)

onMounted(() => {
  resize()
  window.addEventListener('resize', function () {
    resize();
  });
})

onUnmounted(() => {
  window.removeEventListener("resize", () => { })
})


function resize() {
  windowHeight.value = window.innerHeight;
  windowWidth.value = window.innerWidth;
  cardSetting();
}
function cardRandom() {
  console.log(_cards)
  _cards.value.forEach(function (item, i) {

    TweenMax.to(item, 1, {
      top: Math.random() * windowHeight.value,
      left: Math.random() * windowWidth.value,
      rotation: Math.random() * 180,
      ease: Power4.easeInOut,
      delay: i * .1
    })

  })
}
//초기화, 리셋 버튼 클릭시 실행
function cardSetting() {
  _cards.value.forEach(function (item, i) {
    //console.log(item)

    TweenMax.to(item, 1, {
      top: windowHeight.value / 2 - (i * 40),
      left: windowWidth.value / 2 + (i * 40 - 200),
      rotation: 0,
      ease: Power3.easeInOut,
      delay: i * .2
    })

  })
}
const cards = ['card1', 'card1', 'card1', 'card1']


</script>
<template>
  <section>
    <div v-for="i in cards" :key="i" class="cardItem" ref="_cards">CARD</div>
  </section>
  <div class="buttonWrap">
    <button type="button" @click="cardRandom">Random</button>
    <button type="button" @click="cardSetting">Reset</button>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");

body {
  overflow: hidden;
  font-family: 'Do Hyeon', sans-serif;
  background: #cec4ce;
}

h1 {
  position: fixed;
  text-align: center;
  width: 100%;
  font-weight: 100;
}

section {
  position: relative;
  height: 100vh;
  width: 100vw;
}

section .cardItem {
  position: absolute;
  width: 200px;
  height: 110px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.3);
  font-size: 1rem;
  text-align: right;
  color: rgba(255, 255, 255, 0.5);
}

section .cardItem:nth-child(1) {
  background: linear-gradient(62deg, #FBAB7E, #F7CE68);
}

section .cardItem:nth-child(2) {
  background: linear-gradient(20deg, #FF5E7E, #FF99AC);
}

section .cardItem:nth-child(3) {
  background: linear-gradient(160deg, #0093E9, #80D0C7);
}

section .cardItem:nth-child(4) {
  background: linear-gradient(40deg, #fd1d1d, #833ab4);
}

section .cardItem:nth-child(5) {
  background: linear-gradient(20deg, black 0%, #FC00FF 100%);
}

.buttonWrap {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.buttonWrap button {
  position: relative;
  z-index: 100;
  margin: 0 5px;
  background: black;
  color: #fff;
  padding: 8px 20px;
  transition: all .3s ease-out;
}

.buttonWrap button:hover {
  background-color: #970000;
}
</style>