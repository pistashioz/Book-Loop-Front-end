<template>
    <div>
      <h1>Comments for Review {{ $route.params.literaryReviewId }}</h1>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  </script>
  