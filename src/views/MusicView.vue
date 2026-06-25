<script setup lang="ts">
import {
  musicTracks,
  bandMembers,
  musicListPlaceholders,
  spotifyEmbedUrl,
  spotifyAlbumUrl,
} from '@/data'

const listSections = ['Main Genres', 'Recent Song', 'Phasing Out', 'Favorites']
</script>

<template>
  <div class="music fade-in">
    <div class="tagline headercard container">Music Portfolio</div>

    <div class="container intro">
      <h1>Our Sound</h1>
      <h2 class="lede">
        It's impossible to pin down a single, cohesive sound when so many musicians are
        involved ... AND THATS THE POINT! There is no single sound, only the sounds that's
        created by those who've decided that that sound should exist. Any and all sounds will
        be made and displayed here, a Skrat doesn't limit themselves creatively, why should you?
      </h2>
    </div>

    <section class="container tracks">
      <div v-for="track in musicTracks" :key="track.title" class="cardbg track-card">
        <div class="track-row">
          <img :src="track.vinylImg" :alt="track.title" class="vinyl-img" />
          <div class="track-body">
            <h3>"{{ track.title }}"</h3>
            <audio controls>
              <source :src="track.audioSrc" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <p>{{ track.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <hr class="hr-glow" />

    <section class="container members">
      <div v-for="member in bandMembers" :key="member.name" class="cardbg member-card">
        <h2>{{ member.name }} - {{ member.instrument }}</h2>
        <div class="member-row">
          <img :src="member.img" :alt="member.name" />
          <p>{{ member.description }}</p>
        </div>
      </div>
    </section>

    <hr class="hr-glow" />

    <section class="container listen">
      <div class="listen-main">
        <h1>Take a Listen To What We've Been Listening!</h1>
        <p class="lede">
          Here's a playlist of songs acting as current inspiration or just cool new discoveries
        </p>
        <div class="lists-grid">
          <div v-for="label in listSections" :key="label" class="card list-card">
            <h2>{{ label }}</h2>
            <ul>
              <li v-for="(item, i) in musicListPlaceholders" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card spotify-card">
        <h2 class="centered">Listen on Spotify</h2>
        <iframe
          :src="spotifyEmbedUrl"
          width="100%"
          height="380"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <p class="centered">
          <a :href="spotifyAlbumUrl" target="_blank" rel="noopener" class="spotify-link">Open in Spotify</a>
        </p>
      </div>
    </section>

    <section class="container">
      <div class="cardbg contact-card">
        <h3>Links &amp; Contact</h3>
        <ul>
          <li><a href="https://soundcloud.com/" target="_blank" rel="noopener">SoundCloud</a></li>
          <li><a href="https://bandcamp.com/" target="_blank" rel="noopener">Bandcamp</a></li>
          <li><a href="mailto:youremail@example.com">Email Us</a></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.music { padding-bottom: var(--section-pad); }

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
}

.intro {
  text-align: center;
  margin-bottom: 2rem;
}
.intro h1 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  color: var(--accent);
}
.lede {
  font-size: clamp(0.95rem, 1.6vw, 1.2rem);
  font-weight: normal;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
}

.tracks {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}
.track-card {
  max-width: 800px;
  width: 100%;
}
.track-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.vinyl-img {
  flex: 1 1 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 1.5rem 0 0 1.5rem;
}
.track-body {
  flex: 2 1 300px;
  padding: 1.25rem 1.5rem;
}
.track-body h3 {
  font-family: var(--font-display);
  color: var(--accent);
  margin-bottom: 0.8rem;
  font-size: 1.6rem;
}
.track-body audio { width: 100%; margin-bottom: 0.8rem; }

.members {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}
.member-card { padding: 1.5rem; }
.member-card h2 {
  font-family: var(--font-display);
  color: var(--accent);
  margin-bottom: 1rem;
  font-size: 1.6rem;
}
.member-row {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.member-row img {
  flex: 1 1 100px;
  max-width: 140px;
  height: 100px;
  object-fit: cover;
  border-radius: 0.75rem;
}
.member-row p { flex: 2 1 200px; font-size: 0.95rem; line-height: 1.6; }

.listen {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
.listen-main { flex: 2 1 480px; }
.listen-main h1 {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: var(--accent);
  margin-bottom: 0.8rem;
}
.lists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}
.list-card h2 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--accent);
  margin-bottom: 0.5rem;
}
.list-card ul { padding-left: 1.2rem; margin: 0; }

.spotify-card {
  flex: 1 1 280px;
  text-align: center;
}
.spotify-card h2 {
  font-family: var(--font-display);
  color: var(--accent);
  margin-bottom: 1rem;
}
.spotify-card iframe {
  border-radius: 12px;
  border: none;
}
.centered { text-align: center; }
.spotify-link { color: #1db954; }

.contact-card {
  max-width: 500px;
  margin: 0 auto;
  padding: 1.5rem;
  text-align: center;
}
.contact-card h3 {
  font-family: var(--font-display);
  color: var(--accent);
  margin-bottom: 0.8rem;
}
.contact-card ul { list-style: none; padding: 0; margin: 0; }
.contact-card li { margin-bottom: 0.4rem; }
.contact-card a { color: #ff8800; }
</style>
