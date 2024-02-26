
<script setup lang="ts">
import ItineraryPricing from './ItineraryPricing.vue'
import ItineraryFeatures from './ItineraryFeatures.vue'
import PurchaseGuarantee from './PurchaseGuarantee.vue';
</script>

<template>
    <div id="properties">
        <ItineraryPricing />
        <ItineraryFeatures />
        <GMapMap class="mt-4"
        :center="{ lat: 1.2904481, lng: 103.8429059 }"
        :zoom="10" 
        map-type-id="roadmap" 
        style="height: 10rem"
        :options="{
        }"
        />
        <PurchaseGuarantee class="mt-4" />
    </div>
</template>

<style scoped>
#properties {
    margin-bottom:1rem;
}
</style>