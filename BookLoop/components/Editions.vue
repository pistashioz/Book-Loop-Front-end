<template>
    <section class="text-gray-700 body-font overflow-hidden bg-white">
      <div class="p-1 flex flex-wrap items-center justify-center">
        <div 
          class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group bg-edition" 
          v-for="edition in editions" 
          :key="edition.ISBN"
        >
          <svg 
            class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283" fill="none" style="opacity: 0.1;">
            </svg>
          <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div class="block absolute w-48 h-48 bottom-5 left-0 -mb-24 ml-3"
                style="background: radial-gradient(black, transparent 70%); transform: rotate3d(0, 0, 1, 0deg) scale3d(1.5, 0.5,1.5); opacity: 0.2;">
            </div>
            <img class="relative w-40" :src="edition.coverImage" >
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
    required: true
  },
  work: {
      type: Object,
      required: true
  }
});

</script>


<style scoped>

.bg-edition {
  background-color: #CDD3D9
}


</style>