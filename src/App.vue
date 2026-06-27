<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import { navItems } from '@/data'
import { useScrollReveal } from '@/composables/useScrollReveal'


useScrollReveal()

</script>

<template>
  <ParticleCanvas />
  <AppNavbar :items="navItems" />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped>
main {
  position: relative;
  z-index: 1;
}
</style>
