<script setup lang="ts">
import CustomerRatings from './CustomerRatings.vue'
</script>

<template>
    <div class="pricing-component">
        <div class="flex justify-center from-title">FROM</div>
        <div class="flex justify-center price-value">1,300 USD</div>
        <div class="flex justify-center per-person">
            <div class="grid grid-cols-2 gap-1">
                <div class="col-span-1"><div class="flex justify-center prev-price">
                    <div class="flex flex-col justify-center">1,699 USD</div> </div></div>
                <div class="col-span-1"><div>PER PERSON</div></div>
            </div>
        </div>
        <div class="flex justify-center mt-2"><CustomerRatings /></div>
        <div class="all-buttons flex justify-center grid grid-cols-12 gap-1 mt-5">
            <div class="col-span-7">
                <button class="book-trip bg-flame-orange hover:bg-red-700 text-white  font-bold py-2 px-4 rounded w-full border border-flame-orange">
                    Book Trip
                </button>
            </div>
            <div class="col-span-2">
                <button class="bg-transparent hover:bg-slate-500 hover:text-white text-slate-500  font-bold py-2 px-4 border border-slate-500 rounded w-full">
                    <i class="pi pi-heart-fill"></i>
                </button>
            </div>
            <div class="col-span-3">
                <button class="bg-transparent hover:bg-slate-500 hover:text-white text-slate-500 font-bold py-2 px-4 border border-slate-500 rounded w-full">
                    Share
                </button>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .all-buttons {
        font-size: 0.7rem;
    }
    .book-trip {
        color: white;

    }
    .pricing-component {
        background-color: #123163;
        padding: 2em;
 
    }

    .from-title {
        font-size: 0.6rem;
    }

    .price-value {
        font-size: 1.5rem;
        font-weight: 800;
        color: white;
    }

    .prev-price{
        font-size: 0.8rem;
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
        font-size: 0.6rem;
    }
</style>