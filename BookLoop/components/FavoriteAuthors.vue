<template>
  <div class="space-y-6">
    <h6 class="text-base font-bold dark:text-white">Select your favorite authors</h6>
    <div id="subtitle" class="text-sm font-satoshi-medium font-bold text-gray-400 dark:text-white">
      <p > You currently have x favorite authors</p>
      <!-- <p v-else>You currently don't have any favorite authors saved. Save some!</p> -->
    </div>

    <!-- Conditional rendering based on the number of authors -->
    <div  class="wrapper flex flex-wrap gap-2">
      <div class="py-2.5 space-x-2 pl-5 pr-4 flex items-center font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600">
        <p class="text-base font-satoshi-medium font-bold dark:text-white">c</p>
        <button @click="removeAuthor(author.id)" class="text-sm font-satoshi-medium font-bold dark:text-white border p-2 rounded-full h-7 w-7 flex items-center hover:bg-gray-100 hover:text-blue-700 dark:hover:text-white dark:hover:bg-gray-700">
          <svg class="w-[32px] h-[32px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L17.94 6M18 18L6.06 6"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
/* import { ref, computed } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
});

const authors = ref(props.data);
const numAuthors = computed(() => authors.value.length);

// Computed property to sort authors alphabetically
const sortedAuthors = computed(() => {
  return authors.value.sort((a, b) => a.name.localeCompare(b.name));
});

const removeAuthor = (authorId) => {
  // Logic to remove author
}; */
</script>

<style scoped>
/* Optional: Customize styles further if needed */
</style>
