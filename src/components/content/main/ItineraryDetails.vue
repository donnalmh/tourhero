<script setup lang="ts">
import ItineraryTimeline from './ItineraryTimeline.vue'
</script>

<template>
    <div class="details bg-white">
        <div class="flex justify-between caption">
            <div>Asia > Singapore > Strenuous Travel Style</div>
            <div>ID: 09781021</div>
        </div>
        <div class="title mt-4">Marina Bay Sands Observation</div>
        <div class="description">A great spot for R&R: order yourself a drink from the bar and get comfortable on one of the day beds
            that line the impressive 100-metre pool.
        </div>
        <div class="itinerary-title mt-4"><i class="i-icon pi pi-sitemap pr-1"></i>Itinerary</div>
        <ItineraryTimeline />
    </div>
</template>

<style scoped>
    .i-icon {
        color: #5EB3BA;
    }
    .details {
        border-radius: 0.2em; 
        border: 1px solid #e8e8e8;

        padding: 2em;
        font: "Gilroy", sans-serif;
        background-color: white;
    }

    .caption{
        color: #A19A9A;
        font-size: 0.6rem;
    }
    
    .title {
        font-weight: 900;
        font-size: 1.5rem;
    }

    .description {
        font-size: 0.8rem;
    }

    .itinerary-title {
        color: #123162;
        font-size: 1rem;
        font-weight: 800;
    }
</style>