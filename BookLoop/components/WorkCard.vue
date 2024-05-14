<template>
    <NuxtLink :to="`/works/${work.workId}`" >
    <div class="group relative">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img  v-if="coverImage" alt="Book Cover" :src="coverImage"  class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
                {{ work.originalTitle }}
            </h3>
            <p class="mt-1 text-sm text-gray-500" v-if="work.author">{{ work.author }}</p>
          </div>
        </div>
      </div></NuxtLink>
</template>

<script setup>
const props = defineProps({
  work: Object,
  coverImage: String, 
});
</script>
