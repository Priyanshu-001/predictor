<template>
  <div style="margin: 2rem">
    <v-card width="100%" max-width="850px" style="padding: 1rem">
      <v-row>
        <v-col cols="12" md="4">
          <h1 class="text-5xl font-medium mt-auto mb-auto"> All Colleges </h1>
        </v-col>

        <v-col cols="12" md="4" class="ml-auto">
          <label-wrapper label="Search Colleges" label-for="searchCOllege" label-classes="font-bold text-slate-600"
            class="bg-zinc-100 hover:bg-zinc-200 p-1 border">
            <template v-slot="{ id }">
              <UInput variant="outline" placeholder="Start typing to search"
                icon="i-heroicons-magnifying-glass-20-solid" v-model="search" :id="id" />
            </template>
          </label-wrapper>
        </v-col>
        <v-col cols="12" md="3">

          <label-wrapper label="Filter by Exam" label-for="filterExam" label-classes="font-bold text-slate-600"
            class="bg-zinc-100 hover:bg-zinc-200 p-1 border">
            <template v-slot="{ id }">
              <USelect :id="id" icon="i-heroicons-adjustments-vertical-solid" v-model="filter"
                :options="['Main', 'Advanced', 'ALL']" />
            </template>
          </label-wrapper>

        </v-col>
      </v-row>

      <v-row class="flex m-1 justify-between">
        <!-- Skeleton loaders -->
        <template v-if="pending"> <v-spacer /> ....loading <v-spacer /></template>
        <!-- content -->
        <template v-else>

          <college-item v-for="(item, index) in colleges" :item="item" :key="index" />
        </template>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CoursesPage",
  setup() {
    useHead({
      title: 'All JOSAA colleges our in DB',
      meta:[
        {
          name:'description',content:'Check all IITs cutoffs, NITs cutoffs, GFTIs cutoffs and other colleges 2024 cutoffs  in our DB ',
        }
      ]
    })

    const search = ref('')
    const filter = ref('ALL')
    const { data: allColleges, pending } = useFetch('/api/colleges')
    const colleges = computed(() => !pending.value ? allColleges.value.filter(college => {
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

<style scoped></style>