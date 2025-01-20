<template>
    <course-info-card :course = "course_url" />
    <div class="mt-4 mx-3">
        <section id="cuttoff" class="px-8">
            <v-row>
	            <v-col md="3" cols="12">
		            <h2> Cutoff </h2>
                </v-col>
               
            <v-spacer/>
                <v-col md="6" cols="12">
                    <v-row>
                        <v-col cols="12" md="6" >
                   
                        <label-wrapper label="Search Courses" label-for="searcCourses"  label-classes="font-bold text-slate-600" class="bg-zinc-100 hover:bg-zinc-200 p-1 border" >
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
                                    placeholder="No filter applied" 
                                    icon="i-heroicons-adjustments-vertical-solid"
                                    v-model="filter"
                                    :options="unique"
                                    />
                            </template>
                    </label-wrapper>
                    </v-col>
                    </v-row>
                </v-col>
                <br/>
            </v-row>
                <exams-info-banner :degrees="unique"  ></exams-info-banner>
                <p class="mt-3"> 
			Showing <strong> 6th Round </strong> Cutoff for 
			<strong>{{userInfo.category}}</strong> category
			<strong> {{ userInfo.pwd == 'false' ? 'non-':'' }}PwD</strong>   student, searching for seats in <strong>{{userInfo.pool}} seat pool</strong> searching only in <strong> JOSAA colleges </strong> .
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
       
           
        </section>
        
        <section>
           
                <CutoffTable :headers="newHeader" :data="filtered_cuttoffs" :loading="pending"  :items-per-page="10" class="elevation-3"/>
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
    const {data:cuttoffs,pending,error} = await useLazyFetch(`/api/courses/${course_url}`,{query:userInfo})
    if(error.value)
        throw createError({statusCode:404,statusMessage:error.value.message, fatal:true})
    const filtered_cuttoffs = computed(()=> cuttoffs?.value.filter(row=>
                                        {
                                           return row.url_name?.toLowerCase()?.includes(search.value?.toLowerCase()?.replace(" ","_") ) && (row.degree === filter.value || filter.value === 'ALL') 
                                         } ) )
    console.log(cuttoffs?.value)                                     
    const unique = computed(()=>pending.value? []: ['ALL',...new Set(cuttoffs.value.map(item=>item.degree))] )

    const newHeader = [
        {label:'Degree', key: 'degree'},
        {label:'Institute', key:'institute'},
        {label:'Duration(yrs)', key: 'duration'},
        {label:'Exam',key:'exam'},
        {label:'Open(2020)',key:'orank',sortable:true},
        {label:'Close(2020)',key:'crank',sortable:true},
        {label:'State',key:'state'},
        {label:'Quota', key:'quota'},
	]
    

    useSeoMeta({
    title:()=>`${course_url.split('_').join(' ')} cuttoffs in JOSAA colleges in our DB` ,
    description:()=>`View cuttoff of ${course_url.split('_').join(' ')} courses in JOSAA colleges like IITs/NITs/IIITS etc`
   })
</script>

