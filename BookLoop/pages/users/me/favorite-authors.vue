<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <Container @update-profile="updateProfile">
        <template #default>
          <FavoriteAuthors ref="favoriteAuthorsRef" :data="favoriteAuthorsData" />
        </template>
        <template #secondary>
          <AllAuthors :data="allAuthorsData" />
        </template>
      </Container>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserService } from '~/composables/api/userService';
// import { useAuthorService } from '~/composables/api/authorService';

definePageMeta({
  layout: 'settings'
});

const route = useRoute();
const router = useRouter();
const { fetchUserData, updateUserData } = useUserService();
// const { fetchAllAuthors } = useAuthorService();

// State to hold the data and loading status
const favoriteAuthorsData = ref(null);
const allAuthorsData = ref([]);
const loading = ref(false);

// Ref for accessing component data
const favoriteAuthorsRef = ref(null);

// Extract the URI dynamically from the current route
let currentPath;

// Function to fetch data based on the route
const fetchData = async () => {
  currentPath = route.fullPath;
  loading.value = true;
  try {
    favoriteAuthorsData.value = await fetchUserData(currentPath);
    allAuthorsData.value = await fetchAllAuthors();
    console.log('Fetched favorite authors:', favoriteAuthorsData.value);
    console.log('Fetched all authors:', allAuthorsData.value);
  } catch (error) {
    console.error('Failed to fetch data:', error);
  } finally {
    loading.value = false;
  }
};

// Fetch initial data
fetchData();

// Watch for changes in the route to fetch new data
watch(
  () => route.path,
  (newPath) => {
    fetchData();
  },
  { immediate: true }
);

// Function to handle profile update
const updateProfile = async () => {
  let profileUpdateData = {};

  if (favoriteAuthorsRef.value) {
    profileUpdateData = {
      favoriteAuthors: favoriteAuthorsRef.value.authors
    };
  }

  try {
    // Update profile data
    await updateUserData(currentPath, profileUpdateData);
  } catch (error) {
    console.error('Failed to update profile:', error);
  }
};
</script>
