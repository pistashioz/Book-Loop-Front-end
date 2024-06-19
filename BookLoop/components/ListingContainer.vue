<template>
  <div v-if="listing" class="flex flex-col items-center h-full overflow-hidden">
    <section class="laptop:w-7/12 space-y-3">
      <h1 class="font-cabinet text-6xl dark:text-white">{{ listing.listingTitle }}</h1>
      <p class="text-sm font-satoshi-medium text-gray-300 dark:text-white uppercase">{{ listing.listingDescription }}</p>
      <div id="price-condition-date" class="flex gap-x-3 justify-between">

     
        <section id="user-wrapper" class="flex items-start gap-x-4 w-fit">
        <img :src="listing.seller.profileImage || '/default-profile.png'" class="w-12 h-12 rounded-full bg-accent-lightLilac" alt="Profile Image">
        <div id="purchase-reviews" class="flex gap-x-3 flex-col items-start"> 
          <h6 class="text-base font-cabinet font-bold dark:text-white h-fit">
            <NuxtLink :to="`/users/${listing.seller.userId}`" @click.stop>{{ listing.seller.username }}</NuxtLink>
            </h6>
          <span class="flex items-center h-full justify-between">
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
              <svg class="w-4 h-4 text-gray-300 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
              </svg>
            </template>
            <span class="ml-1">{{ listing.seller.purchaseReviewsCount }} reviews</span>
          </span>
        </div>
      </section>
      <span class="flex gap-x-3 items-center">
          <p class="text-lg font-satoshi-medium text-gray-800 border-gray-800 dark:text-white border rounded-full py-2.5 px-5 w-fit bg-accent-lightLilac">{{ listing.price }}</p>
        <p class="text-lg font-satoshi-medium text-gray-800 border-gray-800 dark:text-white border rounded-full py-2.5 px-5 w-fit bg-accent-calmYellow">{{ listing.listingCondition }}</p>
        <p class="text-lg font-satoshi-medium text-gray-800 border-gray-800 dark:text-white border rounded-full py-2.5 px-5 w-fit bg-green-200">{{ formatDate(listing.listingDate) }}</p>
        </span>
      </div>


      <div class="image-book-wrapper flex justify-between items-start h-[550px] uppercase text-sm font-satoshi">
        <Carousel :images="listing.listingImages" class=""/>
        <div class="book-info flex flex-col justify-between h-full">
          <span class="flex flex-col gap-y-1 text-right">
            <p class="uppercase text-sm font-satoshi hover:underline underline-offset-2">
              <NuxtLink :to="`/works/${listing.book.workId}/editions/${listing.book.UUID}`">{{ listing.book.title }}</NuxtLink>

              </p>
            <p class="font-satoshi text-xs">by</p>
            <p v-for="author in listing.book.authors" :key="author" class="uppercase text-sm font-satoshi hover:underline underline-offset-2">
              <NuxtLink :to="`/persons/${author.personId}`" @click.stop>       {{ author.personName }}</NuxtLink>
       
            </p>
          </span>
          <div id="at-bottom" class="flex flex-col gap-y-1 justify-end text-right items-end" >
            <p class="text-gray-300 text-xs">{{ listing.book.ISBN }}</p>

          <p class="text-gray-300 text-xs uppercase ">{{ listing.book.editionType }}</p>
          <p class="text-gray-300 text-xs uppercase ">{{ listing.book.pageNumber }} Pages</p>


            <span id="genre-wrapper" class="flex uppercase font-satoshi text-sm gap-x-6 justify-around">
            
            <p v-for="genre in listing.book.genres" :key="genre" class="hover:underline underline-offset-2">
              <NuxtLink :to="`/genres/${genre.genreId}`" @click.stop>   {{ genre.genreName }}</NuxtLink>
             </p>
          </span>
          </div>


        </div>
      </div>
    </section>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup>
import Carousel from '~/components/Carousel.vue';

const props = defineProps({
  listing: {
    type: Object,
    required: true
  }
});

onMounted(() => {
  console.log(props.listing);
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

console.log(props.listing);

const starRating = computed(() => {
  const rating = parseFloat(props.listing.seller.averageRating);
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;
  return { fullStars, halfStars, emptyStars };
});
</script>

<style scoped>
/* Adicione estilos conforme necessário */
</style>
