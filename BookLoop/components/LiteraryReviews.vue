<template>

<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div class="flex items-center gap-2">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Reviews</h2>

      <div class="mt-2 flex items-center gap-2 sm:mt-0">
        <div class="flex items-center gap-0.5">
          <svg v-for="n in 5" :key="n" :class="{'text-yellow-300': n <= Math.round(averageReviews()), 'text-gray-300': n > Math.round(averageReviews())}" class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
        </div>
        <p class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">({{ averageReviews() }})</p>
        <p class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"> {{reviewsArr.length}} Reviews </p>
      </div>
    </div>

    <div class="my-6 gap-8 sm:flex sm:items-start md:my-8">
      <div class="shrink-0 space-y-4">
        <p class="text-2xl font-semibold leading-none text-gray-900 dark:text-white">{{ averageReviews() }} out of 5</p>
        <button type="button" data-modal-target="review-modal" data-modal-toggle="review-modal" class="mb-2 me-2 rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" @click="showModal = true">Write a review</button>
      </div>

      <div class="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
        <div class="flex items-center gap-2">
          <p class="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">5</p>
          <svg class="h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <div class="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
            <div class="h-1.5 rounded-full bg-yellow-300" :style="{ width: ratingCounts[5] * work.LiteraryReviews.totalReviews + '%' }"></div>
          </div>
          <a class="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">{{ ratingCounts[5]  }} <span class="hidden sm:inline">reviews</span></a>
        </div>

        <div class="flex items-center gap-2">
          <p class="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">4</p>
          <svg class="h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <div class="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
            <div class="h-1.5 rounded-full bg-yellow-300" :style="{ width: ratingCounts[4] *  work.LiteraryReviews.totalReviews + '%' }"></div>
          </div>
          <a class="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">{{ ratingCounts[4]  }} <span class="hidden sm:inline">reviews</span></a>
        </div>

        <div class="flex items-center gap-2">
          <p class="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">3</p>
          <svg class="h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <div class="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
            <div class="h-1.5 rounded-full bg-yellow-300" :style="{ width: ratingCounts[3] * work.LiteraryReviews.totalReviews + '%' }"></div>
          </div>
          <a class="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">{{ ratingCounts[3]  }} <span class="hidden sm:inline">reviews</span></a>
        </div>

        <div class="flex items-center gap-2">
          <p class="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">2</p>
          <svg class="h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <div class="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
            <div class="h-1.5 rounded-full bg-yellow-300" :style="{ width: ratingCounts[2] * work.LiteraryReviews.totalReviews + '%' }"></div>
          </div>
          <a class="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">{{ ratingCounts[2]  }} <span class="hidden sm:inline">reviews</span></a>
        </div>

        <div class="flex items-center gap-2">
          <p class="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">1</p>
          <svg class="h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <div class="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
            <div class="h-1.5 rounded-full bg-yellow-300" :style="{ width: ratingCounts[1] * work.LiteraryReviews.totalReviews + '%' }"></div>
          </div>
          <a class="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left">{{ratingCounts[1]  }} <span class="hidden sm:inline">reviews</span></a>
        </div>
      </div>
    </div>

    <div class="mt-6 divide-y divide-gray-200 dark:divide-gray-700" v-for="review in reviewsArr" v-if="work.LiteraryReviews && work.LiteraryReviews.reviews.length > 0" >
      <div class="gap-3 pb-6 sm:flex sm:items-start">
        <div class="shrink-0 space-y-2 sm:w-48 md:w-72">
          <div class="flex items-center gap-0.5">
            <svg v-for="n in 5" :key="n" :class="{'text-yellow-300': n <= review.literaryRating, 'text-gray-300': n > review.literaryRating}" class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
          </div>

          <div class="space-y-0.5">
            <p class="text-base font-semibold text-gray-900 dark:text-white">{{review.user.username}}</p>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">{{ formatDate(review.creationDate) }}</p>
          </div>


        </div>

        <div class="px-5 py-5 border-b border-gray-200 bg-white text-sm"> 
          <p class="text-base font-normal text-gray-500 dark:text-gray-400" id="literaryReview" v-if = "!readMoreActivated">{{ review.literaryReview.slice(0, 400) }}</p>
          <button id="toggle-btn" class="mt-4 text-blue-500 focus:outline-none" v-if = "!readMoreActivated && review.literaryReview.length > 400" @click = "activateReadMore">Read More</button>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400" id="literaryReview" v-if = "readMoreActivated">{{ review.literaryReview}}</p>
          <button id="hide-btn" class="mt-4 text-blue-500 focus:outline-none"  v-if = "readMoreActivated" @click = "deactivateReadMore">Hide</button>
          <div class="flex items-center gap-4">
            <div class="flex items-center cursor-pointer"  @click="toggleLike(review)">
              <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z" clip-rule="evenodd"/>
              </svg>
              <span
                class="ms-2"
                :class="{ 'text-blue-500': likedReviews.has(review.literaryReviewId), 'text-gray-500': !likedReviews.has(review.literaryReviewId) }"
            >
              {{ likedReviews.has(review.literaryReviewId) ? 'Liked' : 'Like' }}
              </span>
              <label class="ms-2 text-sm text-gray-400 dark:text-gray-300"> {{review.totalLikes}}  likes </label>
            </div>
            <div class="flex items-center">
              <svg class="text-gray-500 dark:text-white mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                </svg>
              <label class="ms-2 text-sm font-semibold text-gray-500 dark:text-gray-300 cursor-pointer" @click="toggleCommentForm(review.literaryReviewId)"> Reply </label>

              <label class="ms-2 text-sm text-gray-400 dark:text-gray-300"> {{review.commentCount}}  Comments </label>

            </div>
            <div class="flex items-left gap-1">
   <div class = "relative">
    <details class="group" v-if="review.commentCount > 0" @click="toggleReplies(review.literaryReviewId)">
      <summary
        class="flex cursor-pointer items-center gap-2 pb-1 text-gray-900 transition hover:border-gray-600"
      >
        <span class="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-sm text-gray-400 dark:text-gray-300" id="menu-button" aria-expanded="true" aria-haspopup="true" > Replies </span>

        <span class="transition group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </summary>
    </details>
   </div>
    
  </div>

          </div>
          
        </div>
        <div class="px-5 py-5  bg-white text-sm"   @click="toggleDropdown(review.literaryReviewId)" >

          <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                  <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
              </svg>
          </button> 
          <div id="dropdownDots" :class="{'dropdown-content': true, 'show': isShowDropdown[review.literaryReviewId]}" class="dropdown-content z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                    <li>
                        <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" v-if="userId === review.user.userId"  @click="showEditReviewModal = true">Edit</button>
                    </li>
                    <li>
                        <button class="block px-4 text-red-500 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-semibold" @click="deleteReview(review.literaryReviewId)">Delete</button>
                    </li>
                </ul>

            </div> 
            <EditReview v-show="showEditReviewModal" v-if="showEditReviewModal"
                          :literaryReview = "review"
                          :workId="work.workId"
                          @close-edit-review-modal = "closeEditReviewModal"
                          @review-updated="handleReviewUpdated"/>
        </div>
        
      </div>
