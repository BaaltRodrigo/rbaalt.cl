<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
import { computed, ref } from "vue";
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

const isLargeDisplay = computed(() => {
  return md.value || lg.value || xl.value;
});
</script>

<template>
  <v-app>
    <v-main class="bg-grey-darken-3">
      <v-container class="pt-8" style="max-width: 56rem">
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
.expandable-reverse {
  transition: transform 0.3s ease-in-out;
}

.expandable-reverse:hover {
  transform: scale(0.95);
}
</style>
