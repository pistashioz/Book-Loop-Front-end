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
                <label for="series" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Series</label>
                <input v-model="series" type="text" name="series" id="series" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Series" required>
              </div>
              <div>
                <label for="seriesOrder" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Series Order</label>
                <input v-model.number="seriesOrder" type="number" name="seriesOrder" id="seriesOrder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Series Order" required>
              </div>
              <div>
                <label for="author" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Authors</label>
                <input v-model="author" type="number" @keydown.enter.prevent="addAuthor" name="author" id="author" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Author's Name" required>
                <ul>
                  <li v-for="(author, index) in authors" :key="index">{{ author }}</li>
                </ul>
              </div>
              <div>
                <label for="genre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genres</label>
                <input v-model="genre" type="text" @keydown.enter.prevent="addGenre" name="genre" id="genre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Genres" required>
                <ul>
                  <li v-for="(genre, index) in genres" :key="index">{{ genre }}</li>
                </ul>
              </div>
              <div>  
                <label for="editionISBN" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ISBN</label>
                <input v-model="editionISBN" type="text" required name="editionISBN" id="editionISBN" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Add ISBN">
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
                <label for="publishedDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Published Date</label>
                <input v-model="publishedDate" type="date" name="publishedDate" id="publishedDate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Select publication date" required>
              </div>
              <div>  
                <label for="coverImage" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover Image</label>
                <input v-model="coverImage" type="text" name="coverImage" id="coverImage" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Select publication date" required>
              </div>
            </div>
            <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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

<script>
import { ref, onMounted } from 'vue';
import { addWork, fetchWorks } from '~/composables/api/workService';
export default {
  data() {
    return {
      title: '',
      seriesName: '',
      seriesOrder: null,
      authors: [],
      genres: [],
      author: '',
      genre: '',
      ISBN: '',
      synopsis: '',
      editionType: '',
      languageId: '',
      pageNumber: null,
      coverImage: '',
      publicationDate: ''
    }
  },
  methods: {
    addAuthor() {
      if (this.author.trim() !== '') {
        this.authors.push(this.author.trim());
        this.author = '';
      }
    },
    addGenre() {
      if (this.genre.trim() !== '') {
        this.genres.push(this.genre.trim());
        this.genre = '';
      }
    },
    async submitForm() {
      try {
        const response = await this.$axios.post('/api/works', {
          title: this.title,
          series: { name: this.seriesName },
          seriesOrder: this.seriesOrder,
          authors: this.authors,
          genres: this.genres,
          edition: {
            ISBN: this.ISBN,
            synopsis: this.synopsis,
            editionType: this.editionType,
            languageId: this.languageId,
            pageNumber: this.pageNumber,
            coverImage: this.coverImage,
            publicationDate: this.publicationDate
          }
        });
        console.log(response.data);
        // Handle success
      } catch (error) {
        console.error('Error:', error.response.data);
        // Handle error
      }
    }
  }
}
const works = ref([]);
const showModal = ref(false);

onMounted(async () => {
  try {
    works.value = await fetchWorks();
  } catch (error) {
    console.error('Error fetching works:', error);
  }
});

const newWork = async () => {
  try {
    const workData = {
      originalTitle: originalName.value,
      firstPublishedDate: publishedDate.value,
    };

    const response = await addWork(workData);

    if (response) {
      originalName.value = '';
      publishedDate.value = '';
      showModal.value = false;
    } else {
      console.error('Failed to add work');
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error);
  }
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style>
.modal-overlay {
  z-index: 50;
}
</style>
