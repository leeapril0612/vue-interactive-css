<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import TweenMax, { Power3, Power4 } from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
TweenMax.registerPlugin(ScrollToPlugin)

const title = "section-5 별이 쏟아지는"
const titleRefs = ref()

const starBgRef = ref()
const titleRef = ref()

const bottomRef = ref()

onMounted(() => {
  console.log(titleRefs)
  var starBg = ref() // document.querySelector(".starBg")
  var title = ref() // document.querySelector(".title")

  //스크롤 이벤트
  window.addEventListener("scroll", function (event) {
    // scrollTop = document.documentElement.scrollTop
    var scroll = this.scrollY;
    starBg.value.style.transform = `translateY("${-scroll / 3}px)`
    title.value.style.transform = `translateY("${scroll / 1.7}px)`
  });

  //텍스트 모션
  titleRefs.value?.map((titleRef: any) => {
    TweenMax.from(titleRef, 1, {
      autoAlpha: 0,
      delay: Math.random() * 1,
      ease: Power3.easeInOut
    });
  })

  // 하단 이동
  TweenMax.to(window, 2, {
    scrollTo: {
      y: bottomRef.value
      //autoKill: true
    },
    delay: 1.7,
    ease: Power4.easeInOut
  });

  //하단 영역 커지는 것
  TweenMax.from(bottomRef.value, 2.5, {
    scale: .7,
    y: 100,
    delay: 2.2,
    ease: Power3.easeInOut
  });
})

const onClickTop = () => {

  TweenMax.to(window, 1.5, {
    scrollTo: {
      y: 0,
      autoKill: true
    },
    ease: Power3.easeInOut
  });

}
</script>

<template>
  <div class="starBg" ref="starBgRef"></div>
  <section class="top">
    <h1 class="title" ref="titleRef">
      <div v-for="item in title.split('')" ref="titleRefs" :key="item">
        {{ item }}
      </div>
    </h1>
  </section>

  <section class="bottom" ref="bottomRef">
    <div class="contWrap">
      <ul>
        <li>
          <p>card</p>
        </li>
        <li>
          <p>card</p>
        </li>
        <li>
          <p>card</p>
        </li>
        <li>
          <p>card</p>
        </li>
      </ul>
      <h2>별이 쏟아지는, 인터랙티브</h2>
    </div>
    <button button="type" class="topBtn" @click="onClickTop">TOP</button>
  </section>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");

body {
  overflow-x: hidden;
  background: url(../../assets/images/bg.jpg);
  font-family: 'Do Hyeon', sans-serif;
}

.starBg {
  background: url(../../assets/images/star.png);
}

section {
  position: relative;
  width: 100vw;
}

section.top {
  min-height: 300vh;
}

section.top h1.title {
  position: relative;
  color: #fff;
  text-align: center;
  padding-top: 35vh;
  font-size: 40px;
  font-weight: 100;
}

section.top h1.title div {
  display: inline-block;
  /* letter-spacing: -7px; */
}

section.bottom {
  background: url(../../assets/images/bottom.png) center bottom/100% no-repeat;
  min-height: 60vh;
}

section.bottom .contWrap {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 700px;
}

section.bottom .contWrap ul li {
  display: inline-block;
  margin: 0 2%;
  width: 130px;
  height: 200px;
  border-radius: 6px 6px 6px 6px;
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

section.bottom .contWrap ul li p {
  font-size: 20px;
  color: #fff;
  border-bottom: 2px dashed #fff;
}

section.bottom .contWrap ul li:nth-child(1) {
  background: linear-gradient(45deg, #f7b733, #fc4a1a);
}

section.bottom .contWrap ul li:nth-child(2) {
  background: linear-gradient(45deg, #FC00FF 0%, #401241 100%);
}

section.bottom .contWrap ul li:nth-child(3) {
  background-image: linear-gradient(45deg, #ce713b 0%, #F7CE68 100%);
}

section.bottom .contWrap ul li:nth-child(4) {
  background-image: linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%);
}

section.bottom .contWrap ul li:hover {
  transform: translateY(-20px);
}

section.bottom .contWrap h2 {
  text-align: center;
  color: #fff;
  margin-top: 30px;
  font-weight: 100;
}

section.bottom .topBtn {
  position: absolute;
  bottom: 10%;
  right: 70px;
  padding: 10px;
  border-radius: 6px 6px 6px 6px;
  background-color: #eee;
  border: 2px solid #eee;
  transition: all .3s ease-out;
}

section.bottom .topBtn:hover {
  background-color: #000;
  border-color: #333;
  color: #fff;
}

.starBg {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 200vh;
}
</style>