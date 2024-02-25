<template>
    <Carousel  ref="myCarousel" :itemsToScroll="1">
      <Slide v-for="slide in 10" :key="slide">
        <img src="jewel.png" />
        <!-- <div class="carousel__item">{{  slide }}1</div> -->
      </Slide>
  
      <template #addons>
        <Navigation />
        <!-- <Pagination /> -->
        <!-- <div></div> -->
      </template>
    </Carousel>
  </template>
  
  <script setup lang="ts">
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
  import { inject } from 'vue';
  import 'vue3-carousel/dist/carousel.css'
  import { ref } from 'vue'


 
  </script>
  
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
  
  .carousel__slide {
  }
  
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
  }
  </style>