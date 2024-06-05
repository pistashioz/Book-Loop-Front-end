<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <Container>
        <template v-if="queryType === 'profile'">
          <ProfileDetails :data="data" />
        </template>
        <template v-else-if="queryType === 'account'">
          <AccountSettings :data="data" />
        </template>
        <template v-else-if="queryType === 'notifications'">
          <NotificationsSettings :data="data" />
        </template>
        <template v-else-if="queryType === 'privacy'">
          <PrivacySettings :data="data" />
        </template>
      </Container>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useNuxtApp } from '#app';

definePageMeta({
  layout: 'settings'
});

const route = useRoute();
const router = useRouter();
const nuxtApp = useNuxtApp();
const api = nuxtApp.$api;

// State to hold the data and loading status
const data = ref(null);
const loading = ref(false);
const queryType = ref(route.query.type || 'profile');

// Function to fetch data based on the query parameter
const fetchData = async (type) => {
  loading.value = true;
  try {
    // Extract the URI dynamically from the current route
    const currentPath = route.fullPath;
    console.log(`the current path is: ${currentPath}`)
    const response = await api.get(`${currentPath}`);
    data.value = response.data;
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
</script>
