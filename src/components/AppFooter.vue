<template>
  <footer class="app-footer">
    <p>&copy; {{ year }} Skrats. All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.app-footer {
  background: #000;
  border-top: 1px solid var(--accent);
  text-align: center;
  padding: clamp(1rem, 2vw, 1.5rem);
  font-family: var(--font-display);
  font-size: clamp(1rem, 1.8vw, 1.3rem);
  letter-spacing: 2px;
  color: rgba(232, 232, 224, 0.5);
  position: relative;
  z-index: 1;
}
</style>
