
<template>
  <v-app>
    
    <app-header />
    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>
<style lang="scss">

body {
  font-family: "Roboto";
}
#header {
  background: linear-gradient(to right, rgb(59, 130, 246), rgb(51, 97, 224));
}
a{
  color: #1976d2;
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
<!-- <meta name="google-site-verification" content="0vUqLgFa5Al8aoXBQmlqJAdplRQuxeOrblv821fYDr8" /> -->
<script setup>
  useHead({
    meta:[
      {name:'google-site-verification', content:'0vUqLgFa5Al8aoXBQmlqJAdplRQuxeOrblv821fYDr8'}
    ]
    })
</script>