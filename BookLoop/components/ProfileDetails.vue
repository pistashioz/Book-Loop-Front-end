<template>
  <!-- Container holding both secondary containers -->
  <div class="border border-gray-200 rounded-lg p-4 space-y-6">
    <!-- Secondary container for profile image -->
    <div class="secondary-container flex justify-between items-center mb-4">
      <!-- Heading -->
      <h6 class="text-base font-bold dark:text-white">Your photo</h6>
      
      <!-- Avatar and file input button -->
      <div class="flex items-center space-x-4">
        <!-- Avatar Icon or Profile Image -->
        <div v-if="profileImage" class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <img :src="profileImage" alt="Profile Image" class="w-full h-full object-cover" />
        </div>
        <div v-else class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
          </svg>
        </div>
        
        <!-- File input button -->
        <label for="file-input" class="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">
          Choose photo
        </label>
        <input id="file-input" type="file" class="hidden" @change="handleFileChange" />
      </div>
    </div>
    
    <!-- Secondary container for about you -->
    <div class="secondary-container flex mb-4">
      <!-- Heading -->
      <h6 class="text-base font-bold dark:text-white mr-4 min-w-fit">About you</h6>
      
      <!-- About you textarea -->
      <textarea id="about-you" rows="4" class="block p-2.5 w-full h-56 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="aboutPlaceholder" v-model="aboutYou"></textarea>
    </div>
  </div>
  
  <!-- New container for "My Location" -->
  <div class="my-location-container border border-gray-200 rounded-lg p-4">
    <!-- "My Location" small title-->
    <div class="flex justify-between">
      <p class="text-xs font-satoshi-medium text-gray-700 dark:text-white uppercase mb-2.5">MY LOCATION</p>
      
      <!-- Notification messages for address completeness -->
      <div v-if="localAddressError" class="text-red-500 text-xs mb-2 font-bold">{{ localAddressError }}</div>
      <div v-else-if="showGeneralWarning" class="text-red-500 text-xs mb-2">Please complete all address fields correctly.</div>
      <div v-else-if="showStreetWarning" class="text-red-500 text-xs mb-2">Please complete both street and street number.</div>
      <div v-else-if="showPostalWarning" class="text-red-500 text-xs mb-2">Please complete ZIP Code, Town/City, and Country.</div>
    </div>

    <!-- Reset buttons -->
    <div class="flex justify-end space-x-4 mb-2">
      <button @click="resetStreetAddress" class="py-1 px-3 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Reset Street Address</button>
      <button @click="resetPostalAddress" class="py-1 px-3 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Reset Postal Address</button>
    </div>
    
    <!-- Third container for Postal Code selection -->
    <div class="third-container flex justify-between items-center mb-4 p-2.5">
      <!-- Heading -->
      <h6 class="text-base font-bold dark:text-white ml-2">ZIP Code</h6>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
          </svg>
        </div>
        <input 
          type="text" 
          id="zip-input" 
          aria-describedby="helper-text-explanation" 
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          :class="{'border-red-500': errorFields.includes('postalCode')}" 
          :placeholder="zipPlaceholder" 
          v-model="zipCode" 
          @input="validatePostalAddress" 
          pattern="^\d{5}(-\d{4})?$" 
          required 
        />
      </div>
    </div>
    
    <!-- Third container for Street -->
    <div class="third-container flex justify-between items-center mb-4 p-2.5">
      <!-- Heading -->
      <h6 class="text-base font-bold dark:text-white ml-2">Street</h6>
      <input 
        type="text" 
        id="street" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        :class="{'border-red-500': errorFields.includes('street')}" 
        :placeholder="streetPlaceholder" 
        v-model="streetName" 
        @input="validateStreetAddress" 
        required 
      />
    </div>
    
    <!-- Third container for Street Number -->
    <div class="third-container flex justify-between items-center mb-4 p-2.5">
      <!-- Heading -->
      <h6 class="text-base font-bold dark:text-white ml-2">Street Number</h6>
      <input 
        type="text" 
        id="street-number" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        :class="{'border-red-500': errorFields.includes('streetNumber')}" 
        :placeholder="streetNumberPlaceholder" 
        v-model="streetNumber" 
        @input="validateStreetAddress" 
        required 
      />
    </div>
    
    <!-- Third container for Country selection -->
    <div class="third-container flex justify-between items-center mb-4 p-2.5">
      <!-- Heading -->
      <h6 class="text-base font-bold dark:text-white ml-2">Country</h6>
      <!-- Select country dropdown -->
      <div class="relative w-fit">
        <button 
          @click="toggleDropdown" 
          id="states-button" 
          class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          :class="{'border-red-500': errorFields.includes('country')}"
        >
          <img v-if="selectedCountry.flag" :src="selectedCountry.flag" class="h-3.5 w-3.5 rounded-full me-2" alt="" />
          {{ selectedCountry.name }}
          <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        <div v-if="isDropdownOpen" class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
            <li v-for="country in countries" :key="country.name">
              <button @click="selectCountry(country)" type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <div class="inline-flex items-center">
                  <img :src="country.flag" class="h-3.5 w-3.5 rounded-full me-2" alt="" />
                  {{ country.name }}
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Third container for Town/City selection -->
    <div class="third-container flex justify-between items-center mb-4 p-2.5">
      <!-- Heading -->
      <h6 class="text-base font-bold dark:text-white ml-2">Town/City</h6>
      <input 
        type="text" 
        id="town-city" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        :class="{'border-red-500': errorFields.includes('locality')}" 
        :placeholder="townCityPlaceholder" 
        v-model="locality" 
        @input="validatePostalAddress" 
        required 
      />
    </div>
    
    <!-- Third container for "Show City" -->
    <div class="third-container flex justify-between items-center mb-4 p-2.5">
      <!-- Heading -->
      <h6 class="text-base font-bold dark:text-white ml-2">Show city</h6>
      <!-- Toggle switch -->
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only peer" v-model="showCity">
        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </div>

    <!-- Third container for "Deliver By Hand" -->
