<template>
    <div class="gap-y-2 flex flex-col">
      <div class="header-wrapper flex flex-col items-start gap-y-1">
        <h6 class="text-base font-bold dark:text-white">All Authors</h6>
        <div class="flex flex-wrap gap-1 justify-evenly">
          <button 
            v-for="letter in alphabet" 
            :key="letter" 
            @click="filterByLetter(letter)" 
            :class="[
              'p-2.5 w-8 h-8 flex items-center justify-center text-xs font-satoshi-medium font-bold border rounded-full',
              selectedLetter === letter ? 'bg-blue-500 text-white' : 'dark:text-white hover:bg-gray-100 hover:text-blue-700 dark:hover:text-white dark:hover:bg-gray-700'
            ]"
          >
            <p>{{ letter }}</p>
          </button>
        </div>
      </div>
  
      <div v-if="filteredAuthors.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(author, index) in filteredAuthors" :key="author.personId" class="author-wrapper flex items-center justify-between font-medium text-gray-900 focus:outline-none bg-white dark:bg-gray-800 dark:text-gray-400 rounded-lg">
          <p class="text-base font-satoshi-medium font-bold dark:text-white">{{ author.personName }}</p>
          <button @click="followAuthor(author.personId)" class="text-xs font-satoshi-medium font-bold dark:text-white border py-2.5 px-5 rounded-full w-fit flex items-center ml-2 hover:bg-gray-100 hover:text-blue-700 dark:hover:text-white dark:hover:bg-gray-700">
            Follow
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useAuthorService } from '~/composables/api/authorService';
  
  const props = defineProps({
    data: {
      type: Array,
      required: true
    }
  });
  
  const authors = ref(props.data);
  const selectedLetter = ref('A');
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const filteredAuthors = ref([]);
  
  const sortedAuthors = computed(() => {
    return authors.value.sort((a, b) => a.personName.localeCompare(b.personName));
  });
  
  const { fetchAllAuthors } = useAuthorService();
  
  const followAuthor = async (authorId) => {
    // Logic to follow the author (send a request to the server)
    console.log('Following author with ID:', authorId);
  };
  
  const filterByLetter = (letter) => {
    selectedLetter.value = letter;
    filteredAuthors.value = sortedAuthors.value.filter(author => author.personName.startsWith(letter));
  };
  
  onMounted(async () => {
    try {
      const response = await fetchAllAuthors();
      authors.value = response.persons;
      filterByLetter(selectedLetter.value); // Default to the 'A' letter
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  });
  </script>
  
  <style scoped>
  /* Optional: Customize styles further if needed */
  .author-wrapper {
    justify-content: space-between; /* Ensure that content within each grid item is spaced correctly */
  }
  </style>
  