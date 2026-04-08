<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useWebsiteCorporateStore } from '../../application/website-corporate.store.js'
import { useScrollTo } from '../composables/useScrollTo.js'

const store = useWebsiteCorporateStore()
const { testimonials } = storeToRefs(store)
const { scrollTo } = useScrollTo()

// ── Modal & image carousel state ──────────────────────────
const activeProject = ref(null)
const currentImageIdx = ref(0)
const slideDir = ref('right')

const currentImage = () => activeProject.value?.images[currentImageIdx.value] ?? null

function openModal(project) {
  activeProject.value = project
  currentImageIdx.value = 0
  document.body.style.overflow = 'hidden'
  stopAutoplay()
}

function closeModal() {
  activeProject.value = null
  document.body.style.overflow = ''
  startAutoplay()
}

function prevImage() {
  if (!activeProject.value) return
  slideDir.value = 'left'
  const len = activeProject.value.images.length
  currentImageIdx.value = (currentImageIdx.value - 1 + len) % len
}

function nextImage() {
  if (!activeProject.value) return
  slideDir.value = 'right'
  const len = activeProject.value.images.length
  currentImageIdx.value = (currentImageIdx.value + 1) % len
}

// ── Project card peek carousel ───────────────────────────
const cardIdx   = ref(0)
const wrapRef   = ref(null)
const trackOffset = ref(0)
const GAP_PX    = 28  // must match CSS gap

function computeOffset() {
  if (!wrapRef.value) return
  const wrapW = wrapRef.value.clientWidth
  const firstCard = wrapRef.value.querySelector('.ms-project-card')
  if (!firstCard) return
  const cardW = firstCard.offsetWidth
  trackOffset.value = wrapW / 2 - cardW / 2 - cardIdx.value * (cardW + GAP_PX)
}

function prevCard() {
  cardIdx.value = (cardIdx.value - 1 + testimonials.value.length) % testimonials.value.length
}

function nextCard() {
  cardIdx.value = (cardIdx.value + 1) % testimonials.value.length
}

function goToCard(i) {
  cardIdx.value = i
}

watch(cardIdx, () => nextTick(computeOffset))

// ── Autoplay ───────────────────────────────────────────
const AUTOPLAY_MS = 4000
let autoplayTimer = null

function startAutoplay() {
  stopAutoplay()
  autoplayTimer = setInterval(nextCard, AUTOPLAY_MS)
}

function stopAutoplay() {
  clearInterval(autoplayTimer)
  autoplayTimer = null
}

function onCarouselEnter() { stopAutoplay() }
function onCarouselLeave() { if (!activeProject.value) startAutoplay() }

function onKeydown(e) {
  if (activeProject.value) {
    if (e.key === 'Escape')     closeModal()
    if (e.key === 'ArrowLeft')  prevImage()
    if (e.key === 'ArrowRight') nextImage()
  } else {
    if (e.key === 'ArrowLeft')  prevCard()
    if (e.key === 'ArrowRight') nextCard()
  }
}

// ── Touch swipe for modal carousel ────────────────────────
let touchStartX = 0
function onTouchStart(e) { touchStartX = e.touches[0].clientX }
function onTouchEnd(e) {
  const delta = touchStartX - e.changedTouches[0].clientX
  if (Math.abs(delta) < 40) return
  delta > 0 ? nextImage() : prevImage()
}

// ── Touch swipe for peek carousel ──────────────────────────
let cardTouchStartX = 0
function onCardTouchStart(e) { cardTouchStartX = e.touches[0].clientX }
function onCardTouchEnd(e) {
  const delta = cardTouchStartX - e.changedTouches[0].clientX
  if (Math.abs(delta) < 40) return
  stopAutoplay()
  delta > 0 ? nextCard() : prevCard()
}

onMounted(() => {
  nextTick(computeOffset)
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', computeOffset)
  startAutoplay()
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', computeOffset)
  stopAutoplay()
})
</script>

