<script setup lang="ts">
import TimelineItem from './TimelineItem.vue'
import { inject } from 'vue';

import type { ItineraryProps } from '../ItineraryContent.vue';
    const itineraryObject: ItineraryProps | undefined = inject('itineraryObject')
    const itineraryDays = itineraryObject?.itineraryDetail;
</script>

<template>
    <div id='detail-overflow' class="overflow">
        <div v-if='itineraryDays && itineraryDays.length >0' class="timeline">
            <TimelineItem v-for="(item, index) in itineraryObject?.itineraryDetail" :key="index" :day-no="item.dayNo" :description="item.description" :title="item.title" :link="item.sourceImg" />
        </div>
    </div>
</template>

<style scoped>
    .overflow {
        overflow-y: scroll;
        /* height:550px;
        padding-top:5px; */

    }
    .timeline {
        position: relative;
        margin: 0 7px 0;
        /* border: 1px solid black; */
        padding: 40px 20px;
    }

    .timeline-content {
        display: flex;
        flex-direction: row;
    }

    .timeline-pic {
        height: 150px;
        width: 250px;
        background-color:red;
    }

    .timeline::after {
        content: '';
        position: absolute;
        width: 2px;
        background-color: #C9EAED;
        top: 100px;
        bottom: 0px;
        left: 0;
        margin-left: -1px;
    }

    .timeline-item::after {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        border: 1px solid #87a3a5;
        background-color: white;
        border-radius: 50%;
        top: 50%;
        left: 0;
        margin-left: -24px;
        z-index: 3;
    }

    @media screen and (max-width: 991px) {
        .timeline {
            position: relative;
            margin: 0 7px 0;
            padding: 1rem 20px;
        }
        .timeline::after {
            top: 25px;
            bottom: 0px;
        }

        .timeline-item::after {
            top: 2%
         }

        .overflow {
            overflow-y: unset;
            /* height:550px;
            padding-top:5px; */

        }

       
    }
</style>