<template>
  <div class="flex flex-col space-y-4">
    <!-- Main container -->
    <div class="main-container space-y-6 h-fit p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <slot></slot>
    </div>
    <!-- Secondary container -->
    <div v-if="$slots.secondary" class="secondary-container space-y-6 h-fit p-6 pb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <slot name="secondary"></slot>
    </div>
    <div class="bottom-wrapper flex w-full justify-between">
      <!-- Message element -->
       <div class="w-8/12 flex">
        <transition name="fade">
          <p v-if="message.text" v-html="message.text" :class="message.isSuccess ? 'text-green-500' : 'text-red-500'" class="text-xs font-bold"></p>
        </transition>
       </div>

      <!-- Update Profile/Reset Password button -->
      <div v-if="showUpdateButton" class="flex justify-end">
        <button type="button" @click="handleClick" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          {{ updateButtonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  message: {
    type: Object,
    default: () => ({ text: '', isSuccess: true })
  }
});

const emit = defineEmits(['update-profile', 'reset-password']);
const route = useRoute();

const showUpdateButton = computed(() => {
  return !['/users/me/favorite-genres', '/users/me/favorite-authors'].includes(route.path);
});

const updateButtonText = computed(() => {
  if (route.path === '/reset-password') {
    return 'Reset Password';
  }
  return route.query.type === 'security' ? 'Update Password' : 'Update Profile';
});

const handleClick = () => {
  if (route.path === '/reset-password') {
    emit('reset-password');
  } else {
    emit('update-profile');
  }
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
