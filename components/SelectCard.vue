<template>
  <v-card id="c1" class="
      p-4
      justify-center
      flex
      flex-col
      text-gray-700
      font-semibold
      rounded-7xl
    " style="padding: 1rem !important" elevation="20" :class="!dialog ? ['-mb-12', 'm-3', 'w-100'] : ''">
    <v-card-title>
      <h2 class="text-4xl font-extrabold text-gray-800">
        Enter details
      </h2>
    </v-card-title>
    <template v-if="!demo">

      <label-wrapper label="Category Rank (crl if general)" label-for="rank" class="my-2" label-classes="py-2">
        <template v-slot="{ id }">
          <UInput type="number" class="font-bold" v-model.number="query.rank" placeholder="Rank" :id="id"/>
        </template>
      </label-wrapper>

      <label-wrapper label="Exam" label-for="exam" class="my-2">
        <template v-slot="{ id }">
          <USelect v-model="query.exam" :options="examsList" label="Exam" class="font=bold" name="Exam" :id="id" />
        </template>
      </label-wrapper>

    </template>
    <label-wrapper label="Seat Pool" label-for="seatPool" class="my-2">
      <template v-slot="{ id }">
       <UTabs v-model="query.seatPool" :items="seatPoolInfoArray" :id="id" />
      </template>
    </label-wrapper>


    <LabelWrapper label="Select Home state" label-for="state"  v-if="!demo">
      <template v-slot="{ id }">
      <USelect id="state" class="font-bold mt-1" v-model="query.state" :options="stateList" :id="id"/>
      </template>
    </LabelWrapper>

    <LabelWrapper label="Category" label-for="category">
      <template v-slot="{ id }">
        <USelect id="category" class="font-bold mt-1" v-model="query.category" :options="catList" :id="id"/>
      </template>
    </LabelWrapper>

    <v-checkbox class="mt-1" v-model="query.pwd" label="PWD status" />
   
    <v-card-actions class="-mt-2">
      <v-row>
        <v-btn block color="primary" variant="flat" @click="makeRequest">
          <v-icon>mdi-magnify</v-icon> Search
        </v-btn>
        <v-btn class="mt-2" v-if="dialog" text block color="error" @click="emit('close')">
          <v-icon> mdi-close </v-icon> Cancel</v-btn>

      </v-row>
    </v-card-actions>
  </v-card>
</template>


<script setup>
import { catList, examsList, stateList, seatPoolInfoArray } from '~~/constants';

const emit = defineEmits(['close'])
const { next, demo, dialog } = defineProps({
  "dialog": {

    default: false,
  },
  "demo": {
    default: false,
  },
  "next": {
    default: '/predict'
  }

})
const userInfo = useUserInfo()
const createQuery = () => {
  const { pwd, rank, state, category, exam, pool } = userInfo.value
  return ref({
    rank: Number(rank),
    seatPool: (pool === 'Gender-Neutral' ? 1 : 0),
    state,
    category,
    pwd: pwd == 'true',
    exam
  });
}
const query = createQuery()
const makeRequest = () => {
  const q = {
    ...query.value,
    rank: query.value.rank.toString(),
    pool: query.value.seatPool === 0 ? 'Female-Only' : 'Gender-Neutral',
    pwd: query.value.pwd.toString()
  }
  navigateTo({
    path: next,
    query: { ...q }
  })
  emit('close')
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
