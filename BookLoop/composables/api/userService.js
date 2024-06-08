import { useNuxtApp } from '#app';

export function useUserService() {
  const { $api } = useNuxtApp();

  const fetchUserData = async (path) => {
    try {
      console.log('fetching user data at path: ', path);
      const response = await $api.get(path);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const updateUserData = async (path, data) => {
    try {
      const response = await $api.patch(path, data);
      return response.data;
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

  /**
   * Add a favorite genre.
   *
   * @param {Object} genre - The genre data.
   * @returns {Promise<Object>} - The response data.
   */
  const addFavoriteGenre = async (genre) => {
    try {
      const response = await $api.post('users/me/favorite-genres', genre);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  /**
   * Remove a favorite genre.
   *
   * @param {number} genreId - The genre ID.
   * @returns {Promise<Object>} - The response data.
   */
  const removeFavoriteGenre = async (genreId) => {
    try {
      const response = await $api.delete(`users/me/favorite-genres/${genreId}`);
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
    removeFavoriteGenre
  };
}
