<template>
  <div class="secondary-container flex flex-col gap-y-4">
    <div class="description-container space-y-2">
      <h6 class="text-base font-bold dark:text-white">To create a secure password:</h6>
      <!-- Password requirements list -->
      <ul class="max-w-md space-y-1 font-satoshi-medium text-sm text-gray-500 list-inside dark:text-gray-400">
        <li class="flex items-center">
          <svg :class="isLengthValid ? 'w-3 h-3 me-2 text-green-500 dark:text-green-400 flex-shrink-0' : 'w-3 h-3 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          At least 8 characters
        </li>
        <!-- More list items for password requirements -->
      </ul>
    </div>

    <!-- Input fields for current, new, and confirm passwords -->
    <div class="flex justify-between gap-x-4 mt-1 relative">
      <input :type="showCurrentPassword ? 'text' : 'password'" v-model="currentPassword" class="bg-gray-50 text-gray-900 block flex-1 text-sm border-t-0 border-x-0 border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Current Password">
      <button type="button" @click="toggleShowCurrentPassword" class="absolute right-0 p-2">
        <svg v-if="showCurrentPassword" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        <svg v-else class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
          <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </button>
    </div>

    <div class="flex justify-between gap-x-4 mt-1 relative">
      <input :type="showNewPassword ? 'text' : 'password'" v-model="newPassword" :class="passwordInputClass" placeholder="New Password" @input="checkPasswordMatch">
      <button type="button" @click="toggleShowNewPassword" class="absolute right-0 p-2">
        <svg v-if="showNewPassword" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        <svg v-else class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
          <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </button>
    </div>

    <div class="flex justify-between gap-x-4 mt-1 relative">
      <input :type="showConfirmPassword ? 'text' : 'password'" v-model="confirmPassword" :class="passwordInputClass" placeholder="Re-enter your new Password" @input="checkPasswordMatch">
      <button type="button" @click="toggleShowConfirmPassword" class="absolute right-0 p-2">
        <svg v-if="showConfirmPassword" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        <svg v-else class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
          <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </button>
    </div>
    <div id="password-reset" class="flex justify-between w-full">
      <h6 class="text-sm font-cabinet dark:text-white">Don't remember your password?</h6>
      <button @click="handlePasswordReset" class="w-fit py-0.5 px-2 text-[10px] font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        Password Reset
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import { useUserService } from '~/composables/api/userService';

const currentPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const showCurrentPassword = ref(false);
const showNewPassword = ref(false);
const showConfirmPassword = ref(false);
const message = ref({ text: '', isSuccess: true });
const emit = defineEmits(['display-message']);
const router = useRouter();
const { requestPasswordReset } = useUserService();

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
  emit('display-message', message.value.text, message.value.isSuccess);
};

const toggleShowCurrentPassword = () => {
  showCurrentPassword.value = !showCurrentPassword.value;
};

const toggleShowNewPassword = () => {
  showNewPassword.value = !showNewPassword.value;
};

const toggleShowConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

const handlePasswordReset = async () => {
  try {
    const response = await requestPasswordReset();
    if (response.status === 200) {
      emit('display-message', 'Password reset email sent successfully.', true);
    } else {
      emit('display-message', 'Failed to send password reset email.', false);
    }
  } catch (error) {
    emit('display-message', 'An error occurred while sending the password reset email.', false);
  }
};

defineExpose({
  currentPassword,
  newPassword,
  confirmPassword,
});
</script>

<style scoped>
/* Additional styling can be added here */
</style>
