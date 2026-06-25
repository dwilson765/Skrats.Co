<script setup lang="ts">
import { aboutImg } from '@/data'
</script>

<template>
  <div class="about fade-in">
    <img class="us" :src="aboutImg" alt="Picture of us" />
  </div>
</template>

<style scoped>
.about {
  text-align: center;
  padding: var(--section-pad) 1rem;
}
.us {
  width: 50%;
  min-width: 240px;
  height: auto;
  display: inline-block;
  border: 10px solid #000;
  border-radius: 20%;
}
</style>
