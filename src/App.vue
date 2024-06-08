<script setup>
import WorkingWith from "./components/WorkingWith.vue";
import ProfileCard from "./components/ProfileCard.vue";

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
        <section class="py-3">
          <v-row>
            <v-col cols="12" md="8">
              <profile-card />
            </v-col>
            <!-- Short about and another info -->
            <v-col cols="12" md="4" class="d-flex">
              <v-row>
                <v-col cols="12" sm="4" md="12">
                  <v-card
                    height="100%"
                    class="pt-4 px-4 pb-md-0 pb-4 noise-background rounded-4"
                    color="purple-darken-3 text-grey-lighten-3"
                  >
                    <v-card-item>
                      <v-card-title>
                        <h2 class="text-h5">About Me</h2>
                      </v-card-title>
                    </v-card-item>
                    <v-card-text class="text-pretty text-body-2">
                      Judoka and Software Engineer focused on deliver user
                      friendly solutions. I have been working with web
                      technologies for more than 5 years.
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="8" sm="4" md="6">
                  <v-sheet
                    height="100%"
                    color="#feefc3"
                    class="pa-3 rounded-5 text-grey-darken-4 d-flex flex-column justify-center align-center"
                  >
                    <p class="text-h2 text-center">+5</p>
                    <h3 class="text-body-1 font-weight-regular text-center">
                      Years of experience
                    </h3>
                  </v-sheet>
                </v-col>
                <v-col cols="4" md="6">
                  <v-card
                    height="100%"
                    class="noise-background pa-2 rounded-5 d-flex flex-wrap"
                    color="purple-darken-3 "
                  >
                    <v-img
                      src="/chile-flag.png"
                      class="rounded-3 bg-black align-self-start"
                      aspect-ratio="9 / 16"
                      width="100%"
                      alt="Chilean flag"
                    ></v-img>

                    <h3 class="text-body-1 ma-auto">From Chile</h3>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </section>
        <!-- Last Working experiences -->
        <section class="py-4">
          <div class="text-center">
            <h2 class="text-h4 text-grey-lighten-4">Working experiences</h2>
            <p class="text-body-1 mt-1 mb-5 text-grey-lighten-3">
              Companies I have worked with
            </p>
          </div>
          <!-- Cards of experiences -->
          <v-row justify="center">
            <v-col cols="12" sm="8" md="4">
              <WorkingWith
                company="Facilita SPA"
                position="Software Engineer"
                dates="Mar. 2019 - Jan. 2024"
                image="/facilita-logo-dark.webp"
              />
            </v-col>
            <v-col cols="12" sm="8" md="4">
              <WorkingWith
                company="CronApp"
                position="Tech Lead"
                dates="May 2022 - Aug. 2023"
                image="/cronapp-logo.webp"
              />
            </v-col>
            <v-col cols="12" sm="8" md="4">
              <WorkingWith
                company="Chilean Army"
                position="Full Stack Developer"
                dates="Sept. 2019 - Mar. 2020"
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
              class="rounded-xl text-grey-lighten-3 pa-6 d-flex justify-space-between noise-background"
              color="purple-darken-3"
              width="100%"
            >
              <div>
                <p>© 2024 Rodrigo Pizarro.</p>
                <p class="text-body-2">
                  Based on the layout of
                  <a
                    :href="LINKS.originalLayout"
                    target="_blank"
                    class="text-grey-lighten-3"
                  >
                    Erick Pomié
                  </a>
                </p>
                <p class="text-body-2">
                  Special thanks to
                  <a
                    href="https://midu.dev/"
                    class="text-grey-lighten-3"
                    target="_blank"
                  >
                    Midudev
                  </a>
                </p>
                <a
                  class="text-grey-lighten-3 text-body-2"
                  href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/"
                  >Free SVG Backgrounds and Patterns by SVGBackgrounds.com</a
                >
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

.noise-background {
  background-image: url("./assets/noise.png") !important;
  background-repeat: repeat;
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
