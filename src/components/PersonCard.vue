<script setup lang="ts">
import type { Person } from '@/types'
defineProps<{ person: Person }>()
</script>

<template>
  <div class="person-row fade-in" :class="{ reverse: !person.imageLeft }">
    <div class="col-img">
      <img :src="person.image" :alt="person.name" />
    </div>
    <div class="col-txt card">
      <h2>{{ person.name }}</h2>
      <p>{{ person.bio }}</p>
    </div>
  </div>
</template>

<style scoped>
.person-row {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(1rem, 3vw, 2rem);
  padding-bottom: clamp(1.5rem, 4vw, 3rem);
  align-items: stretch;
}
.person-row.reverse { flex-direction: row-reverse; }

.col-img, .col-txt {
  flex: 1 1 min(100%, 340px);
  min-width: 0;
}

.col-img img {
  width: 100%;
  height: clamp(200px, 40vw, 420px);
  object-fit: cover;
  border-radius: 16px;
  border: 2px solid var(--border);
  display: block;
  transition: border-color 0.3s;
}
.col-img img:hover { border-color: var(--accent); }

.card {
  background: var(--mid);
  border: 1px solid var(--border);
  border-radius: var(--card-radius);
  padding: clamp(1rem, 3vw, 2rem);
  height: 100%;
  transition: border-color 0.3s, transform 0.3s;
}
.card:hover { border-color: var(--accent); transform: translateY(-5px); }

h2 {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 4vw, 2.8rem);
  letter-spacing: 2px;
  color: var(--accent);
  margin-bottom: 0.8rem;
}
p { line-height: 1.75; color: rgba(232,232,224,0.85); }
</style>
