<template>
  <v-card
    height="380"
    class="noise-background rounded-5"
    color="purple-darken-3 text-white"
    variant="outlined"
  >
    <client-only>
      <v-overlay
        :model-value="true"
        contained
        no-click-animation
        persistent
        class="align-end"
        :scrim="false"
      >
        <v-card-item class="ml-4 mb-4">
          <v-card-title>
            <h1 class="text-h4 text-white font-weight-bold">
              Rodrigo Pizarro Regueiro
            </h1>
          </v-card-title>
          <p class="text-body-1 text-amber-lighten-3 mt-1">
            Software Engineer
            <a
              class="text-decoration-none text-color-amber-lighten-3"
              href="https://lifebox.cl"
              target="blank"
              :style="{ color: 'inherit' }"
            >
              @Lifebox
            </a>
          </p>
          <section class="mt-4">
            <v-btn
              v-for="social in profiles"
              :key="social.network"
              variant="flat"
              class="text-none rounded-2 mr-2"
              :prepend-icon="social.icon"
              :color="social.color"
              :href="social.url"
              target="blank"
            >
              {{ social.network }}
            </v-btn>
          </section>
        </v-card-item>
      </v-overlay>
    </client-only>
    <v-img
      width="50%"
      min-width="300"
      height="100%"
      cover
      class="rounded-ts-circle float-right"
      src="/myself.jpg"
    ></v-img>
  </v-card>
</template>

<script setup>
const profiles = [
  {
    network: "LinkedIn",
    icon: "mdi-linkedin",
    color: "blue-darken-3",
    url: "https://www.linkedin.com/in/baaltrodrigo/",
  },
  {
    network: "GitHub",
    icon: "mdi-github",
    color: "grey-lighten-2",
    url: "https://github.com/baaltrodrigo",
  },
];

const props = defineProps({
  height: {
    type: String,
    default: "100%",
  },
});
</script>