<template>
  <section
    id="testimonios"
    class="ms-section ms-testimonials"
    aria-labelledby="testimonials-title"
  >
    <div class="ms-container">

      <!-- Header -->
      <div class="ms-section-header text-center" data-aos="fade-up">
        <p class="ms-section-overline" aria-hidden="true">05 / Casos de Éxito</p>
        <span class="ms-badge mb-md"><i class="pi pi-star-fill" aria-hidden="true"></i> Proyectos Destacados</span>
        <h2 id="testimonials-title">Proyectos reales. <span class="text-gradient">Impacto real.</span></h2>
        <p class="ms-section-subtitle">
          Soluciones desarrolladas a medida para empresas reales con resultados medibles.
        </p>
      </div>

      <!-- Project peek carousel -->
      <div class="ms-pcarousel" data-aos="fade-up" @mouseenter="onCarouselEnter" @mouseleave="onCarouselLeave">

        <!-- Sliding track -->
        <div
          class="ms-pcarousel-track-wrap"
          ref="wrapRef"
          @touchstart.passive="onCardTouchStart"
          @touchend.passive="onCardTouchEnd"
        >
          <div
            class="ms-pcarousel-track"
            :style="{ transform: `translateX(${trackOffset}px)` }"
          >
            <article
              v-for="(project, i) in testimonials"
              :key="project.id"
              :class="['ms-project-card', { 'ms-project-card--active': i === cardIdx }]"
              @click="goToCard(i); stopAutoplay()"
              style="cursor: pointer"
            >
              <!-- Card top bar -->
              <div class="ms-project-card__top">
                <span class="ms-project-type-badge" :class="`ms-type--${project.category}`">
                  <i :class="project.category === 'mobile' ? 'pi pi-mobile' : project.category === 'design' ? 'pi pi-palette' : 'pi pi-desktop'" aria-hidden="true"></i>
                  {{ project.type }}
                </span>
                <span class="ms-project-year">{{ project.year }}</span>
              </div>

              <!-- Client identity -->
              <div class="ms-project-client">
                <div class="ms-project-logo" aria-hidden="true">
                  <img v-if="project.logo" :src="project.logo" :alt="project.client" class="ms-project-logo__img" />
                  <span v-else>{{ project.name.split(' ').map(w => w[0]).slice(0, 2).join('') }}</span>
                </div>
                <div>
                  <h3 class="ms-project-name">{{ project.name }}</h3>
                  <p class="ms-project-client-name">{{ project.client }}</p>
                </div>
              </div>

              <!-- Description -->
              <p class="ms-project-excerpt">{{ project.excerpt }}</p>

              <!-- Key metrics -->
              <div class="ms-project-metrics">
                <div v-for="m in project.metrics" :key="m.label" class="ms-metric-chip">
                  <span class="ms-metric-value">{{ m.value }}</span>
                  <span class="ms-metric-label">{{ m.label }}</span>
                </div>
              </div>

              <!-- Highlights -->
              <ul class="ms-project-highlights" role="list">
                <li v-for="h in project.highlights" :key="h">
                  <i class="pi pi-check-circle" aria-hidden="true"></i>
                  <span>{{ h }}</span>
                </li>
              </ul>

              <!-- Footer: tags + preview button -->
              <div class="ms-project-card__footer">
                <div class="ms-project-tags">
                  <span v-for="tag in project.tags" :key="tag" class="ms-tech-tag">{{ tag }}</span>
                </div>
                <button
                  type="button"
                  class="ms-btn-preview"
                  @click.stop="stopAutoplay(); cardIdx === i ? openModal(project) : goToCard(i)"
                  :aria-label="`Ver proyecto ${project.name}`"
                >
                  <i class="pi pi-play-circle" aria-hidden="true"></i>
                  Ver proyecto
                  <i class="pi pi-arrow-right ms-btn-preview__arrow" aria-hidden="true"></i>
                </button>
              </div>
            </article>
          </div>
        </div>

        <!-- Controls -->
        <div class="ms-pcarousel-controls" v-if="testimonials.length > 1">
          <button
            type="button"
            class="ms-pcarousel-nav"
            @click="prevCard"
            aria-label="Proyecto anterior"
          >
            <i class="pi pi-chevron-left" aria-hidden="true"></i>
          </button>

          <div class="ms-pcarousel-dots" role="tablist">
            <button
              v-for="(p, i) in testimonials"
              :key="p.id"
              role="tab"
              :aria-selected="i === cardIdx"
              :class="['ms-pcarousel-dot', { 'ms-pcarousel-dot--active': i === cardIdx }]"
              @click="goToCard(i)"
              :aria-label="`Proyecto ${i + 1}: ${p.name}`"
            ></button>
          </div>

          <span class="ms-pcarousel-counter">{{ cardIdx + 1 }} / {{ testimonials.length }}</span>

          <button
            type="button"
            class="ms-pcarousel-nav"
            @click="nextCard"
            aria-label="Proyecto siguiente"
          >
            <i class="pi pi-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <!-- CTA banner -->
      <div class="ms-testimonials-cta" data-aos="fade-up">
        <div class="ms-testimonials-cta__inner">
          <div class="ms-testimonials-cta__copy">
            <p class="ms-testimonials-cta__title">¿Quieres resultados como estos?</p>
            <p class="ms-testimonials-cta__sub">Sin tecnicismos · Sin letra chica · Con resultados reales</p>
          </div>
          <button type="button" class="ms-btn ms-btn-glow ms-btn-lg" @click="scrollTo('#contacto')">
            Solicita una Consulta Gratuita
          </button>
        </div>
      </div>

    </div>
  </section>

  <!-- Project detail modal — teleported to avoid stacking context -->
  <Teleport to="body">
    <Transition name="ms-modal-fade">
      <div
        v-if="activeProject"
        class="ms-project-overlay"
        role="dialog"
        :aria-label="`Capturas de ${activeProject?.name}`"
        aria-modal="true"
        @click.self="closeModal"
      >
        <div class="ms-project-modal">

          <!-- Modal header -->
          <div class="ms-modal-head">
            <div class="ms-modal-title-wrap">
              <span class="ms-project-type-badge" :class="`ms-type--${activeProject.category}`">
                <i :class="activeProject.category === 'mobile' ? 'pi pi-mobile' : activeProject.category === 'design' ? 'pi pi-palette' : 'pi pi-desktop'" aria-hidden="true"></i>
                {{ activeProject.type }}
              </span>
              <h3 class="ms-modal-title">{{ activeProject.name }}</h3>
              <div class="ms-modal-client-row">
                <img v-if="activeProject.logo" :src="activeProject.logo" :alt="activeProject.client" class="ms-client-logo" />
                <p class="ms-modal-client">{{ activeProject.client }}</p>
              </div>
            </div>
            <button type="button" class="ms-modal-close" @click="closeModal" aria-label="Cerrar">
              <i class="pi pi-times" aria-hidden="true"></i>
            </button>
          </div>

          <!-- Carousel -->
          <div
            class="ms-carousel"
            @touchstart.passive="onTouchStart"
            @touchend.passive="onTouchEnd"
          >
            <Transition :name="`ms-slide-${slideDir}`" mode="out-in">
              <div :key="currentImageIdx" class="ms-carousel-slide">
                <!-- Laptop frame — web & design projects -->
                <div v-if="currentImage()?.src && activeProject.category !== 'mobile'" class="ms-laptop-wrap">
                  <div class="ms-laptop-frame">
                    <div class="ms-laptop-chrome">
                      <div class="ms-chrome-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <div class="ms-chrome-url-bar">
                        <span class="ms-chrome-url-text">{{ activeProject.url ?? 'metasoft.pe' }}</span>
                      </div>
                    </div>
                    <div class="ms-laptop-screen">
                      <img :src="currentImage().src" :alt="currentImage().label" class="ms-device-img" />
                    </div>
                  </div>
                  <div class="ms-laptop-base"><div class="ms-laptop-hinge"></div></div>
                </div>
                <!-- Smartphone frame — mobile projects -->
                <div v-else-if="currentImage()?.src && activeProject.category === 'mobile'" class="ms-phone-wrap">
                  <div class="ms-phone-frame">
                    <div class="ms-phone-notch"></div>
                    <div class="ms-phone-screen">
                      <img :src="currentImage().src" :alt="currentImage().label" class="ms-device-img" />
                    </div>
                    <div class="ms-phone-home-bar"></div>
                  </div>
                </div>
                <div
                  v-else
                  class="ms-carousel-placeholder"
                  :class="`ms-placeholder--${activeProject.category}`"
                >
                  <div class="ms-placeholder-frame">
                    <i :class="activeProject.category === 'mobile' ? 'pi pi-mobile' : 'pi pi-desktop'"></i>
                  </div>
                  <p class="ms-placeholder-label">{{ currentImage()?.label }}</p>
                  <span class="ms-placeholder-note">Captura próximamente disponible</span>
                </div>
              </div>
            </Transition>

            <button
              v-if="activeProject.images.length > 1"
              type="button"
              class="ms-carousel-nav ms-carousel-nav--prev"
              @click="prevImage"
              aria-label="Imagen anterior"
            >
              <i class="pi pi-chevron-left" aria-hidden="true"></i>
            </button>
            <button
              v-if="activeProject.images.length > 1"
              type="button"
              class="ms-carousel-nav ms-carousel-nav--next"
              @click="nextImage"
              aria-label="Imagen siguiente"
            >
              <i class="pi pi-chevron-right" aria-hidden="true"></i>
            </button>
          </div>

          <!-- Caption + dot indicators -->
          <div class="ms-carousel-footer">
            <p class="ms-carousel-caption">{{ currentImage()?.label }}</p>
            <div class="ms-carousel-dots" role="tablist">
              <button
                v-for="(img, i) in activeProject.images"
                :key="i"
                role="tab"
                :aria-selected="i === currentImageIdx"
                :class="['ms-carousel-dot', { 'ms-carousel-dot--active': i === currentImageIdx }]"
                @click="currentImageIdx = i"
                :aria-label="`Imagen ${i + 1} de ${activeProject.images.length}`"
              ></button>
            </div>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* ── Section shell ─────────────────────────────────────── */
