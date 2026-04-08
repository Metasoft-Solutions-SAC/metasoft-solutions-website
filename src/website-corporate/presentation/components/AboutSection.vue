<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useWebsiteCorporateStore } from '../../application/website-corporate.store.js'
import SpotlightCard from './global/SpotlightCard.vue'
import { useScrollTo } from '../composables/useScrollTo.js'

const store = useWebsiteCorporateStore()
const { aboutStats, aboutValues, differentiators } = storeToRefs(store)
const { scrollTo } = useScrollTo()

// Animate stat values when block first enters viewport
const statsRef = ref(null)
const statsAnimated = ref(false)
let statsObserver = null

onMounted(() => {
  if (!statsRef.value) return
  statsObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        statsAnimated.value = true
        statsObserver.disconnect()
      }
    },
    { threshold: 0.35 }
  )
  statsObserver.observe(statsRef.value)
})

onUnmounted(() => statsObserver?.disconnect())
</script>

<template>
  <section id="nosotros" class="ms-section ms-about" aria-labelledby="about-title">
    <div class="ms-container">

      <!-- Section header -->
      <div class="ms-section-header" data-aos="fade-up">
        <p class="ms-section-overline" aria-hidden="true">03 / Nosotros</p>
        <span class="ms-badge mb-md">Equipo · Lima, Perú</span>
        <h2 id="about-title">El equipo que <span class="text-gradient">habla tu idioma</span></h2>
        <p class="ms-about-subtitle">
          Combinamos experiencia técnica con visión de negocio para crear soluciones digitales
          que realmente generan resultados.
        </p>
      </div>
      <!-- �"?�"? Two-column body: Historia + Stats & Differentiators �"?�"? -->
      <div class="ms-about-body" data-aos="fade-up" data-aos-delay="100">

        <!-- Left: historia -->
        <div class="ms-history-card">
          <div class="ms-history-card__header">
            <div class="ms-icon-box">
              <i class="pi pi-send" aria-hidden="true"></i>
            </div>
            <div>
              <h3 class="ms-history-card__title">Nuestra Historia</h3>
              <p class="ms-history-card__subtitle">De startup a socio tecnológico confiable</p>
            </div>
          </div>
          <div class="ms-about__prose">
            <p>
              <strong>Metasoft Solutions SAC</strong> nació en 2025 con una propuesta clara: ofrecer
              desarrollo de software de calidad empresarial con la agilidad y flexibilidad que las
              empresas modernas necesitan.
            </p>
            <p>
              Nuestro equipo combina experiencia en startups tecnológicas y proyectos empresariales,
              lo que nos permite entender tanto la visión estratégica como los detalles de
              implementación que hacen funcionar un negocio.
            </p>
            <p>
              Trabajamos con empresas que buscan un
              <strong class="text-brand">socio tecnológico que hable su idioma</strong>,
              entienda sus objetivos de negocio y entregue soluciones que realmente se usen.
            </p>
          </div>
        </div>

        <!-- Right: stats + differentiators -->
        <div class="ms-about-right">

          <!-- Stats stack -->
          <div ref="statsRef" class="ms-about-stats" :class="{ 'is-animated': statsAnimated }" aria-label="Estadísticas clave">
            <div
              v-for="(stat, idx) in aboutStats"
              :key="stat.label"
              class="ms-stat-row"
              data-aos="fade-left"
              :data-aos-delay="idx * 80"
            >
              <div class="ms-stat-row__val text-gradient">{{ stat.value }}</div>
              <div class="ms-stat-row__meta">
                <span class="ms-stat-row__label">{{ stat.label }}</span>
                <span class="ms-stat-row__sub">{{ stat.sub }}</span>
              </div>
            </div>
          </div>

          <!-- Differentiators -->
          <div class="ms-about-diffs">
            <SpotlightCard
              v-for="(item, idx) in differentiators"
              :key="item.id"
              class="ms-diff-card"
              data-aos="fade-up"
              :data-aos-delay="idx * 60"
            >
              <div class="ms-diff-card__inner">
                <div class="ms-icon-box ms-icon-box--sm">
                  <i :class="item.icon" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 class="ms-diff-title">{{ item.title }}</h4>
                  <p class="ms-diff-desc">{{ item.desc }}</p>
                </div>
              </div>
            </SpotlightCard>
          </div>

        </div>
      </div>

      <!-- �"?�"? Values grid �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"? -->
      <div class="ms-about-values" data-aos="fade-up" data-aos-delay="100">
        <h3 class="ms-about-values__title">Los principios que guían <span class="text-gradient">cada proyecto</span></h3>
        <div class="ms-about-values__grid">
          <SpotlightCard
            v-for="(val, idx) in aboutValues"
            :key="val.title"
            class="ms-value-card"
            data-aos="fade-up"
            :data-aos-delay="idx * 70"
          >
            <div class="ms-icon-box mb-md">
              <i :class="val.icon" aria-hidden="true"></i>
            </div>
            <h4 class="ms-value-title">{{ val.title }}</h4>
            <p class="ms-value-desc">{{ val.desc }}</p>
          </SpotlightCard>
        </div>
      </div>

      <!-- �"?�"? CTA Banner �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"? -->
      <div class="ms-about-cta" data-aos="fade-up" data-aos-delay="100">
        <div class="ms-about-cta__inner">
          <div class="ms-about-cta__copy">
            <p class="ms-about-cta__title">¿Te gustaría trabajar con nuestro equipo?</p>
            <p class="ms-about-cta__sub">Sin tecnicismos · Sin letra chica · Con resultados reales</p>
          </div>
          <button type="button" class="ms-btn ms-btn-glow ms-btn-lg" @click="scrollTo('#contacto')">
            Solicita una Consulta Gratuita
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.ms-about {
  background: var(--ms-bg-surface-2);
  position: relative;
  overflow: hidden;
}

