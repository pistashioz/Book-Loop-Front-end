import { useNuxtApp } from '#app';

export function useWishlistService() {
  const { $api } = useNuxtApp();

  const addListingToWishlist = async (listingId) => {
    try {
      const response = await $api.post('/wishlist', { listingId });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const removeListingFromWishlist = async (listingId) => {
    try {
      const response = await $api.delete(`/wishlist/${listingId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    addListingToWishlist,
    removeListingFromWishlist,
  };
}