<template>
  <div class="space-y-6">
    <h6 class="text-base font-bold dark:text-white">Your Favorite Authors</h6>
    <div id="subtitle" class="text-sm font-satoshi-medium font-bold text-gray-400 dark:text-white">
      <p v-if="numAuthors > 0">You currently have {{ numAuthors }} favorite authors</p>
      <p v-else>You currently don't have any favorite authors saved. Save some!</p>
    </div>

    <!-- Authors list -->
    <div v-if="sortedAuthors.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="author in sortedAuthors" :key="author.person.personId" class="author-wrapper flex items-center justify-between font-medium text-gray-900 focus:outline-none bg-white dark:bg-gray-800 dark:text-gray-400 rounded-lg">
        <p class="text-base font-satoshi-medium font-bold dark:text-white">{{ author.person.personName }}</p>
        <button @click="unfollowAuthor(author.person.personId)" class="text-xs font-satoshi-medium font-bold dark:text-white border py-2.5 px-5 rounded-full w-fit flex items-center ml-2 hover:bg-gray-100 hover:text-blue-700 dark:hover:text-white dark:hover:bg-gray-700">
          Unfollow
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useUserService } from '~/composables/api/userService';

// Define props
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
});

// Reactive state
const authors = ref(props.data);
const numAuthors = computed(() => authors.value.length);

// Computed property for sorting authors
const sortedAuthors = computed(() => {
  return authors.value.sort((a, b) => a.person.personName.localeCompare(b.person.personName));
});

// Service for removing favorite authors
const { removeFavoriteAuthor } = useUserService();

// Emit events for follow and unfollow actions
const emit = defineEmits(['unfollow-author', 'follow-author', 'update-message']);

// Function to unfollow an author
const unfollowAuthor = async (authorId) => {
  console.log('Unfollowing author:', authorId);
  try {
    const response = await removeFavoriteAuthor(authorId);
    authors.value = authors.value.filter(author => author.person.personId !== authorId);
    console.log(response.message);
    emit('unfollow-author', authorId);  // Emit an event to notify other components
    emit('update-message', { text: response.message, isSuccess: true }); // Emit success message
  } catch (error) {
    console.error('Error unfollowing author:', error);
    emit('update-message', { text: error.response.data.message, isSuccess: false }); // Emit error message
  }
};

// Watch for prop data changes
watch(() => props.data, (newData) => {
  authors.value = newData;
});

</script>

<style scoped>
/* Optional: Customize styles further if needed */
</style>
