<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n({ useScope: "global" });

// Interface to define props like TS
interface ExperienceProps {
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate?: string;
  tags?: string[];
  link?: string;
}

// Props using the interface
const props = defineProps<ExperienceProps>();

const localeStartDate = computed(() => {
  return new Date(props.startDate).toLocaleDateString(i18n.locale.value, {
    month: "long",
    year: "numeric",
  });
});

const localeEndDate = computed(() => {
  if (!props.endDate) return;

  return new Date(props.endDate).toLocaleDateString(i18n.locale.value, {
    month: "long",
    year: "numeric",
  });
});
</script>

<template>
  <h5 class="text-subtitle-2 text-capitalize text-blue-grey-lighten-4">
    {{ localeStartDate }} {{ endDate ? `- ${localeEndDate}` : `` }}
  </h5>
  <h4 class="text-h6 text-amber-accent-1">{{ position }} - {{ company }}</h4>
  <p class="text-body-2 my-2" style="text-wrap: pretty">{{ description }}</p>
  <v-btn
    v-if="props.link"
    class="expandable text-none"
    :href="props.link"
    append-icon="mdi-arrow-right"
  >
    {{ $t("GENERAL.SHOW_MORE") }}...
  </v-btn>
</template>
