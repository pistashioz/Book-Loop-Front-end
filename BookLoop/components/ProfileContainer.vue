<template>
  <div class="flex flex-col items-center space-y-4 h-full overflow-hidden">
    <section id="profile-section" class="flex w-full laptop:w-7/12 border rounded-lg p-4 items-start gap-x-8">
      <!-- Avatar Section -->
      <div id="avatar" class="relative w-36 h-36 overflow-hidden flex items-end bg-gray-100 rounded-full dark:bg-gray-600">
        <!-- Avatar Image or Placeholder SVG can go here -->
      </div>

      <!-- Right Wrapper Section -->
      <div id="right-wrapper" class="flex h-36 flex-col flex-grow gap-y-2">
        <!-- User and Reviews Section -->
        <header id="first-wrapper" class="flex justify-between items-center">
          <div id="user-n-reviews">
            <h1 class="text-base font-bold dark:text-white">{{ profile.username }}</h1>
            <div id="purchase-reviews" class="flex gap-x-2">
              <span aria-label="Rating: 5 out of 5">⭐⭐⭐⭐⭐</span>
              <span>{{ profile.sellerReviewCount }} reviews</span>
            </div>
          </div>
          <button type="button" class="py-2.5 px-5 w-fit h-fit text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Edit Profile</button>
        </header>

        <!-- About and Actions Section -->
        <section id="second-wrapper" class="flex justify-between items-end">
          <div id="about" class="flex flex-col items-start">
            <h2 class="text-xs font-satoshi-medium text-gray-700 dark:text-white uppercase mb-1 ml-1">About</h2>
            <address id="location" class="flex items-end gap-x-2">
              <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
              </svg>
              <p class="text-xs font-satoshi-medium text-gray-900 dark:text-white">Vila do Conde, Portugal</p>
            </address>
            <div id="following" class="flex items-end gap-x-2 mt-2">
              <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 1 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 1 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
              </svg>
              <p class="text-xs font-satoshi-medium text-gray-900 dark:text-white">{{ profile.followersCount }} followers, following {{ profile.followingCount }}</p>
            </div>
          </div>
          <div class="flex items-center gap-x-2">
            <label for="deliver-toggle" class="text-xs font-satoshi-medium text-gray-700 dark:text-white">Deliver by hand?</label>
            <input type="checkbox" id="deliver-toggle" class="sr-only peer" v-model="deliverByHand" disabled>
            <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </div>
        </section>
      </div>
    </section>

    <section id="main-container" class="flex flex-col w-full laptop:w-7/12 items-start flex-grow overflow-hidden space-y-4">
      <ul class="flex flex-wrap w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li class="me-2">
          <a href="#" aria-current="page" class="inline-block px-4 py-2.5 text-blue-600 bg-gray-100 rounded-3xl active dark:bg-gray-800 dark:text-blue-500">Listings</a>
        </li>
        <li class="me-2">
          <a href="#" class="inline-block px-4 py-2.5 rounded-3xl hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Purchase Reviews</a>
        </li>
        <li class="me-2">
          <a href="#" class="inline-block px-4 py-2.5 rounded-3xl hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Literary Reviews</a>
        </li>
      </ul>
      <div id="content-holder" class="flex flex-col flex-grow border rounded-2xl w-full overflow-auto mb-4">
        <!-- Main content goes here -->
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

const profile = ref(props.data);

watch(() => props.data, (newVal) => {
  profile.value = newVal;
}, { immediate: true });

const deliverByHand = computed(() => profile.value.deliverByHand);

onMounted(() => {
  console.log(profile.value.deliverByHand);
});
</script>

<style scoped>
#profile-section {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

#avatar {
  width: 9rem;
  height: 9rem;
  overflow: hidden;
  flex: none;
  background-color: #e2e8f0;
  border-radius: 50%;
}

#right-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#main-container {
  height: 100%;
}
</style>
