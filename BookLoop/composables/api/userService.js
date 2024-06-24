import { useNuxtApp } from '#app';

export function useUserService() {
  const { $api } = useNuxtApp();

  // Helper function to fetch user data from a given path
  const fetchUserData = async (path) => {
    try {
      console.log('fetching user data at path: ', path);
      const response = await $api.get(path);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const updateUserData = async (path, data, config = {}) => {
    try {
      const response = await $api.patch(path, data, config);
      return response; // Return full response to handle status in the front-end
    } catch (error) {
      throw error;
    }
  };
  
  
  // Update user address
  const updateUserAddress = async (data) => {
    try {
      const response = await $api.patch('/users/me/address', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Add a favorite genre
  const addFavoriteGenre = async (genre) => {
    try {
      const response = await $api.post('users/me/favorite-genres', genre);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Remove a favorite genre
  const removeFavoriteGenre = async (genreId) => {
    try {
      const response = await $api.delete(`users/me/favorite-genres/${genreId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Add a favorite author
  const addFavoriteAuthor = async (author) => {
    try {
      const response = await $api.post('users/me/favorite-authors', author);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Remove a favorite author
  const removeFavoriteAuthor = async (authorId) => {
    try {
      const response = await $api.delete(`users/me/favorite-authors/${authorId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Get user profile
  const getUserProfile = async (userId, tab) => {
    try {
      let path;
      if (!tab) {
        path = `users/${userId}`
      } else {
        console.log(tab)
        path = `users/${userId}?tab=${tab.tab}`
      }
      const response = await $api.get(path);
      console.log(response.data)
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Follow a user
  const followUser = async (targetUserId) => {
    try {
      const response = await $api.post('/users/me/follow', { targetUserId });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Unfollow a user
  const unfollowUser = async (followedUserId) => {
    try {
      const response = await $api.delete(`/users/me/following/${followedUserId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const getFollowers = async (userId, page = 1, limit = 10) => {
    try {
      const response = await $api.get(`users/${userId}/followers`, { params: { page, limit } });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const getFollowing = async (userId, page = 1, limit = 10) => {
    try {
      const response = await $api.get(`users/${userId}/following`, { params: { page, limit } });
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
    removeFavoriteAuthor,
    getUserProfile,
    followUser,
    unfollowUser,
    getFollowers,
    getFollowing
  };
}