.ms-testimonials {
  background: var(--ms-bg-deep);
  position: relative;
  overflow: hidden;
}

.ms-testimonials::before {
  content: '\201C';
  position: absolute;
  top: -4rem;
  left: -1.5rem;
  font-size: 26rem;
  font-family: Georgia, 'Times New Roman', serif;
  line-height: 1;
  color: rgba(14, 165, 233, 0.045);
  pointer-events: none;
  user-select: none;
}

.ms-testimonials::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px),
    radial-gradient(rgba(255,255,255,0.1)  1px, transparent 1px);
  background-size: 97px 89px, 53px 61px;
  background-position: 0 0, 31px 29px;
  pointer-events: none;
}

/* ── Header ────────────────────────────────────────────── */
.ms-section-header.text-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.ms-section-subtitle {
  color: var(--ms-text-secondary);
  font-size: var(--ms-font-size-base);
  max-width: 600px;
  margin: var(--ms-spacing-md) auto 0;
  line-height: var(--ms-leading-relaxed);
}

/* ── Project peek carousel ────────────────────────────────────── */
.ms-pcarousel {
  margin-top: var(--ms-spacing-3xl);
}

/* Clipping wrapper — fades edges so side cards taper out */
.ms-pcarousel-track-wrap {
  overflow: hidden;
  position: relative;
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 11%, #000 89%, transparent 100%);
  mask-image: linear-gradient(90deg, transparent 0%, #000 11%, #000 89%, transparent 100%);
}

/* Flex track — shifted by JS to center the active card */
.ms-pcarousel-track {
  display: flex;
  gap: 28px;
  will-change: transform;
  transition: transform 0.48s cubic-bezier(0.4, 0, 0.2, 1);
}

/* controls row: [prev] [dots] [counter] [next] */
.ms-pcarousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--ms-spacing-md);
  margin-top: var(--ms-spacing-xl);
}

