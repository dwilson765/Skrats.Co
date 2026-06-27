<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { ContentSection } from '@/types'
defineProps<{ section: ContentSection }>()

function isInternal(link?: string) {
  return !!link && link.startsWith('/')
}
</script>

<template>
  <section :id="section.id" class="content-section fade-in">
    <h2 class="section-title">{{ section.title }}</h2>
    <div class="row-wrap">
      <div class="card">
        <p>{{ section.description }}</p>
      </div>
      <RouterLink
        v-if="section.img && isInternal(section.link)"
        :to="section.link!"
        class="img-card card"
      >
        <img :src="section.img" :alt="section.title" />
      </RouterLink>
      <a
        v-else-if="section.img"
        :href="section.link"
        target="_blank"
        rel="noopener"
        class="img-card card"
      >
        <img :src="section.img" :alt="section.title" />
      </a>
    </div>
  </section>
</template>

<style scoped>
.content-section {
  padding: var(--section-pad) 0;
}
.row-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(1rem, 3vw, 2rem);
  align-items: stretch;
}
.card {
  flex: 1 1 min(100%, 340px);
  background: var(--mid);
  border: 1px solid var(--border);
  border-radius: var(--card-radius);
  padding: clamp(1rem, 3vw, 2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition:
    border-color 0.3s,
    transform 0.3s;
}
.card:hover {
  border-color: var(--accent);
  transform: translateY(-5px);
}
.img-card {
  text-decoration: none;
}
.img-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 2px;
  color: var(--accent);
  margin-bottom: 1.2rem;
}
p {
  line-height: 1.75;
  color: rgba(232, 232, 224, 0.85);
}
</style>
