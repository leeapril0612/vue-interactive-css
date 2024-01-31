<template>
  <section ref="_contentSection">
    <img class="itemImg" v-for="(item, idx) in data" :src="item.coverImg" @click="onClickImg(item)" ref="_textItem">
  </section>
  <Album :is-active="isActive" @clcik-cover-img="disableAlbum" :cover-img="selectedItem.coverImg"
    :disk-inner-color="selectedItem.diskInnerColor">
  </Album>
</template>
<script setup lang="ts">
import Album from '@/components/recode/Album.vue';
import TweenMax, { Power4 } from 'gsap'
import { onMounted, onUnmounted, ref } from 'vue'

const isActive = ref(false)
const selectedItem = ref({
  coverImg: '',
  diskInnerColor: ''
})
const data = ref([
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/114/04/142/11404142_20240123172248_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/72/896/11372896_20231127104957_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/76/816/11376816_20231201120653_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/52/904/11352904_20231027101104_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/94/065/11394065_20240104151541_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/82/987/11382987_20231212165916_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/62/544/11362544_20231110142622_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/05/759/11305759_20230814111006_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/27/533/11227533_20230419162238_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/108/21/699/10821699_20231205103724_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/107/35/654/10735654_20211008114339_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/86/070/11286070_20230713181059_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/09/832/11309832_20230904111501_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/11/297/11211297_20230410151046_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/33/459/11333459_20231013103537_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/58/233/11258233_20230605094802_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/114/02/655/11402655_20240129121016_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/09/190/11309190_20230818161008_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/39/556/11339556_20231005170424_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/40/391/11340391_20231006154621_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm/album/images/022/32/505/2232505_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm/album/images/022/19/671/2219671_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/56/868/11356868_20231101160655_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/104/12/319/10412319_20200403103006_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/58/100/11358100_20231102174659_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/09/190/11309190_20230818161008_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/85/867/11285867_20230713162404_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/111/02/375/11102375_20221115101140_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/40/232/11240232_20230509151820_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/111/27/145/11127145_20231213133532_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/80/645/11280645_20230705152407_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/111/02/375/11102375_20221115101140_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/110/11/565/11011565_20220801102637_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/85/577/11385577_20231215144114_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/108/71/162/10871162_20220217162422_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/103/31/947/10331947_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm/album/images/100/36/099/10036099_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/23/044/11323044_20230918120653_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/36/264/11236264_20230508184331_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/45/655/11345655_20231017161827_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/82/496/11382496_20231211180054_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/109/03/868/10903868_20220330103544_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/109/23/444/10923444_20220502140600_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/15/072/11215072_20230331123824_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/48/980/11348980_20231020173557_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/111/54/218/11154218_20230120135907_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/114/02/655/11402655_20240129121016_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/111/80/278/11180278_20230217160723_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/11/297/11211297_20230410151046_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/104/79/150/10479150_20200918102847_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm/album/images/100/37/969/10037969_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/108/44/485/10844485_20221006154824_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/108/16/959/10816959_20211217144957_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/109/09/179/10909179_20220405103521_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/76/558/11376558_20231130165245_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/34/678/11234678_20230502162327_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm/album/images/103/07/346/10307346_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/111/27/145/11127145_20231213133532_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/00/771/11300771_20230807190540_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/15/612/11315612_20230905120657_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/54/858/11254858_20230531233847_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/109/75/276/10975276_20220603165713_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/110/34/298/11034298_20220822101843_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/29/537/11229537_20230421170444_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/33/031/11233031_20230427140957_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/111/66/539/11166539_20230207143921_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm/album/images/102/60/858/10260858_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/94/425/11394425_20240105120640_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/98/907/11398907_20240115152637_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/42/411/11242411_20230511140611_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/91/902/11391902_20240122132041_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/33/459/11333459_20231013103537_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/33/459/11333459_20231013103537_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm/album/images/101/49/492/10149492_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/106/10/525/10610525_20210518143433_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/05/820/11305820_20230814140002_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm/album/images/023/36/926/2336926_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/106/12/483/10612483_20210521111412_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/110/11/565/11011565_20220801102637_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/47/483/11347483_20231018164423_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/108/01/677/10801677_20211202181813_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/34/678/11234678_20230502162327_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/112/62/009/11262009_20230609150557_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/63/599/11363599_20231228161244_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/110/62/828/11062828_20220923105240_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/52/519/11352519_20231026160513_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/81/907/11381907_20231211140806_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/111/40/018/11140018_20230105103451_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/33/953/11333953_20230925172945_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/12/709/11312709_20230823154509_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/114/00/015/11400015_20240116162843_500.jpg"
  },
  {
    "coverImg": "https://cdnimg.melon.co.kr/cm2/album/images/113/20/510/11320510_20230905175627_500.jpg"
  }
])
const _textItem = ref()
const _contentSection = ref()

const windowWidth = ref()
const windowHeight = ref();

function onClickImg(item: any) {
  isActive.value = true
  selectedItem.value = item
  _textItem.value.forEach(function (item: HTMLDivElement, i: number) {
    TweenMax.to(item, 0.2,
      {
        autoAlpha: "0",
      })
  })
}
function disableAlbum() {
  isActive.value = false
  _textItem.value.forEach(function (item: HTMLDivElement, i: number) {
    TweenMax.to(item, 0.3, {
      autoAlpha: "random(.1,1)",
    })
  })
}
function motionSetting() {
  TweenMax.killTweensOf(_textItem.value)
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

}


function resize() {
  windowHeight.value = window.innerHeight;
  windowWidth.value = window.innerWidth;
  motionSetting();
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

.itemImg {
  position: absolute;
  width: 4rem;
  height: 4rem;
  color: #fff;
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
</style>