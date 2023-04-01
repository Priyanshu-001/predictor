<template>
    <v-card z-index="10000" 
    id="filterCard" 
     class="!tw-pa-3 justify-center flex flex-col text-gray-700 font-semibold rounded-7xl  " 
     elevation="10" :class="!dialog ? ['ml-auto','mr-auto','w-100']: '' "
     
     >
    <v-card-title >
        <h2 class="text-4xl font-extrabold text-gray-800 ">  Filter  </h2>
    </v-card-title>
    <v-autocomplete :items="degreeList" label="Degree" v-model="degrees" filled auto-select-first
      chips
      clearable
      deletable-chips
      multiple
      small-chips/>
    <v-autocomplete :items="courseList" label="Course" v-model="courses" filled auto-select-first
      chips
      clearable
      deletable-chips
      multiple
      small-chips/>
    <v-btn block color="primary" @click="$emit('input',{degrees,courses})">
    Apply
    </v-btn>
     <v-btn class="mt-2"
                    v-if="dialog==true" text block color="error" @click="close"> <v-icon> mdi-close </v-icon> Cancel</v-btn>   
    </v-card>
</template>

<script setup>
    const degrees= ref([])
    const courses = ref([])
    const props = defineProps({
        'loading':{
            default:true
        },
        'dialog':{
            default:false,
        },
        'courseList':{
            default:[],

        },
        'degreeList':{
            default:[]
        }
    })
</script>