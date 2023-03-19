<template>    
	<v-card elevation="3" rounded class=" !tw-m-3 !tw-my-5 !tw-py-3 !tw-px-2 tw-flex tw-min-h-24 tw-w-full tw-flex-col"  >

    <div class="tw-my-2">
      <nuxt-link :to="`/colleges/${item.url_name}`">
     <p class="tw-font-semi-bold tw-text-4xl tw-mb-0 hover:tw-underline ">
      {{item.institute}}
    </p>
    </nuxt-link>
    <span class="tw-text-gray-500 tw-text-md tw-font-bold tw--mt-1"> {{item.city}}, {{item.state}}  </span>
  
  </div>

  <p class="tw-font-light tw-text-2xl tw-mt-1">
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