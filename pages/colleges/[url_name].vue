<template><div>
    <college-info-card :college="college_info"/>
    <section class="tw-m-2 tw-mt-5">
    <v-row>
	    <v-col md="3" cols="12">
		    <h2> Cuttoff </h2>
        </v-col>
        <v-spacer/>
        <v-col md="6" cols="12">
            <v-row>
                <v-col cols="12" md="8" >
                    <v-text-field
                        label="Search Courses"
                        prepend-inner-icon="mdi-school"
                        v-model="search"
                        />
                </v-col>
                <v-col cols="12" md="4">
                    <ClientOnly>
                        <v-select 
                        class="ml-1"
                        label="Filter Degree"
                        prepend-inner-icon="mdi-filter-variant"
                        v-model="filter"
                        :items="unique"
                        />
                    </ClientOnly>
	            </v-col>
	        </v-row>
	    </v-col>
	</v-row>
    <br/>
    <div v-if="pending"> ....loading </div>
    <div v-else>
        <strong>{{college_info.institute}}</strong> admits 
			through <strong> JEE-{{college_info.exam}} </strong> for its 
			<strong>Engneering Courses</strong>. 
			Showing <strong>6th Round </strong> Cuttoff for 
			<strong>{{userInfo.category}}</strong> category
			<strong><template v-if="!userInfo.pwd">non-</template>PwD</strong>  student, searching for seats in <strong>{{userInfo.seatPool}} seat pool</strong>.
            <a
            href="#cuttoffs"
            color="primary"
            dark
            variant="text"
            @click.prevent.stop="dialog = true"
            >
           Edit details
            </a>
    </div>
    <br>
    <client-only>
		<v-data-table 
		:headers = "headers"
		:items="filtered_data" 
		:loading="pending"
		loading-text="Loading... Please wait"
		class="elevation-3"
		:search="search"
		/>
    </client-only>
    <client-only>
        <v-dialog
            v-model="dialog"
           
            width="fit-content"

            >
            <select-card  :dialog="true" :demo="true" :next="`/courses/${url_name}`" />
            </v-dialog>
        </client-only>
</section>
</div></template>
<script setup>
    definePageMeta({
    middleware: ["update-info"]
    })
    const dialog = ref(false)
    const search = ref('')
    const filter = ref('ALL')
    const headers = [
			{title:'Degree', value: 'degree'},
			{title:'Course', value:'courses'},
			{title:'Duration(yrs)', value: 'duration'},
			{title:'Open(2020)',key:'orank',sortable:true},
			{title:'Close(2020)',key:'crank', sortable:true}, 
			{title:'quota', value:'quota'},
			]

    const {params:{url_name}} = useRoute()

    const userInfo = useUserInfo()

    const {data:college_info} = useFetch(`/api/colleges/${url_name}`)

    const {data:cuttoffs,pending} = useFetch(`/api/colleges/${url_name}/cuttoff`,{query:userInfo})
    const filtered_data = computed(()=>pending.value ? []: cuttoffs.value.filter(row=>
                                        {
                                           return row.courses?.toLowerCase()?.includes(search.value.toLowerCase() ) && (row.degree === filter.value || filter.value === 'ALL') 
                                         } ) )
    const unique = computed(()=>pending.value? []: ['ALL',...new Set(cuttoffs.value.map(item=>item.degree))] )
    

    
</script>