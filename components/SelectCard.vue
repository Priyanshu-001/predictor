<template>
  <v-card
    id="c1"
    class="
      p-4
      justify-center
      flex
      flex-col
      text-gray-700
      font-semibold
      rounded-7xl
    "
    style="padding: 1rem !important"
    elevation="20"
    :class="!dialog ? ['-mb-12', 'm-3', 'w-100'] : ''"
  >
    <v-card-title>
      <h2 class="text-4xl font-extrabold text-gray-800">
        Enter details
      </h2>
    </v-card-title>
    <template v-if="!demo">
    
      <v-text-field
        color="primary"
      
        v-model.number="query.rank"
        label="Category Rank (crl if general)"
        type="number"
        min="1"
        max="169999"
        filled
      class="!font-bold"

      />
      <v-select
          id="exam"
          auto-select-first
          filled
          v-model="query.exam"
          label="Exam"
          :items="examsList"
          class="!font-bold"

        />
      <client-only>
        <v-select
          id="exam"
          auto-select-first
          filled
          v-model="query.exam"
          label="Exam"
          :items="examsList"
          class="!font-bold"

        />
        <template #fallback>
          <div class="h-14 animate-pulse my-3 bg-slate-300 rounded-xl" />
        </template>
      </client-only>
    </template>
    <label for="pool" class="mb-2">
      <h3 class="text-xl">Seat Pool</h3>
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
    <client-only>
      <v-autocomplete
        v-if="!demo"
        id="state"
        auto-select-first
        filled
        label="Select Home State"
        class="!font-bold mt-4"
        v-model="query.state"
        :items="stateList"
      />
      <template #fallback>
        <div class="h-14 animate-pulse my-3 bg-slate-300 rounded-xl" />
      </template>
    </client-only>
    <client-only>
    <v-select
      id="Category"
      auto-select-first
      filled
      label="Category"
      v-model="query.category"
      :items="catList"
      default="OPEN"

      class="!font-bold"
    />
    <template #fallback>
        <div class="h-14 animate-pulse my-3 bg-slate-300 rounded-xl " />
    </template>
  </client-only>
    <v-checkbox class="mt-1" v-model="query.pwd" label="PWD status"/>
   
    <v-card-actions class="-mt-2">
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
          @click="emit('close')"
        >
          <v-icon> mdi-close </v-icon> Cancel</v-btn
        >
      
      </v-row>
    </v-card-actions>
  </v-card>
</template>


<script setup>
import { catList, examsList,  stateList } from '~~/constants';
const emit = defineEmits(['close'])
   const {next, demo ,dialog} =  defineProps({
      "dialog":{
   
    default:false,
  }, 
  "demo":{
    default: false,
  },
  "next":{
    default:'/predict'
  }

    })
    const userInfo = useUserInfo()
    const createQuery = ()=>{
      const {pwd, rank, state, category, exam, pool} = userInfo.value
      return   ref({
        rank: Number(rank),
        seatPool: (pool === 'Gender-Neutral' ? 1: 0),
        state,
        category,
        pwd: pwd=='true',
        exam
    });
    }
    const query  = createQuery()
    const makeRequest = () => {
      const q = {...query.value, 
        rank:query.value.rank.toString(), 
        pool: query.value.seatPool===0  ? 'Female-Only':'Gender-Neutral',
        pwd:query.value.pwd.toString()
      }
        navigateTo({path:next, 
                    query:{...q}})
        emit('close')
    } ;

    

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
