<template>
  <div class="flex flex-col h-screen items-center">
    <Navbar class="laptop:w-7/12" /> 
    <adminSidebar />
    <NuxtPage class="flex flex-col mb-8 w-full justify-start " />
    <!-- <NuxtPage class="flex flex-col mb-8 w-full justify-start overflow-hidden" /> -->
  </div>
</template>

<script setup>
import { useUserStore } from '~/composables/stores/user';
import { storeToRefs } from 'pinia'; 
import { useRouter } from 'vue-router';

// Importing the user store and router
const userStore = useUserStore();
const { isAdmin } = storeToRefs(userStore); 

console.log(isAdmin.value)
const router = useRouter();

// Function to handle user logout
async function logout() {
  await userStore.logout();
  // Redirect to the landing page after logout
  router.push('/');
}
</script>
