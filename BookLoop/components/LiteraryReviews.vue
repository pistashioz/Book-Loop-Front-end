<template>
  <section class="py-24 relative">
    <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
      <div class="w-full">
        <h2 class="font-manrope text-4xl text-black mb-8 text-center">Reviews</h2>
        <div
          v-for="review in work.reviews"
          :key="review.literaryReviewId"
          class="pt-11 pb-8 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto"
        >
          <div class="flex sm:items-left flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
            <div class="flex items-center gap-3">
              <img 
                v-if="review.user.profileImageUrl" 
                :src="review.user.profileImageUrl" 
                alt="User image" 
                class="w-8 h-8" 
              />
              <img 
                v-else
                src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" 
                alt="Default user image" 
                class="w-8 h-8" 
              />
              <h6 class="font-semibold text-lg leading-8 text-indigo-600">
                {{ review.user.username }}
              </h6>
            </div>
          </div>
          <p class="font-normal text-lg leading-8 text-gray-400 max-xl:text-justify">{{ review.reviewContent }}</p>
          <p class="font-normal text-lg leading-8 text-gray-400">{{ formatDate(review.createdAt) }}</p>
          <button><font-awesome-icon icon="fa-solid fa-heart" style="color: #402c90;" /></button>
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
    required: true,
  },
});
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};
</script>