<div v-if="isFormVisible(review.literaryReviewId)">
  <label for="AddComment" class="sr-only">Add Comment</label>

  <div class="overflow-hidden">
    <textarea
      id="addComment"
      v-model="commentText"
      class="w-full h-10 resize-none border-x-0 border-t-0 border-gray-200 px-0 align-top sm:text-sm"
      rows="4"
      placeholder="Add a comment"
    ></textarea>

    <div class="flex items-center justify-end gap-2 py-3">
      <button @click ="commentText = ''"
        type="button"
        class="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
      >
        Clear
      </button>

      <button
      @click="submitComment(review.literaryReviewId)"
        type="button"
        class="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
      >
        Add
      </button>
    </div>
  </div>
</div>

      <article  v-if="isRepliesVisible(review.literaryReviewId)"  class="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900" v-for="comment in comments">
        <footer class="flex justify-between items-center mb-2" >
            <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">{{comment.user.username}}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-12"
                        title="Data">{{ formatDate(comment.createdAt) }}</time></p>
            </div>
            <div   @click="toggleDropdownComments(comment.commentId)"  >

              <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                      <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                  </svg>
              </button> 
              <div id="dropdownDots" :class="{'dropdown-content': true, 'show': isCommentsShowDropdown[comment.commentId]}" class="dropdown-content z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                        <li>
                            <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" v-if="userId === comment.user.userId" @click="showEditCommentModal = true">Edit</button>
                        </li>

                        <li>
                            <button class="block px-4 text-red-500 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-semibold" @click="deleteComment(comment.commentId, review.literaryReviewId)">Delete</button>
                        </li>
                    </ul>
                </div> 
                <EditComment v-show="showEditCommentModal" v-if="showEditCommentModal"
                          :literaryReview = "review"
                          :comment = "comment"
                          :workId="work.workId"
                          @close-edit-comment-modal = "closeEditCommentModal"
                          @comment-updated="handleCommentUpdated"/>
              </div>

            
        </footer>
        <p class="text-gray-500 dark:text-gray-400">{{comment.comment}}</p>
        <div class="flex items-center mt-4 space-x-4">
          <div class="flex items-center cursor-pointer" @click="toggleCommentLike(review.literaryReviewId, comment)">
              <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z" clip-rule="evenodd"/>
              </svg>
              <span
                class="ms-2"
                :class="{ 'text-blue-500': likedComments.has(comment.commentId), 'text-gray-500': !likedComments.has(comment.commentId) }"
            >
              {{ likedComments.has(comment.commentId) ? 'Liked' : 'Like' }}
              </span>
              <label class="ms-2 text-sm text-gray-400 dark:text-gray-300"> {{comment.totalLikes}}  likes </label>
            </div>
        </div>
    </article>
    
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

