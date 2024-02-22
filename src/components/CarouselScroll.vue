<script setup lang="ts">
 defineProps<{
    width: string,
    height: string
  }>()

  function changeSlide(delta: number) {
      const carousel =  document.getElementsByClassName("carousel").item
      // const width = carousel.offsetWidth;
      // carousel.scrollTo(carousel.scrollLeft + width * delta, 0);
    }

</script>
<template>
    <div class="carousel-wrapper">
      <div class="carousel" :style="{ width:'100%', height:'300px' }">
        <slot/>
      </div>
      <button @click="changeSlide(-1)">Prev Slide</button>
      <button @click="changeSlide(1)">Next Slide</button>
    </div>
</template>



<style scoped>
.carousel {
  display: flex;
  overflow: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.carousel > * {
  flex: 1 0 100%;
  scroll-snap-align: start;
}
</style>

