<template>
  <div style="margin: 2rem">
    <v-card width="100%" max-width="850px" style="padding: 1rem">
      <v-row>
        <v-col cols="12" md="4">
          <h1 class="tw-text-5xl tw-font-medium tw-mt-auto tw-mb-auto">  All Colleges </h1>
        </v-col>

        <v-col cols="12" md="4" class="ml-auto">
          <v-text-field
            v-model="search"
            prepend-inner-icon="mdi-magnify"
            label="search"
            dense
          />
        </v-col>
        <v-col cols="12" md="3">
          <client-only>
            <v-select
              dense
              label="Filter Exam"
              prepend-inner-icon="mdi-filter-variant"
              v-model="filter"
              :items="['Main', 'Advanced', 'ALL']"
            />
        </client-only>
        </v-col>
      </v-row>

      <v-row class="tw-flex m-1 tw-justify-between">
        <!-- Skeleton loaders -->
        <template v-if="pending"> <v-spacer/> ....loading <v-spacer/></template>
        <!-- content -->
        <template v-else>
          
          <college-item
            v-for="(item, index) in colleges"
            :item="item"
            :key="index"
          />
        </template>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CoursesPage",
  setup(){
    useHead({
		title:'All Colleges in DB'
	})

    const search = ref('')
    const filter = ref('ALL')
    const {data:allColleges,pending} =  useFetch('/api/colleges')
    const colleges = computed(()=>!pending.value ? allColleges.value.filter(college => {
          return (
            college.institute?.toLowerCase()?.includes(search.value.toLowerCase()) &&
            (filter.value == "ALL" || college.exam == filter.value)
          );
        }) : []
        )
    // const colleges = computed(()=>!pending.value? allColleges.value : [])
    // const hello = computed(()=>!pending.value ? []:"ELo")
    return {
    
      pending,
      colleges,
      search,
      filter,
     
    }
  },
};
</script>

<style scoped>
</style>