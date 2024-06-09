<template>
  <div>
    <div v-if="favoriteAuthorsPending || allAuthorsPending">Loading...</div>
    <div v-else>
      <Container :message="message" @update-profile="updateProfile">
        <template #default>
          <FavoriteAuthors
            ref="favoriteAuthorsRef"
            :data="favoriteAuthorsData"
            @unfollow-author="unfollowAuthor"
            @follow-author="handleFollowAuthor"
            @update-message="updateMessage"
          />
        </template>
        <template #secondary>
          <AllAuthors
            :data="allAuthorsData"
            :favoriteAuthors="favoriteAuthorsData"
            @follow-author="handleFollowAuthor"
            @unfollow-author="handleUnfollowAuthor"
            @update-message="updateMessage"
          />
        </template>
      </Container>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserService } from '~/composables/api/userService';
import { useAuthorService } from '~/composables/api/authorService';
import { useAsyncData } from '#imports';

definePageMeta({
  layout: 'settings'
});

// Initialize services
const route = useRoute();
const router = useRouter();
const { fetchUserData, updateUserData, addFavoriteAuthor, removeFavoriteAuthor } = useUserService();
const { fetchAuthorsByLetter } = useAuthorService();

// Ref for accessing component data
const favoriteAuthorsRef = ref(null);
const selectedLetter = ref('A');
const currentPage = ref(1);

// Message for displaying error/success messages
const message = ref({ text: '', isSuccess: true });

// Function to display messages
const displayMessage = (msg, isSuccess) => {
  message.value.text = msg;
  message.value.isSuccess = isSuccess;
  setTimeout(() => {
    message.value.text = '';
  }, 5000);
};

// Fetch favorite authors data
const { data: favoriteAuthorsData, pending: favoriteAuthorsPending } = await useAsyncData(
  'favoriteAuthors',
  () => fetchUserData(route.fullPath)
);

// Fetch all authors data with pagination based on the selected letter
const { data: allAuthorsData, pending: allAuthorsPending, refresh: refreshAuthors } = await useAsyncData(
  'allAuthors',
  () => fetchAuthorsByLetter(selectedLetter.value, currentPage.value).then(response => response.persons),
  { watch: [selectedLetter, currentPage] }
);

// Handle follow author event
const handleFollowAuthor = (author) => {
  if (!favoriteAuthorsData.value.some(a => a.person.personId === author.person.personId)) {
    favoriteAuthorsData.value.push(author);
  }
};

// Handle unfollow author event
const handleUnfollowAuthor = (authorId) => {
  favoriteAuthorsData.value = favoriteAuthorsData.value.filter(a => a.person.personId !== authorId);
};

// Function to update message
const updateMessage = (msg) => {
  displayMessage(msg.text, msg.isSuccess);
};


// Function to unfollow an author
const unfollowAuthor = async (authorId) => {
  try {
    const author = favoriteAuthorsData.value.find(a => a.person.personId === authorId);
    allAuthorsData.value.push(author.person);
    favoriteAuthorsData.value = favoriteAuthorsData.value.filter(a => a.person.personId !== authorId);
  } catch (error) {
    displayMessage(error.response.data.message, false);
    console.error('Failed to unfollow author:', error);
  }
};

// Function to handle profile update
const updateProfile = async () => {
  let profileUpdateData = {};

  if (favoriteAuthorsRef.value) {
    profileUpdateData = {
      favoriteAuthors: favoriteAuthorsRef.value.authors
    };
  }

  try {
    await updateUserData(route.fullPath, profileUpdateData);
  } catch (error) {
    console.error('Failed to update profile:', error);
  }
};
</script>
