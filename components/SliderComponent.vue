<template>
  <v-container class="tw-mt-6">
    <h3 class="tw-font-bold tw-text-3xl">
      {{ title }}
      <v-btn v-if="!!allLink" variant="text" color="primary" :to="allLink">
        View all
      </v-btn>
    </h3>
    <p class="tw-text-gray-400 tw-text-xl tw-font-medium">
      {{ description }}
    </p>
    <v-slide-group show-arrows v-if="!icon && !img">
      <!-- <v-slide-item v-for="n in 35" :key="n">
        <v-skeleton-loader class="tw-mx-5 tw-w-64" type="card">
        </v-skeleton-loader>
      </v-slide-item> -->
    </v-slide-group>
    <v-slide-group show-arrows v-else>
      <div v-for="(item, index) in list" :key="index">
        <nuxt-link :to="item.link">
          <div
            class="
              tw-mx-5 tw-w-64 tw-h-64 tw-flex tw-flex-col tw-justify-between
            "
          >
            <div
              class="
                tw-w-full
                tw-h-56
                tw-flex
                tw-transition
                tw-duration-50
                tw-ease-in-out
                hover:tw-shadow-lg
                tw-justify-center tw-text-center tw-items-center tw-bg-gray-100
              "
            >
              <v-icon size="80px" style="width: 100px" class="tw-text-gray-800">
                {{ item.icon }}
              </v-icon>

              <img
                v-if="img"
                :src="item.img"
                style="width=100%; height:  auto;"
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
              "
              class="tw-text-gray-400 tw-text-lg tw-font-medium tw-mt-4"
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