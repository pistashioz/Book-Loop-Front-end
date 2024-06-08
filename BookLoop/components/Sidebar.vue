<template>
  <aside class="min-w-fit h-fit">
    <h1 class="font-cabinet-grotesk text-2xl mb-4">{{ headerTitle }}</h1>
    <div class="overflow-y-auto bg-gray-50 dark:bg-gray-900 border rounded-lg border-gray-200 dark:border-gray-700 p-4">
      <ul class="space-y-2 font-medium">
        <li v-for="(item, index) in currentMenuItems" :key="index">
          <NuxtLink
            :to="item.path"
            @mouseover="hoverItem(index)"
            @mouseleave="hoverItem(null)"
            :class="[
              'flex items-center p-2 rounded-lg group transition-all',
              selectedItem === index ? 'text-gray-900 dark:text-white' : '',
              hoveredItem === index ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'
            ]"
          >
            <svg
              :class="[
                'w-6 h-6',
                selectedItem === index ? 'text-gray-900 dark:text-white' : '',
                hoveredItem === index ? 'text-gray-900 dark:text-white' : 'text-gray-300'
              ]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              v-html="item.icon"
            ></svg>
            <span class="ml-3">{{ item.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

// Define menu items for settings page
const settingsMenuItems = [
  { label: 'Profile Details', path: '/users/me/settings?type=profile', icon: `<path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clip-rule="evenodd"/>` },
  { label: 'Account Settings', path: '/users/me/settings?type=account', icon: `<path fill-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>` },
  { label: 'Notifications', path: '/users/me/settings?type=notifications', icon: `<path fill-rule="evenodd" d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z" clip-rule="evenodd"/>` },
  { label: 'Privacy Settings', path: '/users/me/settings?type=privacy', icon: `<path fill-rule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>` }
];

// Define menu items for personalization page
const personalizationMenuItems = [
  { label: 'Favorite Genres', path: '/users/me/favorite-genres', icon: `<path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1Zm-4 6a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1Zm12 6a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Zm-4-2a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-10a1 1 0 0 0-1-1Z" clip-rule="evenodd"/>` },
  { label: 'Favorite Authors', path: '/users/me/favorite-authors', icon: `<path fill-rule="evenodd" d="M12 2a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1Zm-6 5a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1Zm12 1a1 1 0 0 0-1 1v9a1 1 0 1 0 2 0v-9a1 1 0 0 0-1-1Zm-6-3a1 1 0 0 0-1 1v11a1 1 0 1 0 2 0v-11a1 1 0 0 0-1-1Z" clip-rule="evenodd"/>` }
];

// Define menu items for admin page
const adminMenuItems = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: `<path fill-rule="evenodd" d="M3 3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3Zm0 10a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3Zm7-10a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4Zm0 10a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4Zm7-10a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4Zm0 10a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4Z" clip-rule="evenodd"/>` },
  { label: 'Manage Users', path: '/admin/users', icon: `<path fill-rule="evenodd" d="M4 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H5v3a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1ZM4 13a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H5v3a1 1 0 1 1-2 0v-4ZM14 3a1 1 0 0 0-1-1h-3a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0V4ZM13 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-4Z" clip-rule="evenodd"/>` },
  { label: 'Settings', path: '/admin/settings', icon: `<path fill-rule="evenodd" d="M6 3a1 1 0 0 0-1 1v2.17c0 .53.21 1.04.59 1.41L8.41 10l-2.83 2.83c-.38.37-.59.88-.59 1.41V17a1 1 0 0 0 1 1h2.17c.53 0 1.04-.21 1.41-.59L12 15.59l2.83 2.83c.37.38.88.59 1.41.59H19a1 1 0 0 0 1-1v-2.17c0-.53-.21-1.04-.59-1.41L15.59 12l2.83-2.83c.38-.37.59-.88.59-1.41V4a1 1 0 0 0-1-1h-2.17c-.53 0-1.04.21-1.41.59L12 8.41 9.17 5.59C8.8 5.21 8.29 5 7.76 5H5.59L6 3Z" clip-rule="evenodd"/>` }
];

// State to manage selected and hovered items
const selectedItem = ref(0);
const hoveredItem = ref(null);
const route = useRoute();
const router = useRouter();

// Determine the current menu items based on the route
const currentMenuItems = computed(() => {
  if (route.path.includes('settings')) {
    return settingsMenuItems;
  } else if (route.path.includes('favorite-genres') || route.path.includes('favorite-authors')) {
    return personalizationMenuItems;
  } else if (route.path.includes('admin')) {
    return adminMenuItems;
  }
  return [];
});

const headerTitle = computed(() => {
  if (route.path.includes('settings')) {
    return 'USER SETTINGS';
  } else if (route.path.includes('favorite-genres') || route.path.includes('favorite-authors')) {
    return 'PERSONALIZATION';
  } else if (route.path.includes('admin')) {
    return 'ADMIN PANEL';
  } else {
    return 'DASHBOARD';
  }
});

const selectItem = (index) => {
  selectedItem.value = index;
};

const hoverItem = (index) => {
  hoveredItem.value = index;
};

// Watch for route changes to update selected item
watch(
  () => route.path,
  (newPath) => {
    currentMenuItems.value.forEach((item, index) => {
      if (newPath.includes(item.path)) {
        selectedItem.value = index;
      }
    });
  },
  { immediate: true }
);
</script>

<style scoped>
/* Optional: Customize styles further if needed */
</style>
