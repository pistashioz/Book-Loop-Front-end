<template>
  <div class="flex flex-col items-center space-y-4 h-full overflow-hidden">
    <section id="profile-section" class="flex w-full laptop:w-7/12 border rounded-lg p-4 items-start gap-x-8">
      <div id="avatar" class="relative w-36 h-36 overflow-hidden flex items-end bg-gray-100 rounded-full dark:bg-gray-600"></div>
      <div id="right-wrapper" class="flex h-36 flex-col flex-grow gap-y-2">
        <header id="first-wrapper" class="flex justify-between items-start">
          <div id="user-n-reviews" class="w-9/12">
            <h1 class="text-base font-bold dark:text-white">{{ profile.username }}</h1>
            <p id="bio" class="text-xs font-satoshi-medium text-gray-900 dark:text-white" v-if="profile.about">{{ profile.about }}</p>
            <p id="bio" class="text-xs font-satoshi-medium text-gray-900 dark:text-white" v-else>Bio not set</p>
            <div id="purchase-reviews" class="flex gap-x-2">
              <span class="flex">
                <template v-for="n in starRating.fullStars" :key="'full-' + n">
                  <svg class="w-6 h-6 text-accent-starsYellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                  </svg>
                </template>
                <template v-if="starRating.halfStars">
                  <svg class="w-6 h-6 text-accent-starsYellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M13 4.024v-.005c0-.053.002-.353-.217-.632a1.013 1.013 0 0 0-1.176-.315c-.192.076-.315.193-.35.225-.052.05-.094.1-.122.134a4.358 4.358 0 0 0-.31.457c-.207.343-.484.84-.773 1.375a168.719 168.719 0 0 0-1.606 3.074h-.002l-4.599.367c-1.775.14-2.495 2.339-1.143 3.488L6.17 15.14l-1.06 4.406c-.412 1.72 1.472 3.078 2.992 2.157l3.94-2.388c.592-.359.958-.996.958-1.692v-13.6Zm-2.002 0v.025-.025Z" clip-rule="evenodd"/>
                  </svg>
                </template>
                <template v-for="n in starRating.emptyStars" :key="'empty-' + n">
                  <svg class="w-6 h-6 text-gray-300 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
                  </svg>
                </template>
              </span>
              <span>{{ profile.sellerReviewCount }} reviews</span>
            </div>
          </div>
          <div class="button-wrapper flex gap-x-1">
            <button v-if="!profile.isCurrentUser && !profile.isFollowing" @click="followUser" type="button" class="py-2.5 px-4 w-fit h-fit text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Follow</button>
            <button v-if="!profile.isCurrentUser && profile.isFollowing" @click="unfollowUser" type="button" class="py-2.5 px-4 w-fit h-fit text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Unfollow</button>
            <button v-if="!profile.isCurrentUser" type="button" class="py-2.5 px-4 w-fit h-fit text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</button>
            <button v-if="profile.isCurrentUser" type="button" class="py-2.5 px-4 w-fit h-fit text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" @click="navigateToEditProfile">Edit My Profile</button>
          </div>
        </header>

        <!-- About and Actions Section -->
        <section id="second-wrapper" class="flex justify-between items-end">
          <div id="about" class="flex flex-col items-start">
            <h2 class="text-xs font-satoshi-medium text-gray-700 dark:text-white uppercase mb-1 ml-1">About</h2>
            <address id="location" class="flex items-end gap-x-2">
              <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
              </svg>
              <p v-if="profile.postalCodeDetails" class="text-xs font-satoshi-medium text-gray-900 dark:text-white">{{ profile.postalCodeDetails.locality }}, {{ profile.postalCodeDetails.country }}</p>
              <p v-else class="text-xs font-satoshi-medium text-gray-900 dark:text-white">This user has no location set</p>
            </address>
            <div id="following" class="flex items-end gap-x-2 mt-2">
              <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 1 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 1 1 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
              </svg>
              <p class="text-xs font-satoshi-medium text-gray-900 dark:text-white cursor-pointer" @click="showFollowersModal">{{ profile.followersCount }} followers</p>, 
              <p class="text-xs font-satoshi-medium text-gray-900 dark:text-white cursor-pointer" @click="showFollowingModal">following {{ profile.followingCount }}</p>
            </div>
          </div>
          <div class="flex flex-col items-end gap-x-2 gap-y-2">
            <div id="socials" v-if="profile.userSocialMedias.length" class="flex gap-x-2 items-center h-fit">
              <h2 class="text-xs font-satoshi-medium text-gray-700 dark:text-white uppercase ml-1">Socials:</h2>
              <div id="socials-wrapper" class="flex gap-2">
                <template v-for="social in profile.userSocialMedias" :key="social.platform">
                  <a :href="social.url" target="_blank" class="text-xs font-satoshi-medium text-gray-900 dark:text-white capitalize">{{ social.platform }}</a>
                </template>
              </div>
            </div>
            <div class="deliverByHand-wrapper flex gap-x-3 items-center">
              <label for="deliver-toggle" class="text-xs font-satoshi-medium text-gray-700 dark:text-white">Deliver by hand?</label>
              <input type="checkbox" id="deliver-toggle" class="sr-only peer" v-model="deliverByHand" disabled>
              <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <!-- Listings Section -->
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
      <div id="content-holder" class="flex flex-col flex-grow border rounded-2xl w-full p-4 overflow-auto mb-4" @scroll="onScroll">
        <p class="text-xs px-4 py-2.5 border w-fit mb-3 rounded-full font-satoshi-medium text-gray-900 dark:text-white">This user has {{ profile.listings.count }} books for sale!</p>
        <div id="listing-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="listing in profile.listings.rows" :key="listing.listingId" class="bg-gray-100 border border-gray-200 rounded-lg p-4 relative laptop:h-80 sm:h-64 laptop:w-full sm:w-52 cursor-pointer" @click="navigateToListing(listing.listingId)" @mouseenter="delayedShowTooltip($event, listing.listingTitle)" @mouseleave="hideTooltip">
            <div :style="{ backgroundImage: `url(${listing.ListingImages[0]?.imageUrl || ''})` }" class="bg-cover bg-center w-full h-5/6 relative">
              <p class="absolute top-2 left-2 text-xs font-satoshi-medium text-gray-900 dark:text-white">{{ listing.BookEdition.title }}</p>
              <div class="absolute bottom-2 right-2 flex items-center gap-x-1 border rounded-full w-fit h-fit py-1 px-2.5 bg-gray-50">
                <button @mouseenter="toggleLikeIcon(listing.listingId, true)" @mouseleave="toggleLikeIcon(listing.listingId, false)" @click.stop="listing.isLiked ? unlikeListing(listing.listingId) : likeListing(listing.listingId)">
                  <svg v-if="listing.isLiked || hovered[listing.listingId]" class="w-[14px] h-[14px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
                  </svg>
                  <svg v-else class="w-[14px] h-[14px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                  </svg>
                </button>
                <p class="text-xs font-satoshi-medium text-gray-900 dark:text-white">{{ listing.likesCount }}</p>
              </div>
            </div>
            <div id="listing-details" class="mt-2 flex flex-col items-start">
              <p class="text-xs font-satoshi-medium text-gray-900 dark:text-white">{{ listing.listingCondition }}</p>
              <p class="text-xs font-satoshi-medium text-gray-900 dark:text-white">{{ listing.price }} €</p>
              <a :href="`/works/${listing.BookEdition.PrimaryWork?.workId}/editions/${listing.BookEdition.UUID}`" class="text-xs font-satoshi-medium text-gray-900 dark:text-white" @click.stop>Check the book</a>
            </div>
          </div>
        </div>
      </div>
      <div id="tooltip" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 transition-opacity duration-300"></div>
    </section>

    <!-- Followers Modal -->
    <div id="followers-modal" tabindex="-1" aria-hidden="true" class="fixed inset-0 z-50 hidden w-full h-full overflow-y-auto overflow-x-hidden">
      <div class="relative w-full h-full max-w-md p-4 md:h-auto mx-auto mt-10">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Followers</h3>
            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" @click="hideFollowersModal">
              <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-4 space-y-2">
            <div v-for="follower in followers" :key="follower.MainUser.userId" class="flex items-center space-x-3">
              <img :src="follower.MainUser.profileImage" class="w-10 h-10 rounded-full">
              <span>{{ follower.MainUser.username }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Following Modal -->
    <div id="following-modal" tabindex="-1" aria-hidden="true" class="fixed inset-0 z-50 hidden w-full h-full overflow-y-auto overflow-x-hidden">
      <div class="relative w-full h-full max-w-md p-4 md:h-auto mx-auto mt-10">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Following</h3>
            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" @click="hideFollowingModal">
              <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-4 space-y-2">
            <div v-for="user in following" :key="user.FollowedUser.userId" class="flex items-center space-x-3">
              <img :src="user.FollowedUser.profileImage" class="w-10 h-10 rounded-full">
              <span>{{ user.FollowedUser.username }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="tooltip" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 transition-opacity duration-300"></div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Modal } from 'flowbite';
import { useUserService } from '~/composables/api/userService';
import { useWishlistService } from '~/composables/api/wishlistService';

const { followUser: followUserService, unfollowUser: unfollowUserService, getFollowers, getFollowing } = useUserService();
const { addListingToWishlist, removeListingFromWishlist } = useWishlistService();

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

const profile = ref(props.data);
const currentPage = ref(1);
const listingsPerPage = 8;
const hovered = ref({});
const tooltipTimeout = ref(null);

const followers = ref([]);
const following = ref([]);

watch(() => props.data, (newVal) => {
  profile.value = newVal;
}, { immediate: true });

const deliverByHand = computed(() => profile.value.deliverByHand);

const starRating = computed(() => {
  const rating = parseFloat(profile.value.sellerAverageRating);
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;
  return { fullStars, halfStars, emptyStars };
});

onMounted(() => {
  console.log(profile.value.deliverByHand);
});

const router = useRouter();

const navigateToListing = (listingId) => {
  router.push(`/listings/${listingId}`);
};

const navigateToEditProfile = () => {
  router.push('/users/me/settings?type=profile');
};

const toggleLikeIcon = (listingId, isHovered) => {
  hovered.value = { ...hovered.value, [listingId]: isHovered };
};

const follow = async () => {
  try {
    await followUserService(profile.value.userId);
    profile.value.isFollowing = true;
    profile.value.followersCount += 1;
  } catch (error) {
    console.error('Error following user:', error);
  }
};

const unfollow = async () => {
  try {
    await unfollowUserService(profile.value.userId);
    profile.value.isFollowing = false;
    if (profile.value.followersCount > 0) {
      profile.value.followersCount -= 1;
    }
  } catch (error) {
    console.error('Error unfollowing user:', error);
  }
};

const likeListing = async (listingId) => {
  try {
    await addListingToWishlist(listingId);
    const listing = profile.value.listings.rows.find((item) => item.listingId === listingId);
    if (listing) {
      listing.isLiked = true;
      listing.likesCount += 1;
    }
  } catch (error) {
    console.error('Error liking listing:', error);
  }
};

const unlikeListing = async (listingId) => {
  try {
    await removeListingFromWishlist(listingId);
    const listing = profile.value.listings.rows.find((item) => item.listingId === listingId);
    if (listing) {
      listing.isLiked = false;
      if (listing.likesCount > 0) {
        listing.likesCount -= 1;
      }
    }
  } catch (error) {
    console.error('Error unliking listing:', error);
  }
};

const onScroll = async (event) => {
  const element = event.target;
  if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    await loadMoreListings();
  }
};

const loadMoreListings = async () => {
  if (currentPage.value * listingsPerPage >= profile.value.listings.count) return;

  const response = await fetch(`/api/listings?page=${currentPage.value + 1}`);
  const newData = await response.json();

  profile.value.listings.rows.push(...newData.rows);
  currentPage.value += 1;
};

const delayedShowTooltip = (event, listingTitle) => {
  // Clear any existing timeouts
  clearTimeout(tooltipTimeout.value);
  
  // Get the tooltip element
  const tooltip = document.getElementById('tooltip');
  
  // Set the tooltip content and position it near the mouse
  tooltip.textContent = listingTitle;
  tooltip.style.left = `${event.clientX + 10}px`;
  tooltip.style.top = `${event.clientY + 10}px`;
  
  // Show the tooltip with a delay
  tooltipTimeout.value = setTimeout(() => {
    tooltip.classList.remove('invisible', 'opacity-0');
  }, 500); // 0.5-second delay
};

// Function to hide the tooltip
const hideTooltip = () => {
  clearTimeout(tooltipTimeout.value);
  const tooltip = document.getElementById('tooltip');
  tooltip.classList.add('invisible', 'opacity-0');
};

// Function to update tooltip position on mouse move
const updateTooltipPosition = (event) => {
  const tooltip = document.getElementById('tooltip');
  tooltip.style.left = `${event.clientX + 10}px`;
  tooltip.style.top = `${event.clientY + 10}px`;
};

// Add event listeners to update tooltip position on mouse move
document.addEventListener('mousemove', updateTooltipPosition);

const showFollowersModal = async () => {
  try {
    const response = await getFollowers(profile.value.userId);
    followers.value = response.data;
    const modal = new Modal(document.getElementById('followers-modal'));
    modal.show();
  } catch (error) {
    console.error('Error fetching followers:', error);
  }
};

const hideFollowersModal = () => {
  const modal = Modal.getInstance(document.getElementById('followers-modal'));
  modal.hide();
};

const showFollowingModal = async () => {
  try {
    const response = await getFollowing(profile.value.userId);
    following.value = response.data;
    const modal = new Modal(document.getElementById('following-modal'));
    modal.show();
  } catch (error) {
    console.error('Error fetching following:', error);
  }
};

const hideFollowingModal = () => {
  const modal = Modal.getInstance(document.getElementById('following-modal'));
  modal.hide();
};
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

.tooltip {
  transition: opacity 0.3s ease;
}
</style>
