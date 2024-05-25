import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    accessToken: null,
  }),
  actions: {
    setUser(user, accessToken) {
      this.user = user;
      this.accessToken = accessToken;
    },
    clearUser() {
      this.user = null;
      this.accessToken = null;
    },
  },
});
