<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { inject } from 'vue';
import { ref } from 'vue'
import type { SourceImage } from '../ItineraryContent.vue';

export interface linkProps {
    links: SourceImage[]
}

const props = defineProps<linkProps>()

console.log("props props: ",props.links)
</script>
<template>
    <Carousel :itemsToScroll="1">
      <!-- <Slide v-for="(slide, index) in props.links" :key="index"> -->
        <Slide v-for="link in props.links" :key="link.id"> 
        <!-- <img src="https://picsum.photos/200/120?q=1" /> -->
          <img :src="link.url" /> 
        </Slide>
  
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </template>
  

  
  <style scoped>

  .carousel {
    /* width: 250px; */
    width: 200px;
  }
  .carousel__item {
    min-height: 150px;
    width: 100%;
    background-color: gray;
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 639px) {
    .carousel {
    /* width: 250px; */
      width: 100%;
    }
  }

  .carousel__viewport {
    /* width: 250px!important; */
  }
  ol.carousel__track {
    /* width: 250px!important; */
  }
  .carousel__slide {
    /* width: 250px!important; */
    /* height: 150px; */
  }


  </style>