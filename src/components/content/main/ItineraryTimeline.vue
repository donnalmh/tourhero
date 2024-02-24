<script setup lang="ts">
</script>

<template>
    <div class="timeline">
    <div class="timeline-item">
        <div class="timeline-content">
            <div class="timeline-pic">2022</div>
        </div>
        </div>
        <div class="timeline-item">
        <div class="timeline-content">
            <div class="timeline-pic">2023</div>
        </div>
        </div>
        <div class="timeline-item">
        <div class="timeline-content">
            <div class="timeline-pic">2024</div>
        </div>
        </div>
    </div>
</template>

<style scoped>
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