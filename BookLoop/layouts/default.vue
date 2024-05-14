<template>
  <div>
    <Navbar />  
    <Nuxt /> 
  </div>
  <div>
    <slot />
  </div>
  </template>
<script>
import Navbar from '../components/Navbar.vue'; // Import your component

export default {
  components: {
    Navbar
  }
};
</script>