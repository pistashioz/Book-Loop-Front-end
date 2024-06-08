<template>
    <div class="space-y-6">
      <h6 class="text-base font-bold dark:text-white">Select your favorite literary genres</h6>
      <div class="py-2.5 w-fit space-x-2 px-5 flex items-center font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <p class="text-base font-satoshi-medium font-bold dark:text-white">Horror</p>
        <!-- <button class="text-base font-satoshi-medium font-bold dark:text-white  ml-1 mt-0.5">X</button> -->
      </div>
      <div v-for="(genre, index) in genres" :key="index" class="border border-gray-200 rounded-lg p-4">
        <h5 class="text-lg font-bold dark:text-white">{{ genre.name }}</h5>
        <!-- <p class="text-sm text-gray-600 dark:text-gray-400">{{ genre.description }}</p> -->
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
  
  const genres = ref(props.data);
  </script>
  
  <style scoped>
  /* Optional: Customize styles further if needed */
  </style>
  