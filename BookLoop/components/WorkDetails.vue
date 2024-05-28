<template>
  <div class="font-sans" v-if="work">
    <div class="p-6 lg:max-w-6xl max-w-2xl mx-auto">
      <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="w-full lg:sticky top-0 sm:flex gap-2">
          <img 
            alt="ecommerce" 
            class="lg:w-1/2 w-full object-cover object-center border border-gray-200" 
            v-if="work.coverImage" 
            :src="work.coverImage"
          />
        </div>
        <div>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ work.originalTitle }}</h1>
          <div class="flex flex-wrap gap-4 mt-4">
            <h2 class="text-m title-font text-gray-500 tracking-widest" v-if="work.author">{{ work.author }}</h2>
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
            <p class="leading-relaxed mt-4 text-sm text-gray-800" v-if="work.BookEditions && work.BookEditions.length > 0">
              {{ work.BookEditions[0].synopsis }}
            </p>
          </div>
          <div class="mt-8">
            <div class="inline-flex rounded-md shadow-sm" v-for="genre in work.genres" :key="genre.genreId">
              <button class="py-2 px-4 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2 my-2">
                {{ genre.genre.genreName }}
              </button>
            </div>
          </div>
          <div class="mt-8 max-w-md">
            <h3 class="text-lg font-bold text-gray-800" v-if="work.reviews && work.reviews.length > 0">{{ work.reviews.length }} Reviews</h3>
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
    <SubmitReviewForm :workId="work.workId" @review-submitted="handleReviewSubmitted" />
    <LiteraryReviews :reviews="work.reviews" v-if="work.reviews && work.reviews.length > 0" :work="work" />
    <Editions :editions="work.editions" v-if="work.editions && work.editions.length > 0" :work="work" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LiteraryReviews from './LiteraryReviews.vue';
import Editions from './Editions.vue';

const props = defineProps({
  work: {
    type: Object,
    required: true,
  }
});

const handleReviewSubmitted = (newReview) => {
  if (!props.work.reviews) {
    props.work.reviews = [];
  }
  props.work.reviews.push(newReview);
};
</script>

<style scoped>
button {
  background-color: #7DBB7D;
}
</style>
