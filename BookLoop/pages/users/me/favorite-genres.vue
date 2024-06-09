<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else>
      <Container @update-profile="updateProfile">
        <FavoriteGenres ref="favoriteGenresRef" :data="data" />
      </Container>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useUserService } from '~/composables/api/userService';
import { useAsyncData } from '#imports';

definePageMeta({
  layout: 'settings',
});

const route = useRoute();
const { fetchUserData } = useUserService();

const favoriteGenresRef = ref(null);
const { data, pending, error, refresh } = await useAsyncData(
  'favoriteGenres',
  () => fetchUserData(route.fullPath),
  { watch: [route.path] }
);

const updateProfile = async () => {
  let profileUpdateData = {};

  if (favoriteGenresRef.value) {
    profileUpdateData = {
      favoriteGenres: favoriteGenresRef.value.genres
    };
  }

  try {
    await updateUserData(route.fullPath, profileUpdateData);
  } catch (error) {
    console.error('Failed to update profile:', error);
  }
};
</script>
