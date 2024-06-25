<template>
  <div class="flex flex-col h-screen items-center">
    <Navbar class="laptop:w-7/12" /> 
    <SideBar v-if="isAdmin" />
    <NuxtPage class="flex flex-col w-7/12 justify-start overflow-hidden" />
    <div>

    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '~/composables/stores/user';
import { storeToRefs } from 'pinia'; 
import { useRouter } from 'vue-router';

// Importing the user store and router
const userStore = useUserStore();
const { isAdmin } = storeToRefs(userStore); 
const router = useRouter();

// Function to handle user logout
async function logout() {
  await userStore.logout();
  // Redirect to the landing page after logout
  router.push('/');
}
</script>
