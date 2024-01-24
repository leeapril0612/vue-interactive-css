<template>
  <section class="album active">
    <div class="disk">
      <div class="disk_inner" :style="{
        backgroundColor: props.diskInnerColor
      }"></div>
    </div>
    <a @click.prevent="emits('clcikCoverImg')" class="coverImg">
      <img :src="coverImg" alt="">
    </a>
  </section>
</template>
<script setup>
const props = defineProps({
  coverImg: {
    Type: String,
    default: ""
  },
  diskInnerColor: {
    Type: String,
    default: "#0473a4"
  }
})

const emits = defineEmits(["clcikCoverImg"])
</script>

<style scoped>
/* .album {
  position: absolute;
  top: 47%;
  left: 55%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s ease-in-out;
} */

@media only screen and (max-width: 720px) {
  .album {
    top: 40%;
    width: 300px;
    height: 200px;
  }
}

.album.active {
  visibility: visible;
  opacity: 1;
  left: 50%;
}

.album.active .disk {
  left: 180px;
  transition-delay: 0.5s;
}

@media only screen and (max-width: 720px) {
  .album.active {
    left: 45%;
  }

  .album.active .disk {
    left: 35%;
    transition-delay: 0.5s;
  }
}

.album .coverImg {
  position: absolute;
  width: 400px;
  height: 400px;
  box-shadow: 2px 14px 40px rgba(0, 0, 0, 0.3);
}

.album .coverImg img {
  width: inherit;
  height: inherit;
}

@media only screen and (max-width: 720px) {
  .album .coverImg {
    width: 250px;
    height: 250px;
  }
}

.album .disk {
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
  .album .disk {
    width: 244px;
    height: 244px;
  }
}

.album .disk .disk_inner {
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
  .album .disk .disk_inner {
    width: 100px;
    height: 100px;
  }
}

.album .disk .disk_inner::after {
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

.album:hover .disk {
  left: 40%;
  transition-delay: 0s;
}
</style>