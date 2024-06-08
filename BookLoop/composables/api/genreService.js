import { useNuxtApp } from '#app';

/**
 * Service to handle API calls for genres.
 */
export function useGenreService() {
  const { $api } = useNuxtApp();

  /**
   * Fetch genres with pagination.
   *
   * @param {number} page - The page number to fetch.
   * @param {number} limit - The number of genres per page.
   * @returns {Promise<Object>} - The response data containing genres.
   */
  const fetchGenres = async (filterPage = 1, filterLimit = 10) => {
    try {
      const response = await $api.get('/genres', {
  
        params: { filterPage, filterLimit, simple: true }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    fetchGenres
  };
}
