<template>
  <div class="flex flex-col h-screen items-center">
    <Navbar class="w-7/12"/>
    <div :class="['relative flex w-7/12 top-5 space-x-12', justifyClass]">
      <Sidebar v-if="showSidebar" />
      <NuxtPage :class="[showSidebar ? '2xl:w-3/12 lg:w-5/12 sm:w-6/12 laptop:w-6/12' : 'w-4/12']" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const showSidebar = computed(() => {
  return route.path !== '/reset-password';
});

const justifyClass = computed(() => {
  return route.path === '/reset-password' ? 'justify-center' : 'justify-start';
});
</script>
