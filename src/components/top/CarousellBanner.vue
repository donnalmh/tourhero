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
  // const height = window.innerWidth  < 639 ? 400 : 600
  // const width = window.innerWidth  < 639 ? 400 : 1600
  const height = 600
  const width = 1600
  const itemsToShow =  window.innerWidth  < 639  ? 1.1 : 1.5
  const link = "https://picsum.photos/"+width+ "/" +height+"?q="
  const images: SourceImage[] = [
    { id: 1, url: link + 1 },
    { id: 2, url: link + 2 },
    { id: 3, url: link + 3 },
    { id: 4, url: link + 4 },
    { id: 5, url: link + 5 }
  ]

  
</script>
<template>
    <Carousel :items-to-show="itemsToShow" :wrap-around="true">
      <Slide v-for="link in images" :key="link.id">
        <img :src="link.url" />
      </Slide>
  
      <template #addons>
        <Navigation />
        <div class="options-carousel grid grid-cols-3 gap-1">
            <div class="col-span-1">
                <div class="flex flex-row icons-share pl-2">
                    <i class="pi pi-upload"></i>
                    <i class="pi pi-heart pl-4"></i>
                </div>
            </div>
            <div class="col-span-2"><Pagination /></div>
        </div>
      </template>
    </Carousel>
    <!-- <div class="options-carousel">

    </div> -->
  </template>
  


<style scoped>
.carousel {
  /* z-index: -1; */
}

.icons-share {
  font-size: 1.3rem;
  padding-top: 0.5rem;
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

.options-carousel {
  display: none;
}

@media screen and (max-width: 639px)
     {
      .carousel__item {
        min-height: 600px;
        width: 100%;
        background-color: green;
        color: var(--vc-clr-white);
        font-size: 20px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .carousel__slide img{
        aspect-ratio: 1/1;
      }

      .options-carousel {
        display: grid;
      }

      .carousel__pagination {
        justify-content: left;
      }
    }
</style>
  