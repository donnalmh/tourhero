<!-- eslint-disable vue/no-export-in-script-setup -->

<script setup lang="ts">
    import { onMounted, provide } from 'vue'
    import ItineraryDetails from './main/ItineraryDetails.vue'
    import ItineraryProperties from './aside/ItineraryProperties.vue'
    import { reactive, ref } from 'vue';
    // export enum FeatureCategory {
    //     DURATION = 'DURATION',
    //     COUNTRIES = 'COUNTRIES',
    //     ACTIVITYLEVEL = 'ACTIVITY LEVEL',
    //     LANGUAGE = 'LANGUAGE',
    //     INCLUDES = 'INCLUDES'
    // }
    
    export interface ItineraryProps {
        itineraryId: string
        title: string
        description: string
        itineraryDetail: ItineraryDayItem[]
        currentPrice: number
        prevPrice: number
        rating: number
        numReviews: number
        features: Feature[]
        teststring: string[]

    }

    export interface Feature {
        title: string,
        value: string
    }

    export interface test{
        teststring: string[]
    }

    export interface ItineraryDayItem {
        dayNo: 1
        title: string
        description: string
        sourceImg: string[]
    }

    export interface Features {
        list: Feature[]
    }

    const props = reactive({
        itineraryId: '09781021',
        title: 'Marina Bay Sands Observation',
        description: "A great spot for R&R: order yourself a drink from the bar and get comfortable on one of the day beds that line the impressive 100-metre pool.",
        itineraryDetail: [
            {
                dayNo: 1,
                title: 'See the largest indoor waterfall in the world',
                description: "Just how much mind-boggling can be packed into a 14-day holiday? Well we'll tell you. Our hot adventure park packs a serious punch on a journey to Singapore and Malaysia.",
                sourceImg: []
            },
            {
                dayNo: 2,
                title: 'Two giant conservatories',
                description: "Two giant conservatories rise beside Marina bay like futuristic shells, one home to ancient olive trees, the other to a towering , tropical mountain. To the north are Supertrees: futurists.",
                sourceImg: []
            },
            {
                dayNo: 3,
                title: "Singapore's 21st-century botanical garden",
                description: "Singapore's 21st-century botanical garden is a $1 billion, 101-hectare fantasy land of a space-age biodomes, high-tech Supertrees and whimsical scultures.",
                sourceImg: []
            }
        ],
        currentPrice: 1300,
        prevPrice: 1699,
        rating: 4.8,
        numReviews: 23,
        features: [
            {
                title: 'DURATION',
                value: 3
            },
            {
                title: 'COUNTRIES',
                value: 2
            },
            {
                title: 'ACTIVITY LEVEL',
                value: 'Strenuous'
            },
            {
                title: 'LANGUAGE',
                value: 'English'
            },
            {
                title: 'INCLUDES',
                value: 'Food, Hotel, Transport'
            }
        ]
    })

    provide('itineraryObject', props);
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