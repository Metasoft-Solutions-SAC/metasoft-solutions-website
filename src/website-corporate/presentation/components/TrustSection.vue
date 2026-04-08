<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useWebsiteCorporateStore } from '../../application/website-corporate.store.js'

const store = useWebsiteCorporateStore()
const { techStack } = storeToRefs(store)

const featuredTechs = computed(() => techStack.value.filter(t => t.featured))
const scrollingTechs = computed(() => [...featuredTechs.value, ...featuredTechs.value])
</script>

<template>
  <section class="ms-trust" aria-label="Stack de tecnologías que utilizamos">
    <div class="ms-container">
      <p class="text-center text-secondary text-sm font-semibold tracking-wider mb-lg uppercase" data-aos="fade-up">
        Nuestro stack principal de tecnologías
      </p>

      <!-- Sr-only static list for screen readers / crawlers -->
      <ul class="sr-only" aria-label="Tecnologías del stack">
        <li v-for="tech in featuredTechs" :key="tech.id">{{ tech.name }}</li>
      </ul>

      <div class="ms-trust-scroller" data-aos="fade-up" data-aos-delay="100" aria-hidden="true">
        <!-- Masking edges for fade effect -->
        <div class="ms-trust-mask"></div>
        
        <div class="ms-trust-track">
          <div v-for="(tech, idx) in scrollingTechs" :key="idx" class="ms-trust-item">
            <img
              :src="tech.logoUrl"
              :alt="tech.name"
              class="ms-trust-logo"
              loading="lazy"
              width="80"
              height="32"
            />
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ms-trust {
  background: var(--ms-bg-surface-2);
  padding: var(--ms-spacing-2xl) 0;
  border-top: 1px solid var(--ms-border-color);
  border-bottom: 1px solid var(--ms-border-color);
  overflow: hidden;
}

.ms-trust-scroller {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

/* Faded edges to make ticker look like it's emerging from the background */
.ms-trust-mask {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(90deg, 
    var(--ms-bg-surface-2) 0%, 
    transparent 15%, 
    transparent 85%, 
    var(--ms-bg-surface-2) 100%
  );
  z-index: 2;
  pointer-events: none;
}

.ms-trust-track {
  display: flex;
  gap: var(--ms-spacing-5xl);
  width: max-content;
  animation: scrollLeft 30s linear infinite;
}

.ms-trust-track:hover {
  animation-play-state: paused;
}

.ms-trust-item {
  display: flex;
  align-items: center;
  gap: var(--ms-spacing-sm);
  font-size: var(--ms-font-size-lg);
  font-weight: 600;
  color: var(--ms-text-muted);
  transition: color var(--ms-transition-fast);
  white-space: nowrap;
}

.ms-trust-item:hover {
  color: var(--ms-text-primary);
}

.ms-trust-logo {
  width: 1.4rem;
  height: 1.4rem;
  object-fit: contain;
  opacity: 0.55;
  transition: opacity var(--ms-transition-fast);
  flex-shrink: 0;
}

.ms-trust-item:hover .ms-trust-logo {
  opacity: 1;
}

@keyframes scrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50% - (var(--ms-spacing-5xl) / 2))); }
}

.text-secondary { color: var(--ms-text-secondary); }
.text-sm { font-size: var(--ms-font-size-sm); }
.font-semibold { font-weight: 600; }
.tracking-wider { letter-spacing: 0.1em; }
.uppercase { text-transform: uppercase; }
.mb-lg { margin-bottom: var(--ms-spacing-lg); }
</style>
