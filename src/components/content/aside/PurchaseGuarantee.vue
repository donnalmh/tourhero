<template>
<div class="large-device:border large-device:border-slate-200 large-device:p-4 text-cerulean-blue rounded sm:mt-4 sm:pt-4">
    <div class=" sm:text-center sm:text-xl sm:mt-2"><i class="pi pi-list mr-3"></i><span class='navy confidence'>Buy With Confidence</span></div>

    <div class="points mt-3">
    <div><i class="pi pi-check-circle mr-3"></i><span class='detail'>0% Instalment Payment</span></div>
    <div><i class="pi pi-check-circle mr-3"></i><span class='detail'>$200 Deposit</span></div>
    <div><i class="pi pi-check-circle mr-3"></i><span class='detail'>24/7 Support</span></div>
    <div><i class="pi pi-check-circle mr-3"></i><span class='detail'>No Booking Fee</span></div>
    <div><i class="pi pi-check-circle mr-3"></i><span class='detail'>Free Cancellation & changes up to 45 days prior</span></div>
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