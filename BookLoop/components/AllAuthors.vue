<template>
  <div class="gap-y-4 flex flex-col">
    <div class="header-wrapper flex flex-col items-start gap-y-1">
      <h6 class="text-base font-bold dark:text-white">All Authors</h6>
      <div class="grid grid-cols-13 gap-1 w-full">
        <!-- Alphabet filter buttons -->
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

    <!-- Authors list -->
    <div v-if="filteredAuthors.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="author in filteredAuthors" :key="author.personId" class="author-wrapper flex items-center justify-between font-medium text-gray-900 focus:outline-none bg-white dark:bg-gray-800 dark:text-gray-400 rounded-lg">
        <p class="text-base font-satoshi-medium font-bold dark:text-white">{{ author.personName }}</p>
        <button 
          @click="toggleFollowAuthor(author)" 
          :class="buttonClass(isFavorite(author.personId))"
        >
          {{ isFavorite(author.personId) ? 'Unfollow' : 'Follow' }}
        </button>
      </div>
    </div>

    <!-- Pagination -->
    <nav aria-label="Page navigation example" class="self-center uppercase">
      <ul class="inline-flex gap-x-2 text-sm">
        <li v-if="currentPage > 1">
          <a @click.prevent="changePage(currentPage - 1)" href="#" class="flex items-center justify-center rounded-2xl w-8 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">«</a>
        </li>
        <li v-for="page in pagesToShow" :key="page">
          <a @click.prevent="changePage(page)" href="#" :class="['flex items-center justify-center rounded-2xl w-8 h-8 leading-tight', page === currentPage ? 'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white']">{{ page }}</a>
        </li>
        <li v-if="currentPage < totalPages">
          <a @click.prevent="changePage(currentPage + 1)" href="#" class="flex items-center justify-center rounded-2xl w-8 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">»</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useAuthorService } from '~/composables/api/authorService';
import { useUserService } from '~/composables/api/userService';

// Define props
const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  favoriteAuthors: {
    type: Array,
    required: true
  }
});

// Reactive state
const authors = ref(props.data);
const favoriteAuthors = ref(props.favoriteAuthors.map(a => a.person.personId));
const selectedLetter = ref('A');
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const filteredAuthors = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);

// Computed property for sorting authors
const sortedAuthors = computed(() => {
  return authors.value.sort((a, b) => a.personName.localeCompare(b.personName));
});

// Services for fetching authors and managing favorites
const { fetchAuthorsByLetter } = useAuthorService();
const { addFavoriteAuthor, removeFavoriteAuthor } = useUserService();

// Emit events for follow and unfollow actions
const emit = defineEmits(['unfollow-author', 'follow-author', 'update-message']);

// Function to check if an author is a favorite
const isFavorite = (authorId) => {
  return favoriteAuthors.value.includes(authorId);
};

// Function to toggle follow/unfollow an author
const toggleFollowAuthor = async (author) => {
  if (isFavorite(author.personId)) {
    await unfollowAuthor(author.personId);
  } else {
    await followAuthor(author);
  }
};

// Function to follow an author
const followAuthor = async (author) => {
  try {
    const response = await addFavoriteAuthor({ personName: author.personName });
    favoriteAuthors.value.push(author.personId);
    emit('follow-author', { person: author });
    emit('update-message', { text: response.message, isSuccess: true }); // Emit success message
    console.log(response.message);
  } catch (error) {
    emit('update-message', { text: error.response.data.message, isSuccess: false }); // Emit error message
    console.error('Error following author:', error);
  }
};

// Function to unfollow an author
const unfollowAuthor = async (authorId) => {
  try {
    const response = await removeFavoriteAuthor(authorId);
    favoriteAuthors.value = favoriteAuthors.value.filter(id => id !== authorId);
    emit('unfollow-author', authorId);
    emit('update-message', { text: response.message, isSuccess: true }); // Emit success message
    console.log(response.message);
  } catch (error) {
    emit('update-message', { text: error.response.data.message, isSuccess: false }); // Emit error message
    console.error('Error unfollowing author:', error);
  }
};

// Function to filter authors by the selected letter
const filterByLetter = async (letter) => {
  selectedLetter.value = letter;
  currentPage.value = 1;
  await fetchAuthors();
};

// Function to change the page
const changePage = async (page) => {
  currentPage.value = page;
  await fetchAuthors();
};

// Function to fetch authors for the current page
const fetchAuthors = async () => {
  try {
    const response = await fetchAuthorsByLetter(selectedLetter.value, currentPage.value);
    filteredAuthors.value = response.persons;
    totalPages.value = response.totalPages;
  } catch (error) {
    emit('message', { text: 'Error fetching authors', isSuccess: false });
    console.error('Error fetching authors:', error);
  }
};

// Fetch initial authors on component mount
onMounted(() => {
  filterByLetter(selectedLetter.value);
});

// Watch for changes in authors and filter accordingly
watch(authors, () => {
  filterByLetter(selectedLetter.value);
});

// Watch for prop data changes
watch(() => props.data, (newData) => {
  authors.value = newData;
});

watch(() => props.favoriteAuthors, (newFavorites) => {
  favoriteAuthors.value = newFavorites.map(a => a.person.personId);
});

// Computed property to determine the pages to show in the pagination
const pagesToShow = computed(() => {
  const pages = [];
  const total = totalPages.value;
  const current = currentPage.value;
  
  const startPage = Math.max(1, current - 1);
  const endPage = Math.min(total, current + 1);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  
  return pages;
});

// Function to return the button classes based on follow/unfollow state
const buttonClass = (isFavorite) => {
  if (isFavorite) {
    return 'text-xs font-satoshi-medium font-bold dark:text-white border py-2.5 px-5 rounded-full w-fit flex items-center ml-2 bg-gray-100 text-blue-700 hover:text-gray-900 hover:bg-white dark:hover:bg-gray-700';
  } else {
    return 'text-xs font-satoshi-medium font-bold dark:text-white border py-2.5 px-5 rounded-full w-fit flex items-center ml-2 hover:bg-gray-100 hover:text-blue-700 dark:hover:text-white dark:hover:bg-gray-700';
  }
};

</script>

<style scoped>
.grid-cols-13 {
  display: grid;
  grid-template-columns: repeat(13, 1fr);
}

.author-wrapper {
  justify-content: space-between;
}
</style>
