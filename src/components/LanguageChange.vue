<template>
  <v-card
    class="d-flex flex-column justify-center align-center px-2 text-center"
    color="red-lighten-3"
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

// Get local storage selected value or default to english
const locale = localStorage.getItem("locale") || "en";
const languages = ref([
  { language: "en", title: "English" },
  { language: "es", title: "Español" },
]);
const selected = ref(locale);

if (locale === "es") {
  languages.value = languages.value.reverse();
}

const changeLocale = () => {
  // Toggle between languages
  languages.value = languages.value.reverse();
  selected.value = languages.value[0].language;

  // Set the locale
  localStorage.setItem("locale", selected.value); 
  i18n.locale.value = selected.value;
};
</script>
