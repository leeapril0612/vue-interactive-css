<template>
  <div class="starBg"></div>
  <section class="top">
    <h1 class="title">
      별이 쏟아지는 코딩일레븐
    </h1>
  </section>

  <section class="bottom">
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
  </section>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  var starBg = document.querySelector(".starBg");
  var title = document.querySelector(".title");

  //스크롤 이벤트
  window.addEventListener("scroll", function (event) {
    // scrollTop = document.documentElement.scrollTop;
    var scroll = this.scrollY;
    // console.log(scrollY / 5)
    (starBg as HTMLDivElement).style.transform = "translateY(" + -scroll / 3 + "px)";
    (title as HTMLDivElement).style.transform = "translateY(" + scroll / 1.7 + "px)";
  });

  //스크롤 이동
  setTimeout(function () {

    window.scrollTo({
      top: (document.querySelector('.bottom') as HTMLButtonElement)?.offsetTop
      , behavior: 'smooth'
    });
    // document.querySelector('.bottom').scrollIntoView({ behavior: 'smooth' });

  }, 2000)
})
</script>

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
  min-height: 160vh;
}

section.top h1.title {
  position: relative;
  color: #fff;
  text-align: center;
  padding-top: 35vh;
  font-size: 40px;
  font-weight: 100;
}

section.bottom {
  background: url(../../assets/image/bottom.png) center bottom/100% no-repeat;
  min-height: 60vh;
}

section.bottom .contWrap {
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
  background: linear-gradient(45deg, #f7b733, #fc4a1a);
}

section.bottom .contWrap ul li p {
  font-size: 20px;
  color: #fff;
  border-bottom: 2px dashed #fff;
}

section.bottom .contWrap h2 {
  text-align: center;
  color: #fff;
  margin-top: 30px;
  font-weight: 100;
}

.starBg {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 200vh;
}
</style>