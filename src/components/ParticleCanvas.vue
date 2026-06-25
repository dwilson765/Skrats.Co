<script setup lang="ts">
import { ref } from 'vue'
import { useParticles } from '@/composables/useParticles'

const canvasRef = ref<HTMLCanvasElement | null>(null)
useParticles(canvasRef)
</script>

<template>
  <canvas ref="canvasRef" class="particle-canvas" />
</template>

<style scoped>
.particle-canvas {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.25;
}
</style>