.ms-pcarousel-nav {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(14, 165, 233, 0.08);
  border: 1px solid rgba(14, 165, 233, 0.22);
  color: var(--ms-brand-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, transform 0.15s;
  flex-shrink: 0;
}

.ms-pcarousel-nav:hover {
  background: rgba(14, 165, 233, 0.18);
  border-color: rgba(14, 165, 233, 0.5);
  transform: scale(1.08);
}

.ms-pcarousel-dots {
  display: flex;
  gap: 8px;
  align-items: center;
}

.ms-pcarousel-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.18);
  cursor: pointer;
  transition: background 0.25s, transform 0.25s;
  padding: 0;
}

.ms-pcarousel-dot--active {
  background: var(--ms-brand-primary);
  transform: scale(1.3);
}

.ms-pcarousel-counter {
  font-size: var(--ms-font-size-xs);
  color: var(--ms-text-muted);
  font-weight: 600;
  letter-spacing: 0.06em;
  min-width: 32px;
  text-align: center;
}

/* ── Project card ──────────────────────────────────────── */
.ms-project-card {
  /* Peek carousel sizing */
  flex: 0 0 min(720px, 76%);
  width: min(720px, 76%);
  /* Inactive state */
  opacity: 0.35;
  transform: scale(0.93);
  pointer-events: none;
  user-select: none;
  /* Card styling */
  background: var(--ms-bg-card);
  border: 1px solid var(--ms-border-color);
  border-radius: var(--ms-border-radius-xl);
  padding: var(--ms-spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--ms-spacing-lg);
  transition: opacity 0.42s ease, transform 0.42s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  position: relative;
  overflow: hidden;
}

