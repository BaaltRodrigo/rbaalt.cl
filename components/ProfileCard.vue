<template>
  <u-card class="relative min-h-[300px]">
    <img
      src="/myself.jpg"
      alt="Rodrigo Pizarro profile image"
      class="absolute h-full right-0 top-0 rounded-r-lg rounded-tl-[50%]"
    />
    <section class="absolute bottom-0 pb-4">
      <h1 class="text-4xl font-bold text-white">Rodrigo Pizarro Regueiro</h1>
      <p class="text-yellow-100">Software Engineer @Lifebox</p>
      <div class="my-4 flex gap-2">
        <u-button color="blue">
          <template #leading>
            <UIcon name="i-mdi-linkedin" size="20" dynamic />
          </template>
          Linkedin
        </u-button>
        <u-button color="gray" icon="i-mdi-github">
          GitHub
          <template #leading>
            <UIcon name="i-mdi-github" size="20" dynamic />
          </template>
        </u-button>
      </div>
    </section>
  </u-card>
</template>

<script setup>
const profiles = [
  {
    network: "LinkedIn",
    icon: "mdi-linkedin",
    color: "blue-darken-3",
    url: "https://www.linkedin.com/in/baaltrodrigo/",
  },
  {
    network: "GitHub",
    icon: "mdi-github",
    color: "grey-lighten-2",
    url: "https://github.com/baaltrodrigo",
  },
];
</script>
