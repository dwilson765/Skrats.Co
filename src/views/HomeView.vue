<script setup lang="ts">
import PersonCard from '@/components/PersonCard.vue'
import ContentSection from '@/components/ContentSection.vue'
import GardenSection from '@/components/GardenSection.vue'
import SvgWave from '@/components/SvgWave.vue'
import { people, sections } from '@/data'

// Public-folder asset paths (kept as plain strings so Vite doesn't try to
// resolve/bundle them as modules — drop your real files into /public)
const leaderboardImg = '/SkratLeaderboard.png'
const monsterImg = '/images/GOPR1342.JPG'
</script>

<template>
  <div>
    <header class="hero">
      <img :src="leaderboardImg" alt="Leaderboard" />
      <div class="tagline headercard">Art Is Never Finished, Only Abandoned</div>
    </header>

    <SvgWave />

    <hr class="hr-glow" />

    <section class="container fade-in">
      <h1 class="glitch-title">Where it started</h1>
      <PersonCard v-for="person in people" :key="person.id" :person="person" />
    </section>

    <hr class="hr-glow" />

    <div class="container">
      <ContentSection v-for="section in sections" :key="section.id" :section="section" />
    </div>

    <!-- Monster: layered background photo + foreground portrait, drip-edge top -->
    <section class="monster-wrap fade-in">
      <div class="monster">
        <img :src="monsterImg" alt="long" />
      </div>
    </section>

    <GardenSection />

    <SvgWave flip />
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
}
.hero img {
  width: 100%;
  height: clamp(180px, 35vw, 520px);
  object-fit: cover;
  display: block;
  filter: grayscale(20%) contrast(1.1);
}
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 60%, var(--bg) 100%);
}

/* Tagline rendered as a "headercard" — matches the original .headercard style */
.tagline {
  position: relative;
  z-index: 2;
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 3vw, 2rem);
  letter-spacing: clamp(1px, 0.3vw, 3px);
  color: var(--fg);
  text-align: center;
  text-transform: none;
  max-width: 600px;
  margin: -3rem auto 0;
  padding: 1.5rem;
  background-color: #111;
  border: 3px solid var(--border);
  border-radius: 20px;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
}
.tagline:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
}

/* Monster section: drip top edge + background photo behind a centered portrait,
   reproducing the original #monster / .svg-divider-flip combo */
.monster-wrap {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g fill="%23000"><path d="M1000 100C500 100 500 64 0 64V0h1000v100Z" opacity=".5"></path><path d="M1000 100C500 100 500 34 0 34V0h1000v100Z" opacity=".5"></path><path d="M1000 100C500 100 500 4 0 4V0h1000v100Z"></path></g></svg>');
  background-repeat: no-repeat;
  padding-top: 10%;
}
.monster {
  background-image: url('/images/theEyes.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
}
.monster img {
  width: clamp(220px, 50vw, 640px);
  height: auto;
  border-radius: 20%;
  border: clamp(4px, 1.2vw, 15px) solid #000;
  display: block;
}
</style>
