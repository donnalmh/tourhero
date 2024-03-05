<!-- eslint-disable vue/no-export-in-script-setup -->

<script setup lang="ts">
    import { provide } from 'vue'
    import  {input } from '../sample-data'
    import ItineraryDetails from './main/ItineraryDetails.vue'
    import ItineraryProperties from './aside/ItineraryProperties.vue'
    import { reactive } from 'vue';
    const props = reactive(input)
    provide('itineraryObject', props);
</script>

<template>
    <div id='top-content' class="content">
        <div class="grid  sm:grid-cols-1 sm:gap-4  grid-cols-12 gap-4">
            <div class="bordered xsm:col-span-1 sm:col-span-1 col-span-8 ">
                <ItineraryDetails />
            </div>
            <div class="sm:col-span-1 col-span-4  ">
                <ItineraryProperties />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .content {
        height: 100%;
        margin: -4em 10em 0;
        position: absolute;
        z-index: 10;
    }

    .bordered {
        border-radius: 0.2em; 
        border: '1px solid gray'
    }

    @media screen and (max-width: 991px)
     {
        .content {
            height: 100%;
            margin: 0; 
        }
        
        .bordered {
            border: none
        }
    }

</style>