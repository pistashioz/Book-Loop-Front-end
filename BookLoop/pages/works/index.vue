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
        
<div class="flex gap-8">
  
  <div class="relative">
    <details class="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
      >
        <span class="text-sm font-medium"> Genres </span>

        <span class="transition group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </summary>

      <div class="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
        <div class="w-64 rounded border border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <span class="text-sm text-gray-700"> {{selectedGenres.length}} Selected </span>

            <button type="button" class="text-sm text-gray-900 underline underline-offset-4" @click="selectedGenres = []">
              Reset
            </button>
          </header>

          <ul class="space-y-1 border-t border-gray-200 p-4">
            <li v-for="genre in genresToFilter" :key="genre.id">
              <label class="inline-flex items-center gap-2">
                <input 
                  type="checkbox" 
                  class="size-5 rounded border-gray-300"
                  v-model="selectedGenres"
                  :value="genre.genreName"
                />
                <span class="text-sm font-medium text-gray-700">{{ genre.genreName }}</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </details>
  </div>

  <div class="relative">
    <details class="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
      >
        <span class="text-sm font-medium"> Authors </span>

        <span class="transition group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </summary>

      <div class="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
        <div class="w-64 rounded border border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <span class="text-sm text-gray-700"> {{selectedAuthors.length}} Selected </span>
            <button type="button" class="text-sm text-gray-900 underline underline-offset-4" @click = "selectedAuthors = []">
              Reset
            </button>
          </header>

          <ul class="space-y-1 border-t border-gray-200 p-4">
            <li v-for="author in authorsToFilter" :key="author.id">
              <label class="inline-flex items-center gap-2">
                <input 
                  type="checkbox" 
                  class="size-5 rounded border-gray-300"
                  v-model="selectedAuthors"
                  :value="author.personName"
                />
                <span class="text-sm font-medium text-gray-700">{{ author.personName }}</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </details>
    
  </div>
  <div class="relative">
    <details class="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
      >
        <span class="text-sm font-medium"> Language </span>

        <span class="transition group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </summary>

      <div class="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
        <div class="w-64 rounded border border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <button type="button" class="text-sm text-gray-900 underline underline-offset-4" @click = "selectedLanguage = null">
              Reset
            </button>
          </header>

          <ul class="space-y-1 border-t border-gray-200 p-4">
            <li v-for="language in languageToFilter" :key="language">
              <label class="inline-flex items-center gap-2">
                <input 
                  type="radio" 
                  class="size-5 rounded border-gray-300"
                  v-model="selectedLanguage"
                  :value="language"
                />
                <span class="text-sm font-medium text-gray-700">{{ language }}</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </details>
  </div>
  <div class="relative">
    <div class="relative">
    <details class="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
      >
        <span class="text-sm font-medium"> Rating </span>

        <span class="transition group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </summary>

      <div class="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
        <div class="w-96 rounded border border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <button type="button" class="text-sm text-gray-900 underline underline-offset-4" @click="resetRatings()">
              Reset
            </button>
          </header>

          <div class="border-t border-gray-200 p-4">
            <div class="flex justify-between gap-4">
              <label for="FilterPriceFrom" class="flex items-center gap-2">
                <input
                  type="number"
                  id="FilterRatingFrom"
                  placeholder="Min"
                  v-model= "minRating"
                  class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </label>

              <label for="FilterPriceTo" class="flex items-center gap-2">
                <input
                  type="number"
                  id="FilterRatingTo"
                  placeholder="Max"
                  v-model= "maxRating"
                  class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </details>
  </div>
  </div>
</div>
        
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
      :works = "works"
      @close-modal="showModal = false"
    />
    <div
                        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span class="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 10 of {{total}} Entries
                        </span>
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button 
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                                 @click="prevPage">
                                Prev
                            </button>
                            <button
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                                 @click="nextPage">
                                Next
                            </button>

                        </div>
                        
                    </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from '~/components/SideBar.vue';
import { ref, onMounted } from 'vue';
import { fetchWorks, fetchFilteredGenres } from '~/composables/api/workService';  // fetchAuthorByWorkId~
import {getPersons} from '~/composables/api/adminService'

import WorkCard from '~/components/WorkCard.vue';
import AddWork from '~/components/addWork.vue';
const isLoading = ref(true);
const works = ref([]);
const showModal = ref(false);
const currentPage = ref(null)
const totalPages = ref(0)
const total = ref(0)
const genresToFilter = ref([])
const authorsToFilter = ref([])
const selectedGenres = ref([])
const selectedAuthors = ref([])
const languageToFilter = ['English', 'Dutch (Flemish)', 'Dutch (Netherlands)', 'French', 'German', 'Hungarian', 'Italian', 'Lithuanian', 'Polish', 'Portuguese (Brazil)', 'Portuguese (Portugal)', 'Spanish (Castilian)', 'Spanish (Latin American)', 'Swedish']
const selectedLanguage = ref(null)

const minRating = ref(null)
const maxRating = ref(null)
const openAddWork = () => {
  console.log(showModal.value)
  showModal.value = true;
}

const resetRatings = () => {
      minRating.value = '';
      maxRating.value = '';
    };

const prevPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    const fetchedWorksResponse = await fetchWorks(currentPage.value,  selectedGenres.value, selectedAuthors.value, selectedLanguage.value); 
    
    if (fetchedWorksResponse) {
      works.value = fetchedWorksResponse.works;
    } else {
      console.error('Error fetching data:', fetchedWorksResponse.error);
    }
  }
};
const nextPage = async () => {

if (currentPage.value < totalPages.value) {
  currentPage.value++;
  console.log(currentPage.value)
  const fetchedWorksResponse = await fetchWorks(currentPage.value,  selectedGenres.value, selectedAuthors.value, selectedLanguage.value, minRating.value, maxRating.value); 
  if (fetchedWorksResponse) {
    works.value = fetchedWorksResponse.works;
  } else {
    console.error('Error fetching data:', fetchedWorksResponse.error);
  }
}
};
const fetchWorksData = async () => {
  console.log(selectedGenres.value, selectedAuthors.value)
  console.log('selected language',selectedLanguage.value)
  console.log(selectedLanguage.value)
  const fetchedWorksResponse = await fetchWorks(currentPage.value, selectedGenres.value, selectedAuthors.value, selectedLanguage.value, minRating.value, maxRating.value);
  console.log('Fetched work response: ', fetchedWorksResponse)
  if (fetchedWorksResponse) {
    works.value = fetchedWorksResponse.works;
    total.value = fetchedWorksResponse.totalWorks;
    totalPages.value = fetchedWorksResponse.totalPages;
  } else {
    console.error('Error fetching data:', fetchedWorksResponse.error);
  }
};

const debounce = (fn, delay) => {
  let timeoutID;
  return function (...args) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const searchWorksByFilter = debounce(async () => {
  await fetchWorksData();
}, 2000);

watch([selectedGenres, selectedAuthors, selectedLanguage, minRating, maxRating], searchWorksByFilter);

onMounted(async () => {
  try {
    await fetchWorksData();
    const filteredGenresResponse = await fetchFilteredGenres();
    if (filteredGenresResponse) {
      genresToFilter.value = filteredGenresResponse.filterGenres;
    } else {
      console.error('Error fetching genre data:', filteredGenresResponse.error);
    }
    const authorsResponse = await getPersons('author', 1, 100);
    if (authorsResponse) {
      authorsToFilter.value = authorsResponse.persons;
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
