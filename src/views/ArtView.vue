<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { artGeneralPieces, artGothicPieces, juelzBio, juelzImg } from '@/data'
</script>

<template>
  <div class="art container fade-in">
    <h1 class="section-title centered">Art Gallery</h1>
    <div class="grid">
      <article v-for="piece in artGeneralPieces" :key="piece.title" class="card art-card">
        <img :src="piece.img" :alt="piece.title" />
        <h2>{{ piece.title }}</h2>
        <p>{{ piece.description }}</p>
      </article>
    </div>

    <h2 class="section-title centered">Skrat/Gothic Skateboarding &amp; Visuals</h2>
    <div class="grid two-col">
      <article v-for="piece in artGothicPieces" :key="piece.title" class="card art-card">
        <img :src="piece.img" :alt="piece.title" />
        <h2>{{ piece.title }}</h2>
        <p>{{ piece.description }}</p>
      </article>
    </div>

    <h2 class="section-title centered">Featured Artist: Juelz</h2>
    <div class="juelz-feature card">
      <img :src="juelzImg" alt="Juelz's art" />
      <div class="juelz-body">
        <h2>Juelz's Portfolio</h2>
        <p v-for="(para, i) in juelzBio.split('\n\n')" :key="i">{{ para }}</p>
        <RouterLink to="/art/juelz" class="btn-dark">View More of Juelz's Work</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.art {
  padding: var(--section-pad) 0;
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 4vw, 2.6rem);
  color: var(--accent);
  margin: 2.5rem 0 1.5rem;
}
.section-title.centered { text-align: center; }

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}
.grid.two-col {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.art-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.art-card h2 {
  font-family: var(--font-display);
  font-size: 1.6rem;
  color: var(--accent);
  margin-bottom: 0.4rem;
}

.juelz-feature {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.juelz-feature img {
  flex: 1 1 280px;
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}
.juelz-body {
  flex: 2 1 320px;
}
.juelz-body h2 {
  font-family: var(--font-display);
  color: var(--accent);
  margin-bottom: 0.8rem;
}
.juelz-body p {
  margin-bottom: 1rem;
  line-height: 1.7;
}
.btn-dark {
  display: inline-block;
  background-color: #000;
  color: #fff;
  border: 1px solid var(--border);
  padding: 0.5rem 1.2rem;
  border-radius: 4px;
  text-decoration: none;
  font-family: var(--font-display);
  transition: border-color 0.2s;
}
.btn-dark:hover { border-color: var(--accent); }
</style>
