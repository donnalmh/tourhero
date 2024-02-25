<script setup lang="ts">
import { type PropType } from 'vue'
    import FeatureItem from './FeatureItem.vue'
import { inject } from 'vue';
import type { ItineraryProps } from '../ItineraryContent.vue';
    const itineraryObject: ItineraryProps | undefined = inject('itineraryObject')
    console.log("itinerary: ", itineraryObject)
    
</script>
<template>
    <div v-if="itineraryObject" class="grid grid-cols-3 border border-slate-200 pb-3">
            <FeatureItem  v-for="(feature, index) in itineraryObject.features" :key="index" :category="feature.title" :value="feature.value" />
    </div>

</template>