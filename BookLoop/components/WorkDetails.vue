<template>






<div class="font-sans" v-if="work">
      <div class="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">

          <div class="w-full lg:sticky top-0 sm:flex gap-2">
            <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center border border-gray-200" v-if="work.coverImage" :src="work.coverImage">
          </div>

          <div>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ work.originalTitle }}</h1>
            <div class="flex flex-wrap gap-4 mt-4">
              <h2 class="text-m title-font text-gray-500 tracking-widest"v-if="work.author">{{ work.author }}</h2>
            </div>

            <div class="flex space-x-2 mt-4">
              <svg class="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
            <div class="mt-8">
              <h3 class="text-lg font-bold text-gray-800">About</h3>
              <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                    <p class="leading-relaxed" v-if="work.bookEditions && work.bookEditions.length > 0">{{ work.bookEditions[0].synopsis }}</p>
              </ul>
            </div>
            <div class="mt-8">
            <div class="inline-flex rounded-md shadow-sm" v-for="genre in work.genres" :key="genre.genreId">
              <button class="py-2 px-4 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2 my-2">{{genre.genre.genreName}}</button>
            </div>
          </div>
            <div class="mt-8 max-w-md">
              <h3 class="text-lg font-bold text-gray-800" v-if="work.reviews && work.reviews.length > 0">{{work.reviews.length}} Reviews</h3>
              <div class="space-y-3 mt-4">
                <div class="flex items-center">
                  <p class="text-sm text-gray-800 font-bold">5.0</p>
                  <svg class="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-300 rounded w-full h-2 ml-3">
                    <div class="w-2/3 h-full rounded bg-gray-800"></div>
                  </div>
                  <p class="text-sm text-gray-800 font-bold ml-3">66%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-gray-800 font-bold">4.0</p>
                  <svg class="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-300 rounded w-full h-2 ml-3">
                    <div class="w-1/3 h-full rounded bg-gray-800"></div>
                  </div>
                  <p class="text-sm text-gray-800 font-bold ml-3">33%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-gray-800 font-bold">3.0</p>
                  <svg class="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-300 rounded w-full h-2 ml-3">
                    <div class="w-1/6 h-full rounded bg-gray-800"></div>
                  </div>
                  <p class="text-sm text-gray-800 font-bold ml-3">16%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-gray-800 font-bold">2.0</p>
                  <svg class="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-300 rounded w-full h-2 ml-3">
                    <div class="w-1/12 h-full rounded bg-gray-800"></div>
                  </div>
                  <p class="text-sm text-gray-800 font-bold ml-3">8%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-gray-800 font-bold">1.0</p>
                  <svg class="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-300 rounded w-full h-2 ml-3">
                    <div class="w-[6%] h-full rounded bg-gray-800"></div>
                  </div>
                  <p class="text-sm text-gray-800 font-bold ml-3">6%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div>
  
    <form class="max-w-md mx-auto mt-16 p-4 bg-white shadow rounded">
    <h2 class="text-2xl font-bold mb-4">Submit Review</h2>
    <div class="mb-4">
      <div class="mb-4">
    <label class="block mb-1">Add Your Rating</label>
    <div class="flex items-center space-x-2">
      <label for="rating1" class="cursor-pointer">
      <input type="radio" name="rating" id="rating1" value="1" v-model="rating" class="hidden">
      
        <svg 
          class="w-4 h-4 ms-1" 
          :class="rating >= 1 ? 'text-yellow-300' : 'text-gray-300 hover:text-yellow-300'"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" 
          fill="currentColor" 
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      </label>
      <label for="rating2" class="cursor-pointer">
      <input type="radio" name="rating" id="rating2" value="2" v-model="rating" class="hidden">
      
        <svg 
          class="w-4 h-4 ms-1" 
          :class="rating >= 2 ? 'text-yellow-300' : 'text-gray-300 hover:text-yellow-300'"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" 
          fill="currentColor" 
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      </label>
      <label for="rating3" class="cursor-pointer">
      <input type="radio" name="rating" id="rating3" value="3" v-model="rating" class="hidden">
      
        <svg 
          class="w-4 h-4 ms-1" 
          :class="rating >= 3 ? 'text-yellow-300' : 'text-gray-300 hover:text-yellow-300'"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" 
          fill="currentColor" 
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      </label>
      <label for="rating4" class="cursor-pointer">
      <input type="radio" name="rating" id="rating4" value="4" v-model="rating" class="hidden">
     
        <svg 
          class="w-4 h-4 ms-1" 
          :class="rating >= 4 ? 'text-yellow-300' : 'text-gray-300 hover:text-yellow-300'"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" 
          fill="currentColor" 
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      </label>
      <label for="rating5" class="cursor-pointer">
      <input type="radio" name="rating" id="rating5" value="5" v-model="rating" class="hidden">
      
        <svg 
          class="w-4 h-4 ms-1" 
          :class="rating >= 5 ? 'text-yellow-300' : 'text-gray-300 hover:text-yellow-300'"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" 
          fill="currentColor" 
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      </label>
    </div>
      </div>
    </div>
    <div class="mb-4">
        <label for="message" class="block mb-1">Message</label>
        <textarea id="message" v-model="newReviewText" class="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
    </div>
    <button @click="submitReview" class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
  </form>
  </div>
  <LiteraryReviews :review="review" v-if="work && work.reviews && work.reviews.length > 0" :work="work" />
  <Editions :editions="work.editions" v-if="work && work.editions && work.editions.length > 0" :work="work"/> 
</template>

<script setup>


import { ref } from 'vue';
import LiteraryReviews from './LiteraryReviews.vue';
import Editions from './Editions.vue';
import { addLiteraryReview } from '~/composables/api/workService';

const { work } = defineProps(['work']);
const showReviewForm = ref(false);
const newReviewText = ref('');
const rating = ref('')
console.log('work',work)


const submitReview = async (event) => {
  event.preventDefault();
  try {
    console.log(newReviewText.value)
    const reviewData = {
      userId: 2,
      literaryReview: newReviewText.value, 
      literaryRating: Number(rating.value),
    };
    console.log('review data: ',reviewData)
    const response = await addLiteraryReview(Number(work.workId), reviewData);
    // Access the data object that was posted
    const postedData = response._rawValue.data;
    console.log('Posted data:', postedData);

    if (response._rawValue.success) {
      if (!work.reviews) {
        work.reviews = [];
      }
      
      work.reviews.push(postedData); 
      newReviewText.value = ''; 
      rating.value = '';
      showReviewForm.value = false; 
    } else {
      console.error('Failed to add review', response._rawValue.error);
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error);
  }
};
</script>

<style scoped>
button{
  background-color: #7DBB7D
}

</style>