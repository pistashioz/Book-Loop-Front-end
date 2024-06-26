<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <Container :message="message" @update-profile="updateProfile">
        <template v-if="queryType === 'profile'">
          <ProfileDetails ref="profileDetailsRef" :data="data" :addressError="addressError" :errorFields="errorFields" />
        </template>

        <template v-else-if="queryType === 'account'">
          <AccountSettings ref="accountSettingsRef" :data="data" :errorFields="errorFields" @display-message="displayMessage" />
        </template>

        <template v-else-if="queryType === 'notifications'">
          <NotificationsSettings ref="notificationsSettingsRef" :data="data" />
        </template>

        <template v-else-if="queryType === 'privacy'">
          <PrivacySettings ref="privacySettingsRef" :data="data" />
        </template>

        <template v-else-if="queryType === 'security'">
          <Security ref="securityRef" @display-message="displayMessage" />
        </template>
      </Container>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserService } from '~/composables/api/userService';
import { useUserStore } from '~/composables/stores/user';

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
const securitySettingsRef = ref(null);

// Message for displaying error/success messages
const message = ref({ text: '', isSuccess: true });

// Function to clear error fields
const clearErrorFields = () => {
    errorFields.value = [];
};

// Extract the URI dynamically from the current route
let currentPath;

// Function to fetch data based on the query parameter
const fetchData = async (type) => {
  currentPath = route.fullPath;
  console.log('Current path:', currentPath);
  loading.value = true;
  try {
    if (route.query.type === 'security') {
      return;
    }
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

// Watch for changes in the route path
watch(
  () => route.path,
  async (newPath) => {
    if (newPath === '/login' || newPath === '/') {
      await router.push(newPath); // Redirect to login if the path changes to login
    } else {
      fetchData(queryType.value); // Fetch data based on the new route path
    }
  },
  { immediate: true }
);

// Fetch initial data
fetchData(queryType.value);

const displayMessage = (msg, isSuccess) => {
  message.value.text = msg;
  message.value.isSuccess = isSuccess;
  if (route.query.type !== 'security') {
    setTimeout(() => {
      message.value.text = '';
      clearErrorFields(); // Clear error fields after timeout
    }, 5000);
  }
};

const userStore = useUserStore();

const updateProfile = async () => {
  let profileUpdateData = {};
  let addressUpdateData = {};
  let shouldUpdateAddress = false;

  if (queryType.value === 'profile' && profileDetailsRef.value) {
    profileUpdateData = new FormData();

    addressError.value = '';
    errorFields.value = [];

    profileUpdateData.append('about', profileDetailsRef.value.aboutYou);
    profileUpdateData.append('showCity', profileDetailsRef.value.showCity);
    profileUpdateData.append('defaultLanguage', profileDetailsRef.value.defaultLanguage);
    profileUpdateData.append('deliverByHand', profileDetailsRef.value.deliverByHand); // Add this line

    if (profileDetailsRef.value.selectedFile) {
      profileUpdateData.append('profilePicture', profileDetailsRef.value.selectedFile); // Append the file
    } else {
      profileUpdateData.append('profilePicture', null);
    }

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
      birthdayDate: accountSettingsRef.value.birthday,
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
  } else if (queryType.value === 'security' && securitySettingsRef.value) {
    const { currentPassword, newPassword, confirmPassword } = securitySettingsRef.value;

    // Ensure the passwords match before sending the update request
    if (newPassword !== confirmPassword) {
      displayMessage('Passwords do not match.', false);
      return;
    }

    profileUpdateData = {
      currentPassword,
      newPassword,
      confirmPassword
    };
}


  try {
    // Update profile data
    console.log('Profile update data:', profileUpdateData);
    const response = await updateUserData(currentPath, profileUpdateData);

    // Update address data if required
    if (shouldUpdateAddress) {
      await updateUserAddress(addressUpdateData);
    }

    if (response.status !== 200) {
      throw response.data;
    }

    // Update the user store with the new profile image
    userStore.updateProfileImage(profileDetailsRef.value.profileImage);

    // Display success message
    displayMessage(response.data.message, true);
  } catch (error) {
    console.error('Failed to update profile:', error);
    if (error.response && error.response.data && error.response.data.message) {
      addressError.value = error.response.data.message;
      errorFields.value = error.response.data.errors ? error.response.data.errors.map(e => e.field) : [];
      console.log(error.response.data.errors)
      const errorMsg = parseErrorMessages(error.response.data);
      displayMessage(errorMsg, false); // Display error message
    } else {
      displayMessage('Failed to update profile', false); // Generic error message
    }
  }
};


// Function to parse error messages
const parseErrorMessages = (errorData) => {
  let messages = [];
  if (errorData.errors) {
    messages = errorData.errors.map(e => typeof e === 'string' ? e : e.message);
  }
  return messages.join('<br>');
};
</script>


<style scoped>
/* Transition for message */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