/* Circuit dot-grid + radial glows */
.ms-about::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 650px 450px at -5% 75%, rgba(14, 165, 233, 0.08) 0%, transparent 65%),
    radial-gradient(ellipse 550px 420px at 108% 12%, rgba(99, 102, 241, 0.07) 0%, transparent 65%),
    radial-gradient(circle, rgba(14, 165, 233, 0.16) 1.5px, transparent 1.5px),
    linear-gradient(rgba(14, 165, 233, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(14, 165, 233, 0.035) 1px, transparent 1px);
  background-size: auto, auto, 32px 32px, 32px 32px, 32px 32px;
  pointer-events: none;
}

/* Code-tag watermark */
.ms-about::after {
  content: '</>';
  position: absolute;
  top: 4rem;
  right: -3rem;
  font-size: 20rem;
  font-weight: 900;
  font-family: 'Courier New', monospace;
  color: var(--ms-brand-primary);
  opacity: 0.04;
  line-height: 1;
  pointer-events: none;
  user-select: none;
  letter-spacing: -0.06em;
  rotate: 10deg;
  z-index: 0;
}

.ms-about > .ms-container {
  position: relative;
  z-index: 1;
}

/* �"?�"? Section header �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"? */
.ms-section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: var(--ms-spacing-2xl);
}

.ms-about-subtitle {
  margin-top: var(--ms-spacing-md);
  font-size: var(--ms-font-size-lg);
  color: var(--ms-text-secondary);
  line-height: var(--ms-leading-relaxed);
  max-width: 560px;
}

/* �"?�"? Two-column body �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"? */
.ms-about-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--ms-spacing-xl);
  align-items: start;
}

@media (max-width: 1024px) {
  .ms-about-body { grid-template-columns: 1fr; }
}

/* �"?�"? Historia card �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"? */
.ms-history-card {
  background: var(--ms-bg-card);
  border: 1px solid var(--ms-border-color);
  border-radius: var(--ms-border-radius-xl);
  padding: var(--ms-spacing-2xl);
  height: 100%;
}

.ms-history-card__header {
  display: flex;
  align-items: flex-start;
  gap: var(--ms-spacing-md);
  margin-bottom: var(--ms-spacing-xl);
  padding-bottom: var(--ms-spacing-lg);
  border-bottom: 1px solid var(--ms-border-color);
}

.ms-history-card__title {
  font-size: var(--ms-font-size-lg);
  font-weight: 700;
  color: var(--ms-text-primary);
  margin: 0 0 var(--ms-spacing-xs);
}

.ms-history-card__subtitle {
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
  margin: 0;
}

.ms-about__prose {
  color: var(--ms-text-secondary);
  font-size: var(--ms-font-size-base);
  line-height: var(--ms-leading-relaxed);
  display: flex;
  flex-direction: column;
  gap: var(--ms-spacing-md);
}

.ms-about__prose p { margin: 0; }

.text-brand { color: var(--ms-brand-secondary); }

/* �"?�"? Right column �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"? */
.ms-about-right {
  display: flex;
  flex-direction: column;
  gap: var(--ms-spacing-lg);
}

/* �"?�"? Stats stack �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"? */
.ms-about-stats {
  display: flex;
  flex-direction: column;
  gap: 0;
  background: var(--ms-bg-deep);
  border: 1px solid rgba(14, 165, 233, 0.15);
  border-radius: var(--ms-border-radius-xl);
  overflow: hidden;
}

