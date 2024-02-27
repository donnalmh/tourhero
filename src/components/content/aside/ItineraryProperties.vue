
<script setup lang="ts">
import ItineraryPricing from './ItineraryPricing.vue'
import ItineraryFeatures from './ItineraryFeatures.vue'
import PurchaseGuarantee from './PurchaseGuarantee.vue';
import GoogleMap from './GoogleMap.vue';
</script>

<template>
    <div id="properties">
        <div class="mobile">
            <ItineraryPricing />
            <ItineraryFeatures />
            <GoogleMap />
            <PurchaseGuarantee class="mt-4" />
        </div>
    </div>
</template>

<style scoped>
#properties {
    margin-bottom:1rem;
}

.mobile {
    display: block;
}
@media screen and (max-width: 639px) {
    .mobile {
        display: none;
    }
/* Additional styles for smaller screens go here */
}
</style>