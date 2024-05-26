import { defineStore } from 'pinia';


export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    clearUser() {
      this.user = null;
    },
    async logout() {
      const config = useRuntimeConfig();
      try {
        const { error } = await useFetch(`${config.public.apiBaseUrl}/users/logout`, {
          method: 'POST',
          credentials: 'include'  // Ensure cookies are sent
        });
        if (error.value) {
          throw new Error(error.value.message);
        }
        this.clearUser();
      } catch (err) {
        console.error('Logout failed:', err.message || 'Unknown error');
      }
    },    
  },
});

