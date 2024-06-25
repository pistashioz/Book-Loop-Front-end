import { useNuxtApp } from '#app';

export function useApiService() {
  const { $api } = useNuxtApp();

  const fetchEditions = async (limit = 5) => {
    try {
      const response = await $api.get('/works/editions', {
        params: {
          limit
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching editions:', error);
      throw error;
    }
  };

  const fetchListings = async (limit = 5) => {
    try {
      const response = await $api.get('/listings', {
        params: {
          limit
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching listings:', error);
      throw error;
    }
  };

  return {
    fetchEditions,
    fetchListings
  };
}
