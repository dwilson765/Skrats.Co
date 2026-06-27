<script setup lang="ts">
withDefaults(defineProps<{ color?: string }>(), { color: '#c8ff00' })
</script>

<template>
  <div class="zz-wrap">
    <svg viewBox="0 0 1440 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <polyline
        fill="none"
        :stroke="color"
        stroke-width="1"
        opacity="0.3"
        points="0,20 90,5 180,35 270,5 360,35 450,5 540,35 630,5 720,35 810,5 900,35 990,5 1080,35 1170,5 1260,35 1350,5 1440,20"
      />
    </svg>
  </div>
</template>

<style scoped>
.zz-wrap {
  width: 100%;
  overflow: hidden;
  line-height: 0;
}
svg {
  display: block;
  width: 100%;
}
</style>
