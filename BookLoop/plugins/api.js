// plugins/axios.js
import axios from 'axios';
import { useUserStore } from '~/composables/stores/user';
import { useRouter } from '#imports';

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();
  
  const api = axios.create({
    baseURL: nuxtApp.$config.public.apiBaseUrl,
    withCredentials: true, // Ensure cookies are sent with requests
  });

  // Response interceptor to handle token refresh and redirection
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      const userStore = useUserStore();
      console.log(error.response.data);
      console.log(error.config);

      // Check for both a 401 Unauthorized response and a custom 'refresh' flag in the response data
      if (error.response.status === 401 && error.response.data.refresh && !originalRequest._retry) {
        originalRequest._retry = true; // Mark this request as retried

        try {
          // Attempt to refresh the tokens by calling the refresh endpoint
          console.log('Refreshing tokens...');
          const { data } = await api.post('/users/me/refresh');
          // Retry the original request
          console.log(originalRequest);
          return api(originalRequest);

        } catch (err) {
          // Clear user data if token refresh fails
          userStore.clearUser();
          return Promise.reject(err);
        }
      }

      // Check for a 403 Forbidden response with a redirectTo flag
      if (error.response.status === 403 && error.response.data.redirectTo) {
        console.log('Redirecting to login page...');
        // Clear user data and redirect to the login page
        userStore.logout();
        userStore.clearUser();
        await router.push(error.response.data.redirectTo);
        return Promise.reject(error);
      }

      // Handle other errors
      return Promise.reject(error);
    }
  );

  return {
    provide: {
      api: api,
    },
  };
});
