<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Sell a Book</h1>
      <form @submit.prevent="submitListing">
        <!-- Photo Upload Container -->
        <div class="mb-4 p-4 border border-gray-300 rounded-md">
          <span class="flex justify-between w-full items-center font-satoshi-medium">
            <label class="block text-xs text-gray-700 dark:text-gray-400">
              Add up to 8 photos. <a href="#" class="text-blue-500">See photo tips.</a>
            </label>
            <p v-if="files.length > 0" class="text-xs text-gray-500 mt-0">
              Click and drag to change the order of your photos.
            </p>
          </span>
          <div class="mt-2 flex justify-center items-center p-2 border border-gray-300 border-dashed rounded-md">
            <div class="space-y-1 text-center w-full">
              <draggable v-model="files" :class="['grid grid-cols-4 gap-4', files.length === 0 ? 'h-44' : '']">
                <div v-for="(file, index) in files" :key="index" class="relative">
                  <img :src="getObjectURL(file.file)" :style="{ transform: 'rotate(' + file.rotateAngle + 'deg)' }" class="object-cover h-40 w-48 rounded-lg draggable" :alt="'Photo ' + (index + 1)">
                  <button @click.prevent="removeFile(index)" class="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                  <button @click="rotateFile(index)" class="absolute bottom-2 right-2 bg-blue-500 text-white rounded-full p-1">
                    <svg class="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2v4.5H9.5l1.68-1.68A4.48 4.48 0 0 0 3.5 8a4.5 4.5 0 0 0 8.72 1.5h1.58a6 6 0 1 1-1.57-5.73L14 2z"/>
                    </svg>
                  </button>
                </div>
                <!-- Empty Cell with Dashed Border -->
              </draggable>
            </div>
          </div>
          <span class="flex justify-between w-full items-center mt-1.5 font-satoshi-medium">
            <p class="text-xs text-gray-500 mt-0">
              PNG or JPG up to 10MB each. <br> Recommended: upload square photos.
            </p>
            <div class="mt-2">
              <input type="file" id="fileUploadBottom" @change="handleFileUpload" multiple class="hidden">
              <label
                v-if="files.length < 8"
                for="fileUploadBottom"
                class="flex h-8 w-fit p-2 text-xs font-medium text-center text-white cursor-pointer border border-gray-300 rounded-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg class="w-4 h-4 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 3a1 1 0 0 1 .78.375l4 5a1 1 0 1 1-1.56 1.25L13 6.85V14a1 1 0 1 1-2 0V6.85L8.78 9.626a1 1 0 1 1-1.56-1.25l4-5A1 1 0 0 1 12 3ZM9 14v-1H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4v1a3 3 0 1 1-6 0Zm8 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd"/>
                </svg>
                <span class="font-satoshi-medium text-xs">Upload Photos</span>
              </label>
            </div>
          </span>
          <p v-if="photoError" class="text-xs text-red-500 mt-1">{{ photoError }}</p>
        </div>
  
        <!-- Title and Description -->
        <div id="title-description" class="mt-4">
          <div class="mb-4 relative">
            <label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-400">Title</label>
            <input
              type="text"
              id="title"
              v-model="title"
              @input="updateTitleCount"
              maxlength="100"
              placeholder="Enter the title of your book"
              :class="[titleClass, 'mt-1 block w-full p-2.5 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white']"
              required
            >
            <span class="absolute bottom-2 right-2 text-xs font-satoshi-medium" :class="titleCountClass">{{ title.length }}/100</span>
            <p v-if="titleError" class="text-xs text-red-500 mt-1">{{ titleError }}</p>
          </div>
          <div class="mb-4 relative">
            <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-400">Description</label>
            <textarea
              id="description"
              v-model="description"
              @input="updateDescriptionCount"
              maxlength="2000"
              placeholder="Describe your book"
              :class="[descriptionClass, 'mt-1 block w-full p-2.5 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white']"
              required
            ></textarea>
            <span class="absolute bottom-2 right-2 text-xs font-satoshi-medium" :class="descriptionCountClass">{{ description.length }}/2000</span>
            <p v-if="descriptionError" class="text-xs text-red-500 mt-1">{{ descriptionError }}</p>
          </div>
        </div>
  
        <!-- ISBN and Author -->
        <div class="mb-4">
          <label for="ISBN" class="block text-sm font-medium text-gray-700 dark:text-gray-400">ISBN</label>
          <input
            type="text"
            id="ISBN"
            v-model="isbn"
            @focus="clearAuthor"
            @blur="validateAndFetchAuthor"
            :class="[isbnClass, 'mt-1 block w-full p-2.5 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white']"
            placeholder="Enter the ISBN of the book"
            required
          >
          <p v-if="isbnError" class="text-xs text-red-500 mt-1">{{ isbnError }}</p>
          <label for="author" class="block text-sm font-medium text-gray-700 dark:text-gray-400">Author</label>
          <input
            type="text"
            id="author"
            v-model="author"
            disabled
            placeholder="Author will be fetched based on ISBN"
            class="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          >
        </div>
  
        <div id="price-condition-wrapper" class="flex flex-col w-full justify-between items-center gap-x-12">
          <!-- Price -->
          <div class="mb-4 flex flex-col items-end w-full justify-between">
            <span class="flex items-center justify-between w-full">
                <label for="price" class="block text-sm font-medium text-gray-700 dark:text-gray-400">Price</label>
          <input
            type="text"
            id="price"
            v-model="price"
            placeholder="Enter the price"
            :class="[priceClass, 'mt-1 block w-28 p-2.5 border h-10 text-sm border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white']"
            required
          >

            </span>

            <p v-if="priceError" class="text-xs text-red-500 mt-1">{{ priceError }}</p>
          </div>
  
          <!-- Condition Dropdown -->
          <div class="mb-4 flex w-full justify-between items-center">
            <label for="condition" class="block text-sm font-medium text-gray-700 dark:text-gray-400">Condition</label>
            <button id="dropdownConditionButton" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{{ selectedConditionText }} <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg></button>
            <div id="dropdownCondition" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                <li v-for="(condition, index) in conditions" :key="condition.value" @click="selectCondition(condition.value)">
                  <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <div class="flex items-center h-5">
                      <input
                        :id="'condition-radio-' + index"
                        name="condition-radio"
                        type="radio"
                        :value="condition.value"
                        v-model="selectedCondition"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      >
                    </div>
                    <div class="ms-2 text-sm">
                      <label :for="'condition-radio-' + index" class="font-medium text-gray-900 dark:text-gray-300">{{ condition.label }}</label>
                      <p class="text-xs font-normal text-gray-500 dark:text-gray-300">{{ condition.helperText }}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <div class="w-full flex items-center justify-between">
          <p v-if="showBottomMes" class="text-xs text-gray-500 mt-0">
            {{ bottomMes }}
          </p>
          <button type="submit" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ml-auto">
            Submit Listing
          </button>
        </div>
      </form>
    </div>
  </template>
  
  
  <script setup>
  import { ref, watch, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { Dropdown } from 'flowbite';
  
  const showBottomMes = ref(false);
  const bottomMes = ref('');
  
  const { $api } = useNuxtApp();
  
  definePageMeta({
    layout: 'submit'
  });
  
  const title = ref('');
  const titleError = ref('');
  const description = ref('');
  const descriptionError = ref('');
  const isbn = ref('');
  const isbnError = ref('');
  const author = ref('');
  const price = ref('');
  const priceError = ref('');
  const selectedCondition = ref('');
  const selectedConditionText = ref('Select Condition');
  const photoError = ref('');
  const conditions = [
    { value: 'New', label: 'New', helperText: 'Brand new book with no signs of wear.' },
    { value: 'Very Good', label: 'Very Good', helperText: 'Very lightly used with minimal signs of wear.' },
    { value: 'Good', label: 'Good', helperText: 'Shows some signs of wear but remains fully functional.' },
    { value: 'Acceptable', label: 'Acceptable', helperText: 'Noticeable wear but still usable and readable.' },
  ];
  const message = ref({ text: '', isSuccess: true });
  const router = useRouter();
  
  const files = ref([]);
  const titleClass = ref('border-gray-300 focus:border-blue-500 focus:ring-blue-500');
  const descriptionClass = ref('border-gray-300 focus:border-blue-500 focus:ring-blue-500');
  const titleCountClass = ref('text-gray-700 dark:text-gray-400');
  const descriptionCountClass = ref('text-gray-700 dark:text-gray-400');
  const isbnClass = ref('border-gray-300 focus:border-blue-500 focus:ring-blue-500');
  const priceClass = ref('border-gray-300 focus:border-blue-500 focus:ring-blue-500');
  
  const updateTitleCount = () => {
    if (title.value.length > 100) {
      title.value = title.value.slice(0, 100);
    }
    if (title.value.length === 100) {
      titleClass.value = 'border-red-500 focus:border-red-500 focus:ring-red-500';
      titleCountClass.value = 'text-red-500';
    } else {
      titleClass.value = 'border-gray-300 focus:border-blue-500 focus:ring-blue-500';
      titleCountClass.value = 'text-gray-700 dark:text-gray-400';
    }
  };
  
  const updateDescriptionCount = () => {
    if (description.value.length > 2000) {
      description.value = description.value.slice(0, 2000);
    }
    if (description.value.length === 2000) {
      descriptionClass.value = 'border-red-500 focus:border-red-500 focus:ring-red-500';
      descriptionCountClass.value = 'text-red-500';
    } else {
      descriptionClass.value = 'border-gray-300 focus:border-blue-500 focus:ring-blue-500';
      descriptionCountClass.value = 'text-gray-700 dark:text-gray-400';
    }
  };
  
  const handleFileUpload = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles.length + files.value.length > 8) {
      alert('You can only upload up to 8 photos.');
      return;
    }
    for (let i = 0; i < selectedFiles.length; i++) {
      if (selectedFiles[i].size > 10485760) {
        alert('Each file must be less than 10MB.');
        continue;
      }
      files.value.push({ file: selectedFiles[i], rotateAngle: 0 });
    }
  };
  
  const removeFile = (index) => {
    files.value.splice(index, 1);
  };
  
  const rotateFile = (index) => {
    files.value[index].rotateAngle = (files.value[index].rotateAngle + 90) % 360;
  };
  
  const getObjectURL = (file) => {
    return URL.createObjectURL(file);
  };
  
  const validateISBN = (isbn) => {
    const regex = /^(97(8|9))?\d{9}(\d|X)$/;
    if (!isbn || regex.test(isbn)) {
      return true;
    }
    return false;
  };
  
  const validateAndFetchAuthor = async () => {
    if (validateISBN(isbn.value)) {
      isbnClass.value = 'border-gray-300 focus:border-blue-500 focus:ring-blue-500';
      isbnError.value = '';
      await fetchAuthor();
    } else {
      isbnClass.value = 'border-red-500 focus:border-red-500 focus:ring-red-500';
      isbnError.value = 'Invalid ISBN format.';
      showBottomMes.value = false; // Hide bottom message if ISBN is invalid
    }
  };
  
  const fetchAuthor = async () => {
    showBottomMes.value = false; // Reset the state initially
    try {
      if (!isbn.value) {
        return;
      }
      const response = await $api.get(`/works/books?isbn=${isbn.value}`);
      if (response.data && response.data.author) {
        author.value = response.data.author;
      } else {
        author.value = 'Author not found';
        showBottomMes.value = true;
        bottomMes.value = 'This ISBN is correct, but we couldn’t find any publishing info.';
      }
    } catch (error) {
      console.error('Failed to fetch author:', error);
      author.value = 'Author not found';
      bottomMes.value = 'This ISBN is correct, but we couldn’t find any publishing info.';
      showBottomMes.value = true;
    }
  };
  
  const clearAuthor = () => {
    author.value = '';
    bottomMes.value = '';
  };
  
  const validateForm = () => {
    let isValid = true;
    if (title.value.length < 3) {
      titleClass.value = 'border-red-500 focus:border-red-500 focus:ring-red-500';
      titleError.value = 'Title must be at least 3 characters long.';
      isValid = false;
    } else {
      titleClass.value = 'border-gray-300 focus:border-blue-500 focus:ring-blue-500';
      titleError.value = '';
    }
    if (description.value.length < 10) {
      descriptionClass.value = 'border-red-500 focus:border-red-500 focus:ring-red-500';
      descriptionError.value = 'Description must be at least 10 characters long.';
      isValid = false;
    } else {
      descriptionClass.value = 'border-gray-300 focus:border-blue-500 focus:ring-blue-500';
      descriptionError.value = '';
    }
    const priceValue = parseFloat(price.value);
    if (isNaN(priceValue) || priceValue < 1 || priceValue > 1000) {
      priceClass.value = 'border-red-500 focus:border-red-500 focus:ring-red-500';
      priceError.value = 'Price must be between 1 and 1000.';
      isValid = false;
    } else {
      priceClass.value = 'border-gray-300 focus:border-blue-500 focus:ring-blue-500';
      priceError.value = '';
    }
    if (files.value.length < 2) {
      photoError.value = 'You must upload at least 2 photos.';
      isValid = false;
    } else {
      photoError.value = '';
    }
    return isValid;
  };
  
  const submitListing = async () => {
    if (!validateForm()) {
      showBottomMes.value = true;
      bottomMes.value = 'Please correct the errors in the form.';
      return;
    }
    
    // Display the bottom message
    showBottomMes.value = true;
    bottomMes.value = 'Your listing has been submitted and is pending approval.';
  
    // Wait for 5 seconds before redirecting
    setTimeout(() => {
      // Logic to submit the form
      // Example: await axios.post('/api/listings', { title, description, isbn, author, price, condition: selectedCondition.value });
      router.push('/listings');
    }, 5000);
  };
  
  const selectCondition = (condition) => {
    selectedCondition.value = condition;
    selectedConditionText.value = conditions.find(c => c.value === condition).label;
    dropdown.hide();
  };
  
  let dropdown;
  
  onMounted(() => {
    const $targetEl = document.getElementById('dropdownCondition');
    const $triggerEl = document.getElementById('dropdownConditionButton');
    const options = {
      placement: 'bottom',
      triggerType: 'click',
    };
    dropdown = new Dropdown($targetEl, $triggerEl, options);
  });
  </script>
  
  
  

<style scoped>
.border-red-500 {
  border-color: #f87171;
}
.text-red-500 {
  color: #f87171;
}
.border-gray-300 {
  border-color: #d1d5db;
}
.focus\:border-red-500:focus {
  border-color: #f87171;
}
.focus\:ring-red-500:focus {
  ring-color: #f87171;
}
.focus\:border-blue-500:focus {
  border-color: #3b82f6;
}
.focus\:ring-blue-500:focus {
  ring-color: #3b82f6;
}
</style>
