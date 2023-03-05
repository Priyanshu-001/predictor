<template>
    <v-app-bar
      id="header"
      app
      :elevation="0"
      :hide-on-scroll="$isMobile()"
      dark
    >
   
      <v-spacer v-if="$isMobile()" />
      <nuxt-link to="/">
        <h2
          class="tw-text-sm tw-mt-1 tw-text-center heading"
          aria-label="Predictor JEE header"
        >
          <span class="tw-text-5xl tw-font-bold tw-m-0 tw-p-0">Predictor</span>
          <span class="tw-text-5xl tw-font-extralight tw-m-0 tw-p-0">JEE</span>
          <span
            class="tw-font-thin tw-text-xs tw-m-0 tw-p-0 tu"
            v-if="!$isMobile()"
            >beta
          </span>
          <span class="tw-font-thin tw-m-0 tw-p-0 tw-align-top" v-else>
            β
          </span>
        </h2>
      </nuxt-link>
      <v-spacer />

      <template v-if="!$isMobile()">
        <nuxt-link to="/colleges" style="display: flex; align-items: center">
          Colleges
        </nuxt-link>
        <nuxt-link to="/courses"> Courses </nuxt-link>
      </template>
    </v-app-bar>
</template>