<template>    
	<v-card elevation="3" rounded class=" !m-3 !my-5 !py-3 !px-2 flex min-h-24 w-full flex-col"  >

    <div class="my-2">
      <nuxt-link :to="`/colleges/${item.url_name}`">
     <p class="font-semi-bold text-4xl mb-0 hover:underline ">
      {{item.institute}}
    </p>
    </nuxt-link>
    <span class="text-gray-500 text-md font-bold -mt-1"> {{item.city}}, {{item.state}}  </span>
  
  </div>

  <p class="font-light text-2xl mt-1">
    Accepts: JEE-{{item.exam}}
    </p>
</v-card>
</template>

<script>
export default{
	name: "CollegeItem",
	props: { 
    item:{
      required: true,
	},
  loading:{
    default: false,
  }
},

}
</script>