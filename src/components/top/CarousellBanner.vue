<!-- <template>
    <div class="carousell">
test test
    </div>
</template>

<style scoped>
.carousell {
    height: 300px;
    width: 100%;
    margin: 0px;
    background-color: lightgray;
}
</style> -->
<script setup lang="ts">
  // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import type { SourceImage } from '../content/ItineraryContent.vue';
  const link = "https://picsum.photos/1600/600?q="
  const images: SourceImage[] = [
    { id: 1, url: link + 1 },
    { id: 2, url: link + 2 },
    { id: 3, url: link + 3 },
    { id: 4, url: link + 4 },
    { id: 5, url: link + 5 }
  ]
  
</script>
<template>
    <Carousel :items-to-show="1.5" :wrap-around="true">
      <Slide v-for="link in images" :key="link.id">
        <img :src="link.url" />
      </Slide>
  
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </template>
  


<style scoped>
.carousel {
  /* z-index: -1; */
}
.carousel__item {
  min-height: 400px;
  width: 100%;
  background-color: green;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev {
  z-index: 3;
}
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  z-index: 3;
}
</style>
  