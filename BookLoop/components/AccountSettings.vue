<template>
  <!-- Container holding Email and Username containers -->
  <div class="border border-gray-200 rounded-lg p-4 space-y-6">
    <!-- Secondary container for username input -->
    <div class="secondary-container flex justify-between items-center mb-4">
      <h6 class="text-base font-bold dark:text-white">Username</h6>
      <div class="flex w-7/12">
        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
          </svg>
        </span>
        <input 
          type="text" 
          id="username" 
          class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          :placeholder="usernamePlaceholder" 
          v-model="username"
        >
      </div>
    </div>

    <!-- Secondary container for email input -->
    <div class="secondary-container flex justify-between items-center mb-4">
      <h6 class="text-base font-bold dark:text-white">Your Email</h6>
      <div class="relative w-7/12">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
          </svg>
        </div>
        <input 
          type="text" 
          id="email" 
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          :placeholder="emailPlaceholder" 
          v-model="email"
        >
      </div>
    </div>
  </div>

  <!-- Container holding for Name and Birthday Date containers -->
  <div class="border border-gray-200 rounded-lg p-4 space-y-6">
    <!-- Secondary container for name input -->
    <div class="secondary-container flex justify-between items-center mb-4">
      <h6 class="text-base font-bold dark:text-white">Your Name</h6>
      <div class="flex w-7/12">
        <input 
          type="text" 
          id="name" 
          class="bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          :placeholder="namePlaceholder" 
          v-model="name"
        >
      </div>
    </div>

    <!-- Secondary container for birthday input -->
    <div class="secondary-container flex justify-between items-center mb-4">
      <h6 class="text-base font-bold dark:text-white">Birthday Date</h6>
      <div class="relative w-7/12">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="M10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
          </svg>
        </div>
        <div class="relative max-w-sm">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
          </div>
          <input 
            id="datepickerId" 
            datepicker 
            datepicker-autohide 
            type="text" 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Select your Birthday date!" 
            v-model="birthday"
          >
        </div>
      </div>
    </div>
  </div>

  <!-- Container for social media links -->
  <div class="border border-gray-200 rounded-lg p-4 space-y-6">
    <p class="text-xs content-start font-satoshi-medium text-gray-700 dark:text-white uppercase">YOUR SOCIAL MEDIA</p>

    <!-- Instagram -->
    <div class="flex items-center justify-between mb-4">
      <h6 class="text-base font-bold dark:text-white">Instagram</h6>
        <button @click="linkInstagram" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">Link</button>
    </div>

    <!-- Pinterest -->
    <div class="flex items-center justify-between mb-4">
      <h6 class="text-base font-bold dark:text-white">Pinterest</h6>
        <button @click="linkPinterest" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">Link</button>
    </div>

    <!-- TikTok -->
    <div class="flex items-center justify-between mb-4">
      <h6 class="text-base font-bold dark:text-white">TikTok</h6>
        <button @click="linkTikTok" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">Link</button>
    </div>
  </div>

  <!-- Third container for "Holiday Mode" -->
  <div class="third-container flex justify-between items-center mb-4 p-2.5">
    <h6 class="text-base font-bold dark:text-white ml-2">Holiday Mode</h6>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" class="sr-only peer" v-model="holidayMode">
      <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Datepicker from 'flowbite-datepicker/Datepicker';

// Define props
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

// Extract data from props
const username = ref(props.data.username);
const email = ref(props.data.email);
const name = ref(props.data.name);
const birthday = ref(props.data.birthdayDate);
const holidayMode = ref(props.data.holidayMode);
const instagram = ref(props.data.instagram);
const pinterest = ref(props.data.pinterest);
const tiktok = ref(props.data.tiktok);

// Placeholder texts
const usernamePlaceholder = 'Username';
const emailPlaceholder = 'Email';
const namePlaceholder = 'Enter your first and last name';
const birthdayPlaceholder = 'MM/DD/YYYY';
const instagramPlaceholder = 'Instagram Username';
const pinterestPlaceholder = 'Pinterest Username';
const tiktokPlaceholder = 'TikTok Username';

onMounted(() => {
  const datepickerEl = document.getElementById('datepickerId');
  if (datepickerEl) {
    new Datepicker(datepickerEl, {
      autohide: true,
      format: 'yyyy-mm-dd'
    });
  }
});

// Functions to link social media accounts
const linkInstagram = () => {
  // Logic to link Instagram account
};

const linkPinterest = () => {
  // Logic to link Pinterest account
};

const linkTikTok = () => {
  // Logic to link TikTok account
};


// Define expose to expose functions to parent component
defineExpose({
  username,
  email,
  name,
  birthday,
  holidayMode
});

</script>

<style scoped>
.border-red-500 {
  border-color: #f56565 !important;
}

input#name,
input#name:focus {
  border: none;
  border-bottom: 2px solid #d1d5db; 
  border-radius: 0;
}

input#name:focus {
  border-bottom-color: #3b82f6; 
  box-shadow: none;
}
</style>
