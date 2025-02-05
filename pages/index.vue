<script lang="ts">
import { defineComponent } from "vue";
import colleges from "~/server/api/colleges";

export default defineComponent({
  setup() {
    useHead({
      title: 'Predictor JEE - Free JOSAA College Predictor 2024 | JEE Mains & Advanced Cutoffs',
      meta:[
        {
          name:'description',content:'Free JOSAA, IIT, and NIT Predictor to check your college options for JEE Mains & Advanced 2024 ranks. Check cutoffs for IITs, NITs, & GFTIs – No signup required!',
        },
        {
          name:'keywords', content:'Free JOSAA College Predictor, JEE cutoffs, IIT/NIT/IIIT cutoffs, IIT cutoff, IIT cutoff 2024, IIT college predictor'
        }
      ]
    })
    const colleges = [
    {
        name: "NIT Durgapur cutoff",
        img: "/college_icons/NIT_DURGAPUR.png",
        link: "colleges/National_Institute_of_Technology_Durgapur",
      },
     {
        name: "IIT Kanpur cutoff",
        img: "/college_icons/IIT_KANPUR.png",
        link: "colleges/Indian_Institute_of_Technology_Kanpur",
     }, 
     {
      name: "NIT Hamirpur cutoff",
        img: "/college_icons/NIT_HAMIRPUR.png",
        link: "colleges/National_Institute_of_Technology_Hamirpur",
     },
     {
        name: "IIT Madras cutoff",
        img: "/college_icons/IIT_Madras.png",
        link: "colleges/Indian_Institute_of_Technology_Madras",
     },
     {
        
        name: "NIT Tirchy cutoff",
        img: "/college_icons/NIT_TIRCHY.png",
        link: "colleges/National_Institute_of_Technology_Tiruchirappalli",
     },
     {
        
        name: "IIT Delhi cutoff",
        img: "/college_icons/IIT_DELHI.png",
        link: "colleges/Indian_Institute_of_Technology_Delhi",
     }
    ]
    const course = [
    {
        name: "Chemical Engineering",
        icon: "openmoji:test-tube",
        link: "courses/Chemical_Engineering",
      },
      {
        name: "ECE",
        icon: "openmoji:satellite",
        link: "courses/Electronics_and_Communication_Engineering",
      },
      {
        name: "Mechanical engineering",
        icon: "openmoji:gear",
        link: "courses/Mechanical_Engineering",
      },
      {
        name: "Computer Science",
        icon: "openmoji:desktop-computer",
        link: "courses/Computer_Science_and_Engineering",
      },
      {
        name: "Civil Engineering",
        icon: "openmoji:bridge-at-night",
        link: "courses/Civil_Engineering",
      },
    ];
    return {
      course,
      colleges
    };
  },
});
</script>

<template>
  <div>
    <div
      class="
        bg-gradient-to-br
        from-blue-500
        to-blue-700
        flex
        flex-col-reverse
        md:flex-row-reverse 
        md:px-2
        justify-between
      "
    >
      <div>
        
        <select-card :dialog="false" :demo="false"/>
      
      </div>
      <div
        class="
          m-4
          p-4
          mb-6
          max-w-4xl
          flex
          flex-col
          justify-center
          text-center
        "
      >
        <h2
          class="
            text-7xl font-extrabold text-white text-center
            md:text-left
          "
        >
          JOSAA College Predictor
        </h2>
        <p
          class="
            text-white
            
            text-2xl
            flex-3
            max-w-prose
            mt-4
            mr-8
          "
        >
          Check latest(2024) cutoffs for IIT, NIT and some IIITs. Predict what college you will be getting on basis of
          <strong class="font-weight-bold">2024 cuttoffs</strong>
          <em> for free, no signup needed</em>.
          <br />

          <u>
         Please also 
          crosscheck with an offcial source.</u>
          <br />
        </p>
      </div>
    </div>
    <v-container>
      <sliderComponent
        title="Check top IITs and NIT cutoffs (2024)"
        description="Check Jee-Main and Jee-Advanced cutoffs for josaa colleges including NITs, IITs"
        img
        allLink="/colleges"
        :list="colleges"
      />
    </v-container>
    
    <v-container>
      <sliderComponent
        title="Discover Courses"
        description="Check engineering courses cutoffs and top colleges offering them"
        icon
        allLink="/courses"
        :list="course"
      />
    </v-container>

   

  </div>
</template>
<style >
</style>
