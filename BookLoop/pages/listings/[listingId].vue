<template>
    <div class="flex flex-col h-screen mb-8">
      <ListingContainer :listing="listing" v-if="!loading" />
      <div v-else>Loading...</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useListingService } from '~/composables/api/listingService';
  import ListingContainer from '~/components/ListingContainer.vue'; // Import the component
  
  const route = useRoute();
  const { findListingById } = useListingService();
  
  const listing = ref(null);
  const loading = ref(true); // Add a loading state
  
  onMounted(async () => {
      const listingId = route.params.listingId;
      try {
          const response = await findListingById(listingId);
          listing.value = response.listing;
      } catch (error) {
          console.error('Error fetching listing:', error);
      } finally {
          loading.value = false; // Set loading to false when done
      }
  });
  </script>
  
  <style scoped>
  /* Adicione estilos conforme necessário */
  </style>
  