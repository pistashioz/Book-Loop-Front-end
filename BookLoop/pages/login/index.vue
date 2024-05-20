<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
      <h1 class="text-2xl font-bold text-center">Log in to your account</h1>
      <form @submit.prevent="login" class="space-y-6">
        <div>
          <label for="email" class="text-sm font-semibold">Email</label>
          <input 
            v-model="usernameOrEmail" 
            type="email" 
            id="email" 
            placeholder="Email" 
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
        <div v-if="error" class="text-red-500 text-sm mt-2">{{ error }}</div> <button type="submit" class="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Sign in
          </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '~/composables/stores/user';
import { useRouter } from 'vue-router';
const router = useRouter();
const userStore = useUserStore();

const usernameOrEmail = ref('');  
const password = ref('');
const error = ref(null);

async function login() {
  error.value = null;
  try {
    console.log(usernameOrEmail.value, password.value)
    const userData = await userStore.login(usernameOrEmail.value, password.value);
    console.log(userData)
    if (userData) {
      console.log('yes')
      //router.push('/works'); 
    } 
  } catch (err) {
    error.value = err.message || 'Login failed';
  }
}
</script>

