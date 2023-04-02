<template>
    <v-alert type="info" variant="tonal" title="Please note" 
                        v-if="degrees.includes('Bachelor of Architecture') || degrees.includes('Bachelor of Planning')">
                        <template v-if="exam == 'Main' || conditional">
                            <h3> <strong> For  Non - IITs listed here  </strong> </h3>
                            B.Arch/B.Planning course allotment is done on basis of  <strong>JEE-Mains Paper 2</strong> 
                            <br>
                            B.tech and such engineering degrees require <strong> JEE-Mains Paper-1</strong>
                        </template>

                        <template v-if="exam=='Advanced' || conditional">
                            <br/>  <h3><strong> For IITs </strong> </h3>
                            For B.Planning  you have qualify jee main paper 1, JEE Advanced and then qualify AAT. Allotment is done based on JEE-Advanced rank.
                            <br>
                            Engneering courses in IIT are also alloted based on JEE-Advanced rank.
                        </template>
                        <br/>
                        Please check with official source to be sure, thanks
                        </v-alert>
</template>

<script setup>
const {degrees,exam,conditional} = defineProps({'degrees':{
    default:[],
    
    },
    'exam':{
        default:'Main'
    },
    'conditional':{
        default:true
    }
})
</script>