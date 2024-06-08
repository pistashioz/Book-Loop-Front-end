import { useNuxtApp } from '#app';

export function useAuthorService() {
  const { $api } = useNuxtApp();

  /**
   * Fetch all authors with pagination.
   *
   * @param {number} page - The page number to fetch.
   * @param {number} limit - The number of authors per page.
   * @returns {Promise<Object>} - The response data containing authors.
   */
  const fetchAllAuthors = async (page = 1, limit = 10) => {
    try {
      const response = await $api.get('/persons', {
        params: { page, limit, role: 'author' }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    fetchAllAuthors,
  };
}
