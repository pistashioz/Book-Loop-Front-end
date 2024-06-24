// BookLoop/composables/stores/user.js

import { defineStore } from 'pinia';
import { useNuxtApp } from '#app';

export const useUserStore = defineStore('user', {
  state: () => ({
    userId: null,
    isAdmin: null,
    username: null,
    email: null,
    profileImage: null,
  }),
  actions: {
    setUser(user) {
      this.userId = user.id;
      this.isAdmin = user.isAdmin;
      this.username = user.username;
      this.email = user.email;
      this.profileImage = user.profileImage;
    },
    clearUser() {
      this.$reset(); // Reset the state to its initial value
      localStorage.removeItem('userStore'); // Remove userStore from localStorage
    },
    async logout() {
      const { $api } = useNuxtApp();
      try {
        // Make a POST request to the backend logout endpoint
        await $api.post('/users/logout');
        this.clearUser();
      } catch (err) {
        console.error('Logout failed:', err.response?.data?.message || 'Unknown error');
      }
    },
  },
  persist: {
    storage: persistedState.localStorage, 
    key: 'userStore', 
    paths: ['userId', 'isAdmin', 'username', 'email', 'profileImage'],
  },
});
