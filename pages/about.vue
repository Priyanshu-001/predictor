<template>
  <div class="about">
    <h1 class="text-4xl p-5 font-bold">About</h1>
    <div class="flex w-100 p-3">
      <v-card class="col-7">
        <v-card-content>
          <h2>⚡ Deployment</h2>
          <br />
          <ul>
            <li>
              Platform: <v-chip color="blue" outlined> Vercel</v-chip>
              <v-chip color="purple" outlined> Heroku (formerly)</v-chip>
            </li>
            <br />
            <li>
              Backend:
              <v-chip color="green" outlined>Vercel Edge Function </v-chip>
              <v-chip color="gray" outlined> </v-chip>
            </li>
            <br />
            <li>
              Frontend: <v-chip color="green" outlined> NUxt3</v-chip>
              <v-chip color="blue" outlined> Vuetify</v-chip>
            </li>
          </ul>
        </v-card-content>
      </v-card>
    </div>
  </div>
</template>


<script setup>
const hello = "Hello";
</script>