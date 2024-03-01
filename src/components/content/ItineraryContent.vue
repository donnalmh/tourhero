<!-- eslint-disable vue/no-export-in-script-setup -->

<script setup lang="ts">
    import { provide } from 'vue'
    import ItineraryDetails from './main/ItineraryDetails.vue'
    import ItineraryProperties from './aside/ItineraryProperties.vue'
    import { reactive } from 'vue';
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
        sourceImg: SourceImage[]
    }

    export interface SourceImage{
        id: number
        url: string
    }

    export interface Features {
        list: Feature[]
    }

    const carouselWidth = 200;
    const carouselHeight = 120;
    const link  = "https://picsum.photos/"  + carouselWidth + "/"+ carouselHeight + "?q="
    const props = reactive({
        itineraryId: '09781021',
        title: 'Marina Bay Sands Observation',
        description: "A great spot for R&R: order yourself a drink from the bar and get comfortable on one of the day beds that line the impressive 100-metre pool.",
        itineraryDetail: [
            {
                dayNo: 1,
                title: 'See the largest indoor waterfall in the world',
                description: "Just how much mind-boggling can be packed into a 14-day holiday? Well we'll tell you. Our hot adventure park packs a serious punch on a journey to Singapore and Malaysia.",
                sourceImg: [{  id: 1,  url : link + 1  },
                            {  id: 2,  url : link + 2 },
                            {  id: 3, url : link + 3  } ,
                            {  id: 4, url : link + 4  } ,
                            {  id: 5, url : link + 5  }  
                            ]
            },
            {
                dayNo: 2,
                title: 'Two giant conservatories',
                description: "Two giant conservatories rise beside Marina bay like futuristic shells, one home to ancient olive trees, the other to a towering , tropical mountain. To the north are Supertrees: futurists.",
                sourceImg: [{  id: 6,  url : link + 6 },
                            {  id: 7,  url : link + 7 },
                            {  id: 8, url : link + 8  } ,
                            {  id: 9, url : link + 9  } ,
                            {  id: 10, url : link + 10  }  
                            ]

            },
            {
                dayNo: 3,
                title: "Singapore's 21st-century botanical garden",
                description: "Singapore's 21st-century botanical garden is a $1 billion, 101-hectare fantasy land of a space-age biodomes, high-tech Supertrees and whimsical scultures.",
                sourceImg: [{  id: 11,  url : link + 11 },
                            {  id: 12,  url : link + 12 },
                            {  id: 13, url : link + 13  } ,
                            {  id: 14, url : link + 14  } ,
                            {  id: 15, url : link + 15  }  
                            ]
            },
            {
                dayNo: 4,
                title: "Super Park",
                description: "Spanning a whopping 101 hectares, Gardens By the Bay is Singapore's hottest horticultural asset. The $1 billion dollar super park is home to 1.5 million plants, not to mention fauna.",
                sourceImg: [{  id: 16,  url : link + 16 },
                            {  id: 17,  url : link + 17 },
                            {  id: 18, url : link + 18  } ,
                            {  id: 19, url : link + 19 } ,
                            {  id: 20, url : link + 20  }  
                            ]
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
    <div id='top-content' class="content">
        <div class="grid  sm:grid-cols-1 sm:gap-4  grid-cols-12 gap-4">
            <div class="bordered xsm:col-span-1 sm:col-span-1 col-span-8 ">
                <ItineraryDetails />
            </div>
            <div class="sm:col-span-1 col-span-4  ">
                <ItineraryProperties />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .content {
        height: 100%;
        margin: -4em 10em 0;
        position: absolute;
        z-index: 10;
    }

    .bordered {
        border-radius: 0.2em; 
        border: '1px solid gray'
    }

    @media screen and (max-width: 991px)
     {
        .content {
            height: 100%;
            margin: 0; 
        }
        
        .bordered {
            border: none
        }
    }

</style>