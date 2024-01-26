<script setup lang="ts">
import { onMounted } from "vue";
let prev_button, next_button;
let pageNum = 0;
let album: any;
let totalNum: any;
let pointBtnAll: any;
let contentWrap;
let bgArray = new Array();
bgArray[0] = ["#0272a4", "#f6a564"];
bgArray[1] = ["red", "black"];
bgArray[2] = ["#b7c0c9", "#285c5a"];

onMounted(() => {
  prev_button = document.querySelectorAll('button')[0];
  next_button = document.querySelectorAll('button')[1];
  pointBtnAll = document.querySelectorAll('.pointWrap li');
  contentWrap = document.querySelector(".contentWrap");

  album = document.querySelectorAll('.album');
  totalNum = album.length;

  prev_button.addEventListener("click", function () {
    if (pageNum > 0) {
      pageNum--;
    } else {
      pageNum = totalNum - 1;
    }
    pageChangeFunc();
  })

  next_button.addEventListener("click", function () {
    if (pageNum < totalNum - 1) {
      pageNum++;
    } else {
      pageNum = 0;
    }
    pageChangeFunc();
  });

  for (let i = 0; i < pointBtnAll.length; i++) {
    pointBtnAll[i].addEventListener("click", function () {
      pageNum = i;
      pageChangeFunc();
    })
  }

  if (mobileChk()) {
    contentWrap?.addEventListener("touchstart", touchFunc, false);
    // contentWrap.addEventListener("touchmove", touchFunc, false);
    contentWrap?.addEventListener("touchend", touchFunc, false);
  }

  let start_X = 0;
  let end_X = 0;

  pageChangeFunc();

  /* 터치 처리와 관련된 */
  function touchFunc(evt: any) {
    // console.log(evt.type)
    // return false;
    // evt.preventDefault();

    var type = null;
    var touch = null;

    switch (evt.type) {
      case "touchstart":
        type = "mousedown";
        touch = evt.changedTouches[0];
        start_X = touch.clientX;
        //console.log("start_X : " + start_X);
        end_X = 0;
        break;
      /*
      case "touchmove":
           type = "mousemove";
           touch = evt.changedTouches[0];
      break;
      */

      case "touchend":
        type = "mouseup";
        touch = evt.changedTouches[0];
        end_X = touch.clientX;

        //console.log("end_X : "+ end_X);

        var chkNum = start_X - end_X;
        var chkNumAbs = Math.abs(chkNum);
        //console.log(chkNum)

        if (chkNumAbs > 100) {
          // //터치를 많이 했으면 실행
          if (chkNum < 0) {
            //왼쪽으로 터치
            //pageNum--;
            //에러가 납니다.
            //수정해보세요.
            if (pageNum > 0) {
              pageNum--;
            } else {
              pageNum = totalNum - 1;
            }
          } else {
            //오른쪽으로 터치
            //pageNum++;
            //에러가 납니다.
            //수정해보세요.
            if (pageNum < totalNum - 1) {
              pageNum++;
            } else {
              pageNum = 0;
            }
          }
          pageChangeFunc();
        }
        // 모바일 스와이프와 관련한 라이브러리 찾아보기
        break;
    }
  }

  function pageChangeFunc() {
    //document.querySelector('.contentWrap').style.background = "linear-gradient(120deg," + bgArray[pageNum][0] + ", " + bgArray[pageNum][1] + ")";
    for (let i = 0; i < album.length; i++) {
      album[i].classList.remove("active");
      pointBtnAll[i].classList.remove("active");
    }
    album[pageNum].classList.add("active");
    pointBtnAll[pageNum].classList.add("active");
    (document.querySelectorAll(".disk_inner")[pageNum] as HTMLDivElement).style.background = bgArray[pageNum][0];
  }

  /* 해당 모바일이 무엇인지 검사해줌 */
  function mobileChk() {
    let mobileKeyWords = new Array('Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
    for (let info in mobileKeyWords) {
      if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
        return true;
      }
    }
    return false;
  }
})
</script>
<template>
  <article class="contentWrap">
    <section class="album active">
      <div class="disk">
        <div class="disk_inner"></div>
      </div>
      <a href="javascript:alert(1)" class="coverImg">
        <img src="@/assets/images/iu_0.jpg" alt="">
      </a>
    </section>

    <section class="album">
      <div class="disk">
        <div class="disk_inner"></div>
      </div>
      <a href="javascript:alert(1)" class="coverImg">
        <img src="@/assets/images/iu_1.jpg" alt="">
      </a>
    </section>

    <section class="album">
      <div class="disk">
        <div class="disk_inner"></div>
      </div>
      <a href="javascript:alert(1)" class="coverImg">
        <img src="@/assets/images/iu_2.jpg" alt="">
      </a>
    </section>

  </article>

  <div class="buttonWrap">
    <button type="button">PREV</button>
    <ul class="pointWrap">
      <li class="active"></li>
      <li></li>
      <li></li>
    </ul>
    <button type="button">NEXT</button>
  </div>