.ms-project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--ms-gradient-card);
  pointer-events: none;
}

/* Active (center) card */
.ms-project-card--active {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
  user-select: auto;
}

.ms-project-card--active:hover {
  border-color: rgba(14, 165, 233, 0.35);
  transform: translateY(-4px) scale(1);
  box-shadow: var(--ms-shadow-glow);
}

/* top bar */
.ms-project-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ms-spacing-sm);
}

.ms-project-year {
  font-size: var(--ms-font-size-xs);
  color: var(--ms-text-muted);
  font-weight: 600;
  letter-spacing: 0.08em;
}

/* client row */
.ms-project-client {
  display: flex;
  align-items: center;
  gap: var(--ms-spacing-md);
}

.ms-project-logo {
  width: 48px;
  height: 48px;
  border-radius: var(--ms-border-radius);
  background: var(--ms-gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: var(--ms-font-size-sm);
  color: #fff;
  flex-shrink: 0;
  letter-spacing: -0.02em;
  overflow: hidden;
}

.ms-project-logo__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 2px;
}

.ms-project-name {
  font-size: var(--ms-font-size-lg);
  font-weight: 700;
  color: var(--ms-text-primary);
  margin: 0 0 2px;
  letter-spacing: -0.02em;
}

.ms-project-client-name {
  font-size: var(--ms-font-size-xs);
  color: var(--ms-text-secondary);
  margin: 0;
}

/* excerpt */
.ms-project-excerpt {
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
  line-height: 1.65;
  margin: 0;
}

/* metrics */
.ms-project-metrics {
  display: flex;
  gap: var(--ms-spacing-sm);
  flex-wrap: wrap;
}

.ms-metric-chip {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--ms-spacing-xs) var(--ms-spacing-md);
  background: rgba(14, 165, 233, 0.07);
  border: 1px solid rgba(14, 165, 233, 0.18);
  border-radius: var(--ms-border-radius);
  min-width: 80px;
}

.ms-metric-value {
  font-size: var(--ms-font-size-base);
  font-weight: 800;
  color: var(--ms-brand-primary);
  line-height: 1.2;
}

.ms-metric-label {
  font-size: 0.6rem;
  color: var(--ms-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
  margin-top: 2px;
}

/* highlights */
.ms-project-highlights {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--ms-spacing-xs);
  flex: 1;
}

.ms-project-highlights li {
  display: flex;
  align-items: flex-start;
  gap: var(--ms-spacing-sm);
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
}

.ms-project-highlights li i {
  color: var(--ms-accent-success);
  font-size: 0.8rem;
  margin-top: 2px;
  flex-shrink: 0;
}

/* footer */
.ms-project-card__footer {
  display: flex;
  flex-direction: column;
  gap: var(--ms-spacing-md);
  padding-top: var(--ms-spacing-md);
  border-top: 1px solid var(--ms-border-color);
}

.ms-project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ms-spacing-xs);
}

.ms-tech-tag {
  font-size: 0.65rem;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--ms-border-color);
  color: var(--ms-text-secondary);
  letter-spacing: 0.04em;
}

@keyframes ms-btn-shimmer {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.ms-btn-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 0.75rem 1.5rem;
  font-size: var(--ms-font-size-sm);
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #fff;
  background: linear-gradient(
    270deg,
    #0EA5E9 0%,
    #38BDF8 35%,
    #fff 50%,
    #38BDF8 65%,
    #0EA5E9 100%
  );
  background-size: 300% auto;
  border: none;
  border-radius: 99px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(14, 165, 233, 0.35), 0 0 0 1px rgba(56, 189, 248, 0.25);
  transition: box-shadow 0.25s ease, transform 0.2s ease;
  animation: ms-btn-shimmer 3.5s linear infinite;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}

.ms-btn-preview::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(255,255,255,0.15), transparent);
  pointer-events: none;
}

.ms-btn-preview:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow: 0 8px 32px rgba(14, 165, 233, 0.55), 0 0 0 1px rgba(56, 189, 248, 0.5);
}