<AddReview v-show="showModal" v-if="showModal"
        :workId="work.workId"
        @close-modal="closeModal"
        @review-added="handleReviewAdded"/>



</template>

<script setup>

import { ref } from 'vue';
import {getReviewsComments, likeReview, likeComment, removeLikeComment, getComments, fetchLiteraryReviewsPagination, addComment, removeReview, removeComment} from '~/composables/api/workService'; 
import { useUserStore } from '~/composables/stores/user';
import AddReview from '~/components/AddReview.vue';
import EditReview from '~/components/EditReview.vue'
import EditComment from '~/components/EditComment.vue'
const showEditReviewModal = ref(false);
const showModal = ref(false);
const currentPage = ref(null)
const isShowDropdown = reactive({})
const showEditCommentModal = ref(false)
const isCommentsShowDropdown = reactive({})
const liked = ref(false)
const readMoreActivated = ref(false)
const openReplies = ref(false)
const totalPages = ref(0)
const reviewsArr = ref([])
const ratingCounts  = ref(0)
const comments  = ref([])
const replyVisibility = ref({});
const commentText = ref('');
const activeCommentForm = ref(0)
const formVisibility = ref({});
const userStore = useUserStore();
const userId = userStore.userId;
const likedReviews = ref(new Set());
const likedComments = ref(new Set());
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


const handleReviewAdded  = (review) => {

  console.log('review added: ', review)
  reviewsArr.value.push(review.review)
  console.log('reviewsArr:',reviewsArr.value)
  props.work.LiteraryReviews.reviews.push(review.review);
  console.log('update',props.work.LiteraryReviews.reviews)
  props.work.LiteraryReviews.totalReviews++;
}
const handleReviewUpdated = (review) =>  {
  if (Array.isArray(reviewsArr.value)) {
    const reviewIndex = reviewsArr.value.findIndex(existingReview => existingReview.literaryReviewId === review.literaryReviewId);
    console.log(reviewIndex)
    if (reviewIndex !== -1) {
      reviewsArr.value[reviewIndex].literaryRating = review.literaryRating;
      reviewsArr.value[reviewIndex].literaryReview = review.literaryReview;
      console.log(reviewsArr.value)
      console.log('Review value after update:', reviewsArr.value);
    } else {
      console.warn('Review with ID', review.literaryReviewId, 'not found in reviews array.');
    }
  } else {
    console.warn('reviewsArr.value is not an array. Consider using an appropriate data structure.');
  }
}
const handleCommentUpdated = (comment) => {

  if (Array.isArray(comments.value)) {
    const commentIndex = comments.value.findIndex(existingComment => existingComment.commentId === comment.commentId);
    console.log(commentIndex)
    if (commentIndex !== -1) {
      comments.value[commentIndex].comment = comment.comment;
      console.log(comments.value)
      console.log('comments value after update:', comments.value);
    } else {
      console.warn('Comment with ID', comment.commentId, 'not found in comments array.');
    }
  } else {
    console.warn('comments.value is not an array. Consider using an appropriate data structure.');
  }
}
const toggleDropdown = async (literaryReviewId) => {
    isShowDropdown[literaryReviewId] = !isShowDropdown[literaryReviewId];
}
const toggleDropdownComments = async(commentId) => {
  isCommentsShowDropdown[commentId] =!isCommentsShowDropdown[commentId]
}
const activateReadMore = () => {
  readMoreActivated.value = true;
}
const deactivateReadMore = () => {
  readMoreActivated.value = false;
}


