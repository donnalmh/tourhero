<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { inject } from 'vue';
import { ref } from 'vue'



</script>
<template>
    <Carousel  ref="myCarousel" :itemsToScroll="1">
      <Slide v-for="slide in 10" :key="slide">
        <img src="https://picsum.photos/250/150?q=1" />
        <!-- <img :src="https://picsum.photos/300/200?q=1" /> -->
        <!-- <div class="carousel__item">{{  slide }}1</div> -->
      </Slide>
  
      <template #addons>
        <Navigation />
        <!-- <Pagination /> -->
        <!-- <div></div> -->
      </template>
    </Carousel>
  </template>
  

  
  <style scoped>

  .carousel {
    /* width: 250px; */

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

  .carousel__viewport {
    /* width: 250px!important; */
  }
  ol.carousel__track {
    /* width: 250px!important; */
  }
  .carousel__slide {
    /* width: 250px!important; */
    height: 150px;
  }


  </style>