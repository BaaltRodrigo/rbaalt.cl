<script setup>
import ProfileCard from "./components/ProfileCard.vue";
import SocialLinkButton from "./components/SocialLinkButton.vue";
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="py-12">
        <v-row dense>
          <v-col cols="12" md="8">
            <profile-card />
          </v-col>
          <v-col cols="4" md="2">
            <social-link-button
              icon="mdi-linkedin"
              color="indigo"
              link="https://www.linkedin.com/in/baaltrodrigo/"
            />
          </v-col>
          <v-col cols="4" md="2">
            <social-link-button
              icon="mdi-github"
              color="black"
              link="https://github.com/BaaltRodrigo"
            />
          </v-col>
          <v-col cols="4" md="2">
            <social-link-button
              icon="mdi-twitter"
              color="light-blue"
              link="https://twitter.com/RodrigoBaalt"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
