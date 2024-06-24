<template>
  <div>
    <Navbar />  
    <SideBar v-if="isAdmin" />
    <Nuxt /> 
  </div>
  <div>
    <slot />
  </div>
  </template>
<script>
/* import Navbar from '../components/Navbar.vue'; 

export default {
  components: {
    Navbar
  }
}; */
import { useUserStore } from '~/composables/stores/user';
import { storeToRefs } from 'pinia'; 
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const { userId, isAdmin } = storeToRefs(userStore); 
const router = useRouter();

async function logout() {
  await userStore.logout();
  // Redirect to the landing page after logout
  router.push('/');
}
</script>