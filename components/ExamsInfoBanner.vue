<template>
    <v-alert type="info" variant="tonal" title="Please note" 
                        v-if="degrees.includes('Bachelor of Architecture') || degrees.includes('Bachelor of Planning')">
                        <template v-if="exam == 'Main'">
                            B.Arch/B.Planning requires paper JEE-Main Paper 2.<br>
                            B.tech and such engineering degrees require <strong> JEE-Mains Paper-1</strong>
                        </template>

                        <template v-else>
                            For B.Planning in IIT you have qualify j
                        </template>

                        </v-alert>
</template>

<script setup>
const {degrees,exam} = defineProps({'degrees':{
    default:[],
    
},
'exam':{
    default:'Main'
}
})
</script>