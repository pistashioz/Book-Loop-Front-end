// plugins/darkMode.js
import { useDarkMode } from '~/composables/useDarkMode';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const { setDarkMode } = useDarkMode();
    // Set dark mode instantly on app load
    // setDarkMode(true);
  }
});
