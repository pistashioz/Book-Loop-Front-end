<template>
      <div class="flex flex-col items-center h-full overflow-hidden">
      <div class="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
        <h1 class="text-2xl font-bold text-center">Register a new account</h1>
        <form @submit.prevent="register" class="space-y-6">
          <div>
            <label for="username" class="text-sm font-semibold">Username</label>
            <input
              v-model="username"
              type="text"
              id="username"
              placeholder="Username"
              required
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div>
            <label for="email" class="text-sm font-semibold">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              placeholder="name@flowbite.com"
              required
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
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
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div>
            <label for="repeat-password" class="text-sm font-semibold">Repeat Password</label>
            <input
              v-model="repeatPassword"
              type="password"
              id="repeat-password"
              placeholder="Repeat Password"
              required
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div>
            <label for="birthDate" class="text-sm font-semibold">Birthday Date</label>
            <div class="relative max-w-sm">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
              </div>
              <input 
                id="datepickerId" 
                type="text" 
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                placeholder="Select your Birthday date!" 
                v-model="birthDate"
                required
              />
            </div>
          </div>
          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input 
                id="activateConfigs" 
                type="checkbox" 
                v-model="activateConfigs" 
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label for="activateConfigs" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Activate Configurations</label>
          </div>
          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input 
                id="terms" 
                type="checkbox" 
                v-model="acceptTAndC" 
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
                required 
              />
            </div>
            <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
          </div>
          <div v-if="error" class="text-red-500 text-sm mt-2">{{ error }}</div>
          <button type="submit" class="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 dark:bg-blue-700 dark:focus:ring-blue-800">
            Register new account
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useNuxtApp } from '#app';
  
  const { $api } = useNuxtApp();
  const router = useRouter();
  
  const username = ref('');
  const email = ref('');
  const password = ref('');
  const repeatPassword = ref('');
  const birthDate = ref('');
  const activateConfigs = ref(false);
  const acceptTAndC = ref(false);
  const error = ref(null);
  
  onMounted(() => {
    if (process.client) {
      import('flowbite-datepicker/Datepicker').then((Datepicker) => {
        const datepickerEl = document.getElementById('datepickerId');
        if (datepickerEl) {
          const datepicker = new Datepicker.default(datepickerEl, {
            autohide: true,
            format: 'yyyy-mm-dd'
          });
  
          datepickerEl.addEventListener('changeDate', (event) => {
            birthDate.value = event.target.value;
          });
        }
      });
    }
  });
  
  async function register() {
    error.value = null; // Reset error message
    if (password.value !== repeatPassword.value) {
      error.value = 'Passwords do not match';
      return;
    }
    try {
      const response = await $api.post('/users/register', {
        username: username.value,
        email: email.value,
        password: password.value,
        birthDate: birthDate.value,
        activateConfigs: activateConfigs.value,
        acceptTAndC: acceptTAndC.value
      });
      const data = response.data;
  
      if (data) {
        alert('Registration successful. Please check your email to verify your account.');
        router.push('/login');
      }
    } catch (err) {
      error.value = err.response?.data?.message || 'Registration failed';
    }
  }
  </script>
  
  <style scoped>
  /* Adicione qualquer estilo específico aqui, se necessário */
  </style>
  