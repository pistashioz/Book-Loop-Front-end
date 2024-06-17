<template>

<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div class="flex items-center gap-2">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Reviews</h2>

      <div class="mt-2 flex items-center gap-2 sm:mt-0">
        <div class="flex items-center gap-0.5">
          <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
        </div>
        <p class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">(4.6)</p>
        <p class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"> {{work.LiteraryReviews.totalReviews}} Reviews </p>
      </div>
    </div>

    <div class="my-6 gap-8 sm:flex sm:items-start md:my-8">
      <div class="shrink-0 space-y-4">
        <p class="text-2xl font-semibold leading-none text-gray-900 dark:text-white">4.65 out of 5</p>
        <button type="button" data-modal-target="review-modal" data-modal-toggle="review-modal" class="mb-2 me-2 rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" @click="showModal = true">Write a review</button>
      </div>

      <div class="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
        <div class="flex items-center gap-2">
          <p class="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">5</p>
          <svg class="h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <div class="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
            <div class="h-1.5 rounded-full bg-yellow-300" style="width: 20%"></div>
          </div>
          <a href="#" class="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">239 <span class="hidden sm:inline">reviews</span></a>
        </div>

        <div class="flex items-center gap-2">
          <p class="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">4</p>
          <svg class="h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <div class="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
            <div class="h-1.5 rounded-full bg-yellow-300" style="width: 60%"></div>
          </div>
          <a href="#" class="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">432 <span class="hidden sm:inline">reviews</span></a>
        </div>

        <div class="flex items-center gap-2">
          <p class="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">3</p>
          <svg class="h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <div class="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
            <div class="h-1.5 rounded-full bg-yellow-300" style="width: 15%"></div>
          </div>
          <a href="#" class="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">53 <span class="hidden sm:inline">reviews</span></a>
        </div>

        <div class="flex items-center gap-2">
          <p class="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">2</p>
          <svg class="h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <div class="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
            <div class="h-1.5 rounded-full bg-yellow-300" style="width: 5%"></div>
          </div>
          <a href="#" class="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">32 <span class="hidden sm:inline">reviews</span></a>
        </div>

        <div class="flex items-center gap-2">
          <p class="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">1</p>
          <svg class="h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <div class="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
            <div class="h-1.5 rounded-full bg-yellow-300" style="width: 0%"></div>
          </div>
          <a href="#" class="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">13 <span class="hidden sm:inline">reviews</span></a>
        </div>
      </div>
    </div>

    <div class="mt-6 divide-y divide-gray-200 dark:divide-gray-700" v-for="review in work.LiteraryReviews.reviews">
      <div class="gap-3 pb-6 sm:flex sm:items-start">
        <div class="shrink-0 space-y-2 sm:w-48 md:w-72">
          <div class="flex items-center gap-0.5">
            <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>

            <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>

            <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>

            <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>

            <svg class="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
          </div>

          <div class="space-y-0.5">
            <p class="text-base font-semibold text-gray-900 dark:text-white">{{review.user.username}}</p>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">{{ formatDate(review.createdAt) }}</p>
          </div>


        </div>

        <div class="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
          <p class="text-base font-normal text-gray-500 dark:text-gray-400" id="reviewContent">{{ review.reviewContent }}</p>
          <button id="toggle-btn" class="mt-4 text-blue-500 focus:outline-none">Read More</button>
          <button id="hide-btn" class="hidden mt-4 text-blue-500 focus:outline-none">Hide</button>
          <div class="flex items-center gap-4">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to you?</p>
            <div class="flex items-center cursor-pointer" @click="likeFunction(review.literaryReviewId)" :class="{ 'liked': liked }" :disabled="liked">
              <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z" clip-rule="evenodd"/>
              </svg>
              <span
                class="ms-2"
                :class="{ 'text-blue-500': liked, 'text-gray-500': !liked }"
              >
                {{ liked ? 'Liked' : 'Like' }}
              </span>
              <label class="ms-2 text-sm text-gray-400 dark:text-gray-300"> {{review.likeCount}}  likes </label>
            </div>
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.502 7.046h-2.5v-.928a2.122 2.122 0 0 0-1.199-1.954 1.827 1.827 0 0 0-1.984.311L3.71 8.965a2.2 2.2 0 0 0 0 3.24L8.82 16.7a1.829 1.829 0 0 0 1.985.31 2.121 2.121 0 0 0 1.199-1.959v-.928h1a2.025 2.025 0 0 1 1.999 2.047V19a1 1 0 0 0 1.275.961 6.59 6.59 0 0 0 4.662-7.22 6.593 6.593 0 0 0-6.437-5.695Z"/>
              </svg>
              <label class="ms-2 text-sm font-semibold text-gray-500 dark:text-gray-300 cursor-pointer"> Reply </label>
              <label class="ms-2 text-sm text-gray-400 dark:text-gray-300"> {{review.commentCount}}  Comments </label>
            </div>
          </div>
          
        </div>
        
      </div>

    </div>

    <div class="mt-6 text-center">

      


      <div class="inline-flex items-center justify-center gap-3">
  <button
    @click="prevPage"
    class="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
  >
    <span class="sr-only">Next Page</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
      <path
        fill-rule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
  

  <p class="text-xs text-gray-900">
    {{work.LiteraryReviews.currentPage}}
    <span class="mx-0.25">/</span>
    {{work.LiteraryReviews.totalPages}}
  </p>

  <button
   @click="nextPage"
    class="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
  >
    <span class="sr-only">Next Page</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
      <path
        fill-rule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</div>

    </div>
  </div>
