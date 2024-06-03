<template>
  <div>
    <SideBar/>
    <Navbar/>
    <div class="text-center p-4 sm:ml-64 " v-if="isLoading">
      <div role="status">
        <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-else class="bg-white p-4 sm:ml-64">
      <div class="bg-white">
        
        <div class=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
 
          <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <button @click="openAddWork">
            <div class="group bg-gray-900/10 py-20 px-4 flex flex-col space-y-3 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover">
          <a class="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </a>
          <p  class="text-black/50 group-hover:text-white group-hover:smooth-hover text-center">Add New Work</p>
        </div>
      </button>
            <WorkCard v-for="w in works" :key="w.workId" :work="w" :coverImage="w.coverImage" />
          </div>
        </div>
      </div>
            <AddWork 
      v-if="showModal"
      @close-modal="showModal = false"
    />
    </div>
  </div>
</template>

<script setup>
import SideBar from '~/components/SideBar.vue';
import Navbar from '~/components/NavBar.vue'
import { ref, onMounted } from 'vue';
import { fetchWorks } from '~/composables/api/workService';  // fetchAuthorByWorkId
import WorkCard from '~/components/WorkCard.vue';
import AddWork from '~/components/addWork.vue';
const isLoading = ref(true);
const works = ref([]);
const showModal = ref(false);

const openAddWork = () => {
  console.log(showModal.value)
  showModal.value = true;
}
onMounted(async () => {
  try {
    const fetchedWorksResponse = await fetchWorks();
    const fetchedWorks = fetchedWorksResponse.works; // Extract the works array from the response
    if (fetchedWorks) {
      works.value = fetchedWorks; // Assign fetched works to works variable
      console.log('works value: ',works.value)
    } else {
      console.error('Error fetching data:', fetchedWorks.error);
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error);
  } finally {
    isLoading.value = false;
  }
});

definePageMeta({
  layout: 'works'
});
</script>

<style>
.modal-container {
  z-index: 2; 
}
</style>
