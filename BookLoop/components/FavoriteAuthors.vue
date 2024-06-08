<template>
    <div class="space-y-6">
      <div v-for="(author, index) in authors" :key="index" class="border border-gray-200 rounded-lg p-4">
        <h5 class="text-lg font-bold dark:text-white">{{ author.name }}</h5>
        <p class="text-sm text-gray-600 dark:text-gray-400">{{ author.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    data: {
      type: Array,
      required: true
    }
  });
  
  const authors = ref(props.data);
  </script>
  
  <style scoped>
  /* Optional: Customize styles further if needed */
  </style>
  