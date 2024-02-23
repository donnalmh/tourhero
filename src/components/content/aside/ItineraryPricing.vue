<script setup lang="ts">
import CustomerRatings from './CustomerRatings.vue'
</script>

<template>
    <div class="pricing-component">
        <div class="flex justify-center from-title">FROM</div>
        <div class="flex justify-center price-value">1,300 USD</div>
        <div class="flex justify-center per-person">
            <div class="grid grid-cols-2 gap-1">
                <div class="col-span-1"><div class="flex justify-center prev-price">1,699 USD </div></div>
                <div class="col-span-1"><div>PER PERSON</div></div>
            </div>
        </div>
        <div class="flex justify-center mt-3"><CustomerRatings /></div>
        <div class="flex justify-center grid grid-cols-12 gap-1">
            <div class="col-span-6">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                    Book Trip
                </button>
            </div>
            <div class="col-span-2"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                    <i class="pi pi-heart"></i>
                </button></div>
            <div class="col-span-4">
                <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                    Share
                </button> -->
            </div>
        </div>
    </div>
</template>


<style scoped>
    .pricing-component {
        background-color: #123163;
        padding: 2em;
 
    }

    .from-title {
        font-size: 0.8rem;
    }

    .price-value {
        font-size: 2rem;
        font-weight: 800;
        color: white;
    }

    .prev-price{
        font-size: 1.2rem;
        line-height: normal;
        text-decoration: line-through;
        font-weight:100;
    }
    .per-person, .from-title {
        color: #b2b2b2;
        font-weight:100;
    }

    .per-person {
        margin-top: -0.2em;
    }
</style>