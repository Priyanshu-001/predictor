<template>
    <nuxt-link :to="`/courses/${item.link}`" class="tw-mx-1 tw-w-full  sm:tw-w-5/12">

        <div class="  tw-h-64 tw-flex tw-flex-col  tw-my-5" >
            <div class="tw-w-full tw-h-56 tw-flex tw-transition tw-duration-50 tw-ease-in-out hover:tw-shadow-lg  tw-justify-center tw-text-center  tw-bg-gray-100 tw-items-center tw-">
                <v-icon size="80px" style="width:100px" class="tw-text-gray-700 "> {{item.icon}} </v-icon>
            </div>
            <h2 style="max-width: 30ch; overflow-y: wrap; white-space: initial; overflow-wrap: anywhere;word-wrap: break-word; display: inline-block;" class=" tw-text-gray-700 tw-text-lg tw-font-medium tw-mt-4 tw-text-center ">
             {{item.courses}} </h2>
            
        </div>
    </nuxt-link>

</template>
<script setup>
 const props = defineProps(['item'])
</script>