const submitComment = async (literaryReviewId) =>{
  try{
    const commentData = {
          comment: commentText.value,
          userId: userId,
        };
    const response  = await addComment(props.work.workId, literaryReviewId, commentData)
    console.log(response)
    if (response){
      comments.value.push(response.data)
      toggleCommentForm(literaryReviewId)
    }
  } catch(error){
    console.error('error submiting comment', error.response?.data?.message || error.message) 
  }
}

const deleteReview = async(literaryReviewId) => {
  try {
    const response = await removeReview(props.work.workId, literaryReviewId)
    if (response) {
      reviewsArr.value = reviewsArr.value.filter(review => review.literaryReviewId !== literaryReviewId);
      props.work.LiteraryReviews.reviews = props.work.LiteraryReviews.reviews.filter(review => review.literaryReviewId !== literaryReviewId);
    }
  } catch (error) {
    console.error('error removing review:', error.response?.data?.message || error.message) 
  }
}

const deleteComment = async(commentId, literaryReviewId) => {
  try {
    const response = await removeComment(props.work.workId, literaryReviewId, commentId)
    if (response) {
      comments.value = comments.value.filter(comment => comment.commentId !== commentId);
      const review = reviewsArr.value.find(review => review.literaryReviewId === literaryReviewId);
      if (review && review.commentCount > 0) {
        console.log(review.commentCount)
        review.commentCount--;
      }
    }
  } catch (error) {
    console.error('error removing review:', error.response?.data?.message || error.message) 
  }
}

const toggleCommentForm = (literaryReviewId) => {
  console.log(formVisibility.value)
  formVisibility.value[literaryReviewId] = !formVisibility.value[literaryReviewId]

}
const isFormVisible = (literaryReviewId) => {
  return !!formVisibility.value[literaryReviewId];
}

const toggleReplies = (reviewId) => {
  replyVisibility.value[reviewId] = !replyVisibility.value[reviewId];
  fetchComments(reviewId)
}
const closeModal = () => {
  showModal.value = false;
  };
const closeEditReviewModal = () => {
  console.log(showEditReviewModal.value)
  showEditReviewModal.value = false;
}
const closeEditCommentModal = () => {
  showEditCommentModal.value = false;
}
const isRepliesVisible = (reviewId) => {
  return !!replyVisibility.value[reviewId];
};

const averageReviews = () => {
  const count = props.work.LiteraryReviews.totalReviews
  let sumOfRatings = 0
  let averageRating = 0
  for (let review of props.work.LiteraryReviews.reviews) {
    
    sumOfRatings += Number(review.literaryRating)

  }

  if (count > 0){
    averageRating = sumOfRatings / count
  }
  return averageRating.toFixed(2)
}
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

function countReviewsByRating() {
  const ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  for (const review of props.work.LiteraryReviews.reviews) {
    const rating = Number(review.literaryRating);
    ratingCounts[rating] += 1;
  }
  return ratingCounts;
}


const prevPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    const reviewsData = await fetchLiteraryReviewsPagination(props.work.workId, currentPage.value);
    console.log(reviewsData)
    if (reviewsData) {
      reviewsArr.value = reviewsData.reviews;
    } else {
      console.error('Error fetching data:', reviewsData.error);
    }
  }
};