<div class="third-container flex justify-between items-center mb-4 p-2.5">
  <!-- Heading -->
  <h6 class="text-base font-bold dark:text-white ml-2">Deliver by hand</h6>
  <!-- Toggle switch -->
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" class="sr-only peer" v-model="deliverByHand">
    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  </label>
</div>

  </div>
  
  <!-- Container for holding the defaultLanguage -->
  <div class="border border-gray-200 rounded-lg p-4 space-y-6 ">
    <div class="secondary-container flex mb-4 justify-between">
      <!-- Heading -->
      <h6 class="text-base font-bold dark:text-white mr-4 min-w-fit">Language</h6>
      
      <select id="default-lang" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="defaultLanguage">
        <option value="EN">English (English)</option>
        <option value="PT-EU">Portugal (Português)</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

import { useUserStore } from '~/composables/stores/user';
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';


// Define props
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  addressError: {
    type: String,
    default: ''
  },
  errorFields: {
    type: Array,
    default: () => []
  }
});

const localAddressError = ref('');

// Watch for addressError prop changes and clear after 5 seconds
watch(() => props.addressError, (newError) => {
  localAddressError.value = newError;
  if (newError) {
    setTimeout(() => {
      localAddressError.value = '';  // Reset the error message after 5 seconds
      props.errorFields.length = 0; // Clear error fields
    }, 5000);
  }
});


const config = useRuntimeConfig();
const sasUrl = ref(config.public.sasurl);


// Initialize the user store
const userStore = useUserStore();
const userId = ref(userStore.userId);

/* // Handle file input change
const handleFileChange = async (event) => {
  const file = event.target.files[0];
  if (file) {
    try {
      const blobServiceClient = new BlobServiceClient(sasUrl.value);
      const containerClient = blobServiceClient.getContainerClient('profile-images');
      const blobName = `${userId.value}/${file.name}`;
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

      await blockBlobClient.uploadBrowserData(file);
      profileImage.value = blockBlobClient.url;

      // Update the user's profile image URL in the backend
       await updateUserProfileImage(blockBlobClient.url);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }
}; */

