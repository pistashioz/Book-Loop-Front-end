// utils/api.js
import axios from 'axios';
import { useUserStore } from '~/composables/stores/user';
import { useRouter } from 'vue-router';

const api = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:3360/',
  withCredentials: true, // Ensure cookies are sent with requests
});

// Response interceptor to handle token refresh and redirection
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const userStore = useUserStore();
    const router = useRouter();

    // Check for both a 401 Unauthorized response and a custom 'refresh' flag in the response data
    if (error.response.status === 401 && error.response.data.refresh && !originalRequest._retry) {
      originalRequest._retry = true; // Mark this request as retried

      try {
        // Attempt to refresh the tokens by calling the refresh endpoint
        const { data } = await api.post('/users/me/refresh');
        // Update the user store with new tokens
        userStore.setUser(data.user, data.accessToken);
        // Retry the original request
        return api(originalRequest);
      } catch (err) {
        // Clear user data if token refresh fails
        userStore.clearUser();
        return Promise.reject(err);
      }
    }

    // Check for a 403 Forbidden response with a redirectTo flag
    if (error.response.status === 403 && error.response.data.redirectTo) {
      // Clear user data and redirect to the login page
      userStore.clearUser();
      await router.push(error.response.data.redirectTo);
      return Promise.reject(error);
    }

    // Handle other errors
    return Promise.reject(error);
  }
);

export default api;
