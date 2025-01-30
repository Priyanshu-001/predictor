<template><div>
    <college-info-card :college="college_info"/>
    <section class="m-2 mt-5">
    <v-row>
	    <v-col md="3" cols="12">
		    <h2> Cutoff </h2>
        </v-col>
       
        <v-spacer/>
        <v-col md="6" cols="12">
            <v-row>
                <v-col cols="12" md="6" >
                   
                        <label-wrapper label="Search Courses" label-for="searchCourses"  label-classes="font-bold text-slate-600" class="bg-zinc-100 hover:bg-zinc-200 p-1 border" >
                            <template v-slot="{ id }">
                                    <UInput 
                                    variant="outline" 
                                    placeholder="Start typing to search" 
                                    icon="i-heroicons-magnifying-glass-20-solid" 
                                    v-model="search"
                                    :id="id"/>
                            </template>
                    </label-wrapper>
                </v-col>
                <v-col>
                    <label-wrapper label="Filter Degree" label-for="filterDegree"  label-classes="font-bold text-slate-600" class="bg-zinc-100 hover:bg-zinc-200 p-1 border" >
                            <template v-slot="{ id }">
                                    <USelect
                                    :id="id"
                                    icon="i-heroicons-adjustments-vertical-solid"
                                    v-model="filter"
                                    :options="unique"
                                    />
                            </template>
                    </label-wrapper>
                    </v-col>
	        </v-row>
	    </v-col>
	</v-row>
    <br/>
    <div v-if="pending"> ....loading </div>
    <div v-else class="mx-3">
       
            <ExamsInfoBanner :exam ="college_info?.exam" :degrees="unique" :conditional="false" />
       
        <div class="mt-4">
            <p>
            <strong>{{college_info.institute}} </strong> admits through <strong> JEE-{{college_info.exam}} </strong> for its 
                <strong>Engneering Courses</strong>. 
                Showing <strong>5th Round </strong> Cuttoff for 
                <strong>{{userInfo.category}}</strong> category 
                <strong> {{ userInfo.pwd == 'false' ? 'non-':'' }}PwD</strong>  student, searching for seats in <strong>{{userInfo.pool}} seat pool</strong>.
                Ranks shown are category ranks.
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
        </div>
    </div>
    <br>
    <CutoffTable 
    :items-per-page="10"
    :data="filtered_data"
    :headers="newHeader"
    class="elevation-3"
    :loading="pending"
    />
    <client-only>
        <v-dialog
            v-model="dialog"
            width="fit-content"
            >

            <select-card  :dialog="true" :demo="true" :next="`/colleges/${url_name}`" @close="dialog=false" />
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
            const newHeader = [
			{label:'Degree', key: 'degree'},
			{label:'Course', key:'courses'},
			{label:'Duration(yrs)', key: 'duration'},
			{label:'Open(2024)',key:'orank',sortable:true},
			{label:'Close(2024)',key:'crank', sortable:true}, 
			{label:'quota', key:'quota'},
			]         

    const {params:{url_name}} = useRoute()

    const userInfo = useUserInfo()

    const {data:college_info,error} = await useLazyFetch(`/api/colleges/${url_name}`)
    if(error.value?.statusCode === 404)
        throw createError({statusCode:404,statusMessage:error.value.message, fatal:true})

    const {data:cuttoffs,pending} = await useLazyFetch(`/api/colleges/${url_name}/cuttoff`,{query:userInfo})
    const filtered_data = computed(()=>pending.value ? []: cuttoffs.value.filter(row=>
                                        {
                                           return row.courses?.toLowerCase()?.includes(search.value.toLowerCase() ) && (row.degree === filter.value || filter.value === 'ALL') 
                                         } ) )
    const unique = computed(()=>pending.value? []: ['ALL',...new Set(cuttoffs.value.map(item=>item.degree))] )
    
    
    useSeoMeta({
        title:()=> (college_info.value?.nick_names[0] ? `${college_info.value?.nick_names[0]} | ` : '' ) + `${college_info.value?.institute} JEE ${college_info.value?.exam} closing and opening ranks latest cutoff 2024 ` ,
        description:()=>`View cutoff for ${ college_info.value?.institute} college_info.value?.exam} closing and opening ranks for  the year 2024`
   })
</script>
