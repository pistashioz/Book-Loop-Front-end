<template>
  <div>
    <Navbar />  
    <NuxtPage />
  </div>
  </template>
<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Navbar
  }
};
</script>