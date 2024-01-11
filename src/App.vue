<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
import { computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import Experience from "./components/Experience.vue";
import ProfileCard from "./components/ProfileCard.vue";
import SocialLinkButton from "./components/SocialLinkButton.vue";
import TechIconsCard from "./components/TechIconsCard.vue";
import YourAge from "./components/YourAge.vue";
import GitHub from "./components/GitHub.vue";
import EnglishLevel from "./components/EnglishLevel.vue";
import AboutMe from "./components/AboutMe.vue";
import WhereAmI from "./components/WhereAmI.vue";
import LanguageChange from "./components/LanguageChange.vue";

const { md, lg, xl } = useDisplay();

const i18n = useI18n({ useScope: "global" });

const isLargeDisplay = computed(() => {
  return md.value || lg.value || xl.value;
});

watch(
  () => i18n.locale.value,
  () => {
    document.title = i18n.t("HOME.META.PAGE_TITLE");
  }
);

// Get the locale from local storage. if not set, use default english
const locale = localStorage.getItem("locale") || "en";
i18n.locale.value = locale;

console.log(i18n.tm("HOME.TAGS"));
</script>

<template>
  <v-app>
    <v-main class="bg-grey-darken-3">
      <v-container style="max-width: 45rem" class="pt-16">
        <!-- Presentation -->
        <section class="mt-16">
          <h1 class="text-h3">
            {{ $t("HOME.WELCOME") }}
          </h1>
          <h3
            style="text-wrap: pretty"
            class="font-weight-regular text-grey-lighten-2 mt-2 w-75"
          >
            {{ $t("profile.shortDescription") }}
          </h3>
        </section>
        <!-- Social buttons -->
        <section class="d-flex flex-wrap mt-3 mb-8">
          <v-btn
            class="expandable text-none"
            prepend-icon="mdi-linkedin"
            href="https://www.linkedin.com/in/baaltrodrigo/"
            target="_blank"
            append-icon="mdi-open-in-new"
          >
            LinkedIn
          </v-btn>
          <v-btn
            class="expandable text-none mx-4"
            prepend-icon="mdi-github"
            href="https://github.com/BaaltRodrigo"
            target="_blank"
            append-icon="mdi-open-in-new"
          >
            GitHub
          </v-btn>
        </section>
        <!-- Working experience -->
        <section class="my-16">
          <span class="d-flex flex-wrap align-center mt-10 text-grey-lighten-2">
            <h2 class="text-h5 mr-3">{{ $t("HOME.WORKING_EXPERIENCE") }}</h2>
            <v-icon>mdi-briefcase-variant-outline</v-icon>
          </span>
          <!-- Timeline Here -->
          <v-timeline
            side="end"
            density="compact"
            align="start"
            line-color="blue-grey-lighten-4"
          >
            <v-timeline-item
              v-for="item in $tm('HOME.EXPERIENCES')"
              fill-dot
              dot-color="blue-grey-lighten-4"
              hide-opposite
              size="x-small"
            >
              <experience
                :company="item.COMPANY"
                :position="item.POSITION"
                :start-date="item.START_DATE"
                :end-date="item.END_DATE || null"
                :description="item.DESCRIPTION"
                :link="item.LINK"
              />
            </v-timeline-item>
          </v-timeline>
        </section>

        <!--Top Section with big box and 2 on the next column-->
        <v-row dense>
          <v-col cols="12" md="8" class="expandable-reverse">
            <profile-card :height="isLargeDisplay ? '280' : ''" />
          </v-col>
          <v-col cols="12" md="4">
            <!-- Sub Section with language option and social links -->
            <v-row dense>
              <v-col cols="4" md="12" class="expandable-reverse">
                <language-change
                  :height="isLargeDisplay ? '137' : '135'"
                ></language-change>
              </v-col>
              <v-col
                cols="4"
                md="6"
                class="expandable-reverse"
                :order="isLargeDisplay ? '' : 'first'"
              >
                <social-link-button
                  height="135"
                  icon="mdi-linkedin"
                  color="blue-lighten-2"
                  link="https://www.linkedin.com/in/baaltrodrigo/"
                />
              </v-col>
              <v-col cols="4" md="6" class="expandable-reverse">
                <social-link-button
                  height="135"
                  icon="mdi-twitter"
                  color="light-blue-accent-1  "
                  link="https://twitter.com/RodrigoBaalt"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- Second section, tech stack and more information about me -->
        <v-row dense>
          <v-col cols="8" md="3" class="expandable-reverse">
            <tech-icons-card />
          </v-col>
          <v-col
            cols="12"
            md="6"
            :order="isLargeDisplay ? '' : 'first'"
            class="expandable-reverse"
          >
            <git-hub height="280" />
          </v-col>
          <v-col cols="4" md="3" style="height: 100%">
            <v-row dense>
              <v-col cols="12" class="expandable-reverse">
                <your-age :height="isLargeDisplay ? '136' : '140'" />
              </v-col>
              <v-col cols="12" class="expandable-reverse">
                <english-level :height="isLargeDisplay ? '136' : '140'" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- Third section. About me, the map and work in progress... -->
        <v-row dense>
          <v-col
            cols="12"
            md="7"
            class="expandable-reverse"
            :order="isLargeDisplay ? 'last' : 'first'"
          >
            <about-me :height="isLargeDisplay ? '280' : ''" />
          </v-col>
          <v-col cols="12" md="5">
            <v-row dense>
              <v-col cols="12" class="expandable-reverse">
                <where-am-i :height="isLargeDisplay ? '280' : '140'" />
                <!-- Use the commented section below when you have more info to show -->
                <!-- <where-am-i :height="isLargeDisplay ? '135' : '140'" /> -->
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="css">
.expandable {
  transition: transform 0.1s ease-in-out;
}

.expandable:hover {
  transform: scale(1.05);
}

.expandable-reverse {
  transition: transform 0.3s ease-in-out;
}

.expandable-reverse:hover {
  transform: scale(0.95);
}
</style>