.ms-btn-preview:active {
  transform: translateY(0) scale(0.99);
}

.ms-btn-preview__arrow {
  font-size: 0.75rem;
  transition: transform 0.2s ease;
}

.ms-btn-preview:hover .ms-btn-preview__arrow {
  transform: translateX(4px);
}

/* ── CTA banner ────────────────────────────────────────── */
.ms-testimonials-cta {
  margin-top: var(--ms-spacing-3xl);
  border-radius: var(--ms-border-radius-xl);
  background: linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(56,189,248,0.04) 100%);
  border: 1px solid rgba(14, 165, 233, 0.18);
  overflow: hidden;
  position: relative;
}

.ms-testimonials-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 100% 50%, rgba(14,165,233,0.06) 0%, transparent 60%);
  pointer-events: none;
}

.ms-testimonials-cta__inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ms-spacing-xl);
  padding: var(--ms-spacing-2xl) var(--ms-spacing-3xl);
}

.ms-testimonials-cta__copy { flex: 1; }

.ms-testimonials-cta__title {
  font-size: var(--ms-font-size-lg);
  font-weight: 700;
  color: var(--ms-text-primary);
  margin: 0 0 var(--ms-spacing-xs);
  letter-spacing: -0.01em;
}

.ms-testimonials-cta__sub {
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
  margin: 0;
}

@media (max-width: 768px) {
  .ms-testimonials-cta__inner {
    flex-direction: column;
    align-items: flex-start;
    padding: var(--ms-spacing-xl);
    gap: var(--ms-spacing-lg);
  }
  .ms-testimonials-cta__inner .ms-btn { width: 100%; justify-content: center; }
}

@media (max-width: 480px) {
  .ms-testimonials-cta__inner { padding: var(--ms-spacing-lg); }
}

/* ── Peek carousel — mobile ────────────────────────────── */
@media (max-width: 640px) {
  .ms-pcarousel-track-wrap {
    /* Narrower fade so cards use more screen width */
    -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%);
    mask-image: linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%);
  }

  .ms-project-card {
    /* Wider cards on narrow screens — show ~90% of viewport */
    flex: 0 0 min(720px, 90%);
    width: min(720px, 90%);
    padding: var(--ms-spacing-lg);
    gap: var(--ms-spacing-md);
  }

  .ms-pcarousel-controls {
    gap: var(--ms-spacing-sm);
    margin-top: var(--ms-spacing-lg);
  }
}

.mb-md { margin-bottom: var(--ms-spacing-md); }
</style>

<!-- Modal styles — not scoped (teleported outside component root) -->
<style>
/* ── Type badge ────────────────────────────────────────── */
.ms-project-type-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 99px;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1px solid;
}

.ms-type--web {
  color: #38BDF8;
  background: rgba(56, 189, 248, 0.1);
  border-color: rgba(56, 189, 248, 0.25);
}

.ms-type--mobile {
  color: #A78BFA;
  background: rgba(167, 139, 250, 0.1);
  border-color: rgba(167, 139, 250, 0.25);
}

.ms-type--design {
  color: #FB923C;
  background: rgba(251, 146, 60, 0.1);
  border-color: rgba(251, 146, 60, 0.25);
}

/* ── Overlay ───────────────────────────────────────────── */
.ms-project-overlay {
  position: fixed;
  inset: 0;
  background: rgba(5, 8, 20, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.ms-project-modal {
  background: #111827;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  width: 100%;
  max-width: 780px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.9);
}

/* modal header */
.ms-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 1.75rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  flex-shrink: 0;
}

.ms-modal-title-wrap {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ms-modal-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #F8FAFC;
  margin: 0;
  letter-spacing: -0.02em;
}

.ms-modal-client-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ms-client-logo {
  height: 28px;
  width: 28px;
  border-radius: 8px;
  object-fit: contain;
  flex-shrink: 0;
  background: var(--ms-gradient-primary);
  padding: 2px;
}

.ms-modal-client {
  font-size: 0.8rem;
  color: #64748B;
  margin: 0;
}

.ms-modal-close {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.04);
  color: #94A3B8;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  flex-shrink: 0;
  transition: background 0.2s, color 0.2s;
}

