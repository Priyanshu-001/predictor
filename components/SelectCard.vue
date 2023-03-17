<template>
  <v-card
    id="c1"
    class="
      tw-p-4
      tw-justify-center
      tw-flex
      tw-flex-col
      tw-text-gray-700
      tw-font-semibold
      tw-rounded-7xl
    "
    style="padding: 1rem !important"
    elevation="20"
    :class="!dialog ? ['tw--mb-12', 'fade-in', 'tw-m-3', 'tw-w-100'] : ''"
  >
    <v-card-title>
      <h2 class="tw-text-4xl tw-font-extrabold tw-text-gray-800">
        Enter details
      </h2>
    </v-card-title>
    <template v-if="!demo">
      <v-text-field
        color="primary"
        class="tw-font-bold"
        v-model.number="query.rank"
        label="Rank(Category)"
        type="number"
        min="1"
        max="169999"
        filled
      />
      <v-select
        id="exam"
        auto-select-first
        filled
        v-model="query.exam"
        label="Exam"
        :items="exams"
      />
    </template>
    <label for="pool" class="mb-2">
      <h3 class="tw-text-xl">Seat Pool</h3>
    </label>
    <br />
    <v-row class="flex flex-wrap">
      <v-btn-toggle id="pool" color="primary" v-model="query.seatPool">
        <v-btn class="sm:mx-2" text>
          <v-icon> mdi-gender-female </v-icon> Female only
        </v-btn>

        <v-btn class="sm:mx-2" text>
          <v-icon> mdi-gender-male-female </v-icon> Gender Neutral
        </v-btn>
      </v-btn-toggle>
    </v-row>
    <template v-if="demo">
      <br />
      <br />
    </template>

    <v-autocomplete
      v-if="!demo"
      id="state"
      auto-select-first
      filled
      label="Select Home State"
      class="mt-4"
      v-model="query.state"
      :items="stateList"
    >
    </v-autocomplete>

    <v-select
      id="Category"
      auto-select-first
      filled
      label="Category"
      v-model="query.category"
      :items="catList"
      default="OPEN"
      class="mb-1"
    >
    </v-select>
    <v-checkbox class="mt-1" v-model="query.pwd" label="PWD status">
    </v-checkbox>

    <v-card-actions class="tw--mt-2">
      <v-row>
        <v-btn block color="primary" variant="flat" @click="makeRequest">
          <v-icon>mdi-magnify</v-icon> Search
        </v-btn>
        <v-btn
          class="mt-2"
          v-if="dialog"
          text
          block
          color="error"
          @click="close"
        >
          <v-icon> mdi-close </v-icon> Cancel</v-btn
        >
      </v-row>
    </v-card-actions>
  </v-card>
</template>


<script >
export default {
  props: ["dialog", "demo"],
  setup() {
    const query = ref({
      rank: 1,
      seatPool: 1,
      state: "Delhi",
      category: "OPEN",
      pwd: false,
      exam: "main",
    });
    const exams = ["Main", "Advanced"];
    const stateList = [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Daman and Diu",
      "Delhi",
      "Goa",
      "Gujarat",
      "Gujrat",
      "Haryana",
      "Himachal Pradesh",
      "Jammu and Kashmir",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Puducherry",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Naidu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
    ];
    const catList = ["OBC-NCL", "EWS", "OPEN", "SC", "ST"];
    const makeRequest = () => console.log(query.value);

    return {
      query,
      exams,
      stateList,
      catList,
      makeRequest,
    };
  },
};
</script>
<style lang="css" scoped>
c1 {
  min-width: min(350px, 100%);
  max-width: 500px;
  padding: 1rem !important;
}
.fade-in {
  animation: fadeIn 450ms;
  /*animation-delay:250ms;*/
  animation-timing-function: ease-in;
}
@keyframes fadeIn {
  from {
    opacity: 0.1;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