// Extract data from props
const profileImage = ref(props.data.profileImage);
const aboutYou = ref(props.data.about || '');
const zipCode = ref(props.data.address.postalCode || '');
const streetName = ref(props.data.address.streetName || '');
const streetNumber = ref(props.data.address.streetNumber || '');
const locality = ref(props.data.address.locality || '');
const showCity = ref(props.data.showCity || false);
const deliverByHand = ref(props.data.deliverByHand || false); 
const defaultLanguage = ref(props.data.defaultLanguage || 'EN');

const selectedFile = ref(null);

const handleFileChange = async (event) => {
  const file = event.target.files[0];
  if (file) {
    // Create URL for the selected file
    const url = URL.createObjectURL(file);

    profileImage.value = url;
    selectedFile.value = file;
  }
};



// Determine initial selected country based on props
const countries = ref([
  { name: 'United Kingdom', flag: '/icons/countries/gb.svg' },
  { name: 'Portugal', flag: '/icons/countries/pt.svg' },
  { name: 'Spain', flag: '/icons/countries/es.svg' },
  { name: 'France', flag: '/icons/countries/fr.svg' }
]);

const selectedCountry = ref(props.data.address.country 
  ? countries.value.find(country => country.name === props.data.address.country) 
  : { name: 'Select Country', flag: '' });

// Placeholder texts
const aboutPlaceholder = 'Tell us something about yourself...';
const zipPlaceholder = 'Enter your ZIP Code';
const streetPlaceholder = 'Enter your Street Address';
const streetNumberPlaceholder = 'Enter your Street Number, Apt, Etc';
const townCityPlaceholder = 'Enter your Town/City';

// State for the country dropdown
const isDropdownOpen = ref(false);

// Show address warnings
const showStreetWarning = ref(false);
const showPostalWarning = ref(false);
const showGeneralWarning = ref(false);

// Function to toggle the dropdown
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Function to select a country
const selectCountry = (country) => {
  selectedCountry.value = country;
  isDropdownOpen.value = false;
  validatePostalAddress();
};

// Function to reset street address fields
const resetStreetAddress = () => {
  streetName.value = '';
  streetNumber.value = '';
  validateStreetAddress();
};

// Function to reset postal address fields
const resetPostalAddress = () => {
  zipCode.value = '';
  locality.value = '';
  selectedCountry.value = { name: 'Select Country', flag: '' };
  validatePostalAddress();
};

// Validate street-related fields
const validateStreetAddress = () => {
  const streetFields = [streetName.value, streetNumber.value];
  const allFieldsFilled = streetFields.every(field => field !== null && field !== '');
  const allFieldsEmpty = streetFields.every(field => field === null || field === '');
  
  showStreetWarning.value = !allFieldsFilled && !allFieldsEmpty;
  validateGeneralWarning();
};

// Validate postal-related fields
const validatePostalAddress = () => {
  const postalFields = [zipCode.value, locality.value, selectedCountry.value.name];
  const allFieldsFilled = postalFields.every(field => field !== null && field !== '' && field !== 'Select Country');
  const allFieldsEmpty = postalFields.every(field => field === null || field === '' || field === 'Select Country');
  
  showPostalWarning.value = !allFieldsFilled && !allFieldsEmpty;
  validateGeneralWarning();
};

// Validate general address completeness
const validateGeneralWarning = () => {
  showGeneralWarning.value = (showStreetWarning.value && showPostalWarning.value);
};

// Define expose to expose functions and variables
defineExpose({
  profileImage,
  aboutYou,
  zipCode,
  streetName,
  streetNumber,
  locality,
  showCity,
  deliverByHand, 
  defaultLanguage,
  selectedCountry,
  selectedFile
});

const updateUserProfileImage = async (url) => {
  try {
    await $api.put('/users/me/settings?type=profile', {
      profileImage: url
    });
    console.log('Profile image updated successfully.');
  } catch (error) {
    console.error('Error updating profile image:', error);
  }
};
</script>

<style scoped>
.border-red-500 {
  border-color: #f56565 !important;
}
</style>