.ms-modal-close:hover { background: rgba(255,255,255,0.1); color: #F8FAFC; }

/* ── Carousel ──────────────────────────────────────────── */
.ms-carousel {
  position: relative;
  background: #09101E;
  flex: 1;
  min-height: 340px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ms-carousel-slide {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ms-carousel-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* Placeholder (no screenshot yet) */
.ms-carousel-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem;
  text-align: center;
  width: 100%;
  height: 100%;
  min-height: 340px;
}

.ms-placeholder--web .ms-placeholder-frame {
  width: 120px;
  height: 80px;
  border: 2px solid rgba(56,189,248,0.35);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(56,189,248,0.05);
  position: relative;
}

.ms-placeholder--web .ms-placeholder-frame::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 6px;
  border-radius: 3px 3px 0 0;
  border: 2px solid rgba(56,189,248,0.35);
  border-bottom: none;
}

.ms-placeholder--mobile .ms-placeholder-frame {
  width: 72px;
  height: 120px;
  border: 2px solid rgba(167,139,250,0.35);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(167,139,250,0.05);
}

.ms-placeholder--design .ms-placeholder-frame {
  width: 96px;
  height: 96px;
  border: 2px solid rgba(251,146,60,0.35);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(251,146,60,0.05);
}

.ms-placeholder-frame i { font-size: 1.8rem; opacity: 0.35; }
.ms-placeholder--web .ms-placeholder-frame i    { color: #38BDF8; }
.ms-placeholder--mobile .ms-placeholder-frame i { color: #A78BFA; }
.ms-placeholder--design .ms-placeholder-frame i { color: #FB923C; }

.ms-placeholder-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #CBD5E1;
  margin: 0;
}

.ms-placeholder-note {
  font-size: 0.72rem;
  color: #475569;
}

/* carousel nav buttons */
.ms-carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(10, 15, 28, 0.75);
  backdrop-filter: blur(4px);
  color: #F8FAFC;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  transition: background 0.2s, border-color 0.2s;
  z-index: 2;
}

.ms-carousel-nav:hover { background: rgba(14,165,233,0.2); border-color: rgba(14,165,233,0.4); }
.ms-carousel-nav--prev { left: 12px; }
.ms-carousel-nav--next { right: 12px; }

/* ── Carousel footer ───────────────────────────────────── */
.ms-carousel-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1.75rem;
  border-top: 1px solid rgba(255,255,255,0.06);
  flex-shrink: 0;
  gap: 1rem;
  flex-wrap: wrap;
}

.ms-carousel-caption {
  font-size: 0.75rem;
  color: #64748B;
  margin: 0;
  flex: 1;
}

.ms-carousel-dots {
  display: flex;
  gap: 6px;
}

.ms-carousel-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.18);
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, transform 0.2s;
}

.ms-carousel-dot--active {
  background: #0EA5E9;
  transform: scale(1.3);
}

/* ── Slide transitions ─────────────────────────────────── */
.ms-slide-right-enter-from { transform: translateX(40px); opacity: 0; }
.ms-slide-right-enter-active { transition: all 0.22s ease; }
.ms-slide-right-leave-to { transform: translateX(-40px); opacity: 0; }
.ms-slide-right-leave-active { transition: all 0.22s ease; }

.ms-slide-left-enter-from { transform: translateX(-40px); opacity: 0; }
.ms-slide-left-enter-active { transition: all 0.22s ease; }
.ms-slide-left-leave-to { transform: translateX(40px); opacity: 0; }
.ms-slide-left-leave-active { transition: all 0.22s ease; }

/* ── Modal overlay transition ──────────────────────────── */
.ms-modal-fade-enter-active { transition: all 0.3s ease; }
.ms-modal-fade-leave-active { transition: all 0.2s ease; }
.ms-modal-fade-enter-from,
.ms-modal-fade-leave-to { opacity: 0; }
.ms-modal-fade-enter-from .ms-project-modal { transform: scale(0.96) translateY(12px); }
.ms-modal-fade-leave-to .ms-project-modal  { transform: scale(0.96) translateY(8px); }

/* ── Modal — mobile (centered) ─────────────────────────── */
@media (max-width: 640px) {
  .ms-project-overlay {
    padding: 1rem;
    align-items: center;
    justify-content: center;
  }

  .ms-project-modal {
    border-radius: 16px;
    max-height: 88vh;
    width: 100%;
  }

  .ms-modal-head {
    padding: 1rem 1.1rem 0.85rem;
  }

  .ms-modal-title {
    font-size: 1rem;
  }

  .ms-carousel {
    min-height: 200px;
  }

  .ms-carousel-footer {
    padding: 0.6rem 1.1rem;
  }

  .ms-carousel-nav {
    width: 34px;
    height: 34px;
    font-size: 0.75rem;
  }
  .ms-carousel-nav--prev { left: 6px; }
  .ms-carousel-nav--next { right: 6px; }
}

