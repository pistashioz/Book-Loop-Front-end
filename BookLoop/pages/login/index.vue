<!-- BookLoop/pages/login/index.vue -->

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
      <h1 class="text-2xl font-bold text-center">Log in to your account</h1>
      <form @submit.prevent="login" class="space-y-6">
        <div>
          <label for="usernameOrEmail" class="text-sm font-semibold">Email or Username</label>
          <input
          v-model="usernameOrEmail"
          type="text"
          id="usernameOrEmail"
          placeholder="Email or Username"
          required
          class="w-full p-2 mt-1 border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label for="password" class="text-sm font-semibold">Password</label>
          <input
          v-model="password"
          type="password"
          id="password"
          placeholder="Password"
          required
          class="w-full p-2 mt-1 border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div v-if="error" class="text-red-500 text-sm mt-2">{{ error }}</div>
        <button type="submit" class="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/composables/stores/user';

const { $api } = useNuxtApp();
// Router for navigation
const router = useRouter();
// User store to manage user state
const userStore = useUserStore();


definePageMeta({
  layout: 'login'
});

// Reactive variables for form inputs and error message
const usernameOrEmail = ref('');
const password = ref('');
const error = ref(null);

// Login function to handle form submission
async function login() {
  error.value = null; // Reset error message
  try {
    console.log('login');
    // Make a POST request to the backend login endpoint
    const response = await $api.post('/users/login', {
      usernameOrEmail: usernameOrEmail.value,
      password: password.value
    });
    console.log(response);
    const data = response.data;

    if (data) {
      // Set user data in Pinia store if login is successful
      userStore.setUser(data.user);
      console.log(data.user);
   
      // Redirect to the specific page after login
      router.push('/');
    }
  } catch (err) {
    // Catch any other errors and set the error message
    error.value = err.response?.data?.message || 'Login failed';
  }
}
</script>
