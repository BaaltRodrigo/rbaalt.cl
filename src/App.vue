<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
import { computed } from "vue";
import WorkingWith from "./components/WorkingWith.vue";

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
    <v-main class="bg-grey-darken-4">
      <v-container class="pt-8" style="max-width: 75rem">
        <!--Top Section with big box and 2 on the next column-->
        <section class="py-12">
          <v-row :dense="isXSmallDisplay">
            <v-col cols="12" md="8">
              <v-card
                class="pa-4 d-flex align-end"
                height="40vh"
                color="grey-darken-3 text-grey-lighten-2"
              >
                <v-card-item>
                  <v-card-title>
                    <h1 class="text-h5">Rodrigo Pizarro Regueiro</h1>
                  </v-card-title>
                  <span
                    class="text-body-1 text-amber-lighten-3 font-weight-bold"
                  >
                    Software Engineer
                  </span>
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
                  <v-card
                    class="pt-4 px-4 pb-md-0 pb-4"
                    height="100%"
                    color="grey-darken-3 text-grey-lighten-1"
                  >
                    <v-card-item>
                      <v-card-title>
                        <h2 class="text-h5">About Me</h2>
                      </v-card-title>
                    </v-card-item>
                    <v-card-text class="text-pretty">
                      Judoka and Software Engineer focused on deliver user
                      friendly solutions
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-sheet
                    height="100%"
                    color="grey-darken-3 text-grey-lighten-1"
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
                    height="100%"
                    class="obscure-to-bottom"
                    color="grey-darken-3 text-grey-lighten-4"
                  >
                    <!-- div to add opacity to the end of the component with a gradient -->
                    <v-img
                      src="/santiago-dark.png"
                      cover
                      width="100%"
                      style="position: absolute"
                    ></v-img>
                    <div class="obscure-to-bottom"></div>
                    <v-card-item class="align-self-end">
                      <v-card-subtitle>
                        <h3 class="text-center text-body-2">
                          From Santiago, CL
                        </h3>
                      </v-card-subtitle>
                    </v-card-item>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </section>
        <!-- Last Working experiences -->
        <section class="py-4">
          <div class="text-center">
            <h2 class="text-h4 text-grey-lighten-2">Working experiences</h2>
            <p class="text-body-1 mt-1 mb-5 text-grey-lighten-2">
              Companies I have worked with
            </p>
          </div>
          <!-- Cards of experiences -->
          <v-row justify="center">
            <v-col cols="12" sm="6" md="4">
              <WorkingWith
                company="Facilita SPA"
                position="Software Engineer"
                dates="Mar. 2019 - Ene. 2024"
                image="/facilita-logo-dark.png"
              />
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <WorkingWith
                company="CronApp"
                position="Tech Lead / Full Stack Developer"
                dates="May. 2022 - Ago. 2023"
                image="/cronapp-logo.png"
              />
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <WorkingWith
                company="Ejercito de Chile"
                position="Full Stack Developer"
                dates="Sept 2019 - Mar. 2020"
                image="/chilean-army-logo.png"
              />
            </v-col>
          </v-row>
        </section>
        <!-- Some of the last projects -->
        <section class="py-8 text-center">
          <h2 class="text-h4">My last projects</h2>
          <p class="text-body-2 my-3">
            A showcase for some of the projects I made or help to develop
          </p>
        </section>
        <!-- Footer. Remember to include a thanks to Midu and https://erickvpomie.vercel.app/ -->
        <footer>
          <section class="pt-8 text-center">
            <v-sheet class="rounded-xl" color="white" width="100%">
              <h2 class="text-h4">The footer</h2>
            </v-sheet>
          </section>
        </footer>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="css">
.obscure-to-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
}

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