</section>

<AddReview v-show="showModal" @close-modal="showModal = false"/>


</template>

<script setup>

import { ref } from 'vue';
import {getReviewsComments, likeReview} from '~/composables/api/workService'; 
import { useUserStore } from '~/composables/stores/user';
import AddReview from '~/components/AddReview.vue';
const showModal = ref(false);
const currentPage = ref(null)
const liked = ref(false)
const totalPages = ref(0)
const props = defineProps({
  review: {
    type: Object,
    required: true,
  },
  work: {
    type: Object,
    required: true,
  },
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};


const prevPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    const usersData = await likeReview(props.work.workId, literaryReviewId, currentPage.value);
    console.log(usersData)
    if (usersData) {
      users.value = usersData.data;
    } else {
      console.error('Error fetching data:', usersData.error);
    }
  }
};

const nextPage = async () => {
if (currentPage.value < totalPages.value) {
  currentPage.value++;
  console.log(currentPage.value)
  console.log(usersData)
  const usersData = await likeReview(props.work.workId, literaryReviewId, currentPage.value); 
  if (usersData) {
    users.value = usersData.data;
  } else {
    console.error('Error fetching data:', usersData.error);
  }
}
};

const likeFunction = async (literaryReviewId) => {
  try {
    console.log(literaryReviewId)
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();
    const userStore = useUserStore();
    const userId = userStore.userId;
    console.log('user id',userId)

    const dataLikeReview = {
      likeDate: formattedDate,
      userId: userId,
      literaryReviewId: literaryReviewId,
    }
    const response = await likeReview(props.work.workId, literaryReviewId, dataLikeReview);
    //liked.value = true
  } catch (error) {
    console.error('Error liking review:', error);
  }
};
onMounted(async ()=> {
  console.log(props.work.LiteraryReviews.reviews, currentPage.value)
})
/*
onMounted(async () => {
  try {
    // Fetch the comment data by work and review ID
    const commentData = await getReviewsComments(props.work.workId, props.review.literaryReviewId);
    if (commentData.success) {
      review.value = commentData.data;
      console.log('review valuee', review.value)
    } else {
      console.error('Error fetching comments data:', commentData.error);
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error);
  }
});*/
</script>
<style scoped>
.accordion-content {
    overflow: hidden;
    max-height: 200px;
    transition: max-height 0.2s ease-out;
  }
  .accordion-content.expanded {
    max-height: 1000px; 
  }
  .show-more {
    display: none;
    cursor: pointer;
    color: blue;
  }
  .show-more.visible {
    display: inline;
  }

  .liked {
  color: blue;
  pointer-events: none; 
  opacity: 0.6; 
}
  </style>