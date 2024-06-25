<template>
  <div class="font-sans" v-if="work">
    <div class="p-1 lg:max-w-6xl max-w-2xl mx-auto">
      <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ work.primaryEdition.title }}</h1>
          <div class="flex flex-wrap gap-4 mt-4">
            <h2 class="text-m title-font text-gray-500 tracking-widest" v-for="authors in work.authors">{{ authors.personName }}</h2>
          </div>
          <div class="mt-4">
            <h3 class="text-lg font-bold text-gray-800">About</h3>
            <p class="leading-relaxed mt-4 text-sm text-gray-800" v-if="work.primaryEdition.synopsis">
              {{ work.primaryEdition.synopsis }}
            </p>
          </div>
          <div class="mt-8">
            <div class="inline-flex rounded-md shadow-sm" v-for="genre in work.genres" :key="genre.genreId">
              <button class="py-2 px-4 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2 my-2">
                {{ genre.genreName }}
              </button>
            </div>
          </div>
   
        </div>
        <div class="w-full lg:sticky top-0 sm:flex gap-2">
          <img 
            :alt="work.primaryEdition.title" 
            class="lg:w-1/2 w-full object-cover object-center border border-gray-200" 
            v-if="work.primaryEdition.coverImage" 
            :src="work.primaryEdition.coverImage"
          />
        </div>

      </div>
    </div>
    <div>
      <LiteraryReviews :reviews="work.LiteraryReviews" v-if="work.LiteraryReviews && work.LiteraryReviews.reviews.length > 0" :work="work" />
        <div v-else>
          <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div class="flex items-center gap-2">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Reviews (0)</h2>

      <div class="mt-2 flex items-center gap-2 sm:mt-0">
        <p class="text-sm font-medium leading-none text-gray-500 hover:no-underline dark:text-white"> Leave a review and let us know what you think! </p>
      </div>
    </div>

    <div class="my-6 gap-8 sm:flex sm:items-start md:my-8">
      <div class="shrink-0 space-y-4">
        <p class="text-2xl font-semibold leading-none text-gray-900 dark:text-white">0 out of 5</p>
        <button type="button" data-modal-target="review-modal" data-modal-toggle="review-modal" class="mb-2 me-2 rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" @click="showModal = true">Write a review</button>
      </div>
    </div>
  </div>
          </section>
          <AddReview v-show="showModal" v-if="showModal"
        :workId="work.workId"
        @close-modal="closeModal"
        @review-added="handleReviewAdded"/>
        
        </div>
    </div>
    

    <Editions :editions="work.otherEditions" v-if="work.otherEditions && work.otherEditions.length > 0" :work="work" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LiteraryReviews from './LiteraryReviews.vue';
import Editions from './Editions.vue';
import AddReview from '~/components/AddReview.vue';
const showModal = ref(false)
const props = defineProps({
  work: {
    type: Object,
    required: true,
  }
});
console.log('work', props.work)
console.log('work reviews', props.work.LiteraryReviews)
const closeModal = () => {
  showModal.value = false;

  };
const handleReviewAdded = (review) => {
  props.work.LiteraryReviews.reviews.push(review.review);
  props.work.LiteraryReviews.totalReviews++;
}
</script>

<style scoped>
button {
  background-color: #7DBB7D;
}
</style>
