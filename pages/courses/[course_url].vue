<template>
    <course-info-card :course = "course_url" />
    <div class="mt-4 mx-3">
        <section id="cuttoff" class="tw-px-8">
            <v-row>
	            <v-col md="3" cols="12">
		            <h2> Cuttoff</h2>
                </v-col>
               
            <v-spacer/>
                <v-col md="6" cols="12">
                    <v-row>
                        <v-col cols="12" md="8" >
                            <v-text-field
			                label="Search Institutes"
			                prepend-inner-icon="mdi-bank"
			                v-model="search"
			                />
                        </v-col>
                        <v-col cols="12" md="4">
                            <client-only>
                                <v-select 
                                class="tw-ml-1"
                                label="Filter Degree"
                                prepend-inner-icon="mdi-filter-variant"
                                v-model="filter"
                                :items="unique"
                                />
                            </client-only>
                        </v-col>
                    </v-row>
                </v-col>
                <br/>
            </v-row>
                <exams-info-banner :degrees="unique"  ></exams-info-banner>
                <p class="tw-mt-3"> 
			Showing <strong> 6th Round </strong> Cuttoff for 
			<strong>{{userInfo.category}}</strong> category
			<strong> {{ userInfo.pwd == 'false' ? 'non-':'' }}PwD</strong>   student, searching for seats in <strong>{{userInfo.pool}} seat pool</strong> searching only in <strong> JOSAA colleges </strong> .
           
            
            <a
            href="#cuttoffs"
            color="primary"
            dark
            variant="text"
            @click.prevent.stop="dialog = true"
            >
           Edit details
            </a>
        </p>
       
           
        </section>
        
        <section>
           
            <br>
            <client-only>
                <v-data-table
                :headers = "headers"
                :items="filtered_cuttoffs" 
                :loading="pending"
                loading-text="Loading... Please wait"
                class="elevation-3"
                :search="search"
                dense
                disable-pagination
            
                />
            </client-only>
     
        </section>
        <client-only>
        <v-dialog
            v-model="dialog"
           
            width="fit-content"

            >
            <select-card  :dialog="true" :demo="true" :next="`/courses/${course_url}`"  @close="dialog=false"/>
            </v-dialog>
        </client-only>
    </div>
</template>

<script setup>
    definePageMeta({
  middleware: ["update-info"]
  // or middleware: 'auth'
})
   
    
    const {params:{course_url}} = useRoute()
    const userInfo = useUserInfo()
    const filter=ref('ALL')
    const search = ref('')
    const dialog = ref(false)
    const {data:cuttoffs,pending,error} = await useFetch(`/api/courses/${course_url}`,{query:userInfo})
    if(error.value)
        throw createError({statusCode:404,statusMessage:error.value.message, fatal:true})
    const filtered_cuttoffs = computed(()=>pending.value ? []: cuttoffs.value.filter(row=>
                                        {
                                           return row.institute?.toLowerCase()?.includes(search.value.toLowerCase() ) && (row.degree === filter.value || filter.value === 'ALL') 
                                         } ) )
    const unique = computed(()=>pending.value? []: ['ALL',...new Set(cuttoffs.value.map(item=>item.degree))] )

    const headers = [
        {title:'Degree', value: 'degree'},
        {title:'Institute', value:'institute'},
        {title:'Duration(yrs)', value: 'duration'},
        {title:'Exam',value:'exam'},
        {title:'Open(2020)',key:'orank',sortable:true},
        {title:'Close(2020)',key:'crank',sortable:true},
        {title:'State',value:'state'},
        {title:'Quota', value:'quota'},
	]
    

    useSeoMeta({
    title:()=>`${course_url.split('_').join(' ')} cuttoffs in JOSAA colleges in our DB` ,
    description:()=>`View cuttoff of ${course_url.split('_').join(' ')} courses in JOSAA colleges like IITs/NITs/IIITS etc`
   })
</script>

