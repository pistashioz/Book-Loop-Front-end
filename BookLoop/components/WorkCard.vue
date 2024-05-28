<template>
  <div class="group relative">
    <NuxtLink :to="`/works/${work.workId}`">
      <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img v-if="coverImage" alt="Book Cover" :src="coverImage" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
      </div>
    </NuxtLink>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">{{ work.originalTitle }}</h3>
        <p class="mt-1 text-sm text-gray-500" v-if="work.author">{{ work.author }}</p>
      </div>
      <button class="text-sm font-medium text-gray-900" @click="openAddEditionModal(work)">Add Edition</button>
    </div>
  </div>

  <SavedModal v-if="showModal" @close-modal="showModal = false" :work="selectedWorkId" @edition-added="handleEditionAdded"/>
</template>

<script setup>
import { ref } from 'vue';
import SavedModal from '~/components/addEdition.vue';

const props = defineProps({
  work: Object,
  coverImage: String,
});

const showModal = ref(false);
const selectedWorkId = ref(null);

const openAddEditionModal = (work) => {
  selectedWorkId.value = work;
  showModal.value = true;
};

const handleEditionAdded = (newEdition) => {
  selectedWork.value.bookEditions.push(newEdition);
};
</script>
