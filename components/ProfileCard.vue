<template>
  <article
    class="relative isolated glass min-h-[300px] h-auto border-2 rounded-xl bg-purple-500 bg-opacity-50 border-purple-700"
  >
    <img
      src="/myself.jpg"
      alt="Rodrigo Pizarro profile image"
      class="absolute inset-a-0 h-full right-0 top-0 rounded-r-xl rounded-tl-[50%]"
    />
    <section class="absolute left-4 bottom-0 ma-4">
      <h1 class="text-4xl font-bold text-white">Rodrigo Pizarro Regueiro</h1>
      <p class="text-amber-300">Software Engineer @Lifebox</p>
      <div class="my-4 flex gap-2">
        <a
          role="button"
          class="btn btn-sm btn-info"
          href="https://www.linkedin.com/in/baaltrodrigo/"
          target="_blank"
        >
          <u-icon name="i-mdi-linkedin" size="20" dynamic></u-icon>
          Linkedin
        </a>
        <a
          role="button"
          class="btn btn-sm btn-secondary"
          icon="i-mdi-github"
          href="https://github.com/BaaltRodrigo"
          target="_blank"
        >
          <u-icon name="i-mdi-github" size="20" dynamic></u-icon>
          GitHub
        </a>
      </div>
    </section>
  </article>
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
