<template>
    <div>
      <NuxtPage />
      <div class="text-center" v-if="isLoading">
        <div role="status">
          <svg
            aria-hidden="true"
            class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- SVG paths -->
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <ReviewDetails v-else-if="literaryReview" :literaryReview="literaryReview" :comments="comments" />
      <div v-else>Review not found</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { getReviewsComments, getReview } from '~/composables/api/workService';
  import ReviewDetails from '~/components/ReviewDetails.vue';
  
  const route = useRoute();
  const workId = route.params.workId;
  const literaryReviewId = route.params.LiteraryReviewId;
  
  const isLoading = ref(true);
  const literaryReview = ref(null);
  const comments = ref(null);
  
  onMounted(async () => {
    try {
      const reviewResponse = await getReview(workId, literaryReviewId);
      if (reviewResponse.success) {
        literaryReview.value = reviewResponse.data;
        console.log('literary review', literaryReview)
      } else {
        console.error('Error fetching literary review:', reviewResponse.error);
      }
  
      const commentData = await getReviewsComments(workId, literaryReviewId);
      if (commentData.success) {
        comments.value = commentData.comments;
      } else {
        console.error('Error fetching comments data:', commentData.error);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    } finally {
      isLoading.value = false;
    }
  });
  </script>
  