<template>
<div class="tw-m-0 tw-bg-gray-50" >
    <div class="tw-bg-gradient-to-br tw-p-6 tw-pt-12 
    tw-text-white tw-from-blue-500 tw-to-blue-700 tw-flex tw-flex-col-reverse md:tw-flex-row-reverse tw-justify-between ">
    <client-only>
        <v-btn @click="dialog=true">
            <v-icon> mdi-pencil </v-icon>
            Edit Details
        </v-btn>
    </client-only>

    <p  class="tw-text-2xl">
       
     Serching for top colleges achievable with 
     <strong> {{userInfo.category}} Rank {{userInfo.rank}} </strong>
    </p>

    </div>
    <v-progress-linear
      indeterminate
      striped
      color="primary"
      height="5" 
      v-if="pending || metaDataPending"
    />
    <v-container>
        <!-- TODO:add FLoating button for mobile -->
        <v-row>
            <v-col cols="0" sm="3">
                <ClientOnly>
                    <filter-card
                    ref="filter" 
                    @input="$event=>({courses,degrees}=$event)"
                    :course-list="metaData?.courses || []"
                    :degree-list="metaData?.degree || []"
                    />
                </ClientOnly>
            </v-col>
            <v-col cols="11" sm="8">
                <div>
                    
                    <div v-if="!metaDataPending" class="text-2xl">
                        Found around <strong> {{ metaData?.count}} results</strong> in our db. Ranks shown are category ranks.
                        <ExamsInfoBanner :exam="userInfo.exam" :degrees="metaData.degree" />
                    </div>
                    <!-- TODO: add skeleton for meta-para -->
                    <template v-if="!pending"> 
                        <predict-item v-for="(college,index) in data" 
                        :key="index"
                        :result="college"
                        />
                    </template>
                    <!-- TODO: skeleton loaders -->

                    <p class="tw-text-xl tw-font-medium">
                       
                    You may be getting into many colleges not present in our db. Colleges covered in db are listed  
                    <nuxt-link to ="/colleges"> here. </nuxt-link>
                    Few of NOT covered colleges are
                    <nuxt-link to="/not_covered"> 
                        <strong> listed here.</strong>
                    </nuxt-link>
                </p>
        		<p> There might be many more colleges where you can get in please research before taking a desicion. 
                    This webapp is in beta and contantly improving thanks for you support and all the best for your search.
                </p>

                </div>
            </v-col>
           
        </v-row>
        <LazyClientOnly>
            <v-dialog
            v-model="dialog"
            width="fit-content"
            >
                <select-card  dialog demo @close="dialog=false"></select-card>
            </v-dialog>
        </LazyClientOnly>
    </v-container>
</div>
</template>

<script setup >
    definePageMeta({
    middleware: ["update-info"]
    })

    const courses = ref([])
    const degrees = ref([])
    
    const dialog = ref(false)
    const userInfo = useUserInfo()
    let route = useRoute()
    const {data:metaData,pending:metaDataPending} = await useLazyFetch('/api/possibilities',
                                                    {query:userInfo},)
    const queryBuilder =   useQueryBuilder()
    const predictUrl = computed(()=>queryBuilder('/api/predict',{courses,degrees}))
    const  {data,pending}  =   useLazyFetch(()=>predictUrl.value ,{query:userInfo}) 

    useSeoMeta({
    title:()=>`Searching for colleges for rank ${userInfo.value.rank} ${userInfo.value.category} category` ,
    description:()=>`Searching for colleges for rank ${userInfo.value.rank} ${userInfo.value.category} category`
   })

</script>