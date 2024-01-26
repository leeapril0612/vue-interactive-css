<script setup lang="ts">
import Album from '@/components/recode/Album.vue';
import { ref } from 'vue'

const selected = ref(0)

const data = [
  {
    coverImg: 'https://lh3.googleusercontent.com/MGMyYgKGVBWN5Nws_Re-d5VtLikXCHevL3MDMI7CGaXCtrpMNNxRu8xH44nIhSnKoePBDcDxNQHvoSAb=w544-h544-l90-rj',
    diskInnerColor: '#b4dcff'
  },
  {
    coverImg: 'https://lh3.googleusercontent.com/p-ranksJH868xIEGRHUzKFxm7LYptgiPvcAIdUswSrkrk_g9xiK7BcEgNxa3OJMMD8LSJC8wXdrSKE7C=w544-h544-l90-rj',
    diskInnerColor: '#e8e4d4'
  },
  {
    coverImg: 'https://lh3.googleusercontent.com/My1QVMpGzMwQmF6IprATeayjl5J_11wsN5xUvRTpNtBfQYjff1oTCw0Yf3pIFr5MPmEnWL-_wAUM89lTRA=w544-h544-l90-rj',
    diskInnerColor: '#9b9798'
  },

]

const nextPage = (index: number) => {
  if (index < 0) {
    selected.value = data.length - 1
  } else if (data.length <= index) {
    selected.value = 0
  } else {
    selected.value = index
  }
}

const clcikCoverImg = (item: any) => {

}

</script>
<template>
  <article class="contentWrap">
    <Album v-for="(item, index) in data" :is-active="selected === index" :cover-img="item.coverImg"
      :disk-inner-color="item.diskInnerColor" @clcikCoverImg="clcikCoverImg(item)" :key="index" />
  </article>

  <div class="buttonWrap">
    <button type="button" @click="nextPage(selected - 1)">PREV</button>
    <ul class="pointWrap">
      <li v-for="(item, index) in data" :class="{ active: selected === index }" :key="index" @click="nextPage(index)">
      </li>
    </ul>
    <button type="button" @click="nextPage(selected + 1)">NEXT</button>
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
</style>