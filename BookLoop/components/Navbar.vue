<template>
  <div>
    <header>
      <nav class="flex justify-between pt-16 mb-5 items-center bg-white">
        <h1 class="text-xl font-bold">
          <NuxtLink to="/" class="uppercase text-xl font-cabinet">Book Loop</NuxtLink>
        </h1>
        <div class="flex flex-grow justify-center items-center">
          <div class="flex w-full max-w-md">
            <button id="dropdown-button" @click="toggleDropdown('categories')" class="flex-shrink-0 z-10 rounded-s-3xl inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
              All categories 
              <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <div v-if="isDropdownOpen('categories')" id="dropdown" class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 top-20 mt-4">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Listings</button>
                </li>
                <li>
                  <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Book Editions</button>
                </li>
                <li>
                  <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Members</button>
                </li>
              </ul>
            </div>
            <div class="relative w-full">
              <input type="search" id="search-dropdown" class="block border border-l-0 border-gray-300 rounded-r-3xl p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search listings, book editions, members..." required />
              <button type="submit" class="absolute top-0 end-0 p-2.5 w-[42px] text-sm font-medium h-full text-white bg-blue-700 rounded-e-3xl border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </div>
          </div>
        </div>
        <ul class="flex items-center space-x-4">
          <li v-if="!userId" class="font-semibold text-gray-700">
            <NuxtLink to="/login">Login</NuxtLink>
          </li>
          <li v-if="!userId" class="font-semibold text-gray-700">
            <NuxtLink to="/register">Register</NuxtLink>
          </li>
          <template v-else>
            <li id="messages" class="flex items-center">
              <svg class="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
              </svg>
            </li>
            <li id="notification" class="flex items-center">
              <svg class="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
              </svg>
            </li>
            <li id="wishlist" class="flex items-center">
              <svg class="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
              </svg>
            </li>
            <li id="avatar" class="relative p-1 flex items-center">
              <button id="avatarButton" type="button" @click="toggleDropdown('avatar')" class="flex w-10 h-10 rounded-full cursor-pointer overflow-hidden bg-gray-100 dark:bg-gray-900">
                <template v-if="profileImage">
                  <img :src="profileImage" alt="Profile Image" class="w-full h-full object-cover" />
                </template>
                <template v-else>
                  <svg class="w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                  </svg>
                </template>
              </button>
              <!-- Dropdown menu -->
              <div v-if="isDropdownOpen('avatar')" id="userDropdown" class="absolute z-10 left-0 top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-900 dark:divide-gray-600">
                <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>{{ username }}</div>
                  <div class="font-medium truncate">{{ email }}</div>
                </div>
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 font-satoshi-medium" aria-labelledby="avatarButton">
                  <li>
                    <NuxtLink :to="`/users/${userId}`" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink :to="{ path: '/users/me/settings', query: { type: 'profile' } }" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile Settings</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/users/me/favorite-genres" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Personalization</NuxtLink>
                  </li>
                  <li v-if="isAdmin">
                    <NuxtLink to="/works" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Admin Panel</NuxtLink>
                  </li>
                </ul>
                <div class="py-1">
                  <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</button>
                </div>
              </div>
            </li>
            <button 
              @click="goToNewListing" 
              type="button" 
              class="py-2.5 px-5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Sell a book!
            </button>
          </template>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useUserStore } from '~/composables/stores/user';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';

// Initialize user store
const userStore = useUserStore();
const { userId, isAdmin, username, email, profileImage } = storeToRefs(userStore);

const router = useRouter();
const { $api } = useNuxtApp();

const goToNewListing = () => {
  router.push({ name: 'new-listing' });
};

// State for dropdown menu visibility
const dropdownState = ref({
  categories: false,
  avatar: false
});

// Computed property to ensure userId is correctly referenced
const userIdValue = computed(() => userId.value);

// Toggle dropdown visibility
const toggleDropdown = (dropdown) => {
  dropdownState.value[dropdown] = !dropdownState.value[dropdown];
};

// Check if a specific dropdown is open
const isDropdownOpen = (dropdown) => {
  return dropdownState.value[dropdown];
};

// Logout function to handle user logout and redirect to the landing page
async function logout() {
  await userStore.logout();
  router.push('/');
}

// Watch for changes in the user profile image
watch(profileImage, (newProfileImage) => {
  console.log("Profile image changed:", newProfileImage);
});
</script>


<style scoped>
/* Additional styles if necessary */
</style>
