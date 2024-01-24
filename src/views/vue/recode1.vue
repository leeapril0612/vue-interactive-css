<script setup>
import Album from '../../components/recode/Album.vue';
</script>
<template>
  <article class="contentWrap">
    <Album 
      cover-img="@/assets/images/iu_0.jpg"
    />
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
</style>