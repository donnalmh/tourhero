<script setup lang="ts">
import type { ItineraryProps } from '@/components/Interfaces';
import CustomerRatings from './CustomerRatings.vue'
import { inject } from 'vue';
const itineraryObject: ItineraryProps | undefined = inject('itineraryObject')
</script>

<template>
    <div class="pricing-component">
        <div class="flex justify-center from-title">FROM</div>
        <div class="flex justify-center price-value">{{ (itineraryObject?.currentPrice.toLocaleString() || '' ) + " " +  itineraryObject?.currency }} </div>
        <div class="flex justify-center per-person">
            <div class="grid grid-cols-2 gap-1">
                <div class="col-span-1 flex flex-col justify-center"><div class="flex justify-end prev-price">
                    <div class="flex flex-col justify-center">{{ (itineraryObject?.prevPrice.toLocaleString() || '' )  + " " +  itineraryObject?.currency  }} </div> </div></div>
                <div class="col-span-1"><div>PER PERSON</div></div>
            </div>
        </div>
        <div class="flex justify-center mt-2"><CustomerRatings /></div>
        <div class="all-buttons flex justify-center grid grid-cols-12 gap-2 mt-5">
            <div class="col-span-7">
                <button class="book-trip bg-flame-orange  hover:bg-red-700 text-white  font-bold py-2 px-4 rounded w-full border border-flame-orange">
                    <div class="flex flex-col justify-center font-extrabold">
                         Book Trip
                    </div>
                </button>
            </div>
            <div class="col-span-2">
                <button class="bg-transparent hover:bg-slate-500 hover:text-white text-slate-500  font-bold py-2 px-2 border border-slate-500 rounded w-full">
                   <i class="pi pi-heart-fill icon-heart"></i>
                </button>
            </div>
            <div class="col-span-3">
                <button class="bg-transparent hover:bg-slate-500 hover:text-white text-slate-500 font-bold py-2 px-4 border border-slate-500 rounded w-full">
                    <div class="flex flex-col justify-center font-extrabold">
                        Share
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>


<style scoped>
    /* .icon-heart {
        position:relative;
        top: 3px;
    } */
    .all-buttons {
        font-size: 1rem;
    }
    .book-trip {
        color: white;
        font-weight:800;

    }
    .pricing-component {
        background-color: #123163;
        padding: 2em;
 
    }

 

    .price-value {
        font-size: 1.5rem;
        font-weight: 800;
        color: white;
    }

    .prev-price{
        font-size: 1.1rem;
        line-height: normal;
        text-decoration: line-through;
        font-weight:100;
    }
    .per-person, .from-title {
        color: #b2b2b2;
        font-size: 1.1rem;
    }

    .per-person {
        margin-top: -0.2em;
    }
</style>