<script setup lang="ts">
import { ref } from 'vue'
import type { CarouselItem } from '@/types'

const props = defineProps<{ items: CarouselItem[] }>()

const active = ref(0)

function next() {
  active.value = (active.value + 1) % props.items.length
}
function prev() {
  active.value = (active.value - 1 + props.items.length) % props.items.length
}
function goTo(i: number) {
  active.value = i
}
</script>

<template>
  <div class="carousel">
    <div class="carousel-track">
      <div
        v-for="(item, i) in items"
        :key="item.src"
        class="carousel-item"
        :class="{ active: i === active }"
      >
        <video v-if="item.type === 'video'" :src="item.src" controls />
        <img v-else :src="item.src" :alt="item.alt ?? ''" />
      </div>
    </div>

    <button class="ctrl prev" @click="prev" aria-label="Previous slide">‹</button>
    <button class="ctrl next" @click="next" aria-label="Next slide">›</button>

    <div class="dots">
      <button
        v-for="(item, i) in items"
        :key="item.src + '-dot'"
        class="dot"
        :class="{ active: i === active }"
        :aria-label="`Go to slide ${i + 1}`"
        @click="goTo(i)"
      />
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
}
.carousel-track {
  position: relative;
  width: 100%;
  min-height: 240px;
}
.carousel-item {
  display: none;
  text-align: center;
}
.carousel-item.active {
  display: block;
}
.carousel-item img,
.carousel-item video {
  max-width: 100%;
  width: 100%;
  border: clamp(4px, 1vw, 10px) solid #000;
  border-radius: 10%;
  display: block;
  margin: 0 auto;
}
.carousel-item video {
  border-radius: 8px;
}

.ctrl {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: var(--fg);
  border: 1px solid var(--border);
  font-size: 1.8rem;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  cursor: pointer;
  line-height: 1;
  transition: border-color 0.2s, background 0.2s;
}
.ctrl:hover { border-color: var(--accent); background: rgba(0, 0, 0, 0.75); }
.ctrl.prev { left: -1.2rem; }
.ctrl.next { right: -1.2rem; }

.dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, border-color 0.2s;
}
.dot.active { background: var(--accent); border-color: var(--accent); }
</style>
