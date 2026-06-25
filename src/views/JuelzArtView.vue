<script setup lang="ts">
import CollageGrid from '@/components/CollageGrid.vue'
import { juelzCollageImages } from '@/data'
</script>

<template>
  <div class="juelz-art fade-in">
    <CollageGrid
      :images="juelzCollageImages"
      heading="Check out the Art"
      subheading="Click on the buttons to change the grid view."
    />
  </div>
</template>

<style scoped>
.juelz-art {
  padding-bottom: var(--section-pad);
}
</style>
