<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
import { computed } from "vue";

const { md, lg, xl, xs } = useDisplay();

const isLargeDisplay = computed(() => {
  return md.value || lg.value || xl.value;
});

const isXSmallDisplay = computed(() => {
  return xs.value;
});
</script>

<template>
  <v-app>
    <v-main class="bg-grey-darken-3">
      <v-container class="pt-8" style="max-width: 75rem">
        <!--Top Section with big box and 2 on the next column-->
        <section class="py-12">
          <v-row :dense="isXSmallDisplay">
            <v-col cols="12" md="8">
              <v-card class="pa-4 d-flex align-end" height="40vh">
                <v-card-item>
                  <v-card-title>
                    <h1 class="text-h5">Rodrigo Pizarro Regueiro</h1>
                  </v-card-title>
                  <v-card-subtitle class="text-body-1 font-weight-bold">
                    Fullstack developer
                  </v-card-subtitle>
                  <div class="mt-2">
                    <v-btn
                      variant="flat"
                      class="text-none"
                      prepend-icon="mdi-linkedin"
                      color="blue"
                    >
                      LinkedIn
                    </v-btn>
                    <v-btn
                      variant="flat"
                      class="text-none ml-2"
                      prepend-icon="mdi-github"
                      color="black"
                    >
                      Github
                    </v-btn>
                  </div>
                </v-card-item>
              </v-card>
              <!-- <profile-card :height="isLargeDisplay ? '280' : ''" /> -->
            </v-col>
            <!-- Short about and another info -->
            <v-col cols="12" md="4" class="d-flex">
              <v-row :dense="isXSmallDisplay">
                <v-col cols="12">
                  <v-card class="pa-4" height="100%">
                    <v-card-item>
                      <v-card-title>
                        <h2 class="text-h5">About</h2>
                      </v-card-title>
                    </v-card-item>
                    <v-card-text>
                      Full stack developer focused on deliver user friendly
                      solutions.
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-sheet
                    height="100%"
                    class="pa-3 rounded-xl d-flex flex-column justify-center align-center"
                  >
                    <p class="text-h2 text-center">+5</p>
                    <h3
                      class="text-subtitle-2 font-weight-medium text-center text-pretty"
                    >
                      Years of experience
                    </h3>
                  </v-sheet>
                </v-col>
                <v-col cols="6">
                  <v-card
                    title="About"
                    height="100%"
                    text="Full stack developer focused on deliver user friendly solutions."
                  >
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </section>
        <!-- Last Working experiences -->
        <section class="py-8">
          <div class="text-center">
            <h2 class="text-h4">Working experiences</h2>
            <p class="text-body-2 mt-1 mb-5">Companies I have working with</p>
          </div>
          <!-- Cards of experiences -->
          <v-row justify="center">
            <v-col cols="12" sm="6" md="4">
              <v-sheet
                class="rounded-xl py-md-4 py-8 px-md-0 px-6 text-md-center"
                color="white"
                :height="isLargeDisplay ? '50vh' : ''"
              >
                <h3 class="text-h5">Facilita SPA</h3>
                <h4 class="text-subtitle-2 font-weight-bold">
                  Software Engineer
                </h4>
                <span class="text-body-2">Mar. 2019 - Ene. 2024</span>
              </v-sheet>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-sheet
                class="rounded-xl py-md-4 py-8 px-md-0 px-6 text-md-center"
                color="white"
                :height="isLargeDisplay ? '50vh' : ''"
              >
                <h3 class="text-h5">CronApp</h3>
                <h4 class="text-subtitle-2 font-weight-bold">
                  Tech Lead / Full Stack Developer
                </h4>
                <span class="text-body-2">May. 2022 - Ago. 2023</span>
              </v-sheet>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-sheet
                class="rounded-xl py-md-4 py-8 px-md-0 px-6 text-md-center"
                color="white"
                :height="isLargeDisplay ? '50vh' : ''"
              >
                <h3 class="text-h5">Ejercito de Chile</h3>
                <h4 class="text-subtitle-2 font-weight-bold">
                  Full Stack Developer
                </h4>
                <span class="text-body-2">Sept 2019 - Mar. 2020</span>
              </v-sheet>
            </v-col>
          </v-row>
        </section>
        <section class="py-8 text-center">
          <h2 class="text-h4">My last projects</h2>
          <p class="text-body-2 my-3">
            A showcase for some of the projects I made or help to develop
          </p>
        </section>
        <section class="py-8 text-center">
          <h2 class="text-h4">More about me</h2>
          <p class="text-body-2 my-3">Want to know more about me? 😉</p>
        </section>
        <footer>
          <section class="pt-8 text-center">
            <v-sheet class="rounded-xl" color="white" width="100%">
              <h2 class="text-h4">The footer</h2>
            </v-sheet>
          </section>
        </footer>
        <!-- Second section, tech stack and more information about me -->
        <!-- <v-row dense>
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
        </v-row> -->
        <!-- Third section. About me, the map and work in progress... -->
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="css">
.text-pretty {
  text-wrap: pretty;
}

.expandable-reverse {
  transition: transform 0.3s ease-in-out;
}

.expandable-reverse:hover {
  transform: scale(0.95);
}

.expandable {
  transition: transform 0.3s ease-in-out;
}

.expandable:hover {
  transform: scale(1.05);
}
</style>
