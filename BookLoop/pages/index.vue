<template>
  <div class="flex flex-col items-center space-y-4 h-full overflow-hidden border mb-10">
    <!-- Linha 1 -->
    <div class="w-full border-b border-gray-900 flex flex-col justify-start items-start py-4 flex-1">
      <!-- Conteúdo da Linha 1 -->
      <h1 class="text-6xl font-bold font-cabinet ml-4 mt-4">
        BOOKS
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ml-4 mt-2 w-full">
        <div v-for="edition in editions" :key="edition.UUID" class="flex flex-col items-center">
          <img :src="edition.coverImage" alt="Cover Image" class="w-32 h-48 object-cover mb-2">
          <p class="text-lg">{{ edition.title }}</p>
          <p class="text-sm text-gray-600">{{ edition.publisherName }} - {{ edition.publicationDate }}</p>
        </div>
      </div>
    </div>
    <!-- Linha 2 -->
    <div class="w-full border-b border-gray-900 flex flex-col justify-start items-start py-4 flex-1">
      <!-- Conteúdo da Linha 2 -->
      <h1 class="text-6xl font-bold font-cabinet ml-4 mt-4">
        LISTINGS
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ml-4 mt-2 w-full">
        <div v-for="listing in listings" :key="listing.listingId" class="flex flex-col items-center">
          <img :src="listing.imageUrl" alt="Listing Image" class="w-32 h-48 object-cover mb-2">
          <p class="text-lg">{{ listing.listingTitle }}</p>
          <p class="text-sm text-gray-600">{{ listing.seller.username }} - {{ listing.price }}</p>
        </div>
      </div>
    </div>
    <!-- Linha 3 -->
    <div class="w-full flex flex-col justify-start items-start py-4 flex-1">
      <!-- Conteúdo da Linha 3 -->
      <h1 class="text-6xl font-bold font-cabinet ml-4 mt-4">
        FEED
      </h1>
      <!-- Conteúdo do Feed -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useApiService } from '~/composables/api/apiService';

const { fetchEditions, fetchListings } = useApiService();
const editions = ref([]);
const listings = ref([]);

onMounted(async () => {
  try {
    const editionsData = await fetchEditions();
    const listingsData = await fetchListings();
    editions.value = editionsData.editions;
    listings.value = listingsData.listings;
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
});

definePageMeta({
  layout: 'landing'
});
</script>

<style scoped>
/* Adicione qualquer estilo específico aqui, se necessário */
</style>



<!-- <template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="https://d2w9rnfcy7mm78.cloudfront.net/7943932/original_7cc65dde5bf192012b09556f9780783e.jpg?1594300086?bc=0" alt="Front of men's Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  Discover New Reads
                </a>
              </h3>
              <p class="text-sm font-medium text-gray-900">Some other text</p>
            </div>
            <p class="text-sm font-medium text-gray-900">- Find New Books Online</p>
          </div>
        </div>

        <div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="https://d2w9rnfcy7mm78.cloudfront.net/12385119/original_4a51f22545c5aa6c4204c0403ae78eb6.png?1624904704?bc=0" alt="Front of men's Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  Discover New Reads
                </a>
              </h3>
              <p class="text-sm font-medium text-gray-900">Some other text</p>
            </div>
            <p class="text-sm font-medium text-gray-900">- Find New Books Online</p>
          </div>
        </div>

        <div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="https://d2w9rnfcy7mm78.cloudfront.net/27634058/original_d53b0e49989af4d9628188a39f34248f.jpg?1713447123?bc=0" alt="Front of men's Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  Declutter your home and Get rid of your old books
                </a>
              </h3>
            </div>
          </div>
        </div>

        <div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="https://d2w9rnfcy7mm78.cloudfront.net/27087635/original_5a56d792dae16bede6fb25aad886b547.jpg?1710930248?bc=0" alt="Front of men's Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  Discover New Reads
                </a>
              </h3>
              <p class="text-sm font-medium text-gray-900">Some other text</p>
            </div>
            <p class="text-sm font-medium text-gray-900">- Find New Books Online</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex">
      <div class="w-1/2 h-30 bg-gray-200">
        <img src="https://d2w9rnfcy7mm78.cloudfront.net/22692994/original_4eec30fe3cde3f4b93182155a2d99834.jpg?1689599849?bc=0" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
      </div>
      <div class="w-1/2 flex flex-col justify-between">
        <div class="h-20">
          <img src="https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxNjA3NDg4Ni9vcmlnaW5hbF85Yzk0MTJhYjFmMTE4NTgxM2YzMzdkYWYyZDA1NTNmZC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyMDAsImhlaWdodCI6MTIwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div class="text-top p-1 mx-2">
          <p class="top-0">a curated haven for the discerning reader. We offer a confluence of esteemed second-hand finds and the thrill of discovering new releases, all woven together by a vibrant community of fellow literature enthusiasts.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'flowbite';
import 'flowbite/dist/flowbite.min.css';
</script>

<style scoped>
.h-30 {
  height: 750px;
}
.h-20 {
  height: 600px; /* Smaller height for the right container */
}
</style>
 -->