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

const { md, lg, xl } = useDisplay();

const isLargeDisplay = computed(() => {
  return md.value || lg.value || xl.value;
});
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="pt-8" style="max-width: 56rem">
        <!--Top Section with big box and 2 on the next column-->
        <v-row dense style="">
          <v-col cols="12" md="8">
            <profile-card :height="isLargeDisplay ? '280' : ''" />
          </v-col>
          <v-col cols="12" md="4">
            <!-- Sub Section with language option and social links -->
            <v-row dense>
              <v-col cols="4" md="12">
                <v-sheet :height="isLargeDisplay ? '140' : '130'"></v-sheet>
              </v-col>
              <v-col cols="4" md="6" :order="isLargeDisplay ? '' : 'first'">
                <social-link-button
                  height="130"
                  icon="mdi-linkedin"
                  color="indigo"
                  link="https://www.linkedin.com/in/baaltrodrigo/"
                />
              </v-col>
              <v-col cols="4" md="6">
                <social-link-button
                  height="130"
                  icon="mdi-twitter"
                  color="light-blue"
                  link="https://twitter.com/RodrigoBaalt"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- Second section, tech stack and more information about me -->
        <v-row dense>
          <v-col cols="8" md="3">
            <tech-icons-card />
          </v-col>
          <v-col cols="12" md="6" :order="isLargeDisplay ? '' : 'first'">
            <git-hub height="280" />
          </v-col>
          <v-col cols="4" md="3">
            <v-row dense>
              <v-col cols="12">
                <your-age :height="isLargeDisplay ? '135' : '140'" />
              </v-col>
              <v-col cols="12">
                <english-level :height="isLargeDisplay ? '135' : '140'" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- Third section. About me, the map and work in progress... -->
        <v-row dense>
          <v-col cols="12" md="7" :order="isLargeDisplay ? 'last' : 'first'">
            <about-me :height="isLargeDisplay ? '280' : ''" />
          </v-col>
          <v-col cols="12" md="5">
            <v-row dense>
              <v-col cols="12">
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
