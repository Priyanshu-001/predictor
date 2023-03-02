<template>
  <div style="margin: 2rem">
    <v-card width="100%" max-width="850px" style="padding: 1rem">
      <v-row>
        <v-col cols="12" md="4">
          <h2 class="text-2xl"><strong> All Colleges </strong></h2>
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
          <v-select
            dense
            label="Filter Exam"
            prepend-inner-icon="mdi-filter-variant"
            v-model="filter"
            :items="['Main', 'Advanced', 'ALL']"
          />
        </v-col>
      </v-row>

      <v-row class="tw-flex m-1 tw-justify-between">
        <!-- Skeleton loaders -->
        <template v-if="!doneLoading"> Hello Boi </template>
        <!-- content -->
        <template v-else>
          <college-item
            v-for="(item, index) in all_colleges"
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
  data: () => ({
    doneLoading: false,
    errLoading: false,
    collegeList: [],
    search: "",
    filter: "ALL",
  }),

  methods: {
    async getData() {
      return ["Hello", "Bye"];
    },
  },
  computed: {
    colleges() {
      if (!this.doneLoading) {
        return [];
      } else {
        return this.collegeList.filter((x) => {
          return (
            x.institute.toLowerCase().includes(this.search.toLowerCase()) &&
            (this.filter == "ALL" || x.exam == this.filter)
          );
        });
      }
    },
  },
};
</script>

<style scoped>
</style>