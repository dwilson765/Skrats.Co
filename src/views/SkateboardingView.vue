<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
import CollageGrid from '@/components/CollageGrid.vue'
import {
  skaters,
  skateCarouselImages,
  skateCollageImages,
  skateVideoClips,
} from '@/data'
import type { CarouselItem } from '@/types'

const photoItems: CarouselItem[] = skateCarouselImages.map((src) => ({ type: 'image', src }))
const videoItems: CarouselItem[] = skateVideoClips.map((src) => ({ type: 'video', src }))
</script>

<template>
  <div class="skateboarding fade-in">
    <div class="container">
      <div class="tagline headercard">Skaters</div>

      <div class="skaters-grid">
        <div v-for="skater in skaters" :key="skater.id" class="card skater-card">
          <h2 class="section-title">{{ skater.title }}</h2>
          <p v-html="skater.descriptionHtml"></p>
          <img v-if="skater.img" :src="skater.img" :alt="skater.title" />
        </div>
      </div>
    </div>

    <section class="container">
      <h1 class="section-title centered">Recent Clips &amp; Pics</h1>
      <Carousel :items="photoItems" />
    </section>

    <hr class="hr-glow" />

    <CollageGrid
      :images="skateCollageImages"
      heading="All The Clips"
      subheading="Click on the buttons to change the grid view."
    />

    <hr class="hr-glow" />

    <section class="container">
      <h1 class="section-title centered">Skateboarding Clips</h1>
      <Carousel :items="videoItems" />
    </section>
  </div>
</template>

<style scoped>
.skateboarding {
  padding-bottom: var(--section-pad);
}
.tagline.headercard {
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: var(--fg);
  text-align: center;
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #111;
  border: 3px solid var(--border);
  border-radius: 20px;
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.tagline.headercard:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
}

.skaters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  padding-bottom: 2rem;
}
.skater-card {
  display: flex;
  flex-direction: column;
}
.skater-card img {
  width: 100%;
  object-fit: cover;
  margin-top: auto;
  border-radius: 8px;
}
.skater-card p {
  font-size: 1rem;
  line-height: 1.6;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  color: var(--accent);
  margin-bottom: 1.2rem;
}
.section-title.centered { text-align: center; }
</style>
