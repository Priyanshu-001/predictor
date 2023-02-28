<script lang="ts">
export default {
  setup() {},
};
</script>

<template>
  <v-app>
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
        <nuxt-link to="/Colleges" style="display: flex; align-items: center">
          Colleges
        </nuxt-link>
        <nuxt-link to="/Courses"> Courses </nuxt-link>
      </template>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>
<style>
body {
  font-family: "Roboto";
}
#header {
  background: linear-gradient(to right, rgb(59, 130, 246), rgb(51, 97, 224));
}

#header a {
  color: white !important;
  font-size: 1.5rem;
  margin: 1rem;
}
#header a:hover {
  text-decoration: underline;
}
h2 {
  font-family: "Roboto";
  font-size: 2.5rem;
  font-weight: bold;
}
.tu {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: -0.6ch;
  /*font-size: 1ch;*/
}
</style>

