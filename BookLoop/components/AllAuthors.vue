<template>
    <div class="space-y-6">
      <h6 class="text-base font-bold dark:text-white">All Authors</h6>
      <div  > 
        <div  class=" flex items-center justify-between font-medium text-gray-900 focus:outline-none bg-white  dark:bg-gray-800 dark:text-gray-400">
          <p class="text-base font-satoshi-medium font-bold dark:text-white">Author's name</p>
          <button @click="followAuthor(author.id)" class="text-sm font-satoshi-medium font-bold dark:text-white border py-2.5 px-5 rounded-full w-fit flex items-center hover:bg-gray-100 hover:text-blue-700 dark:hover:text-white dark:hover:bg-gray-700">
            Follow
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
/*   import { ref, computed } from 'vue';
  
  const props = defineProps({
    data: {
      type: Array,
      required: true
    }
  });
  
  const authors = ref(props.data);
  
  // Computed property to sort authors alphabetically
  const sortedAuthors = computed(() => {
    return authors.value.sort((a, b) => a.name.localeCompare(b.name));
  });
  
  const followAuthor = (authorId) => {
    // Logic to follow author
  }; */
  </script>
  
  <style scoped>
  /* Optional: Customize styles further if needed */
  </style>
  