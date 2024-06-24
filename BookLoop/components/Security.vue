<template>
  <div class="secondary-container flex flex-col gap-y-4">
    <div class="description-container">
      <h6 class="text-base font-bold dark:text-white">To create a secure password:</h6>
      <ul class="text-sm text-gray-500 dark:text-gray-400 list space-y-2">
        <li>
          <span>1. When setting up a password, go for something that is not too obvious. It can be a combination of numbers, special characters, capital and lower case letters. The length of the password should be at least 7 characters.</span>
        </li>
        <li>
          <span>2. Don’t use your name or date of birth when setting up a password.</span>
        </li>
        <li>
          <span>3. Memorize your password. Do not keep any record of it, do not tell other people about it. Try to change it regularly.</span>
        </li>
        <li>
          <span>4. Make sure no one can see you entering the password.</span>
        </li>
      </ul>
    </div>

    <div class="flex justify-between gap-x-4 mt-1 relative">
      <input
        :type="showNewPassword ? 'text' : 'password'"
        v-model="newPassword"
        :class="passwordInputClass"
        placeholder="New Password"
        @input="checkPasswordMatch"
      >
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
      <input
        :type="showConfirmPassword ? 'text' : 'password'"
        v-model="confirmPassword"
        :class="passwordInputClass"
        placeholder="Re-enter your new Password"
        @input="checkPasswordMatch"
      >
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
</template>

<script setup>
import { ref, computed, defineEmits } from 'vue';

const newPassword = ref('');
const confirmPassword = ref('');
const showNewPassword = ref(false);
const showConfirmPassword = ref(false);
const message = ref({ text: '', isSuccess: true });
const emit = defineEmits(['display-message']);

const passwordInputClass = computed(() => {
  if (!newPassword.value && !confirmPassword.value) {
    return 'bg-gray-50 text-gray-900 block flex-1 text-sm border-t-0 border-x-0 border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white';
  } else if (newPassword.value === confirmPassword.value) {
    return 'bg-gray-50 text-gray-900 block flex-1 text-sm border-t-0 border-x-0 border-green-500 p-2.5 dark:bg-gray-700 dark:border-green-500 dark:placeholder-gray-400 dark:text-white';
  } else {
    return 'bg-gray-50 text-gray-900 block flex-1 text-sm border-t-0 border-x-0 border-red-500 p-2.5 dark:bg-gray-700 dark:border-red-500 dark:placeholder-gray-400 dark:text-white';
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
  emit('display-message', message.value.text, message.value.isSuccess);
};

const toggleShowNewPassword = () => {
  showNewPassword.value = !showNewPassword.value;
};

const toggleShowConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

defineExpose({
  newPassword,
  confirmPassword,
});
</script>

<style scoped>
/* Additional styling can be added here */
</style>