</template>
<style>
body {
  overflow: hidden;
  font-size: 16px;
}

.contentWrap {
  background: linear-gradient(120deg, #0272a4, #f6a564);
  transition: background 1s ease-out;
  width: 100vw;
  height: 100vh;
  touch-action: none;
}

.contentWrap .album {
  position: absolute;
  top: 47%;
  left: 55%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s ease-in-out;
}

@media only screen and (max-width: 720px) {
  .contentWrap .album {
    top: 40%;
    width: 300px;
    height: 200px;
  }
}

.contentWrap .album.active {
  visibility: visible;
  opacity: 1;
  left: 50%;
}

.contentWrap .album.active .disk {
  left: 180px;
  transition-delay: 0.5s;
}

@media only screen and (max-width: 720px) {
  .contentWrap .album.active {
    left: 45%;
  }

  .contentWrap .album.active .disk {
    left: 35%;
    transition-delay: 0.5s;
  }
}

.contentWrap .album .coverImg {
  position: absolute;
  width: 400px;
  height: 400px;
  box-shadow: 2px 14px 40px rgba(0, 0, 0, 0.3);
}

.contentWrap .album .coverImg img {
  width: inherit;
  height: inherit;
}

@media only screen and (max-width: 720px) {
  .contentWrap .album .coverImg {
    width: 250px;
    height: 250px;
  }
}

.contentWrap .album .disk {
  position: absolute;
  top: 4px;
  left: 0px;
  width: 392px;
  height: 392px;
  border-radius: 50%;
  background: linear-gradient(120deg, #000, #333333, #000);
  box-shadow: 4px 14px 40px rgba(0, 0, 0, 0.3);
  transition: left 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: rotateAni 10s ease infinite;
}

@media only screen and (max-width: 720px) {
  .contentWrap .album .disk {
    width: 244px;
    height: 244px;
  }
}

.contentWrap .album .disk .disk_inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 160px;
  background-color: #0473a4;
  border-radius: 50%;
  border: 3px dashed rgba(255, 255, 255, 0.4);
}

@media only screen and (max-width: 720px) {
  .contentWrap .album .disk .disk_inner {
    width: 100px;
    height: 100px;
  }
}

.contentWrap .album .disk .disk_inner::after {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 7px;
  height: 7px;
  background-color: black;
  border-radius: 50%;
}

.contentWrap .album:hover .disk {
  left: 40%;
  transition-delay: 0s;
}

.buttonWrap {
  position: fixed;
  bottom: 5vh;
  text-align: center;
  width: 100%;
}

.buttonWrap button {
  padding: 6px 20px;
  margin: 0 3px;
  background-color: #000;
  color: #fff;
  transition: all 0.3s ease-out;
}

.buttonWrap button:hover {
  background-color: #fff;
  color: #000;
}

.buttonWrap .pointWrap {
  position: relative;
  display: inline-block;
  padding: 0 10px;
}

.buttonWrap .pointWrap li {
  position: relative;
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  text-align: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  transition: background 0.3s ease-out;
}

.buttonWrap .pointWrap li.active {
  background-color: black;
}

@keyframes rotateAni {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

/*# sourceMappingURL=motion.css.map */
</style>