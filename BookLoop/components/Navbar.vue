<template>
  <div>
    <header>
      <nav class="flex justify-between px-20 py-10 items-center bg-white">
        <h1 class="text-xl text-gray-800 font-bold">
          <NuxtLink to="/">Book Loop</NuxtLink>
        </h1>
        <div class="flex items-center">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input class="ml-2 outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Search..." />
          </div>
          <ul class="flex items-center space-x-6">
            <li v-if="isAdmin" class="font-semibold text-gray-700">
              <NuxtLink to="/works">Works</NuxtLink>
            </li>
            <li v-if="!userId" class="font-semibold text-gray-700">
              <NuxtLink to="/login">Login</NuxtLink>
            </li>
            <template v-else>
              <li class="relative p-1">
                <button id="avatarButton" type="button" @click="toggleDropdown" class="flex w-10 h-10 rounded-full cursor-pointer overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <svg class="w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                  </svg>
                </button>
                <!-- Dropdown menu -->
                <div v-if="isDropdownOpen" id="userDropdown" class="absolute right-0 z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-900 dark:divide-gray-600">
                  <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{{ userProfile.username }}</div>
                    <div class="font-medium truncate">{{ userProfile.email }}</div>
                  </div>
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 font-satoshi-medium" aria-labelledby="avatarButton">
                    <li>
                      <NuxtLink :to="`/users/${userId}`" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="{ path: '/users/me/settings', query: { type: 'profile' } }" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile Settings</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/users/me/personalization" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Personalization</NuxtLink>
                    </li>
                    <li v-if="isAdmin">
                      <NuxtLink to="/admin" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Admin Panel</NuxtLink>
                    </li>
                  </ul>
                  <div class="py-1">
                    <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</button>
                  </div>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useUserStore } from '~/composables/stores/user';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';

// Initialize user store
const userStore = useUserStore();
const { userId, isAdmin } = storeToRefs(userStore);

const router = useRouter();
const { $api } = useNuxtApp();

// State for dropdown menu visibility
const isDropdownOpen = ref(false);
const userProfile = ref({ username: '', email: '' });

// Computed property to ensure userId is correctly referenced
const userIdValue = computed(() => userId.value);

// Fetch user profile details
const fetchUserProfile = async () => {
  try {
    const response = await $api.get('/users/me/settings?type=profile');
    console.log(`the user id is ${userIdValue.value}`);
    userProfile.value = response.data;
    console.log('User profile:', userProfile.value);
  } catch (err) {
    console.error('Failed to fetch user profile:', err);
  }
};

// Toggle dropdown visibility
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  fetchUserProfile();
};

// Logout function to handle user logout and redirect to the landing page
async function logout() {
  await userStore.logout();
  router.push('/');
}

onMounted(() => {
  fetchUserProfile();
});
</script>
