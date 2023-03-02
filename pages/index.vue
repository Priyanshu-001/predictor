<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
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
        tw-bg-gradient-to-br
        tw-from-blue-500
        tw-to-blue-700
        tw-flex
        tw-flex-col-reverse
        md:tw-flex-row-reverse md:tw-px-2
        tw-justify-between
      "
    >
      <div>
        <v-no-ssr>
        <select-card :dialog="false" :demo="false"/>
      </v-no-ssr>
      </div>
      <div
        class="
          tw-m-4
          tw-p-4
          tw-mb-6
          tw-max-w-4xl
          tw-flex
          tw-flex-col
          tw-justify-center
          tw-text-center
        "
      >
        <h2
          class="
            tw-text-7xl tw-font-extrabold tw-text-white tw-text-center
            md:tw-text-left
          "
        >
          JOSSA College Predictor
        </h2>
        <p
          class="
            tw-text-white
            tw-font-medium
            tw-text-2xl
            tw-flex-3
            tw-max-w-prose
            tw-mt-4
            tw-mr-8
          "
        >
          With PredictorJEE web app you can browse JOSSA colleges, courses and
          predict some of the college you might be getting into as per the
          <strong class="font-weight-bold">2020 cuttoffs</strong>
          <em> for free </em>.
          <br />
          NOTE:This is a student project, some entries might be wrong pls
          crosscheck with an offcial source.

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