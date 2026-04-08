<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useWebsiteCorporateStore } from '../../application/website-corporate.store.js'

const store = useWebsiteCorporateStore()
const { techStack, techCategories } = storeToRefs(store)

const activeCategory = ref('all')

const filteredStack = computed(() => {
  if (activeCategory.value === 'all') {
    const featured = techStack.value.filter(t => t.featured)
    return featured.length > 0 ? featured : techStack.value
  }
  return techStack.value.filter(tech => tech.category === activeCategory.value)
})

const activeCategoryObj = computed(() =>
  techCategories.value.find(c => c.id === activeCategory.value)
)

// Track logos that fail to load so we can show a letter badge instead
const failedLogos = ref({})
const onLogoError = (e, id) => {
  e.target.style.display = 'none'
  failedLogos.value = { ...failedLogos.value, [id]: true }
}

// Animate progress bars from 0 when section first enters viewport
const progressReady = ref(false)
let progressObserver = null

onMounted(() => {
  const el = document.getElementById('tecnologias')
  if (!el) return
  progressObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        progressReady.value = true
        progressObserver.disconnect()
      }
    },
    { threshold: 0.05 }
  )
  progressObserver.observe(el)
})

onUnmounted(() => progressObserver?.disconnect())
</script>

<template>
  <section id="tecnologias" class="ms-section ms-tech" aria-labelledby="tech-title">
    <div class="ms-container">

      <!-- Section header -->
      <div class="ms-section-header" data-aos="fade-up">
        <p class="ms-section-overline" aria-hidden="true">04 / Tecnologías</p>
        <span class="ms-badge mb-md">
          <i class="pi pi-code" aria-hidden="true"></i> Stack Tecnológico
        </span>
        <h2 id="tech-title" class="ms-tech-heading">
          Tecnología <span class="text-gradient">probada en producción</span>
        </h2>
        <p class="ms-tech-subtitle">
          Trabajamos con las herramientas más confiables y avanzadas del mercado para
          garantizar soluciones escalables, seguras y de alto rendimiento
        </p>
      </div>

      <!-- Category filters -->
      <nav class="ms-tech-filters hide-scrollbar" aria-label="Categorías de tecnologías" data-aos="fade-up" data-aos-delay="150">
        <button
          v-for="cat in techCategories"
          :key="cat.id"
          type="button"
          class="ms-tech-filter-btn"
          :class="{ 'ms-tech-filter-btn--active': activeCategory === cat.id }"
          :aria-pressed="activeCategory === cat.id"
          @click="activeCategory = cat.id"
        >
          <i :class="cat.filterIcon" aria-hidden="true"></i>
          {{ cat.label }}
        </button>
      </nav>

      <!-- Category description -->
      <p class="ms-tech-cat-desc" data-aos="fade-up" data-aos-delay="200">
        {{ activeCategoryObj?.description }}
      </p>

      <!-- Cards grid -->
      <transition-group name="tech-list" tag="div" class="ms-tech-grid">
        <article
          v-for="(tech, idx) in filteredStack"
          :key="tech.id"
          class="ms-tech-card"
          tabindex="0"
          :style="{ '--tech-color': tech.color, '--stagger': idx % 4 }"
          :aria-label="tech.name + ' — ' + tech.desc"
        >
          <!-- Spotlight glow blob -->
          <div class="ms-tech-glow" aria-hidden="true"></div>

          <!-- Card content (single face) -->
          <div class="ms-tech-card__body">
            <div class="ms-tech-logo-wrap">
              <!-- Brand logo -->
              <img
                v-if="tech.logoUrl && !failedLogos[tech.id]"
                :src="tech.logoUrl"
                :alt="tech.name + ' logo'"
                class="ms-tech-logo"
                loading="lazy"
                width="48"
                height="48"
                @error="onLogoError($event, tech.id)"
              />
              <!-- Letter-badge fallback -->
              <span v-else class="ms-tech-logo-badge" aria-hidden="true">
                {{ tech.name.charAt(0) }}
              </span>
            </div>
            <h3 class="ms-tech-card__name">{{ tech.name }}</h3>
            <div class="ms-tech-expertise-row">
              <span class="ms-tech-expertise-label">Expertise</span>
              <span class="ms-tech-pct">{{ tech.expertise }}%</span>
            </div>
            <div class="ms-progress-track">
              <div class="ms-progress-fill" :style="{
                width: progressReady ? tech.expertise + '%' : '0%',
                transitionDelay: progressReady ? (idx * 0.07) + 's' : '0s'
              }"></div>
            </div>
            <p class="ms-tech-desc">{{ tech.desc }}</p>
          </div>
        </article>
      </transition-group>

    </div>
  </section>
