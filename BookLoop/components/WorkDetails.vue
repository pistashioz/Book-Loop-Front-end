<template>
    <div>
        <section class="text-gray-700 body-font overflow-hidden bg-white" v-if="work">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" v-if="work.coverImage" :src="work.coverImage">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-m title-font text-gray-500 tracking-widest"v-if="work.author">{{ work.author }}</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ work.originalTitle }}</h1>
        <div class="flex mb-4">
          <span class="flex items-center" v-if="work.reviews.length > 0">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3">{{work.reviews.length}} Reviews</span>
          </span>
          <span v-else>
            <span class="text-gray-600 ml-3">{{work.reviews.length}} Reviews</span>
          </span>

        </div>
        <p class="leading-relaxed" v-if="work.editions && work.editions.length > 0">
            {{ work.editions[0].synopsis }}
        </p>
        <br>
        <div class="inline-flex rounded-md shadow-sm" v-for="genre in work.genres" :key="genre.genreId">
  <button class="py-2 px-4 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2 my-2">
    {{genre.genre.genreName}}
  </button>
</div>
      </div>
    </div>
  </div>
  
</section>
<div class="grid grid-cols-1 gap-8">
          <LiteraryReviews :review="review" v-if="work && work.reviews.length > 0" :work="work" />
        </div>
<Editions :editions="work.editions" v-if="work && work.editions.length > 0" :work="work"/> 

    </div>
</template>

<script setup>
const {work} = defineProps(['work'])
</script>

<style scoped>
button{
  background-color: #7DBB7D
}
</style>