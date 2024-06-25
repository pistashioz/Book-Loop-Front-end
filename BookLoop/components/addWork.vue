<template>
  <div>
    <div id="crud-modal" tabindex="-1" aria-hidden="true" class="modal-overlay fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
      <div class="relative p-2 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Create New Work
            </h3>
            <button @click="$emit('close-modal')" type="button" class="close text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <form @submit.prevent="newWork" class="p-4 md:p-5">
            <div class="grid gap-4 mb-4 grid-cols-1 sm:grid-cols-2">
              <!-- Form fields -->
              <div>
                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input v-model="title" type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type original name" required>
              </div>
              <div>
                <label for="seriesName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Series</label>
                <input v-model="seriesName" type="text" name="seriesName" id="seriesName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Series">
              </div>
              <div>
                <label for="seriesOrder" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Series Order</label>
                <input v-model.number="seriesOrder" type="number" name="seriesOrder" id="seriesOrder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Series Order">
              </div>
              <div>
                <label for="author" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Authors</label>
                <select id="author" v-model="author" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option value="" disabled>Select</option>
                  <option v-for="author in authors" :value ="author">{{author}}</option>
                </select>
              </div>
              <div>
                <label for="publisherName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Publisher Name</label>
                <select id="author" v-model="publisher" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option value="" disabled>Select</option>
                  <option v-for="publisher in publishers" :value ="publisher">{{publisher}}</option>
                </select>
              </div>
              <div>
                <label for="genre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genres</label>
                <MultiSelectDropdown formFieldName="genres" :options="genres" @selectionChanged="handleSelectedGenres" v-model:selectedOptions="selectedOptions" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" aria-placeholder="select genres" />
              </div>
              <div>
                <label for="ISBN" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ISBN</label>
                <input v-model="ISBN" type="text" required name="ISBN" id="ISBN" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Add ISBN">
              </div>
              <div>
                <label for="editionType" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edition Type</label>
                <select id="editionType" v-model="editionType" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option value="" disabled>Select</option>
                  <option value="Hardcover">Hardcover</option>
                  <option value="Paperback">Paperback</option>
                  <option value="Ebook">Ebook</option>
                  <option value="Audiobook">Audiobook</option>
                </select>
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
                <input v-model="coverImage" type="text" name="coverImage" id="coverImage" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Add Cover Image URL" required>
              </div>
              <div class="col-span-3 sm:col-span-6">
                <label for="synopsis" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Synopsis</label>
                <textarea id="synopsis" v-model='synopsis' rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>
              </div>
            </div>
            <div v-if="error" class="text-red-500 text-sm mt-2">{{ error }}</div>
            <button type="submit" @click="submitForm" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
              </svg>
              Add new Work
            </button>
            <!-- Error message -->
            <p v-if="errorMessage" class="text-red-600 mt-2">{{ errorMessage }}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MultiSelectDropdown from './MultiSelectDropdown.vue';
import { addWork, fetchWorks, findGenres, fetchWorksNoParams } from '~/composables/api/workService';
import {getAuthors, getPublishers} from '~/composables/api/adminService'
import { defineEmits } from 'vue';

const title = ref('');
const seriesName = ref('');
const seriesOrder = ref(null);
const authors = ref([]);
const genres = ref([]);
const languages = ref([])
const author = ref('');
const publishers = ref([])
const ISBN = ref('');
const synopsis = ref('');
const publisher = ref('')
const editionType = ref('');
const languageId = ref('');
const pageNumber = ref(null);
const coverImage = ref('');
const publicationDate = ref('');
const publisherName = ref('');
const selectedOptions = ref([]);
const existingWorks = ref([]); 
const errorMessage = ref(''); 
const emit = defineEmits(['close-modal']);
console.log(authors.value)
const props = defineProps({
  formFieldName: String,
  options: Array,
  works: Array
});

onMounted(async () => {
  try {
    // Fetch existing works
    const worksData = await fetchWorksNoParams();
    console.log('worksData:', worksData)
    if (worksData.success) {
      existingWorks.value = worksData.works;
      console.log('existingWorks:', existingWorks.value);
    } else {
      console.error('Error fetching works:', worksData.error);
    }

    // Fetch existing genres
    const genreData = await findGenres();
    console.log('genre data:', genreData)
    if (genreData.success) {
      genres.value = genreData.genres.map((genre) => genre.genreName); 
      console.log('genres.value', genres.value);
    } else {
      console.error('Error fetching genres:', genreData.error);
    }
    const authorsData = await getAuthors()
    console.log(authorsData)
    if (authorsData.success){
      console.log('authors data persons', authorsData.persons)
      authors.value = authorsData.persons.map((person) => person.personName); 
      console.log('authors value:', authors.value)
    }
    else {
      console.error('Error fetching authors:', authorsData.error);
    }
    const publishersData = await getPublishers(1)
    console.log('publishers data:',publishersData)
    if (publishersData.success){
      publishers.value  = publishersData.publishers.map((publisher) => publisher.publisherName);
      console.log('publishers value:', publishers.value) 
    }
    else {
      console.error('Error fetching publishers:', publishersData.error)
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error);
  }
});

const addAuthor = () => {
  if (author.value.trim() !== '') {
    authors.value.push(author.value.trim());
    author.value = '';
  }
};

const handleSelectedGenres = (selectedGenres) => {
  selectedOptions.value = selectedGenres;
};

const bookExists = () => {
  return existingWorks.value.some((work) => work.title === title.value || work.ISBN === ISBN.value);
};

const submitForm = async () => {
  try {
    if (bookExists()) {
      errorMessage.value = 'The book with this title or ISBN already exists.';
      return;
    }
    const selectedAuthor = author.value;
    const workData = {
      title: title.value,
      series: { name: seriesName.value },
      seriesOrder: seriesOrder.value,
      authors: [selectedAuthor],
      genres: [...selectedOptions.value],
      edition: {
        ISBN: ISBN.value,
        publisherName: publisher.value,
        synopsis: synopsis.value,
        editionType: editionType.value,
        languageId: languageId.value,
        pageNumber: pageNumber.value,
        coverImage: coverImage.value,
        publicationDate: publicationDate.value,
      },
    };

    console.log('Form Data:', workData);
    const response = await addWork(workData);
    console.log('props:')
    console.log(props.works)
    console.log('response:', response)
    console.log('response works:', response.work)
    if (response){
      emit('close-modal');
      
    }
    console.log('API Response:', response);
  } catch (error) {
    console.error('Error:', error)

    errorMessage.value = error.response.data.message
    console.log(errorMessage.value)
  }
};
</script>

<style>
.modal-overlay {
  z-index: 50;
}
</style>
