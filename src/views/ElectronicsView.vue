<script setup lang="ts">
import { projects, videos, resources } from '@/data'

// Public-folder asset paths kept as plain strings + dynamic :src bindings
// so Vite doesn't try to resolve/bundle them as modules.
const webImg = '/images/website.gif'
const aiImg = '/images/nnetwork.gif'
const roboticsImg = '/images/breadboard.jpg'


const showProjectHub = false
</script>

<template>
  <div class="electronics container fade-in">
    <h1 class="section-title centered">Electronics &amp; STEM Portfolio</h1>

    <div class="grid">
      <article class="card">
        <img :src="webImg" alt="Web Project" />
        <h2>Web-Based Projects</h2>
        <p>
          Interactive web apps, IoT dashboards, and online tools built with modern frameworks and
          APIs.
        </p>
      </article>
      <article class="card">
        <img :src="aiImg" alt="AI/ML Project" />
        <h2>AI / Machine Learning</h2>
        <p>
          Projects using neural networks, computer vision, and data science for smart automation and
          predictions.
        </p>
      </article>
      <article class="card">
        <img :src="roboticsImg" alt="Robotics Project" />
        <h2>Hardware &amp; Robotics</h2>
        <p>
          Physical builds: robots, microcontroller circuits, sensors, and creative hardware hacks.
        </p>
      </article>
    </div>

    <!-- Commented out in the original electronics.html; data still exists
         in src/data/index.ts if you want to switch showProjectHub to true. -->
    <template v-if="showProjectHub">
      <h2 class="section-title centered">Project Hub</h2>
      <div class="grid">
        <article v-for="project in projects" :key="project.title" class="card">
          <img :src="project.img" :alt="project.title" />
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <p class="credit">By {{ project.credit }}</p>
        </article>
      </div>

      <h2 class="section-title centered">Project Videos</h2>
      <div class="grid">
        <div v-for="video in videos" :key="video.title" class="card video-card">
          <div class="video-frame">
            <iframe :src="video.url" :title="video.title" allowfullscreen frameborder="0" />
          </div>
          <h3>{{ video.title }}</h3>
          <p>{{ video.description }}</p>
        </div>
      </div>
    </template>

    <h2 class="section-title centered">Resources Used</h2>
    <ul class="list-group">
      <li v-for="resource in resources" :key="resource.name" class="list-group-item">
        <a :href="resource.link" target="_blank" rel="noopener">{{ resource.name }}</a> -
        {{ resource.description }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.electronics {
  padding: var(--section-pad) 0;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 4vw, 2.6rem);
  color: var(--accent);
  margin: 2.5rem 0 1.5rem;
}
.section-title.centered {
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}
.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.card h2 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--accent);
  margin-bottom: 0.5rem;
}
.card h3 {
  font-family: var(--font-display);
  color: var(--accent);
}
.credit {
  font-size: 0.85rem;
  color: var(--border);
}

.video-frame {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: #000;
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
}
.video-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.list-group {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.list-group-item {
  background-color: #222;
  color: #fff;
  padding: 0.9rem 1.1rem;
  border-radius: 4px;
}
.list-group-item a {
  color: var(--accent);
}
</style>
