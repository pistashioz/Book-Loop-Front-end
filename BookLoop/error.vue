<template>
  <div class="error-container">
    <div class="browser-mockup">
      <div class="content">
        <p class="error-text">there's nothing to see here</p>
        <h1 class="oops-text">oops</h1>
        <NuxtLink to="/" class="go-back-btn">go back</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3cbd3;
}

.browser-mockup {
  width: 90%;
  max-width: 800px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.browser-mockup::before {
  content: '';
  display: block;
  background: #f3f3f3;
  height: 40px;
}

.content {
  padding: 20px;
  text-align: center;
}

.error-text {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 20px;
}

.oops-text {
  font-size: 3rem;
  color: #e74c3c;
  margin: 20px 0;
}

.go-back-btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #e74c3c;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.go-back-btn:hover {
  background-color: #c0392b;
}
</style>
