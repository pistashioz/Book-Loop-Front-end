import { defineStore } from 'pinia';
import api from '~/utils/api';

export const useUserStore = defineStore('user', {
  state: () => ({
    userId: null,
    isAdmin: null,
  }),
  actions: {
    setUser(user) {
      this.userId = user.id;
      this.isAdmin = user.isAdmin;
    },
    clearUser() {
      this.$reset(); // Reset the state to its initial value
      localStorage.removeItem('userStore'); // Remove userStore from localStorage
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
  persist: {
    storage: persistedState.localStorage, 
    key: 'userStore', 
    paths: ['userId', 'isAdmin'],
  },
});
