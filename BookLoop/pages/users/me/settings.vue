<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <Container :message="message" @update-profile="updateProfile">
        <template v-if="queryType === 'profile'">
          <ProfileDetails ref="profileDetailsRef" :data="data" :addressError="addressError" :errorFields="errorFields" />
        </template>

        <template v-else-if="queryType === 'account'">
          <AccountSettings ref="accountSettingsRef" :data="data" />
        </template>

        <template v-else-if="queryType === 'notifications'">
          <NotificationsSettings ref="notificationsSettingsRef" :data="data" />
        </template>

        <template v-else-if="queryType === 'privacy'">
          <PrivacySettings ref="privacySettingsRef" :data="data" />
        </template>
      </Container>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserService } from '~/composables/api/userService';

definePageMeta({
  layout: 'settings'
});

// Initialize services
const route = useRoute();
const router = useRouter();
const { fetchUserData, updateUserData, updateUserAddress } = useUserService();

// State to hold the data and loading status
const data = ref(null);
const loading = ref(false);
const queryType = ref(route.query.type || 'profile');

// State for address errors and fields
const addressError = ref('');
const errorFields = ref([]);

// Refs for accessing component data
const profileDetailsRef = ref(null);
const accountSettingsRef = ref(null);
const notificationsSettingsRef = ref(null);
const privacySettingsRef = ref(null);

// Message for displaying error/success messages
const message = ref({ text: '', isSuccess: true });

// Function to display messages
const displayMessage = (msg, isSuccess) => {
  message.value.text = msg;
  message.value.isSuccess = isSuccess;
  setTimeout(() => {
    message.value.text = '';
  }, 5000);
};

// Extract the URI dynamically from the current route
let currentPath;

// Function to fetch data based on the query parameter
const fetchData = async (type) => {
  currentPath = route.fullPath;
  loading.value = true;
  try {
    data.value = await fetchUserData(currentPath);
    console.log('Fetched data:', data.value);
  } catch (error) {
    console.error('Failed to fetch data:', error);
  } finally {
    loading.value = false;
  }
};

// Ensure the default query parameter is set if missing
if (!route.query.type) {
  router.replace({ path: route.path, query: { type: 'profile' } });
}

// Watch for changes in the query parameter
watch(
  () => route.query.type,
  (newType) => {
    queryType.value = newType || 'profile'; // Update queryType and handle default
    fetchData(queryType.value); // Fetch data based on the new query parameter
  },
  { immediate: true } // Fetch data immediately on component mount
);

// Fetch initial data
fetchData(queryType.value);

// Function to handle profile update
const updateProfile = async () => {
  let profileUpdateData = {};
  let addressUpdateData = {};
  let shouldUpdateAddress = false;

  if (queryType.value === 'profile' && profileDetailsRef.value) {
    addressError.value = '';
    errorFields.value = [];

    profileUpdateData = {
      profileImage: profileDetailsRef.value.profileImage,
      about: profileDetailsRef.value.aboutYou,
      showCity: profileDetailsRef.value.showCity,
      defaultLanguage: profileDetailsRef.value.defaultLanguage,
    };

    const { zipCode, streetName, streetNumber, locality, selectedCountry } = profileDetailsRef.value;
    const country = selectedCountry.name !== 'Select Country' ? selectedCountry.name : undefined;
    if ((zipCode || locality || country)) {
      addressUpdateData = {
        postalCode: zipCode || undefined,
        locality: locality || undefined,
        country: country || undefined,
      };
    }

    if ((streetName || streetNumber) || (streetName === '' && streetNumber === '')) {
      addressUpdateData = {
        ...addressUpdateData,
        street: streetName || undefined,
        streetNumber: streetNumber || undefined,
      };
    }

    shouldUpdateAddress = Object.keys(addressUpdateData).length > 0;
  } else if (queryType.value === 'account' && accountSettingsRef.value) {
    profileUpdateData = {
      username: accountSettingsRef.value.username,
      email: accountSettingsRef.value.email,
      name: accountSettingsRef.value.name,
      birthday: accountSettingsRef.value.birthday,
      holidayMode: accountSettingsRef.value.holidayMode,
    };
  } else if (queryType.value === 'notifications' && notificationsSettingsRef.value) {
    profileUpdateData = {
      notifications: notificationsSettingsRef.value.getFlattenedData()
    };
  } else if (queryType.value === 'privacy' && privacySettingsRef.value) {
    profileUpdateData = {
      privacy: privacySettingsRef.value.getFlattenedData()
    };
  }

  try {
    // Update profile data
    await updateUserData(currentPath, profileUpdateData);

    // Update address data if required
    if (shouldUpdateAddress) {
      await updateUserAddress(addressUpdateData);
    }

    // Display success message
    displayMessage('Profile updated successfully', true);
  } catch (error) {
    console.error('Failed to update profile:', error);
    if (error.response && error.response.data && error.response.data.message) {
      addressError.value = error.response.data.message;
      errorFields.value = error.response.data.missingFields || [];
      displayMessage(error.response.data.message, false); // Display error message
    } else {
      displayMessage('Failed to update profile', false); // Generic error message
    }
  }
};
</script>
