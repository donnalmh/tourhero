<script setup lang="ts">
import { computed, defineProps } from 'vue';
    const { category, value } = defineProps(['category', 'value']);   
    function getIconString(name: string) {
        switch(name) {
            case 'DURATION':
                return 'clock';
            case 'COUNTRIES':
                return 'globe';
            case 'ACTIVITY LEVEL':
                return 'eye';
            case 'LANGUAGE':
                return 'language';
            case 'INCLUDES':
                return 'list';
        }
    }

    const iconString = computed(() => 'pi pi-' +getIconString(category))
</script>

<template>
    <div class="px-4 sm:px-0 pt-4">
        <div class="icon sm:text-lg"><i :class="iconString"></i></div>
        <div class="feature text-slate-400">{{category}}</div>
        <div class="value text-black">{{value }} <span v-if="category=='DURATION'" class="font-extrabold">days</span></div>
    </div>
</template>

<style scoped>
    .icon {
        color: #08838F;
        font-size:1rem;
    }

    .feature {
        font-size: 0.8rem;
        font-weight:800;
    }

    .value {
        font-size: 1rem;
        font-weight:800;
    }

    @media screen and (max-width: 991px) {
        .feature {
            font-size: 0.8rem;
            font-weight:600;
        }

        .value {
            font-size: 1rem;
            font-weight:500;
        }
    /* Additional styles for smaller screens go here */
    }
</style>