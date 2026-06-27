<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

withDefaults(defineProps<{ flip?: boolean; color?: string; color2?: string }>(), {
  flip: false,
  color: '#c8ff00',
  color2: '#ff3c00'
})

const path1 = ref('')
const path2 = ref('')
let animId: number
let t = Math.random() * Math.PI * 2

onMounted(() => {
  const animate = () => {
    t += 0.012
    const y1 = 30 + Math.sin(t) * 12
    const y2 = 30 - Math.sin(t) * 12
    path1.value = `M0,${y1} C240,${60 - y1 + 14} 480,${y1 - 14} 720,${y1} C960,${60 - y1 + 14} 1200,${y1 - 14} 1440,${y1}`
    path2.value = `M0,${y2} C200,${y2 - 18} 440,${y2 + 24} 720,${y2} C1000,${y2 - 18} 1240,${y2 + 24} 1440,${y2}`
    animId = requestAnimationFrame(animate)
  }
  animate()
})
onUnmounted(() => cancelAnimationFrame(animId))
</script>

<template>
  <div class="wave-wrap" :style="flip ? 'transform:scaleY(-1)' : ''">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path :d="path1" fill="none" :stroke="color" stroke-width="1.5" opacity="0.4" />
      <path :d="path2" fill="none" :stroke="color2" stroke-width="1" opacity="0.25" />
    </svg>
  </div>
</template>

<style scoped>
.wave-wrap {
  width: 100%;
  overflow: hidden;
  line-height: 0;
}
svg {
  display: block;
  width: 100%;
}
</style>
