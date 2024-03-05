
<script setup lang="ts">
    import type { ItineraryProps } from '@/components/Interfaces';
import { inject } from 'vue';

    export interface Props {
        rating: number
        numReviews: number
    }
    const itineraryObject: ItineraryProps | undefined = inject('itineraryObject')
</script>

<template>
    <div class="flex flex-row rating">
        <div v-for="n in 5" :key="n" class="mr-2">
            <div :style="{color : (n <= Math.floor(itineraryObject?.rating || 0) ? '#F7000A' : 'lightslategray')}">
                <i class="pi pi-star-fill"></i>
            </div>
        </div>
        <div class="num-review"> 
            <span class="text-white">{{itineraryObject?.rating || 0}}</span>&nbsp;({{itineraryObject?.numReviews }})
        </div>
    </div>
</template>

<style scoped>
.rating {
    font-size: 1rem;
}
.filled-star {
    color: #F7000A;
}

.unfilled-star {
    color: lightslategray;
    opacity: 50%
}

.num-review {
    color: #b2b2b2;
    font-weight:100;
    cursor: pointer;
}
</style>