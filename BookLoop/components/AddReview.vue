<template>
<!-- Add review modal -->
<div id="crud-modal" tabindex="-1" aria-hidden="true" class="modal-overlay fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 overflow-auto ...">
    <div class="relative max-h-full w-full max-w-2xl p-4">
      <!-- Modal content -->
      <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
        <!-- Modal header -->
        <div class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
          <div>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Add a review</h3>
          </div>
          <button @click="$emit('close-modal')" type="button" class="absolute right-5 top-5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="review-modal">
            <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="close sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <form class="p-4 md:p-5" @submit.prevent="submitReview">
          <div class="mb-4 grid grid-cols-2 gap-4">
            <div class="col-span-2">
              <label for="rating" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Review Rating</label>
              <div class="flex items-center gap-0.5">
                <svg
                  v-for="n in 5"
                  :key="n"
                  @click="setRating(n)"
                  :class="{'text-yellow-300': n <= reviewRating, 'text-gray-300': n > reviewRating}"
                  class="cursor-pointer h-8 w-8"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              </div>
            </div>
            <div class="col-span-2">
              <label for="description" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Review description</label>
              <textarea id="description" rows="6" class="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required v-model="textReview"></textarea>
            </div>
          </div>
          <div class="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
            <button type="submit" class="me-2 inline-flex items-center rounded-lg bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add review</button>
            <button type="button" @click="$emit('close-modal')" data-modal-toggle="review-modal" class="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from 'vue';
import { useUserStore } from '~/composables/stores/user';
import { addLiteraryReview } from '~/composables/api/workService';

export default defineComponent({
  props: {
    workId: {
      type: Number,
      required: true,
    },
  },
  
  setup(props, { emit }) {
    
    const textReview = ref('');
    const reviewRating = ref(0);
    const userStore = useUserStore();
    const userId = userStore.userId;
    console.log(props.workId)
    console.log(userId)
    const setRating = (rating) => {
      reviewRating.value = rating;
    };
    const submitReview = async () => {
      console.log(props.workId)
      console.log(reviewRating)
      try {
        const reviewData = {
          literaryReview: textReview.value,
          literaryRating: reviewRating.value,
          userId: userId,
        };
        const response = await addLiteraryReview(props.workId, reviewData);
        console.log(response);
        if (response) {
          emit('review-added', response);
          emit('close-modal');
        }
      } catch (error) {
        console.error('Error creating review:', error);
      }
    };

    return {
      textReview,
      reviewRating,
      setRating,
      submitReview,
    };
  },
});
</script>
<style scoped>

</style>