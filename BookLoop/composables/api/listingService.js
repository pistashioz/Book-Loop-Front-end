import { useNuxtApp } from '#app';

export function useListingService() {
    const { $api } = useNuxtApp();

    const createListing = async (listingData) => {
        try {
            const response = await $api.post('listings', listingData);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const findAllListings = async (params) => {
        try {
            const response = await $api.get('listings', { params });
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const findListingById = async (listingId) => {
        try {
            const response = await $api.get(`listings/${listingId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const updateListing = async (listingId, updateData) => {
        try {
            const response = await $api.patch(`listings/${listingId}`, updateData);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    return {
        createListing,
        findAllListings,
        findListingById,
        updateListing,
    };
}
