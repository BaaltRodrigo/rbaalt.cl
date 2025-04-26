<template>
  <div
    class="hidden md:flex gap-8 pt-8 border-l border-gray-700 relative items-start"
  >
    <!-- Left -->
    <header class="sticky top-25 md:min-w-xs pb-8">
      <div class="pl-4 relative">
        <div
          class="absolute -left-1 top-[0.25rem] w-2.25 h-2.25 bg-white rounded-full"
        ></div>
        <div class="flex flex-col gap-2">
          <p class="text-sm text-gray-400">{{ dates }}</p>
          <h3 class="text-2xl line-clamp-2 font-semibold text-white">
            {{ company }}
          </h3>
          <p class="text-sm text-gray-400">{{ position }}</p>
        </div>
      </div>
    </header>

    <!-- Right: Image & Description -->
    <div
      class="flex-1"
      :class="[hideSeparator ? 'border-b-0' : 'border-b border-gray-700']"
    >
      <img
        :src="image"
        alt="Project screenshot"
        class="rounded-lg mb-4 border border-gray-700 aspect-16/9 w-full object-cover bg-gray-700"
      />
      <p class="text-gray-300 pb-8">
        {{ description }}
      </p>
    </div>
  </div>

  <!-- Mobile Version -->
  <div
    class="md:hidden flex flex-col gap-2 my-8"
    :class="[hideSeparator ? 'border-b-0' : 'border-b border-gray-700']"
  >
    <p class="text-sm text-gray-400">{{ dates }}</p>
    <h3 class="text-xl font-semibold text-white">{{ company }}}</h3>
    <p class="text-sm text-gray-400 -mt-1">{{ position }}</p>

    <img
      :src="image"
      alt="Project screenshot"
      class="rounded-lg border border-gray-700 aspect-16/9 object-cover"
    />
    <p class="text-gray-300" :class="[hideSeparator ? 'pb-0' : 'pb-8']">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  hideSeparator: {
    type: Boolean,
    default: false,
  },
  company: {
    type: String,
    default: "Company",
  },
  position: {
    type: String,
    default: "Position/Role",
  },
  dates: {
    type: String,
    default: "Start - End",
  },
  image: {
    type: String,
    default: "https://picsum.photos/600/300",
  },
  description: {
    type: String,
    default: "Description of the job and responsibilities.",
  },
});
</script>
