<template>
    <nuxt-link :to="`/courses/${item.link}`" class="mx-1 w-full  sm:w-5/12">

        <div class="  h-64 flex flex-col  my-5" >
            <div class="w-full h-56 flex transition duration-50 ease-in-out hover:shadow-lg  justify-center text-center  bg-gray-100 items-center ">
                <Icon :name="item?.colorIcon" style="width:100px" size="6em"></Icon>
            </div>
            <h2 style="max-width: 30ch; overflow-y: wrap; white-space: initial; overflow-wrap: anywhere;word-wrap: break-word; display: inline-block;" class=" text-gray-700 text-lg font-medium mt-4 text-center ">
             {{item.courses}} </h2>
            
        </div>
    </nuxt-link>

</template>
<script setup>
 const props = defineProps(['item'])
</script>