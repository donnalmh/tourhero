<script setup lang="ts">
    import FeatureItem from './FeatureItem.vue'


    export interface Features {
        duration: number
        countries: number
        activityLevel: string
        language: string
        inclusion: {
            food: boolean
            hotel: boolean
            transport: boolean
            wifi: boolean
        }
    }

    const props = defineProps<Features>(withDefaults({
        duration: 3,
        countries: 2,
        
    }))
</script>
<template>
    <div class="grid grid-cols-4 gap-4">
        <FeatureItem />
    </div>

</template>