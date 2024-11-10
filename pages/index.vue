<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    useHead({
      title: 'Predictor JEE - Free JOSAA college predictor',
      meta:[
        {
          name:'description',content:'Free JOSAA College predictor based on 2020 ranks, no signup required',
        },
        {
          name:'keywords', content:'Free JOSAA College Predictor, JEE cutoffs, IIT/NIT/IIIT cuttoffs, IIT cutoff, IIT cutoff 2020, IIT college predictor'
          name:'keywords', content:'Free JOSAA College Predictor, JEE cutoffs, IIT/NIT/IIIT cutoffs, IIT cutoff, IIT cutoff 2020, IIT college predictor'
        }
      ]
    })
    const course = [
      {
        name: "Mechanical engineering",
        icon: "mdi-cogs",
        link: "courses/Mechanical_Engineering",
      },
      {
        name: "Computer Science",
        icon: "mdi-desktop-mac-dashboard",
        link: "courses/Computer_Science_and_Engineering",
      },
      {
        name: "Chemical Engineering",
        icon: "mdi-flask",
        link: "courses/Chemical_Engineering",
      },
      {
        name: "Engineering Physics",
        icon: "mdi-atom",
        link: "courses/Engineering_Physics",
      },
      {
        name: "ECE",
        icon: "mdi-satellite-variant",
        link: "courses/Electronics_and_Communication_Engineering",
      },
      {
        name: "Civil Engineering",
        icon: "mdi-bridge",
        link: "courses/Civil_Engineering",
      },
    ];
    return {
      course,
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
            font-medium
            text-2xl
            flex-3
            max-w-prose
            mt-4
            mr-8
          "
        >
          With PredictorJEE web app you can browse JOSAA colleges, courses and
          predict some of the college you might be getting into as per the
          <strong class="font-weight-bold">2020 cuttoffs</strong>
          <em> for free </em>.
          <br />

          <u>
          NOTE:This is a student project, some entries might be wrong pls
          crosscheck with an offcial source.</u>

          <nuxt-link to="/predict">PREDICT</nuxt-link>
          <br />
        </p>
      </div>
    </div>
    <v-container>
      <sliderComponent
        title="Discover Courses"
        description="Find engineering courses and top colleges offering them"
        icon
        allLink="/courses"
        :list="course"
      />
    </v-container>
  </div>
</template>
<style >
</style>
