<template>
    <header
      id="header"
      app
      :elevation="0"
      hide-on-scroll
      class="tw-w-full tw-flex tw-items-center tw-justify-between "

      dark
     
      
    >
   
     
      <nuxt-link to="/" class=" tw-grow md:tw-grow-0">
        <h2
          class="tw-text-sm tw-mt-1 tw-text-center heading tw-grow"
          aria-label="Predictor JEE header"
        >
          <span class="tw-text-5xl tw-font-bold tw-m-0 tw-p-0">Predictor</span>
          <span class="tw-text-5xl tw-font-extralight tw-m-0 tw-p-0">JEE</span>
          <span
            class="tw-font-thin tw-text-xs tw-m-0 tw-p-0 tu tw-hidden md:tw-inline"
            >beta
          </span>
          <span class="tw-font-thin tw-m-0 tw-p-0 tw-align-top   md:tw-hidden  ">
            β
          </span>
        </h2>
      </nuxt-link>
      <!-- <v-spacer /> -->

      <span>
        <nuxt-link to="/colleges"   class="tw-hidden md:tw-inline">
          Colleges
        </nuxt-link>
        <nuxt-link to="/courses"  class=" tw-hidden md:tw-inline"> Courses </nuxt-link>
      </span>
      
    </header>
</template>