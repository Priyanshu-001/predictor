<template>
    <v-card elevation="3" rounded 
    class=" !m-3 !my-5 !py-3 !px-2 flex !min-h-24 w-full flex-col" >
        <nuxt-link :to="{path:`/colleges/${result.url_name}`, query:{pool,category,pwd}}"><h2 class="text-blue-700 font-bold text-xl mb-0 hover:underline">{{result.institute}}</h2>  </nuxt-link>
            <span class="text-gray-500 text-md font-bold"> {{result.city}}, {{result.state}}
                <span v-if="result.quota == 'HS' " class="text-white text-sm p-1 bg-blue-800">Home State</span>
              
            </span>
            <div class="my-2">
                <p class="font-light text-4xl mb-0">{{result.courses}}</p>
                <span class="text-gray-500 text-md font-bold -mt-1"> {{result.duration}} years {{result.degree}}</span>
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
const {pool,category,pwd} = useUserInfo().value

</script>