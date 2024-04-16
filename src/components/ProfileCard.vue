<template>
  <v-card
    min-height="40vh"
    height="100%"
    class="noise-background"
    color="purple-darken-3 text-white"
  >
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
          <h1 class="text-h4 font-weight-bold">{{ $t("basics.name") }}</h1>
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
        <div class="mt-4">
          <v-btn
            v-for="social in $tm('basics.profiles')"
            :key="social.network"
            variant="flat"
            class="text-none mr-2"
            :prepend-icon="socialIcons[social.network.toLowerCase()]"
            :color="socialColors[social.network.toLowerCase()]"
            :href="social.url"
            target="blank"
          >
            {{ social.network }}
          </v-btn>
        </div>
      </v-card-item>
    </v-overlay>
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
const socialColors = {
  linkedin: "blue-darken-3",
  github: "grey-lighten-2",
};

const socialIcons = {
  linkedin: "mdi-linkedin",
  github: "mdi-github",
};

const props = defineProps({
  height: {
    type: String,
    default: "100%",
  },
});
</script>