const nextPage = async () => {
  console.log(currentPage.value)
  console.log(totalPages.value)
if (currentPage.value < totalPages.value) {
  currentPage.value++;
  console.log('current page value', currentPage.value)
  const reviewsData = await fetchLiteraryReviewsPagination(props.work.workId, currentPage.value); 
  console.log(reviewsData)
  if (reviewsData) {
    reviewsArr.value = reviewsData.reviews;
  } else {
    console.error('Error fetching data:', usersData.error);
  }
}
};

const toggleLike = async (review) => {
  try {
    if (likedReviews.value.has(review.literaryReviewId)) {
      await removeLike(review);
    } else {
      await likeFunction(review);
    }
  } catch (error) {
    console.error('Error toggling like:', error);
  }
};



const likeFunction = async (review) => {
  try {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();
    const dataLikeReview = {
      likeDate: formattedDate,
      userId: userId,
      literaryReviewId: review.literaryReviewId,
    };
    const response = await likeReview(props.work.workId, review.literaryReviewId, dataLikeReview);
    if (response) {
      console.log('review like:', review)
      review.totalLikes++;
      console.log(review.totalLikes)
      likedReviews.value.add(review.literaryReviewId);
    }
    console.log('response like function',response)
  } catch (error) {
    console.error('Error liking review:', error);
  }
};

const removeLike = async (review) => {
  try {
    const response = await removeLikeReview(props.work.workId, review.literaryReviewId, userId);
    if (response) {
      review.totalLikes--;
      likedReviews.value.delete(review.literaryReviewId);
    }
  } catch (error) {
    console.error('Error removing like from review:', error);
  }
};

const toggleCommentLike = async (literaryReviewId, comment) => {
  console.log('comment toggle comment like:', comment)
  console.log(literaryReviewId)
  try{
    if (likedComments.value.has(comment.commentId)){
      await removeCommentLike(literaryReviewId, comment)
    } else {
      await likeCommentFunction(literaryReviewId, comment)
    }
  }catch (error) {
    console.error('Error toggling like:', error);
  }
}

const likeCommentFunction = async (literaryReviewId, comment) => {
  try {
    console.log('comment', comment)
    const response = await likeComment(props.work.workId, literaryReviewId, comment.commentId, userId);
    if (response) {
      console.log('comment like:', comment)
      comment.totalLikes++;
      console.log(comment.totalLikes)
      likedComments.value.add(comment.commentId);
    }
    console.log('response like function',response)
  } catch (error) {
    console.error('Error liking comment:', error);
  }
}

const removeCommentLike = async (literaryReviewId, comment) => {
  try {
    const response = await removeLikeComment(props.work.workId, literaryReviewId, comment.commentId, userId);
    if (response) {
      const commentToUpdate = comments.value.find(c => c.commentId === comment.commentId);
      if (commentToUpdate) {
        commentToUpdate.totalLikes--;
        likedComments.value.delete(comment.commentId);
        console.log(likedComments.value)
      }
    }
  } catch (error) {
    console.error('Error removing comment like:', error);
  }
};
const fetchComments = async(literaryReviewId) => {
  try {
    console.log(literaryReviewId)
    const response = await getComments(props.work.workId, literaryReviewId)
    console.log('response comments:', response)
    console.log(response.comments)
    comments.value = response.comments
    return comments
  }
  catch(error){
    console.error('Error retrieving comment', error)
  }
}
onMounted(async ()=> {
  console.log(props.work.LiteraryReviews.reviews, currentPage.value)
  ratingCounts.value  = countReviewsByRating()
  
try{
  console.log(props.work.workId)
    const reviewData = await fetchLiteraryReviewsPagination(props.work.workId, currentPage.value)
    console.log(reviewData)
    if (reviewData){
      reviewsArr.value = reviewData.reviews
      totalPages.value = reviewData.totalPages
      currentPage.value = reviewData.currentPage
    }
    console.log('reviews value',reviewsArr.value)
  } catch (error) {
    console.error('An unexpected error occurred:', error);
  }
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