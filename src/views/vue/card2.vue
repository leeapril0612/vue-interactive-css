<script setup lang="ts">
import TweenMax, { Power4, Power3 } from 'gsap'
import { onMounted, onUnmounted, ref } from 'vue'
const _cards = ref()
const _buttons = ref()
const titleRef = ref()
const selectedSetting = ref(3)
const windowWidth = ref(0)
const windowHeight = ref(0)

onMounted(() => {
  resize()
  TweenMax.from(titleRef.value, 1, {
    top: -50,
    autoAlpha: 0,
    ease: Power3.easeOut
  })
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
  cardSetting(selectedSetting.value)
}
function cardSetting1() {
  _cards.value.forEach(function (item: HTMLDivElement, i: number) {
    TweenMax.to(item, 1, {
      top: windowHeight.value / 2 - i * 50,
      left: windowWidth.value / 2 + i * 60 - 200,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      ease: Power4.easeInOut,
      delay: i * .15
    })
  })
}
function cardSetting2() {
  _cards.value.forEach(function (item: HTMLDivElement, i: number) {
    TweenMax.to(item, 1, {
      top: Math.random() * (windowHeight.value - 300) + 100,
      left: Math.random() * (windowWidth.value - 300) + 100,
      rotationX: "random(-60,60)", //Math.random()*30 
      rotationY: "random(-60,60)",
      rotationZ: "random(-90,90)",
      //scale : Math.random() * .6 + .6,
      ease: Power4.easeInOut,
      delay: "random(0,.5)"
    })
  })
}
function cardSetting3() {
  _cards.value.forEach(function (item: HTMLDivElement, i: number) {
    TweenMax.to(item, 1, {
      top: windowHeight.value / 2 + i * 30 - 100,
      left: windowWidth.value / 2 - i * 80,
      rotationX: 10,
      rotationY: 15 * i,
      rotationZ: 10 * i,
      ease: Power4.easeInOut,
      delay: i * .15
    })
  })
}
function cardSetting4() {
  _cards.value.forEach(function (item: HTMLDivElement, i: number) {
    TweenMax.to(item, 1, {
      top: windowHeight.value / 2 - i * 50,
      left: windowWidth.value / 2 + i * 60 - 200,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      ease: Power4.easeInOut,
      delay: i * .15
    })
  })
}
function cardSetting(idx: number) {
  selectedSetting.value = idx
  console.log(idx)
  switch (idx) {
    case 0:
      cardSetting1()
      break;
    case 1:
      cardSetting2()
      break;
    case 2:
      cardSetting3()
      break;
    case 3:
      cardSetting4()
      break;
  }
}
const cards = ['card1', 'card2', 'card3', 'card4', 'card5']
const buttons = ['button 1', 'button 2', 'button 3', 'button 4']


</script>
<template>
  <h1 class="title" ref="titleRef">section5-card2</h1>
  <section>
    <div v-for="i in cards" :key="i" class="cardItem" ref="_cards">CARD</div>
  </section>
  <div class="buttonWrap">
    <button type="button" v-for="(i, idx) in buttons" @click="cardSetting(idx)" ref="_buttons">NO {{ idx + 1 }}</button>
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

.buttonWrap button:hover,
.buttonWrap button.active {
  background-color: #970000;
}
</style>