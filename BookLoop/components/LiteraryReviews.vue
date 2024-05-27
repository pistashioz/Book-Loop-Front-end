<template>




<section class="py-24 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            <div class="w-full">
                <h2 class="font-manrope font text-4xl text-black mb-8 text-center">Reviews
                </h2>

                <div class="pt-11 pb-8 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto" v-for="review in work.reviews" :key="review.literaryReviewId">
                    <div class="flex items-center gap-1 mb-2">
                        <svg 
                    v-for="index in 5"
                    :key="index"
                    class="w-6 h-6 ms-1" 
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" 
                    :fill="index <= review.literaryRating ? '#FBBF24' : '#E0EBF3'" 
                    viewBox="0 0 22 20"
                    >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    </div>
                    <div class="flex sm:items-left flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
                        <div class="flex items-center gap-3">
                            <img src="https://pagedone.io/asset/uploads/1704349572.png" alt="John image" class="w-8 h-8">
                            <h6 class="font-semibold text-lg leading-8 text-indigo-600 ">User ID:{{review.userId}}</h6>
                        </div>
                    
                    </div>
                    <p class="font-normal text-lg leading-8 text-gray-400 max-xl:text-justify">{{ review.literaryReview }}</p>
                    <p class="font-normal text-lg leading-8 text-gray-400">{{formatDate(review.creationDate)}}</p>
                </div>
            </div>
        </div>
</section>


  </template>
  
  <script setup>
  defineProps({
    reviews: {
      type: Object,
      required: true,
    },
    work: {
      type: Object,
      required: true
  }
  });

  const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options); 
};

  </script>
  