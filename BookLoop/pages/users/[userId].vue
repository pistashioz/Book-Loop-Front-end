<template>
  <div class="flex flex-col h-screen  mb-8 ">
    <ProfileContainer :data="data" v-if="!loading" />
    <div v-else>Loading...</div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserService } from '~/composables/api/userService';

definePageMeta({
  layout: 'profile'
});

const route = useRoute();
const router = useRouter();
const { getUserProfile } = useUserService();

const data = ref(null);
const loading = ref(false);
const isError = ref(false);
const errorMessage = ref(null);

const userId = useRoute().params.userId;

const fetchData = async (userId) => {
  loading.value = true;
  try {
    data.value = await getUserProfile(userId);
    console.log(data.value);
  } catch (error) {
    isError.value = true;
    errorMessage.value = error.message;
  } finally {
    loading.value = false;
  }
};

watch(
  () => route.params.userId,
  (newType) => {
    fetchData(userId);
  },
  { immediate: true }
);

onMounted(() => {
  fetchData(userId);
});
</script>

<style scoped>
/* Add any required styles here */
</style>
