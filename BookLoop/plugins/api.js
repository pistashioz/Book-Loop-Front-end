import axios from 'axios';
import { useUserStore } from '~/composables/stores/user';
import { useRouter } from '#imports';

export default defineNuxtPlugin(nuxtApp => {
  const router = useRouter();
  const api = axios.create({
    baseURL: nuxtApp.$config.public.apiBaseUrl,
    withCredentials: true,
  });

  api.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config;
      const userStore = useUserStore();

      if (error.response?.status === 401 && error.response.data?.refresh && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          console.log("Refreshing tokens...");
          const { data } = await api.post('/users/me/refresh');
          return api(originalRequest);
        } catch (err) {
          userStore.clearUser();
          await router.push('/login');
          return Promise.reject(err);
        }
      }

      if (error.response?.status === 403 && error.response.data?.redirectTo) {
        console.log("Redirecting to login page...");
        userStore.logout();
        userStore.clearUser();
        await router.push(error.response.data.redirectTo);
      }

      return Promise.reject(error);
    }
  );

  return {
    provide: {
      api,
    },
  };
});
