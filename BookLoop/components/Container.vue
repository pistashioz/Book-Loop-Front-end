<template>
  <div class="flex flex-col space-y-4">
    <!-- Main container -->
    <div class="main-container space-y-6 h-fit p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <slot></slot>
    </div>
    <!-- Secondary container -->
    <div v-if="$slots.secondary" class="secondary-container space-y-6 h-fit p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <slot name="secondary"></slot>
    </div>
    <!-- Update Profile button -->
    <div v-if="showUpdateButton" class="flex justify-end">
      <button type="button" @click="updateProfile" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Update Profile</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const emit = defineEmits(['update-profile']);
const route = useRoute();

const showUpdateButton = computed(() => {
  return !['/users/me/favorite-genres', '/users/me/favorite-authors'].includes(route.path);
});

const updateProfile = () => {
  emit('update-profile');
};
</script>

<style scoped>
/* .main-container {
  width: 35rem;
}; */
</style>
