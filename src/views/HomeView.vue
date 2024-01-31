<script setup lang="ts">

</script>

<template>
  <RouterLink :to="{ name: 'legacy/recode1' }">legacy/recode</RouterLink><br>
  <RouterLink :to="{ name: 'vue/recode1' }">vue/recode</RouterLink>
  <br>
  <br>
  <RouterLink :to="{ name: 'legacy/star' }">legacy/star</RouterLink><br>
  <RouterLink :to="{ name: 'vue/star' }">vue/star</RouterLink>

  <br><br>

  <RouterLink :to="{ name: 'vue/card1' }">vue/card1</RouterLink><br>
  <RouterLink :to="{ name: 'vue/card2' }">vue/card2</RouterLink><br><br>
  <RouterLink :to="{ name: 'vue/particle' }">vue/particle</RouterLink>
  <br><br>
  <RouterLink :to="{ name: 'vue/custom' }">vue/custom</RouterLink>
</template>
