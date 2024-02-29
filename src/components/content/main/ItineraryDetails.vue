<script setup lang="ts">
import { onMounted } from 'vue';
import ItineraryTimeline from './ItineraryTimeline.vue'
import ItineraryFeatures from '../aside/ItineraryFeatures.vue'
import GoogleMap from '../aside/GoogleMap.vue';
import PurchaseGuarantee from '../aside/PurchaseGuarantee.vue';

onMounted(() => {
      // Access the event object during post-mount changes
      if(window.innerWidth > 639) {
            const propertiesHeight = document.getElementById('properties')
            const topComponentHeight = document.getElementById('top-component-details')
            var overflow = document.getElementById('detail-overflow'); 
            if(propertiesHeight && topComponentHeight && overflow ){
                const padding = 32
                const diff = propertiesHeight.offsetHeight - topComponentHeight.offsetHeight - (2*padding)
                overflow.style.height = diff +'px';
            }
        }
    // Set the height of the div (replace 300px with your desired height)
    });
</script>

<template>
    <div class="details bg-white">
        <div id="top-component-details">
            <div class="flex justify-between caption">
                <div>Asia > Singapore > Strenuous Travel Style</div>
                <div>ID: 09781021</div>
            </div>
            <div class="title mt-4">Marina Bay Sands Observation</div>
            <div class="description">A great spot for R&R: order yourself a drink from the bar and get comfortable on one of the day beds
                that line the impressive 100-metre pool.
            </div>
            <div class="mobile">
                <ItineraryFeatures />
                <GoogleMap />
                <PurchaseGuarantee class="mt-4" />
            </div>
            <div class="itinerary-title mt-4 sm:text-center sm:text-center sm:text-xl sm:mt-4 sm:pt-4"><i class="i-icon pi pi-sitemap pr-1"></i>Itinerary</div>
        </div>
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
        display: flex;
    }

    .mobile {
        display: none;
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
        /* font-size: 1rem; */
        font-weight: 800;
    }

    @media screen and (max-width: 639px) {
        .details {
            border: none;
            padding: 0.5em;
        }
        .caption{
            color: #A19A9A;
            font-size: 0.6rem;
            display: none;
        }

        .mobile {
            display: block;
        }

        .title {
            line-height:1.3;
            font-size:2rem;
        }

        .description {
            font-size: 1rem;
        font-weight: 500;
        }


    /* Additional styles for smaller screens go here */
    }

   

    

</style>