/* ── Laptop mockup frame ─────────────────────────────────── */
.ms-laptop-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 14px 20px 0;
}

.ms-laptop-frame {
  width: 100%;
  max-width: 620px;
  background: #0d1117;
  border: 2px solid #2d333b;
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.04),
    inset 0 0 0 1px rgba(255,255,255,0.02),
    0 -6px 32px rgba(0,0,0,0.6);
}

/* Browser chrome bar */
.ms-laptop-chrome {
  height: 30px;
  background: #161b22;
  border-bottom: 1px solid #2d333b;
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 0;
  flex-shrink: 0;
}

.ms-chrome-dots {
  display: flex;
  gap: 5px;
  flex-shrink: 0;
}

.ms-chrome-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: block;
}
.ms-chrome-dots span:nth-child(1) { background: #FF5F57; }
.ms-chrome-dots span:nth-child(2) { background: #FEBC2E; }
.ms-chrome-dots span:nth-child(3) { background: #28C840; }

.ms-chrome-url-bar {
  flex: 1;
  height: 17px;
  background: rgba(255,255,255,0.05);
  border-radius: 99px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}

.ms-chrome-url-text {
  font-size: 0.55rem;
  color: rgba(255,255,255,0.25);
  letter-spacing: 0.03em;
  font-family: system-ui, sans-serif;
}

/* Screenshot viewport — scrollable so users can explore the full page */
.ms-laptop-screen {
  width: 100%;
  max-height: 310px;
  overflow-y: auto;
  overflow-x: hidden;
  line-height: 0;
  scrollbar-width: thin;
  scrollbar-color: #2d333b transparent;
}

.ms-laptop-screen::-webkit-scrollbar { width: 4px; }
.ms-laptop-screen::-webkit-scrollbar-thumb {
  background: #2d333b;
  border-radius: 2px;
}

.ms-device-img {
  width: 100%;
  display: block;
}

/* Laptop base / keyboard chassis */
.ms-laptop-base {
  width: min(660px, calc(100% + 20px));
  height: 10px;
  background: linear-gradient(to bottom, #21262d, #161b22);
  border-radius: 0 0 6px 6px;
  border: 2px solid #2d333b;
  border-top: none;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 2px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.6);
}

.ms-laptop-hinge {
  width: 52px;
  height: 3px;
  background: #2d333b;
  border-radius: 0 0 3px 3px;
}

@media (max-width: 640px) {
  .ms-laptop-wrap { padding: 8px 10px 0; }
  .ms-laptop-chrome { height: 22px; }
  .ms-chrome-dots span { width: 6px; height: 6px; }
  .ms-laptop-screen { max-height: 200px; }
  .ms-laptop-base { height: 7px; }
}

/* ── Smartphone mockup frame ─────────────────────────────────────────────── */
.ms-phone-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px 0;
}
.ms-phone-frame {
  width: 210px;
  background: #0d1117;
  border: 2px solid #2d333b;
  border-radius: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.05),
    0 20px 60px rgba(0, 0, 0, 0.8),
    inset 0 1px 0 rgba(255,255,255,0.07);
  position: relative;
}
.ms-phone-notch {
  width: 64px;
  height: 18px;
  background: #0d1117;
  border-radius: 0 0 14px 14px;
  margin: 6px auto 0;
  position: relative;
  z-index: 2;
  border: 1.5px solid #2d333b;
  border-top: none;
  flex-shrink: 0;
}
.ms-phone-screen {
  width: 100%;
  max-height: 360px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: #2d333b transparent;
}
.ms-phone-screen::-webkit-scrollbar { width: 3px; }
.ms-phone-screen::-webkit-scrollbar-thumb { background: #2d333b; border-radius: 2px; }
.ms-phone-screen .ms-device-img { display: block; width: 100%; }
.ms-phone-home-bar {
  width: 44px;
  height: 4px;
  background: #2d333b;
  border-radius: 2px;
  margin: 8px auto;
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .ms-phone-frame { width: 170px; }
  .ms-phone-screen { max-height: 280px; }
}
</style>
