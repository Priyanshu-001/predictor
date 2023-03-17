<template>
    <course-info-card :course = "course_url" />
    <div class="mt-4 mx-3">
        <section id="cuttoff" class="tw-p-8">
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
                <p> 
			Showing <strong> 6th Round </strong> Cuttoff for 
			<strong>{{userInfo.category}}</strong> category
			<strong><template v-if="!userInfo.pwd">non-</template>PwD</strong>  student, searching for seats in <strong>{{userInfo.pool}} seat pool</strong> searching only in <strong> JOSAA colleges </strong> .
            </p>
            </v-row>
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
            
                />
            </client-only>
     
        </section>
    </div>
</template>

<script setup>
    const {params:{course_url}} = useRoute()
    const userInfo = useUserInfo()
    const filter=ref('ALL')
    const search = ref('')
    const {data:cuttoffs,pending} = useFetch(`/api/courses/${course_url}`,{query:{...userInfo}})
    
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
    

</script>