
<script setup lang="ts">
    import ItineraryDetails from './main/ItineraryDetails.vue'
    import ItineraryProperties from './aside/ItineraryProperties.vue'
    import TheWelcome from '../TheWelcome.vue'
</script>

<template>
    <div class="content">
        <div class="grid grid-cols-12 gap-4">
            <div class="bordered col-span-8">
                <ItineraryDetails />
            </div>
            <div class="col-span-4">
                <ItineraryProperties />
            </div>
        </div>

    </div>
</template>

<style scoped>
    .content {
        height: 100%;
        margin: -2em 10em 0;
    }

    .bordered {
        border-radius: 0.2em; 
        border: '1px solid gray'
    }
</style>