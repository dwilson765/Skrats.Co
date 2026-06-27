<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  images: string[]
  heading: string
  subheading?: string
}>()

const columns = ref(4)

const grid = computed(() => {
  const cols: string[][] = Array.from({ length: columns.value }, () => [])
  props.images.forEach((img, i) => cols[i % columns.value].push(img))
  return cols
})
</script>

<template>
  <div class="collage">
    <div class="header1">
      <h1>{{ heading }}</h1>
      <p v-if="subheading">{{ subheading }}</p>
      <button class="btn" :class="{ active: columns === 2 }" @click="columns = 2">2</button>
      <button class="btn" :class="{ active: columns === 4 }" @click="columns = 4">4</button>
    </div>

    <div v-if="images.length" class="row1">
      <div v-for="(column, colIdx) in grid" :key="colIdx" class="column1">
        <img v-for="(img, idx) in column" :key="idx" :src="img" alt="" />
      </div>
    </div>
    <p v-else class="empty-note">No images here yet.</p>
  </div>
</template>

<style scoped>
.header1 {
  text-align: center;
  padding: 2rem;
}
.header1 h1 {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: var(--accent);
}
.btn {
  border: none;
  outline: none;
  padding: 8px 16px;
  margin: 10px;
  background-color: var(--mid);
  border: 1px solid var(--border);
  color: var(--fg);
  cursor: pointer;
  font-family: var(--font-display);
  font-size: 1.1rem;
  border-radius: 4px;
  transition:
    border-color 0.2s,
    color 0.2s;
}
.btn:hover {
  border-color: var(--accent);
}
.btn.active {
  border-color: var(--accent);
  color: var(--accent);
}

.row1 {
  display: flex;
  flex-wrap: wrap;
  max-height: 700px;
  overflow-y: auto;
  padding: 0 4px;
}
.column1 {
  flex: 1;
  min-width: 0;
  padding: 0 4px;
}
.column1 img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;
}
.empty-note {
  text-align: center;
  color: var(--border);
  font-style: italic;
  padding: 2rem;
}
</style>
