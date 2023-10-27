<template>
  <v-card
    variant="tonal"
    class="rounded-xl pt-8 px-4"
    color="purple"
    height="100%"
  >
    <v-card-title class="text-h4">{{ $t("profile.welcome") }}</v-card-title>
    <v-card-text>
      <p class="my-1 text-subtitle-1">
        {{ $t("profile.shortDescription") }}
      </p>
      <p class="my-1 text-subtitle-1">{{ $t("profile.workingAt") }}</p>
    </v-card-text>
  </v-card>
</template>
