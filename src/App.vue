<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
import { computed, ref } from "vue";
import ProfileCard from "./components/ProfileCard.vue";
import SocialLinkButton from "./components/SocialLinkButton.vue";
import TechIconsCard from "./components/TechIconsCard.vue";
import WireRedCard from "./components/WireRedCard.vue";
import YourAge from "./components/YourAge.vue";

const { lg } = useDisplay();

const isLargeDisplay = computed(() => {
  return lg.value;
});
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="pt-16" style="max-width: 56rem">
        <!--Top Section with big box and 2 on the next column-->
        <v-row dense style="">
          <v-col cols="12" lg="8">
            <profile-card :height="isLargeDisplay ? '280' : ''" />
          </v-col>
          <v-col cols="12" lg="4">
            <!-- Sub Section with language option and social links -->
            <v-row dense>
              <v-col cols="4" lg="12">
                <wire-red-card
                  message="Thing to change language"
                  :height="isLargeDisplay ? '140' : '130'"
                />
              </v-col>
              <v-col cols="4" lg="6" :order="isLargeDisplay ? '' : 'first'">
                <social-link-button
                  height="130"
                  icon="mdi-linkedin"
                  color="indigo"
                  link="https://www.linkedin.com/in/baaltrodrigo/"
                />
              </v-col>
              <v-col cols="4" lg="6" order="12">
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
          <v-col cols="8" lg="3">
            <tech-icons-card />
          </v-col>
          <v-col cols="12" lg="6" :order="isLargeDisplay ? '' : 'first'">
            <wire-red-card message="Card to github profile" />
          </v-col>
          <v-col cols="4" lg="3">
            <v-row dense>
              <v-col cols="12">
                <your-age />
              </v-col>
              <v-col cols="12">
                <wire-red-card message="Algo" />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
        <v-row></v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
