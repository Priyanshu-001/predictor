<template>
    <header
      id="header"
      app
      :elevation="0"
      hide-on-scroll
      class="w-full flex items-center justify-between "

      dark
     
      
    >
   
     
      <nuxt-link to="/" class=" grow md:grow-0">
        <h2
          class="text-sm mt-1 text-center heading grow"
          aria-label="Predictor JEE header"
        >
          <span class="text-5xl font-bold m-0 p-0">Predictor</span>
          <span class="text-5xl font-extralight m-0 p-0">JEE</span>
          <span
            class="font-thin text-xs m-0 p-0 tu hidden md:inline"
            >beta
          </span>
          <span class="font-thin m-0 p-0 align-top   md:hidden  ">
            β
          </span>
        </h2>
      </nuxt-link>
      <!-- <v-spacer /> -->

      <span>
        <nuxt-link to="/colleges"   class="hidden md:inline">
          Colleges
        </nuxt-link>
        <nuxt-link to="/courses"  class=" hidden md:inline"> Courses </nuxt-link>
      </span>
      
    </header>
</template>