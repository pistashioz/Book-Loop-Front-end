<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <Container>
        <template v-if="queryType === 'dashboard'">
          <AdminDashboard :data="data" />
        </template>
        <template v-else-if="queryType === 'users'">
          <AdminUsers :data="data" />
        </template>
        <!-- Add more sections as needed -->
      </Container>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useNuxtApp } from '#app';

definePageMeta({
  layout: 'settings'  // Assuming you use the same layout as settings
});

const route = useRoute();
const router = useRouter();
const nuxtApp = useNuxtApp();
const api = nuxtApp.$api;

// State to hold the data and loading status
const data = ref(null);
const loading = ref(false);
const queryType = ref(route.query.type || 'dashboard');

// Function to fetch data based on the query parameter
const fetchData = async (type) => {
  loading.value = true;
  try {
    // Extract the URI dynamically from the current route
    const currentPath = route.fullPath;
    const response = await api.get(`/admin?type=${type}`);
    data.value = response.data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
  } finally {
    loading.value = false;
  }
};

// Ensure the default query parameter is set if missing
if (!route.query.type) {
  router.replace({ path: route.path, query: { type: 'dashboard' } });
}

// Watch for changes in the query parameter
watch(
  () => route.query.type,
  (newType) => {
    queryType.value = newType || 'dashboard'; // Update queryType and handle default
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
</script>
