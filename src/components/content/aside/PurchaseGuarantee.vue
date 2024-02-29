<script setup lang="ts">
    const guaranteePoints: string[] = [
        '0% Instalment Payment',
        '$200 Deposit',
        '24/7 Support',
        'No Booking Fee',
        'Free Cancellation & changes up to 45 days prior'
        ]
</script>
<template>
<div class="large-device:border large-device:border-slate-200 large-device:p-4 text-cerulean-blue rounded sm:mt-4 sm:pt-4">
    <div class=" sm:text-center sm:text-xl sm:mt-2"><i class="pi pi-list mr-3"></i><span class='navy confidence'>Buy With Confidence</span></div>
    <div class="points mt-3">
    <div v-for="(point, index) in guaranteePoints" :key="index">
        <div><i class="pi pi-check-circle mr-3"></i><span class='detail'>{{ point }}</span></div>
    </div>
</div>

</div>

</template>

<style scoped>
.detail {
    color: black;
    font-weight: 600;
    font-size:0.7rem;
}

@media screen and (max-width: 639px) {
    .detail {
        color: black;
        font-weight: 500;
        font-size:0.8rem;
    }
/* Additional styles for smaller screens go here */
}
.confidence {
    font-weight:900;
}
.navy {
    color: #132c63
}

.points {
    font-size:0.8rem;
}
</style>