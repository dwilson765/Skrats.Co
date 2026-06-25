<script setup lang="ts">
// God's Angry Garden - poem + artwork section
// Public-folder asset paths kept as plain strings (see HomeView for why)
const overlayImg = '/images/fireSkel.png'
const artImg = '/images/long.jpg'
</script>

<template>
  <section class="garden fade-in">
    <div class="inner">
      <div class="text-col">
        <h2>God's Angry Garden</h2>
        <img class="overlay" :src="overlayImg" alt="" aria-hidden="true" />
        <p>
          The birds are in misery<br />
          I don't think they sing,<br />
          they just screech in pain.<br />
          It's a land that God, if he exists,<br />
          <strong>has created in anger.</strong><br />
          Taking a close look at what's around us,<br />
          there is some sort of a harmony.<br />
          It is the harmony of overwhelming and collective murder.<br />
          And we in comparison to the articulate vileness<br />
          and baseness and obscenity of all this world,<br />
          we only sound and look like badly pronounced<br />
          and half-finished sentences out of a stupid suburban novel.<br />
          And we have to become humble in front of this<br />
          overwhelming misery and overwhelming fornication,<br />
          overwhelming growth and overwhelming lack of order.<br />
          There is no harmony in the universe<br />
          as we have conceived it.<br />
          When I say this,<br />
          I say this all full of admiration for the world.<br />
          It is not that I hate, I love it.<br />
          I love it very much,<br />
          but I love it against my better judgement.
        </p>
      </div>
      <img class="art-img" :src="artImg" alt="long" />
    </div>
  </section>
</template>

<style scoped>
/* Drip-edge top border, reproducing the original .svg-divider background */
.garden {
  background-color: var(--mid);
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g fill="%23000"><path d="M1000 100C500 100 500 64 0 64V0h1000v100Z" opacity=".5"></path><path d="M1000 100C500 100 500 34 0 34V0h1000v100Z" opacity=".5"></path><path d="M1000 100C500 100 500 4 0 4V0h1000v100Z"></path></g></svg>');
  background-repeat: no-repeat;
  padding: 10% clamp(1rem, 5vw, 4rem);
  position: relative;
  overflow: hidden;
}
.inner {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(1rem, 4vw, 3rem);
  align-items: center;
  position: relative;
  z-index: 1;
}
.text-col {
  flex: 1 1 min(100%, 400px);
  min-width: 0;
  position: relative;
}
h2 {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: var(--accent);
  margin-bottom: 1.2rem;
  position: relative;
  z-index: 1;
}
p {
  font-size: clamp(0.85rem, 1.5vw, 1rem);
  line-height: 1.9;
  color: rgba(244, 244, 244, 0.85);
  position: relative;
  z-index: 1;
}
/* Faint full-bleed watermark behind the poem, matching the original
   .overlay (position:absolute; opacity:.4; z-index:-1) */
.overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.4;
  z-index: -1;
  pointer-events: none;
}
.art-img {
  flex: 1 1 min(100%, 360px);
  width: 100%;
  height: clamp(260px, 50vw, 600px);
  object-fit: cover;
  border-radius: clamp(24px, 8vw, 100px);
  display: block;
  position: relative;
  transition: filter 0.4s;
}
.art-img:hover { filter: saturate(1.3) contrast(1.05); }
</style>
