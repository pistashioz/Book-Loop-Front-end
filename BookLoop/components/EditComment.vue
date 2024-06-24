<template>
    <!-- Add review modal -->
    <div id="crud-modal" tabindex="-1" aria-hidden="true" class="modal-overlay fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 overflow-auto ...">
        <div class="relative max-h-full w-full max-w-2xl p-4">
          <!-- Modal content -->
          <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
            <!-- Modal header -->
            <div class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
              <div>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Update a Comment</h3>
              </div>
              <button @click="$emit('close-modal')" type="button" class="absolute right-5 top-5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="review-modal">
                <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="close sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            <form class="p-4 md:p-5" @submit.prevent="submitComment">
              <div class="mb-4 grid grid-cols-2 gap-4">
                <div class="col-span-2">
                  <label for="description" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Comment Description</label>
                  <textarea id="description" rows="6" class="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required v-model="textComment"></textarea>
                </div>
              </div>
              <div class="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
                <button type="submit" class="me-2 inline-flex items-center rounded-lg bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update comment</button>
                <button type="button" @click="$emit('close-modal')" data-modal-toggle="review-modal" class="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </template>
    <script>
    import { ref, defineComponent } from 'vue';
    import { updateComment } from '~/composables/api/workService';

    export default defineComponent({
    props: {
      workId: {
      type: Number,
      required: true,
    },
      literaryReview: {
        type: Object,
        required: true,
      },
      comment: {
        type: Object,
        required: true
      }
    },
  setup(props, { emit }) {
    const textComment = ref(props.comment.comment);
    const submitComment = async () => {
      try{
        const commentData = {
        comment: textComment.value
      };
      const response = await updateComment(props.workId, props.literaryReview.literaryReviewId, props.comment.commentId, commentData)
      console.log('response:', response)
      console.log('response.data:', response.data)
        if (response){
          emit('comment-updated', response.data);
          emit('close-edit-comment-modal');
        }
      }
        catch(error){
        console.error('Error updating comment', error)
      };
    };

    return {
      textComment,
      submitComment,
    };
  },
});
    </script>
    <style scoped>
    
    </style>