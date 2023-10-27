<template>
  <v-card
    class="d-flex flex-column justify-center align-center rounded-xl px-2 text-center"
    variant="tonal"
    color="red"
    :height="height"
    @click="changeLocale()"
  >
    <p class="font-weight-medium">{{ $t("language.title") }}</p>
    <v-btn
      variant="text"
      size="large"
      class="text-h4 font-weight-bold text-uppercase"
    >
      {{ selected }}
    </v-btn>
    <p class="text-caption">{{ $t("language.hint") }}</p>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n({ useScope: "global" });

const props = defineProps({
  height: {
    type: String,
    default: "100%",
  },
});

const selected = ref("en");

const languages = ref([
  { language: "en", title: "English" },
  { language: "es", title: "Español" },
]);

const changeLocale = () => {
  // Toggle between languages
  languages.value = languages.value.reverse();
  selected.value = languages.value[0].language;

  i18n.locale.value = selected.value;
};
</script>
