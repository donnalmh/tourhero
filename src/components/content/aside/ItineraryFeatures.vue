<script setup lang="ts">
    import type { ItineraryProps } from '@/components/Interfaces';
import FeatureItem from './FeatureItem.vue'
import { inject } from 'vue';
const itineraryObject: ItineraryProps | undefined = inject('itineraryObject')
</script>
<template>
    <div v-if="itineraryObject" class="grid grid-cols-3  sm:grid-cols-2  large-device:border large-device:border-slate-200 pb-3">
            <FeatureItem  v-for="(feature, index) in itineraryObject.features" :key="index" :category="feature.title" :value="feature.value" />
    </div>
</template>