.ms-stat-row {
  display: flex;
  align-items: center;
  gap: var(--ms-spacing-lg);
  padding: var(--ms-spacing-md) var(--ms-spacing-xl);
  border-bottom: 1px solid var(--ms-border-color);
  transition: background 0.2s ease;
}

.ms-stat-row:last-child { border-bottom: none; }
.ms-stat-row:hover { background: rgba(14, 165, 233, 0.04); }

.ms-stat-row__val {
  font-size: var(--ms-font-size-2xl);
  font-weight: 800;
  line-height: 1;
  white-space: nowrap;
  min-width: 72px;
}

/* ── Stats pop-in on scroll enter ──────────── */
.ms-about-stats.is-animated .ms-stat-row:nth-child(1) .ms-stat-row__val { animation-delay: 0.10s; }
.ms-about-stats.is-animated .ms-stat-row:nth-child(2) .ms-stat-row__val { animation-delay: 0.28s; }
.ms-about-stats.is-animated .ms-stat-row:nth-child(3) .ms-stat-row__val { animation-delay: 0.46s; }

.ms-about-stats.is-animated .ms-stat-row__val {
  animation: stat-pop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

@keyframes stat-pop {
  from { transform: scale(0.5) translateX(-10px); opacity: 0; }
  to   { transform: scale(1) translateX(0);       opacity: 1; }
}

.ms-stat-row__meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.ms-stat-row__label {
  font-size: var(--ms-font-size-sm);
  font-weight: 600;
  color: var(--ms-text-primary);
  line-height: 1.3;
}

.ms-stat-row__sub {
  font-size: var(--ms-font-size-xs);
  color: var(--ms-text-secondary);
  line-height: 1.3;
}

/* �"?�"? Differentiators �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"? */
.ms-about-diffs {
  display: flex;
  flex-direction: column;
  gap: var(--ms-spacing-sm);
}

.ms-diff-card__inner {
  display: flex;
  align-items: flex-start;
  gap: var(--ms-spacing-md);
}

.ms-icon-box--sm {
  width: 36px !important;
  height: 36px !important;
  min-width: 36px;
  font-size: 0.9rem !important;
  flex-shrink: 0;
}

.ms-diff-title {
  font-size: var(--ms-font-size-sm);
  font-weight: 700;
  color: var(--ms-text-primary);
  margin: 0 0 var(--ms-spacing-xs);
  letter-spacing: -0.01em;
}

.ms-diff-desc {
  font-size: var(--ms-font-size-xs);
  color: var(--ms-text-secondary);
  line-height: var(--ms-leading-relaxed);
  margin: 0;
}

/* �"?�"? Values grid �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"? */
.ms-about-values {
  margin-top: var(--ms-spacing-3xl);
}

.ms-about-values__title {
  font-size: var(--ms-font-size-2xl);
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: var(--ms-spacing-xl);
}

.ms-about-values__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--ms-spacing-lg);
}

@media (max-width: 1024px) {
  .ms-about-values__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .ms-about-values__grid { grid-template-columns: 1fr; }
}

.ms-value-card { display: flex; flex-direction: column; }

.ms-value-title {
  font-size: var(--ms-font-size-base);
  font-weight: 600;
  color: var(--ms-text-primary);
  margin: 0 0 var(--ms-spacing-xs);
}

.ms-value-desc {
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* �"?�"? CTA Banner �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"? */
.ms-about-cta {
  margin-top: var(--ms-spacing-3xl);
  border-radius: var(--ms-border-radius-xl);
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(56, 189, 248, 0.04) 100%);
  border: 1px solid rgba(14, 165, 233, 0.18);
  overflow: hidden;
  position: relative;
}

.ms-about-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 100% 50%, rgba(14, 165, 233, 0.06) 0%, transparent 60%);
  pointer-events: none;
}

.ms-about-cta__inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ms-spacing-xl);
  padding: var(--ms-spacing-2xl) var(--ms-spacing-3xl);
}

.ms-about-cta__copy { flex: 1; }

.ms-about-cta__title {
  font-size: var(--ms-font-size-lg);
  font-weight: 700;
  color: var(--ms-text-primary);
  margin: 0 0 var(--ms-spacing-xs);
  letter-spacing: -0.01em;
}

.ms-about-cta__sub {
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
  margin: 0;
}

@media (max-width: 768px) {
  .ms-about-cta__inner {
    flex-direction: column;
    align-items: flex-start;
    padding: var(--ms-spacing-xl);
    gap: var(--ms-spacing-lg);
  }
  .ms-about-cta__inner .ms-btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .ms-about-cta__inner { padding: var(--ms-spacing-lg); }
}

.mb-md { margin-bottom: var(--ms-spacing-md); }
</style>
