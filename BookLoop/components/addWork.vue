<template>
  <div>
    <button @click="showModal = true">Add New Work</button>

    <div id="crud-modal" v-show="showModal" tabindex="-1" aria-hidden="true" class="modal-overlay fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
      <div class="relative p-2 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Create New Work
            </h3>
            <button @click="closeModal" type="button" class="close text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <form @submit.prevent="newWork" class="p-4 md:p-5">
            <div class="grid gap-4 mb-4 grid-cols-1 sm:grid-cols-2">
              <div>
                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input v-model="title" type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type original name" required>
              </div>
              <div>
                <label for="seriesName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Series</label>
                <input v-model="seriesName" type="text" name="seriesName" id="seriesName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Series" required>
              </div>
              
              <div>
                <label for="seriesOrder" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Series Order</label>
                <input v-model.number="seriesOrder" type="number" name="seriesOrder" id="seriesOrder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Series Order" required>
              </div>
              <div>
                <label for="author" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Authors</label>
                <input v-model="author" type="text" @keydown.enter.prevent="addAuthor" name="author" id="author" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Author's Name" required>
                <ul>
                  <li v-for="(author, index) in authors" :key="index">{{ author }}</li>
                </ul>
              </div>
              <div>
              <label for="genre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genres</label>
              <MultiSelectDropdown formFieldName = "genres" :options = "genres"  @selectionChanged="handleSelectedGenres" v-model:selectedOptions="selectedOptions" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" aria-placeholder="select genres" />
            </div>
              <div>  
                <label for="ISBN" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ISBN</label>
                <input v-model="ISBN" type="text" required name="ISBN" id="ISBN" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Add ISBN">
              </div>
              <div>  
                <label for="editionType" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edition Type</label>
                <input v-model="editionType" type="text" required name="editionType" id="editionType" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Add Edition Type">
              </div>
              <div>  
                <label for="languageId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language ID</label>
                <input v-model.number="languageId" type="number" required name="languageId" id="languageId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Add Language ID">
              </div>
              <div>  
                <label for="pageNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Page Number</label>
                <input v-model.number="pageNumber" type="number" required name="pageNumber" id="pageNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Page Numbers">
              </div>
              <div>  
                <label for="publicationDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Published Date</label>
                <input v-model="publicationDate" type="date" name="publicationDate" id="publicationDate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Select publication date" required>
              </div>
              <div>  
                <label for="coverImage" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover Image</label>
                <input v-model="coverImage" type="text" name="coverImage" id="coverImage" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Select publication date" required>
              </div>
              <div class="col-span-3 sm:col-span-6">
                <label for="synopsis" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Synopsis</label>
                <textarea id="synopsis" v-model='synopsis' rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>           
              </div>
            </div>
            <button type="submit" @click = 'submitForm' class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
              </svg>
              Add new Work
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MultiSelectDropdown from './MultiSelectDropdown.vue'
import { addWork, fetchWorks, findGenres } from '~/composables/api/workService';
const title = ref('');
const seriesName = ref('');
const seriesOrder = ref(null);
const authors = ref([]);
const genres = ref([]);
const author = ref('');
const genre = ref('');
const ISBN = ref('');
const synopsis = ref('');
const editionType = ref('');
const languageId = ref('');
const pageNumber = ref(null);
const coverImage = ref('');
const publicationDate = ref('');
const showModal = ref(false);
const selectedGenres = ref([]);
const selectedOptions = ref([]);
const props = defineProps({
  formFieldName: String,
    options: Array
});
onMounted(async () => {
  try {
    // Fetcht existing genres
    const genreData = await findGenres();
    if (genreData.success) {
      genres.value = genreData.genres.map(genre => genre.genreName); // Only store genreName
    } else {
      console.error('Error fetching genres:', genreData.error);
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error);
  }
});

const addAuthor = () => {
  console.log(author.value)
  if (author.value.trim() !== '') {
    authors.value.push(author.value.trim());
    author.value = '';
  }
};

const handleSelectedGenres = (selectedGenres) => {
  console.log('selected genres', selectedGenres);
  selectedOptions.value = selectedGenres;
};
const addGenre = () => {
  console.log('holaaaa')
  console.log(genre.value)
  if (genre.value.trim() !== '') {
    genres.value.push(genre.value.trim());
    genre.value = '';
  }
};


const submitForm = async () => {
  try {
    console.log('seleted options ',selectedOptions.value)
    const workData = {
      title: title.value,
      series: { name: seriesName.value },
      seriesOrder: seriesOrder.value,
      authors: [...authors.value],
      genres: [...selectedOptions.value], 
      edition: {
        ISBN: ISBN.value,
        synopsis: synopsis.value,
        editionType: editionType.value,
        languageId: languageId.value,
        pageNumber: pageNumber.value,
        coverImage: coverImage.value,
        publicationDate: publicationDate.value
      }
    };
    console.log('Form Data:', workData);/*
    const response = await addWork(workData);
    console.log('API Response:', response);*/
  
  } catch (error) {
    console.error('Error:', error);
  }
};
</script>

<style>
.modal-overlay {
  z-index: 50;
}
</style>
