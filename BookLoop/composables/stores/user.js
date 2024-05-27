import { defineStore } from 'pinia';
import api from '~/utils/api';

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
      try {
        // Make a POST request to the backend logout endpoint
        await api.post('/users/logout');
        this.clearUser();
      } catch (err) {
        console.error('Logout failed:', err.response?.data?.message || 'Unknown error');
      }
    },
  },
});
