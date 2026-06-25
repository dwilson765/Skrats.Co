<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import type { NavItem } from '@/types'

defineProps<{ items: NavItem[] }>()

const mobileOpen = ref(false)
const dropdownOpen = ref(false)
</script>

<template>
  <nav class="navbar">
    <RouterLink class="brand" to="/">SkratCorp</RouterLink>

    <button class="burger" :class="{ open: mobileOpen }" @click="mobileOpen = !mobileOpen" aria-label="Toggle menu">
      <span /><span /><span />
    </button>

    <ul class="nav-list" :class="{ open: mobileOpen }">
      <li v-for="item in items" :key="item.label" class="nav-item"
          :class="{ 'has-dropdown': item.children }">
        <template v-if="item.children">
          <button class="nav-link dropdown-trigger" @click="dropdownOpen = !dropdownOpen">
            {{ item.label }} <span class="caret">▾</span>
          </button>
          <ul class="dropdown" :class="{ open: dropdownOpen }">
            <li v-for="child in item.children" :key="child.label">
              <RouterLink class="dropdown-item" :to="child.href" @click="dropdownOpen = false; mobileOpen = false">
                {{ child.label }}
              </RouterLink>
            </li>
          </ul>
        </template>
        <RouterLink v-else class="nav-link" :to="item.href" @click="mobileOpen = false">
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: clamp(0.5rem, 1.5vw, 1rem) clamp(1rem, 4vw, 2.5rem);
  background: #000;
  border-bottom: 1px solid var(--accent);
}

.brand {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  color: var(--accent);
  letter-spacing: 3px;
  text-shadow: 0 0 12px var(--accent);
  text-decoration: none;
  transition: text-shadow 0.3s;
  white-space: nowrap;
}
.brand:hover { text-shadow: 0 0 28px var(--accent), 0 0 56px var(--accent); }

.nav-list {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-item { position: relative; }

.nav-link {
  font-family: var(--font-display);
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: var(--fg);
  letter-spacing: 2px;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
}
.nav-link:hover, .nav-link.router-link-active { color: var(--accent); }

.caret { font-size: 0.8em; margin-left: 4px; }

.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  background: #0f0f0f;
  border: 1px solid var(--accent);
  list-style: none;
  padding: 0.4rem 0;
  margin: 0;
}
.dropdown.open { display: block; }
.dropdown-item {
  display: block;
  padding: 0.5rem 1rem;
  font-family: var(--font-display);
  font-size: 1.15rem;
  color: var(--fg);
  text-decoration: none;
  letter-spacing: 1px;
  transition: background 0.15s, color 0.15s;
}
.dropdown-item:hover { background: var(--accent); color: #000; }

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  padding: 4px;
}
.burger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--fg);
  transition: transform 0.2s, opacity 0.2s;
}
.burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.burger.open span:nth-child(2) { opacity: 0; }
.burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 768px) {
  .burger { display: flex; }
  .nav-list {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: #000;
    border-bottom: 1px solid var(--accent);
    padding: 1rem 1.5rem;
    gap: 1rem;
    align-items: flex-start;
  }
  .nav-list.open { display: flex; }
  .dropdown { position: static; border: none; border-left: 2px solid var(--accent); margin-left: 1rem; }
}
</style>
