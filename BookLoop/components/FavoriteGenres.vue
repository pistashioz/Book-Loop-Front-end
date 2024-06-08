<template>
  <!-- template testing -->
  <div class="space-y-6">
    <h6 class="text-base font-bold dark:text-white">Select your favorite literary genres</h6>
    <div id="subtitle" class="text-sm font-satoshi-medium font-bold text-gray-400 dark:text-white">
      <p v-if="numGenres > 0">You currently have {{ numGenres }} favorite genres</p>
      <p v-else>You currently don't have any favorite genres saved. Save some!</p>
    </div>

    <!-- Conditional rendering based on the number of genres -->
    <div v-if="sortedGenres.length > 0" class="wrapper flex flex-wrap gap-2">
      <div v-for="(genre, index) in sortedGenres" :key="index" class="py-2.5 space-x-2 pl-5 pr-4 flex items-center font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600">
        <p class="text-base font-satoshi-medium font-bold dark:text-white">{{ genre.genre.genreName }}</p>
        <button @click="removeGenre(genre.genre.genreId)" class="text-sm font-satoshi-medium font-bold dark:text-white border p-2 rounded-full h-7 w-7 flex items-center hover:bg-gray-100 hover:text-blue-700 dark:hover:text-white dark:hover:bg-gray-700">
          <svg class="w-[32px] h-[32px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L17.94 6M18 18L6.06 6"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Button to add new genres and open the dropdown -->
    <div class="last-row-wrapper flex items-center justify-between">
      <div class="relative py-2.5 w-fit space-x-2 px-5 flex items-center font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600">
        <button @click="toggleDropdown" class="text-sm font-satoshi-medium font-bold dark:text-white h-7 w-7 flex items-center justify-center hover:text-blue-700 dark:hover:text-white">
          <svg class="w-[32px] h-[32px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 12h14m-7 7V5"/>
          </svg>
        </button>
      </div>
      <transition name="fade">
        <p v-if="message.text" :class="message.isSuccess ? 'text-green-500' : 'text-red-500'" class="text-xs font-bold">
          {{ message.text }}
        </p>
      </transition>
    </div>

    <!-- Dropdown menu -->
    <div v-if="showDropdown" id="genre-dropdown" class="absolute z-10 border bg-white rounded-lg shadow w-60 dark:bg-gray-700 custom-scrollbar-container">
      <ul class="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200 custom-scrollbar" @scroll="onScroll">
        <li v-for="(genre, index) in availableGenres" :key="index" @click="addGenre(genre)" class="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          <a class="flex items-center px-4 py-2 text-gray-900">
            {{ genre.genreName }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useGenreService } from '~/composables/api/genreService';
import { useUserService } from '~/composables/api/userService';

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
});

const genres = ref(props.data);
const availableGenres = ref([]);
const showDropdown = ref(false);
const numGenres = computed(() => genres.value.length);

// Message for displaying error/success messages
const message = ref({ text: '', isSuccess: true });

// Function to display messages
const displayMessage = (msg, isSuccess) => {
  message.value.text = msg;
  message.value.isSuccess = isSuccess;
  setTimeout(() => {
    message.value.text = '';
  }, 5000);
};

// Computed property to sort genres alphabetically
const sortedGenres = computed(() => {
  return genres.value.sort((a, b) => a.genre.genreName.localeCompare(b.genre.genreName));
});

const currentPage = ref(1);
const totalPages = ref(1);

const { fetchGenres } = useGenreService();
const { addFavoriteGenre, removeFavoriteGenre } = useUserService();

// Toggle dropdown visibility
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
  if (showDropdown.value) {
    loadGenres();
  }
};

// Close dropdown if clicked outside
const handleClickOutside = (event) => {
  const dropdown = document.getElementById('genre-dropdown');
  const button = event.target.closest('button');
  if (dropdown && !dropdown.contains(event.target) && !button) {
    showDropdown.value = false;
  }
};

// Fetch genres from the backend
const loadGenres = async () => {
  if (currentPage.value <= totalPages.value) {
    try {
      console.log('Fetching genres page'+ currentPage.value + '...');
      const response = await fetchGenres(currentPage.value, 10);
      console.log(response);
      const favoriteGenreIds = genres.value.map(g => g.genre.genreId);
      const newGenres = response.genres.filter(genre => !favoriteGenreIds.includes(genre.genreId) && !availableGenres.value.some(g => g.genreId === genre.genreId));
      availableGenres.value.push(...newGenres);
      currentPage.value++;
      totalPages.value = response.totalPages;
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  }
};

// Handle scroll event to load more genres
const onScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } = event.target;
  if (scrollTop + clientHeight >= scrollHeight - 5 && currentPage.value <= totalPages.value) {
    loadGenres();
  }
};

// Add selected genre to the list and post to server
const addGenre = async (genre) => {
  if (!genres.value.some(g => g.genre.genreId === genre.genreId)) {
    try {
      const response = await addFavoriteGenre({ genreName: genre.genreName });
      genres.value.push({ genre });
      availableGenres.value = availableGenres.value.filter(g => g.genreId !== genre.genreId);
      showDropdown.value = false;
      console.log(response)
      displayMessage(response.message, response.success);
    } catch (error) {
      displayMessage(error.response.data.message, false);
      console.error('Error adding favorite genre:', error);
    }
  }
};

// Remove selected genre from the list and delete from server
const removeGenre = async (genreId) => {
  const genreIndex = genres.value.findIndex(g => g.genre.genreId === genreId);
  if (genreIndex !== -1) {
    try {
      const response = await removeFavoriteGenre(genreId);
      availableGenres.value.push(genres.value[genreIndex].genre);
      genres.value.splice(genreIndex, 1);
      displayMessage(response.message, response.success);
    } catch (error) {
      displayMessage(error.response.data.message, false);
      console.error('Error removing favorite genre:', error);
    }
  }
};

// Set up and tear down event listener for clicks outside
onMounted(() => {
  // loadGenres();
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* Custom scrollbar styles */
.custom-scrollbar-container {
  padding-right: 6px; /* Adjust the padding to move scrollbar inside */
  padding-top: 6px;
  padding-bottom: 6px;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Transition for message */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}



div#genre-dropdown {
  margin-top: 0.5rem;
}
</style>
