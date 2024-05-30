<template>
  <section class="text-gray-700 body-font overflow-hidden bg-white">
    <div class="p-1 flex flex-wrap items-center justify-center">
      <div 
        class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group bg-edition" 
        v-for="edition in work.BookEditions" 
        :key="edition.ISBN"
      >
        <svg 
          class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
          viewBox="0 0 375 283" fill="none" style="opacity: 0.1;"
        >
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <div class="block absolute w-48 h-48 bottom-5 left-0 -mb-24 ml-3"
            style="background: radial-gradient(black, transparent 70%); transform: rotate3d(0, 0, 1, 0deg) scale3d(1.5, 0.5,1.5); opacity: 0.2;">
          </div>
          <img class="relative w-40" :src="edition.coverImage" :alt="edition.title" />
        </div>
        <div class="relative text-white px-6 pb-6 mt-6 bg-edition">
          <span class="block opacity-75 -mb-1">{{ edition.language }}</span>
          <div class="flex justify-between">
            <span class="block font-semibold text-xl">{{ edition.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  editions: {
    type: Array,
    required: true,
  },
  bookEditions: {
    type: Array,
    required: false,
  },
  work: {
    type: Object,
    required: true,
  },
});

</script>

<style scoped>
.bg-edition {
  background-color: #CDD3D9;
}
</style>
