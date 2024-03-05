<script setup lang="ts">
import type { SourceImage } from '../ItineraryContent.vue';
import TimelineItemCarousel from './TimelineItemCarousel.vue';
export interface timelineProps {
    dayNo: number
    title: string
    description: string
    link: SourceImage[]
}

const props = defineProps<timelineProps>()

</script>

<template>
     <div class="timeline-item">
            <div class="timeline-content">
                <div class="carousel-lg">
                    <TimelineItemCarousel :links="props.link"/>
                </div>
                <div class="ml-4 flex flex-col grow justify-between">
                    <div>
                        <div class="flex flex-row sm:flex-col ">
                            <div class="day sm:text-xl">Day {{ props.dayNo}}</div>
                            <div class="title ml-3 sm:text-xl sm:ml-0  sm:mt-4">{{  props.title  }}</div>
                        </div>
                        <div class="carousel-sm  sm:mt-4">
                            <TimelineItemCarousel :links="props.link"/>
                        </div>
                        <div class='description mt-2 sm:mt-4'>
                            {{ props.description  }}
                        </div>
                    </div>
                    <div class="link  sm:mt-4 ">
                        Show more
                    </div>
                </div>
            </div>
    </div>
</template>

<style scoped>
.carousel-lg {
    width: 200px;
    /* height: 120px; */
}

.link {
    text-decoration: underline;
    color: #478f88;
    font-size: 1rem;   
}

.carousel-sm {
    display: none;
}

.timeline-content {
        display: flex;
        flex-direction: row;
        /* height: 120px; */
    }
.timeline-item {
    position: relative;
    margin-bottom: 50px;
}

.description {
    font-size: 1rem;
    color:#798590;
    font-weight:500;
}
@media screen and (max-width: 991px) {
    .carousel-lg {
        display: none;
    }

    .carousel-sm {
       
        display: block;
    }

    .timeline-content {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .description {
        color:#798590;
        font-weight:550;
        font-size:1rem;
    }

    .timeline-item {
        position: relative; 
        margin-bottom: 20px;
    }

    .timeline {
            position: relative;
            margin: 0 7px 0;
            padding: 1rem 20px;
        }
        .timeline::after {
            top: 50px;
        }

        .timeline-item::after {
            top: 2%
         }

    .link {
        text-decoration: underline;
        color: #478f88;
        font-size:0.9rem;   
    }
}



.title {
    font-size:17px;
    font-weight: 600;
}
.day{
        font-size:17px;
        color: #123162;
        font-weight: 600;
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
    top: 25px;
    bottom: 0;
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
</style>