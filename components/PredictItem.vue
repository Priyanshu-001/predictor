<template>
    <v-card elevation="3" rounded 
    class=" !tw-m-3 !tw-my-5 !tw-py-3 !tw-px-2 tw-flex !tw-min-h-24 tw-w-full tw-flex-col" >
        <nuxt-link :to="`/colleges/${result.url_name}`"><h2 class="tw-text-blue-700 tw-font-bold tw-text-xl tw-mb-0 hover:tw-underline">{{result.institute}}</h2>  </nuxt-link>
            <span class="text-gray-500 text-md font-bold"> {{result.city}}, {{result.state}}
                <span v-if="result.quota == 'HS' " class="tw-text-white tw-text-sm tw-p-1 tw-bg-blue-800">Home State</span>
            </span>
            <div class="my-2">
                <p class="tw-font-light tw-text-4xl tw-mb-0">{{result.courses}}</p>
                <span class="tw-text-gray-500 tw-text-md tw-font-bold tw--mt-1"> {{result.duration}} years {{result.degree}}</span>
            </div>
            <p class="font-light text-2xl mt-1"> Closing Rank (2020): {{result.crank}}</p>
       
    </v-card>
</template>

<script setup>
const props = defineProps({
    result:{
        require:true,
    }
})
</script>