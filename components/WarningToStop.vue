<template>

<v-card  class="
     c1   
      p-4
      justify-center
      flex
      flex-col
      text-gray-700
      font-semibold
      rounded-7xl
    "  elevation="20">
    <v-card-title>
        <h2 class="text-blue-700 font-bold text-2xl"> {{ item.title }}</h2>
    </v-card-title>
    <v-card-subtitle>
        Thanks for using my project—just don’t overthink it!
    </v-card-subtitle>
    <br/>
    <div style="display: grid;     justify-items: center">
    <img :src="item.img" style="max-height: 300px;"/>
    <p class="font-medium">
        Hey, you've been at this for a while! College admissions matter, but don’t stress too much. 
        Take a break. 
        You can continue if you want, but let’s not overdo it.
         If it matters, I didn’t clear JEE Main either 😆
         If this showed up too soon,  <a href ="mailto:jeecollegepredictor+toosoonwarn@gmail.com">let me know </a>
    </p>
    <br/>
</div>
<VBtn href="https://google.com" color="primary"	variant="elevated"
>❌ Close this website </VBtn>

    <VBtn  color="primary" variant="tonal" @click="$emit('close')">continue with search</VBtn>
    


</v-card>


</template>



<script setup >

    const displayNodes = [{title:"Clocking out! See you later. 📑", img:"/stop_art/office_lady.webp" }, {
        title: '"About to close Come back soon." 🛒',
        img: "/stop_art/old_pixel.webp"
    }, {title: ' "Too sleepy… zzz…" 💤', img: "/stop_art/chibi_sleep.webp"}, 
    {title: "The stars say… take a break. ✨", img: "stop_art/old_wizard.webp"}]
    defineEmits(['close'])
    const item = displayNodes[Math.floor(Math.random()*displayNodes.length)]
</script>

<style lang="css" scoped>
.c1 {
  min-width: min(350px, 100%);
  max-width: 500px;
  padding: 1rem !important;
}
</style>