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
          <div class="mt-8 max-w-md">
            <h3 class="text-lg font-bold text-gray-800" v-if="work.totalReviews">{{ work.totalReviews }} Reviews</h3>
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
    <SubmitReviewForm :workId="work.workId" @review-submitted="handleReviewSubmitted" />
    <LiteraryReviews :reviews="work.LiteraryReviews" v-if="work.LiteraryReviews && work.LiteraryReviews.length > 0" :work="work" />
    <Editions :editions="work.otherEditions" v-if="work.otherEditions && work.otherEditions.length > 0" :work="work" />
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
console.log('work', props.work)
console.log('work reviews', props.work.LiteraryReviews)
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