</template>

<style scoped>
.ms-tech {
  background: var(--ms-bg-deep);
  position: relative;
  overflow: hidden;
}

/* Circuit dot-grid with stronger cyan dots */
.ms-tech::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(ellipse 85% 45% at 50% 50%, rgba(56, 189, 248, 0.10) 0%, transparent 60%),
    radial-gradient(circle, rgba(56, 189, 248, 0.25) 1.5px, transparent 1.5px),
    linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px);
  background-size: 100% 100%, 32px 32px, 32px 32px, 32px 32px;
  pointer-events: none;
}

/* Terminal prompt watermark */
.ms-tech::after {
  content: '>_';
  position: absolute;
  top: 3rem;
  left: -1rem;
  font-size: 22rem;
  font-weight: 900;
  font-family: 'Courier New', monospace;
  color: var(--ms-brand-primary);
  opacity: 0.04;
  line-height: 1;
  pointer-events: none;
  user-select: none;
  letter-spacing: -0.08em;
  rotate: -5deg;
  z-index: 0;
}

/* ── Section header ─────────────────────────────── */
.ms-section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.ms-tech-heading {
  font-size: var(--ms-font-size-4xl);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0;
}

.ms-tech-subtitle {
  color: var(--ms-text-secondary);
  font-size: var(--ms-font-size-base);
  max-width: 580px;
  margin: var(--ms-spacing-md) auto 0;
  line-height: var(--ms-leading-relaxed);
}

/* ── Filters ────────────────────────────────────── */
.ms-tech-filters {
  display: flex;
  justify-content: center;
  gap: var(--ms-spacing-sm);
  margin-top: var(--ms-spacing-3xl);
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .ms-tech-filters {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: var(--ms-spacing-sm);
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
    mask-image: linear-gradient(to right, black 80%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, black 80%, transparent 100%);
  }
  .ms-tech-filter-btn { scroll-snap-align: start; flex-shrink: 0; }
}

.ms-tech-filter-btn {
  background: transparent;
  border: 1px solid var(--ms-border-color-2);
  color: var(--ms-text-secondary);
  padding: 0.45rem 1.1rem;
  border-radius: 999px;
  font-family: var(--ms-font-family);
  font-size: var(--ms-font-size-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--ms-transition-fast);
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 6px;
}

.ms-tech-filter-btn i { font-size: 0.75rem; }

.ms-tech-filter-btn:hover {
  background: rgba(255, 255, 255, 0.06);
  color: var(--ms-text-primary);
  border-color: rgba(255, 255, 255, 0.2);
}

.ms-tech-filter-btn--active {
  background: var(--ms-brand-primary);
  color: #fff;
  border-color: var(--ms-brand-primary);
  box-shadow: 0 0 20px rgba(14, 165, 233, 0.35);
}

/* ── Category description ───────────────────────── */
.ms-tech-cat-desc {
  text-align: center;
  color: var(--ms-text-secondary);
  font-size: var(--ms-font-size-sm);
  margin: var(--ms-spacing-xl) 0 var(--ms-spacing-lg);
  min-height: 1.4em;
}

/* ── Grid ───────────────────────────────────────── */
.ms-tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--ms-spacing-lg);
  position: relative;
}

@media (max-width: 1024px) { .ms-tech-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 768px)  { .ms-tech-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px)  { .ms-tech-grid { grid-template-columns: 1fr; } }

/* ── Card ───────────────────────────────────────── */
.ms-tech-card {
  --tech-color: var(--ms-brand-primary);
  position: relative;
  overflow: hidden;
  background: var(--ms-bg-card-solid);
  border: 1px solid var(--ms-border-color);
  border-radius: var(--ms-border-radius-xl);
  cursor: default;
  transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.32s ease,
              border-color 0.32s ease;
}

