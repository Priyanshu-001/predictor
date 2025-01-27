<template>
  <v-container class="mt-6">
    <h3 class="font-bold text-3xl">
      {{ title }}
      <v-btn v-if="!!allLink" variant="text" color="primary" :to="allLink">
        View all
      </v-btn>
    </h3>
    <p class="text-gray-400 text-xl font-medium">
      {{ description }}
    </p>
    <v-slide-group show-arrows v-if="!icon && !img">
      <!-- <v-slide-item v-for="n in 35" :key="n">
        <v-skeleton-loader class="mx-5 w-64" type="card">
        </v-skeleton-loader>
      </v-slide-item> -->
    </v-slide-group>
    <v-slide-group show-arrows v-else>
      <div v-for="(item, index) in list" :key="index">
        <nuxt-link :to="item.link">
          <div
            class="
              mx-5 w-64 h-64 flex flex-col justify-between
            "
          >
            <div
              class="
                w-full
                h-48
                flex
                transition
                duration-50
                ease-in-out
                hover:shadow-lg
                justify-center text-center items-center bg-gray-100
              "
            >
              <Icon
              v-if="icon"
              :name="item.icon"
               size="80px" style="width: 100px">
    
        </Icon>

              <img
                
                v-if="img"
                :src="item.img"
                style="width:auto; 
                height:  auto; 
                 object-fit: contain;
                 max-height: 100%;
                 max-width: 100%;
                 "
              />
            </div>
            <h4
              style="
                max-width: 30ch;
                overflow-y: wrap;
                white-space: initial;
                overflow-wrap: anywhere;
                word-wrap: break-word;
                display: inline-block;
                text-align: center;
              "
              class="text-gray-400 text-lg font-medium mt-4"
            >
              {{ item.name }}
            </h4>
          </div>
        </nuxt-link>
      </div>
    </v-slide-group>
  </v-container>
</template>
<script>
export default {
  name: "sliderComponent",
  data() {
    return {
      loaded: true,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    img: {
      type: Boolean,
      default: false,
    },
    allLink: {
      type: String,
      default: "",
    },
  },
};
</script>