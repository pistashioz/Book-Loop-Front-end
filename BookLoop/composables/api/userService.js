import { useNuxtApp } from '#app';

export function useUserService() {
  const { $api } = useNuxtApp();

  const fetchUserData = async (path) => {
    try {
      console.log('fetching user data at path: ', path);
      const response = await $api.get(path);

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const updateUserData = async (path, data) => {
    try {
      const response = await $api.patch(path, data);
      return response;  // Return full response to handle status in the front-end
    } catch (error) {
      throw error;
    }
  };

  const updateUserAddress = async (data) => {
    try {
      const response = await $api.patch('/users/me/address', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const addFavoriteGenre = async (genre) => {
    try {
      const response = await $api.post('users/me/favorite-genres', genre);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const removeFavoriteGenre = async (genreId) => {
    try {
      const response = await $api.delete(`users/me/favorite-genres/${genreId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const addFavoriteAuthor = async (author) => {
    try {
      const response = await $api.post('users/me/favorite-authors', author);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const removeFavoriteAuthor = async (authorId) => {
    try {
      const response = await $api.delete(`users/me/favorite-authors/${authorId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    fetchUserData,
    updateUserData,
    updateUserAddress,
    addFavoriteGenre,
    removeFavoriteGenre,
    addFavoriteAuthor,
    removeFavoriteAuthor
  };
}
