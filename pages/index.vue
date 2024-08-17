<template>
  <!-- Top section -->
  <UContainer class="pt-10 grid grid-cols-6 gap-4">
    <profile-card class="col-span-6 lg:col-span-4 md:row-span-2">
    </profile-card>

    <about-card class="col-span-6 md:col-span-2 lg:col-span-2"></about-card>

    <article class="card bg-amber-100 col-span-3 md:col-span-2 lg:col-span-1">
      <div class="card-body text-center content-center text-black">
        <span class="text-7xl lg:text-6xl">+5</span>
        <span class="text-lg lg:text-sm">Years of experience</span>
      </div>
    </article>

    <article
      class="card card-compact bg-purple-500 bg-opacity-50 col-span-3 md:col-span-2 lg:col-span-1"
    >
      <figure class="px-2 pt-2">
        <img
          src="/chile-flag.png"
          alt="The flag of Chile"
          class="w-full rounded-lg text-center"
        />
      </figure>
      <p class="text-base text-center mt-1">From Chile</p>
    </article>
  </UContainer>

  <section class="my-12 text-center">
    <h2 class="text-4xl mb-1">Working experiences</h2>
    <p>Companies I have worked with</p>
  </section>

  <UContainer class="grid grid-cols-3 gap-4">
    <Placeholder class="col-span-1 rounded-2xl h-40"> </Placeholder>
    <Placeholder class="col-span-1 rounded-2xl h-40"> </Placeholder>
    <Placeholder class="col-span-1 rounded-2xl h-40"> </Placeholder>
  </UContainer>
  <u-container>
    <placeholder class="my-12 rounded-2xl h-40"></placeholder>
  </u-container>
</template>
