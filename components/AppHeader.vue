<template>
  <header
    style="backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px)"
    :class="[
      'fixed top-0 left-0 z-10',
      'w-full',
      'py-4 px-5',
      'flex items-center justify-between',
    ]"
  >
    <a href="/" class="flex items-center gap-2">
      <img
        src="/myself.jpg"
        alt="Profile picture"
        class="w-10 h-10 rounded-full"
      />
      <h1 class="text-2xl font-medium text-slate-800">rbaalt</h1>
    </a>
    <a
      href="https://www.linkedin.com/in/baaltrodrigo"
      role="button"
      target="_blank"
      class="text-sm font-medium text-slate-800 border border-slate-800 rounded-xl px-4 py-2 hover:bg-slate-800 hover:text-slate-200 transition"
    >
      Contact
    </a>
  </header>
</template>
