<template>
  <Container :message="message" @reset-password="resetPassword">
    <div v-if="tokenValid" class="secondary-container flex flex-col gap-y-4">
      <div class="description-container space-y-2">
        <h6 class="text-base font-bold dark:text-white">To create a secure password:</h6>
        <ul class="max-w-md space-y-1 font-satoshi-medium text-sm text-gray-500 list-inside dark:text-gray-400">
          <li class="flex items-center">
            <svg :class="isLengthValid ? 'w-3 h-3 me-2 text-green-500 dark:text-green-400 flex-shrink-0' : 'w-3 h-3 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            At least 8 characters
          </li>
          <li class="flex items-center">
            <svg :class="hasLowercase ? 'w-3 h-3 me-2 text-green-500 dark:text-green-400 flex-shrink-0' : 'w-3 h-3 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            At least one lowercase character
          </li>
          <li class="flex items-center">
            <svg :class="hasUppercase ? 'w-3 h-3 me-2 text-green-500 dark:text-green-400 flex-shrink-0' : 'w-3 h-3 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            At least one uppercase character
          </li>
          <li class="flex items-center">
            <svg :class="hasNumber ? 'w-3 h-3 me-2 text-green-500 dark:text-green-400 flex-shrink-0' : 'w-3 h-3 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            At least one number
          </li>
          <li class="flex items-center">
            <svg :class="hasSpecialChar ? 'w-3 h-3 me-2 text-green-500 dark:text-green-400 flex-shrink-0' : 'w-3 h-3 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            At least one special character, e.g., ! @ # ?
          </li>
        </ul>
      </div>

      <div class="flex justify-between gap-x-4 mt-1 relative">
        <input :type="showNewPassword ? 'text' : 'password'" v-model="newPassword" :class="passwordInputClass" placeholder="New Password" @input="checkPasswordMatch">
        <button type="button" @click="toggleShowNewPassword" class="absolute right-0 p-2">
          <svg v-if="showNewPassword" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
          <svg v-else class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
            <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
        </button>
      </div>

      <div class="flex justify-between gap-x-4 mt-1 relative">
        <input :type="showConfirmPassword ? 'text' : 'password'" v-model="confirmPassword" :class="passwordInputClass" placeholder="Re-enter your new Password" @input="checkPasswordMatch">
        <button type="button" @click="toggleShowConfirmPassword" class="absolute right-0 p-2">
          <svg v-if="showConfirmPassword" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
          <svg v-else class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
            <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
        </button>
      </div>
    </div>
  </Container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const { $api } = useNuxtApp();

definePageMeta({
  layout: 'settings'
});

const route = useRoute();
const router = useRouter();
const newPassword = ref('');
const confirmPassword = ref('');
const showNewPassword = ref(false);
const showConfirmPassword = ref(false);
const message = ref({ text: '', isSuccess: true });
const tokenValid = ref(false);

// Password requirement validations
const isLengthValid = computed(() => newPassword.value.length >= 8);
const hasLowercase = computed(() => /[a-z]/.test(newPassword.value));
const hasUppercase = computed(() => /[A-Z]/.test(newPassword.value));
const hasNumber = computed(() => /\d/.test(newPassword.value));
const hasSpecialChar = computed(() => /[@$!%*?&]/.test(newPassword.value));

const passwordInputClass = computed(() => {
  if (!newPassword.value && !confirmPassword.value) {
    return 'bg-gray-50 text-gray-900 block flex-1 text-sm border-t-0 border-x-0 border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white';
  } else if (newPassword.value === confirmPassword.value) {
    return 'bg-gray-50 text-gray-900 block flex-1 text-sm border-t-0 border-x-0 border-green-500 focus:ring-green-500 focus:border-green-500 p-2.5 dark:bg-gray-700 dark:border-green-500 dark:placeholder-gray-400 dark:text-white';
  } else {
    return 'bg-gray-50 text-gray-900 block flex-1 text-sm border-t-0 border-x-0 border-red-500 focus:ring-red-500 focus:border-red-500 p-2.5 dark:bg-gray-700 dark:border-red-500 dark:placeholder-gray-400 dark:text-white';
  }
});

const checkPasswordMatch = () => {
  if (newPassword.value && confirmPassword.value) {
    if (newPassword.value === confirmPassword.value) {
      message.value = { text: 'Passwords match', isSuccess: true };
    } else {
      message.value = { text: 'Passwords do not match', isSuccess: false };
    }
  } else {
    message.value = { text: '', isSuccess: true };
  }
};

const toggleShowNewPassword = () => {
  showNewPassword.value = !showNewPassword.value;
};

const toggleShowConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

const resetPassword = async () => {
  if (newPassword.value !== confirmPassword.value) {
    message.value = { text: 'Passwords do not match', isSuccess: false };
    return;
  }

  try {
    const token = route.query.token;
    const response = await $api.post('/users/reset-password', { token, newPassword: newPassword.value });
    message.value = { text: 'Password reset successfully. You can now log in with your new password.', isSuccess: true };
    setTimeout(() => {
      router.push('/login');
    }, 3000);
  } catch (err) {
    message.value = { text: 'Failed to reset password. Please try again.', isSuccess: false };
  }
};

onMounted(async () => {
  const token = route.query.token;
  if (!token) {
    router.push('/error'); // Redirect to an error page or another appropriate page
    return;
  }

  try {
    const response = await $api.post('/users/validate-reset-token', { token });
    tokenValid.value = response.data.valid;
    if (!tokenValid.value) {
      router.push('/error'); // Redirect to an error page or another appropriate page
    }
  } catch (err) {
    router.push('/error'); // Redirect to an error page or another appropriate page
  }
});
</script>

<style scoped>
/* Additional styling can be added here */
</style>
