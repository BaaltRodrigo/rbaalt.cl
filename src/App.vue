<script setup>
import WorkingWith from "./components/WorkingWith.vue";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/baaltrodrigo/",
  github: "https://github.com/baaltrodrigo",
  originalLayout: "https://erickvpomie.vercel.app/",
};
</script>

<template>
  <v-app>
    <v-main class="background-constellation">
      <v-container class="pt-8" style="max-width: 75rem">
        <!--Top Section with big box and 2 on the next column-->
        <section class="py-12">
          <v-row>
            <v-col cols="12" md="8">
              <v-card height="40vh" color="grey-darken-3 text-grey-lighten-2">
                <v-overlay
                  :model-value="true"
                  contained
                  no-click-animation
                  persistent
                  class="align-end"
                  :scrim="false"
                >
                  <v-card-item class="align-self-end ml-4 mb-4">
                    <v-card-title>
                      <h1 class="text-h5 font-weight-bold">
                        Rodrigo Pizarro Regueiro
                      </h1>
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
                        :href="LINKS.linkedin"
                        target="blank"
                      >
                        LinkedIn
                      </v-btn>
                      <v-btn
                        variant="flat"
                        class="text-none ml-2"
                        prepend-icon="mdi-github"
                        color="grey-lighten-2"
                        :href="LINKS.github"
                        target="blank"
                      >
                        GitHub
                      </v-btn>
                    </div>
                  </v-card-item>
                </v-overlay>
                <v-img
                  width="50%"
                  min-width="300"
                  height="100%"
                  cover
                  class="rounded-ts-circle float-right"
                  src="/myself.jpg"
                ></v-img>
                <div class="obscure-to-bottom"></div>
              </v-card>
              <!-- <profile-card :height="isLargeDisplay ? '280' : ''" /> -->
            </v-col>
            <!-- Short about and another info -->
            <v-col cols="12" md="4" class="d-flex">
              <v-row>
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
                      friendly solutions. I have been working with web
                      technologies for more than 5 years.
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-sheet
                    height="100%"
                    color="grey-darken-3 text-grey-lighten-1"
                    class="pa-3 rounded-xl d-flex flex-column justify-center align-center"
                  >
                    <p class="text-h2 text-center text-amber-lighten-3">+5</p>
                    <h3
                      class="text-subtitle-2 font-weight-medium text-center text-pretty"
                    >
                      Years of experience
                    </h3>
                  </v-sheet>
                </v-col>
                <v-col cols="6">
                  <v-card
                    max-height="240"
                    height="100%"
                    class="d-flex justify-center"
                    color="grey-darken-3 text-grey-lighten-4"
                  >
                    <!-- div to add opacity to the end of the component with a gradient -->
                    <v-img
                      src="/santiago-dark.webp"
                      cover
                      alt="Map image of Santiago, Chile"
                    ></v-img>
                    <div class="obscure-to-bottom"></div>
                    <h3
                      class="text-center text-subtitle-2 text-grey-lighten-1 align-self-end my-2"
                      style="position: absolute"
                    >
                      From Santiago, CL
                    </h3>
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
            <v-col cols="12" sm="8" md="4">
              <WorkingWith
                company="Facilita SPA"
                position="Software Engineer"
                dates="March 2019 - January 2024"
                image="/facilita-logo-dark.webp"
              />
            </v-col>
            <v-col cols="12" sm="8" md="4">
              <WorkingWith
                company="CronApp"
                position="Tech Lead / Full Stack Developer"
                dates="May 2022 - August 2023"
                image="/cronapp-logo.webp"
              />
            </v-col>
            <v-col cols="12" sm="8" md="4">
              <WorkingWith
                company="Chilean Army"
                position="Full Stack Developer"
                dates="September 2019 - March 2020"
                image="/chilean-army-logo.webp"
              />
            </v-col>
          </v-row>
        </section>
        <!-- Some of the last projects -->
        <!-- <section class="py-8 text-center">
          <h2 class="text-h4">My last projects</h2>
          <p class="text-body-2 my-3">
            A showcase for some of the projects I made or help to develop
          </p>
        </section> -->
        <!-- Footer-->
        <footer>
          <section class="pt-1">
            <v-sheet
              class="rounded-xl text-grey-lighten-1 pa-6 d-flex justify-space-between"
              color="grey-darken-3"
              width="100%"
            >
              <div>
                <p>© 2024 Rodrigo Pizarro.</p>
                <p>
                  Based on the layout of
                  <a
                    :href="LINKS.originalLayout"
                    target="_blank"
                    class="text-grey-lighten-1"
                  >
                    Erick Pomié
                  </a>
                </p>
                <p>
                  Special thanks to
                  <a
                    href="https://midu.dev/"
                    class="text-grey-lighten-1"
                    target="_blank"
                  >
                    Midudev
                    <v-tooltip activator="parent" color="white">
                      Mi men, your podcasts and videos are awesome!
                    </v-tooltip>
                  </a>
                </p>
              </div>
              <div class="text-right align-self-center">
                <div class="d-flex">
                  <v-btn
                    :href="LINKS.linkedin"
                    target="blank"
                    icon="mdi-linkedin"
                    variant="plain"
                    density="compact"
                  />
                  <v-btn
                    variant="plain"
                    icon="mdi-github"
                    :href="LINKS.github"
                    target="blank"
                    density="compact"
                  />
                </div>
              </div>
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
    rgba(0, 0, 0, 0.6) 100%
  );
}

.background-constellation {
  background-image: url("./assets/endless-constellation.svg");
  background-repeat: repeat;
  background-color: #330033;
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
