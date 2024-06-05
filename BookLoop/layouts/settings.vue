<!-- layouts/settings.vue -->
<template>
  <div class="flex flex-col h-screen items-center">
    <Navbar />

    <div class="relative flex w-10/12 justify-center top-20 space-x-12">
      <Sidebar />
      <NuxtPage class="w-4/12"/>
    </div>
  </div>
</template>

<script setup>
</script>