.ms-tech-card:hover,
.ms-tech-card:focus-within {
  transform: translateY(-6px);
  border-color: color-mix(in srgb, var(--tech-color) 60%, transparent);
  box-shadow:
    0 20px 48px rgba(0, 0, 0, 0.45),
    0 0 0 1px color-mix(in srgb, var(--tech-color) 50%, transparent);
  outline: none;
}

/* ── Spotlight glow blob ────────────────────────── */
.ms-tech-glow {
  position: absolute;
  top: -40%;
  left: 50%;
  translate: -50% 0;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--tech-color) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.45s ease;
  pointer-events: none;
  z-index: 0;
  filter: blur(28px);
}

.ms-tech-card:hover .ms-tech-glow,
.ms-tech-card:focus-within .ms-tech-glow {
  opacity: 0.28;
}

/* ── Card body ──────────────────────────────────── */
.ms-tech-card__body {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ms-spacing-md);
  padding: var(--ms-spacing-2xl) var(--ms-spacing-lg) var(--ms-spacing-xl);
}

/* ── Logo ───────────────────────────────────────── */
.ms-tech-logo-wrap {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.32s ease, box-shadow 0.32s ease;
}

.ms-tech-card:hover .ms-tech-logo-wrap,
.ms-tech-card:focus-within .ms-tech-logo-wrap {
  border-color: color-mix(in srgb, var(--tech-color) 30%, transparent);
  box-shadow: 0 0 20px color-mix(in srgb, var(--tech-color) 20%, transparent);
}

.ms-tech-logo {
  width: 44px;
  height: 44px;
  object-fit: contain;
  transition: filter 0.32s ease, transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
  filter: drop-shadow(0 0 0px transparent);
}

.ms-tech-card:hover .ms-tech-logo,
.ms-tech-card:focus-within .ms-tech-logo {
  filter: drop-shadow(0 0 10px color-mix(in srgb, var(--tech-color) 55%, transparent));
  transform: scale(1.08);
}

/* ── Name ───────────────────────────────────────── */
.ms-tech-card__name {
  font-size: var(--ms-font-size-base);
  font-weight: 700;
  color: var(--ms-text-primary);
  margin: 0;
  text-align: center;
}

/* ── Expertise row ──────────────────────────────── */
.ms-tech-expertise-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.ms-tech-expertise-label {
  font-size: 0.7rem;
  color: var(--ms-text-secondary);
}

.ms-tech-pct {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--tech-color);
  font-variant-numeric: tabular-nums;
}

/* ── Progress bar ───────────────────────────────── */
.ms-progress-track {
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  overflow: hidden;
}

.ms-progress-fill {
  height: 100%;
  background: var(--tech-color);
  border-radius: 999px;
  box-shadow: 0 0 6px var(--tech-color);
  transition: width 1.1s cubic-bezier(0.22, 1, 0.36, 1);
}

/* ── Description (reveal on hover) ─────────────── */
.ms-tech-desc {
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
  line-height: var(--ms-leading-relaxed);
  text-align: center;
  margin: 0;
  /* hidden by default */
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transform: translateY(6px);
  transition:
    max-height 0.38s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.32s ease 0.06s,
    transform 0.32s ease 0.06s;
}

.ms-tech-card:hover .ms-tech-desc,
.ms-tech-card:focus-within .ms-tech-desc {
  max-height: 12rem;
  opacity: 1;
  transform: translateY(0);
}

/* ── Transition animations ──────────────────────── */
.tech-list-enter-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
  /* stagger based on column position (0-3) */
  transition-delay: calc(var(--stagger, 0) * 60ms);
}

.tech-list-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
  position: absolute;
}

.tech-list-enter-from {
  opacity: 0;
  transform: translateY(18px) scale(0.97);
}

.tech-list-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* ── Letter-badge logo fallback ─────────────────── */
.ms-tech-logo-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: color-mix(in srgb, var(--tech-color) 15%, transparent);
  border: 1px solid color-mix(in srgb, var(--tech-color) 35%, transparent);
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--tech-color);
  letter-spacing: -0.02em;
  line-height: 1;
  user-select: none;
}

/* ── Utilities ──────────────────────────────────── */
.hide-scrollbar::-webkit-scrollbar { display: none; }
.mb-md { margin-bottom: var(--ms-spacing-md); }
</style>
