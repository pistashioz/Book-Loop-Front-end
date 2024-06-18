<template>
    <div v-if="listing">
        <h1>{{ listing.listingTitle }}</h1>
        <p>{{ listing.listingDescription }}</p>
        <p>Price: {{ listing.price }}</p>
        <p>Condition: {{ listing.listingCondition }}</p>
        <p>Availability: {{ listing.availability }}</p>
        <p>Seller: {{ listing.seller.username }}</p>
        <img v-if="listing.seller.profileImage" :src="listing.seller.profileImage" alt="Seller profile image" />
        <p>Book Title: {{ listing.book.title }}</p>
        <p>Authors: {{ listing.book.authors }}</p>
        <p>Genres: {{ listing.book.genres }}</p>
        <!-- Adicione mais detalhes conforme necessário -->
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useListingService } from '~/composables/api/listingService';

const route = useRoute();
const { findListingById } = useListingService();

const listing = ref(null);

onMounted(async () => {
    const listingId = route.params.listingId;
    try {
        const response = await findListingById(listingId);
        listing.value = response.listing;
    } catch (error) {
        console.error('Error fetching listing:', error);
    }
});
</script>

<style scoped>
/* Adicione estilos conforme necessário */
</style>
