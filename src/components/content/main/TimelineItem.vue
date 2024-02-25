<script setup lang="ts">
import TimelineItemCarousel from './TimelineItemCarousel.vue';
export interface timelineProps {
    dayNo: number
    title: string
    description: string
}

const props = defineProps<timelineProps>()

</script>

<template>
     <div class="timeline-item">
            <div class="timeline-content">
                <div class="carousel">
                    <TimelineItemCarousel />
                </div>
                <div class="ml-4 flex flex-col grow justify-between">
                    <div>
                        <div class="flex justify-between">
                            <div class="day">Day {{ props.dayNo}}</div>
                            <div class="title">{{  props.title  }}</div>
                        </div>
                        <div class='description'>
                            {{ props.description  }}
                        </div>
                    </div>

                    <div class="link">
                            Show more
                        </div>
                </div>
            </div>
    </div>
</template>

<style scoped>
.carousel {
    width: 250px;
    height: 150px;
}
.link {
    text-decoration: underline;
    color: #478f88;
    font-size:0.7rem;   
}
.description {
    font-size: 0.7rem;
    color:#9bacbc;
}
.title {
    font-size: 0.8rem;
        font-weight: 600;
}
.day{
    color: #123162;
        font-size: 0.9rem;
        font-weight: 600;
}
.timeline-content {
        display: flex;
        flex-direction: row;
        height: 150px;
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

    

    .timeline-item {
        position: relative;
        margin-bottom: 50px;
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