// composables/useDarkMode.js
import { ref, watchEffect, onMounted } from 'vue';

export const useDarkMode = () => {
  const isDark = ref(false);

  const setDarkMode = (value) => {
    isDark.value = value;
    if (value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  onMounted(() => {
    // Load the initial theme on client-side only
    setDarkMode(localStorage.getItem('darkMode') === 'true');

    // Watch and save the theme preference on client-side only
    watchEffect(() => {
      localStorage.setItem('darkMode', isDark.value);
    });
  });

  return { isDark, setDarkMode };
};
