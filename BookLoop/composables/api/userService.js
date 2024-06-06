import { useNuxtApp } from '#app';

export function useUserService() {
  const { $api } = useNuxtApp();

  const fetchUserData = async (path) => {
    try {
      const response = await $api.get(path);
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

  return {
    fetchUserData,
    updateUserData,
    updateUserAddress
  };
}
