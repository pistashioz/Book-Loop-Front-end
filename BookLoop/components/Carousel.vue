<template>
  <div id="indicators-carousel" class="relative w-6/12 h-9/12">
    <!-- Carousel wrapper -->
    <div class="relative h-[500px] overflow-hidden rounded-lg laptop:h-[550px]">
      <div
        v-for="(image, index) in images"
        :id="`image-${index}`"
        :key="index"
        :data-carousel-item="index === 0 ? 'active' : ''"
        :class="{
          hidden: index !== 0,
          'duration-700': true,
          'ease-in-out': true
        }"
      >
        <img
          :src="image"
          class="absolute block w-full  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="Listing image"
        />
      </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-3 left-1/2">
      <button
        v-for="(image, index) in images"
        :key="index"
        type="button"
        :class="getIndicatorClass(index)"
        :aria-current="index === 0"
        :aria-label="'Slide ' + (index + 1)"
        :data-carousel-slide-to="index"
      ></button>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="group absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      id="data-carousel-prev"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800/30 group-hover:bg-gray-100 dark:group-hover:bg-gray-800/60 "
      >
        <svg
          class="w-4 h-4 text-gray-200 dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="group absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      id="data-carousel-next"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800/30 group-hover:bg-gray-100 dark:group-hover:bg-gray-800/60  dark:group-focus:ring-gray-800/70 "
      >
        <svg
          class="w-4 h-4 text-gray-200 dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { Carousel } from 'flowbite';

// Definir propriedades para receber a lista de imagens
const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

const activeIndex = ref(0);

const getIndicatorClass = (index) => {
  return index === activeIndex.value
    ? 'w-3 h-3 bg-white rounded-full'
    : 'w-3 h-3 bg-white/50 hover:bg-white rounded-full';
};

const updateIndicators = (newIndex) => {
  activeIndex.value = newIndex;
};

onMounted(() => {
  const carouselElement = document.getElementById('indicators-carousel');
  
  if (!carouselElement) {
    console.error('Element with ID "indicators-carousel" not found.');
    return;
  }
console.log(props.images.map)
  const items = props.images.map((image, index) => {
    const el = document.getElementById(`image-${index}`);
    if (!el) {
      console.error(`Carousel item at index ${index} not found.`);
    }
    return {
      position: index,
      el
    };
  });

  const validItems = items.filter(item => item.el !== undefined);

  const options = {
    defaultPosition: 0,
    interval: 5000,

    onNext: (carousel) => {
      const newIndex = carousel.getActiveItem().position;
      updateIndicators(newIndex);
      console.log('next slider item is shown');
    },
    onPrev: (carousel) => {
      const newIndex = carousel.getActiveItem().position;
      updateIndicators(newIndex);
      console.log('previous slider item is shown');
    },
    onChange: (carousel) => {
      const newIndex = carousel.getActiveItem().position;
      updateIndicators(newIndex);
      console.log('new slider item has been shown');
    }
  };

  const instanceOptions = {
    id: 'indicators-carousel',
    override: true
  };

  const carousel = new Carousel(carouselElement, validItems, options, instanceOptions);

  const prevButton = document.getElementById('data-carousel-prev');
  const nextButton = document.getElementById('data-carousel-next');

  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
      carousel.prev();
    });

    nextButton.addEventListener('click', () => {
      carousel.next();
    });
  } else {
    console.error('Prev and Next buttons not found');
  }
});
</script>

<style scoped>
/* Adicione estilos conforme necessário */
</style>
