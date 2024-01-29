<template>
  <section ref="_contentSection">
    <div class="textItem" v-for="(i, idx) in ary" :key="i" ref="_textItem" :style="{
      top: windowHeight / 2 + 'px',
      left: windowWidth / 2 + 'px'
    }">
      {{ idx }}
    </div>

  </section>
  <div class="buttonWrap">
    <button type="button" v-for="(item, idx) in buttons" @click="motionSetting(idx)">{{ item }}</button>
  </div>
</template>
<script setup lang="ts">
import TweenMax, { Power4, Power3 } from 'gsap'
import { onMounted, onUnmounted, ref } from 'vue'

const buttons = [
  'NO 1',
  'NO 2',
  'NO 3'
]
const _textItem = ref()
const _contentSection = ref()

const ary = Array(100)
const windowWidth = ref()
const windowHeight = ref();
const bgColorArr = ["#2eccc4", "#ea204f", "#20a9ea"];


function motionSetting(pageNum: number) {
  //배경 컬러 변경
  const body: HTMLBodyElement | null = document.querySelector("body");
  if (body) {
    body.style.background = bgColorArr[pageNum];
  }
  //중복된 트윈 킬
  TweenMax.killTweensOf(_textItem);

  if (pageNum == 0) {
    //가운데 정렬
    _textItem.value.forEach(function (item: HTMLDivElement, i: number) {
      TweenMax.to(item, 1, {
        top: Math.random() * (windowHeight.value - 150) + 60,
        left: Math.random() * (windowWidth.value - 80) + 20,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        autoAlpha: "random(.1,1)",
        scale: .5,
        ease: Power4.easeOut,
        delay: "random(0,.5)"
      })
    })
  } else if (pageNum == 1) {
    //랜덤
    _textItem.value.forEach(function (item: HTMLDivElement, i: number) {
      const scaleNum = Math.random() * 3;
      // console.log(scaleNum)
      TweenMax.to(item, 1, {
        top: Math.random() * (windowHeight.value - 250) + 100,
        left: Math.random() * (windowWidth.value - 200) + 80,
        rotationX: "random(-60,60)",
        rotationY: "random(-60,60)",
        rotationZ: "random(-90,90)",
        autoAlpha: scaleNum / 3,
        scale: scaleNum,
        ease: Power4.easeInOut,
        delay: "random(0,.5)"
      })
    })
  } else if (pageNum == 2) {
    _textItem.value.forEach(function (item: HTMLDivElement, i: number) {
      TweenMax.to(item, 1, {
        top: windowHeight.value / 2 + Math.sin(i / 3) * 40,
        left: i * 20, //windowWidth / 2 ,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        autoAlpha: 1,
        scale: .5,
        ease: Power4.easeInOut,
        delay: i * .02 //"random(0,.5)"
      })
    })
  }
}



function resize() {
  windowHeight.value = window.innerHeight;
  windowWidth.value = window.innerWidth;
  //console.log(windowWidth , windowHeight)
  motionSetting(0);
}
onMounted(() => {
  TweenMax.set(_contentSection.value, { perspective: 400 });
  resize();
  window.addEventListener('resize', () =>
    resize()
  );
})

onUnmounted(() => {
  window.removeEventListener('resize', () => resize())
})


</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");

body {
  overflow: hidden;
  font-family: 'Do Hyeon', sans-serif;
  background: #cec4ce;
  transition: background 4s cubic-bezier(0.075, 0.82, 0.165, 1);
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

section .textItem {
  position: absolute;
  font-size: 2rem;
  text-align: right;
  color: #fff;
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
  background: #fff;
  color: #000;
  padding: 8px 20px;
  transition: all .3s ease-out;
}

.buttonWrap button:hover,
.buttonWrap button.active {
  background: #000;
  color: #fff;
}
</style>