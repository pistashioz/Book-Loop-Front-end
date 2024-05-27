<template>
    <div>  
        <div id="crud-modal" tabindex="-1" aria-hidden="true" class="modal-overlay fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
        <div class="relative p-2 w-full max-w-2xl max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Add Edition
              </h3>
              <button @click="$emit('close-modal')" type="button" class="close text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            <form @submit.prevent="newWork" class="p-4 md:p-5">
              <div class="grid gap-4 mb-4 grid-cols-3">
                <div class="col-span-2 sm:col-span-1">
                    <label for="isbn" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" required>ISBN</label>
                  <input v-model="isbn" type="text" name="isbn" id="isbn" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type ISBN" required="">
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input v-model="titleEdition" type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Title" required="">
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="publicationDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Publication Date</label>
                        <input v-model="publicationDate" type="date" name="publicationDate" id="publicationDate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Title" required="">
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="editionType" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edition Type</label>
                        <select id="editionType" v-model="editionType" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">Select</option>
                            <option value="Hardcover">Hardcover</option>
                            <option value="Paperback">Paperback</option>
                            <option value="Ebook">Ebook</option>
                        </select>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="language" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
                        <input v-model="language" type="text" name="language" id="language" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Add Language" required="">
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="pageNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Page Number</label>
                        <input v-model="pageNumber" type="number" name="pageNumber" id="pageNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Add Page Number" required="">
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Cover Image</label>
                        <input v-model="coverImage" type="url" name="file_input" id="file_input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Add Image URL" required="">
                    </div>
                <div class="col-span-3 sm:col-span-6">
                  <label for="synopsis" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Synopsis</label>
                  <textarea id="synopsis" v-model = 'synopsis' rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>           
                </div>
              </div>
              <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="newEdition">
                <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
                </svg>
                Add edition
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
 <script setup>
import { ref } from 'vue';
import { addEdition } from '~/composables/api/workService'; 
const isbn = ref('');
const titleEdition = ref('');
const editionType = ref('');
const language = ref('');
const pageNumber = ref('');
const synopsis = ref('');

const publicationDate = ref('')
const props = defineProps({
  workId: [Number], 
});

const coverImage = ref('');
console.log('cover image',coverImage.value)
console.log(editionType.value)

const newEdition = async () => {
  try {
    const editionData = {
        ISBN: isbn.value,
        title: titleEdition.value,
        editionType: editionType.value,
        language: language.value,
        publisherId: 1,
        pageNumber: pageNumber.value,
        coverImage: coverImage.value, 
        synopsis: synopsis.value,
        publicationDate: publicationDate.value,
    }
    console.log('edition data: ',editionData)
    const response = await addEdition(props.workId, editionData);

      console.log('yeee', response._rawValue.book)
      const newEditionData = response._rawValue.book
      console.log('new edition dataa',newEditionData)
      // Update reactively using push
      console.log('workkk')
      console.log(work)
      work.value.bookEditions.push(newEditionData);
/*
          isbn.value = '';
          titleEdition.value = '';
          editionType.value = '';
          language.value = '';
          pageNumber.value = '';
          coverImage.value = null;
          synopsis.value = '';
*/

    
}
catch(error){
    throw error
}
}
  </script>
  