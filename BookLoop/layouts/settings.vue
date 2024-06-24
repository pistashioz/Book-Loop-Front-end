<!-- layouts/settings.vue -->
<template>
  <div class="flex flex-col h-screen items-center">
    <Navbar class="w-7/12"/>

    <div class="relative flex w-7/12 justify-start top-5 space-x-12">
      <Sidebar />
      <NuxtPage class="2xl:w-3/12 lg:w-5/12 sm:w-6/12 laptop:w-4/12"
        />
    </div>
  </div>
</template>

<script setup>
</script>
