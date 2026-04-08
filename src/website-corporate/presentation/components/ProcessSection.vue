<script setup>
import { storeToRefs } from 'pinia'
import { useWebsiteCorporateStore } from '../../application/website-corporate.store.js'
import { useScrollTo } from '../composables/useScrollTo.js'

const store = useWebsiteCorporateStore()
const { processSteps } = storeToRefs(store)
const { scrollTo } = useScrollTo()
</script>

<template>
  <section id="metodologia" class="ms-section ms-process" aria-labelledby="process-title">
    <div class="ms-container">

      <!-- Header -->
      <div class="ms-section-header" data-aos="fade-up">
        <p class="ms-section-overline" aria-hidden="true">02 / Proceso</p>
        <span class="ms-badge mb-md">Cómo Trabajamos</span>
        <h2 id="process-title">Tu idea, <span class="text-gradient">en producción</span></h2>
        <p class="ms-process-subtitle">Garantizamos resultados alineados a tus expectativas en cada etapa del desarrollo.</p>
      </div>

      <!-- Steps grid -->
      <div class="ms-process-grid" role="list">
        <template v-for="(step, idx) in processSteps" :key="step.num">

          <!-- Phase separators -->
          <div v-if="idx === 0" class="ms-process-phase" aria-hidden="true">
            <div class="ms-process-phase__line"></div>
            <span class="ms-process-phase__label"><i class="pi pi-pencil"></i> Planificación</span>
            <div class="ms-process-phase__line"></div>
          </div>
          <div v-if="idx === 3" class="ms-process-phase" aria-hidden="true">
            <div class="ms-process-phase__line"></div>
            <span class="ms-process-phase__label"><i class="pi pi-bolt"></i> Construcción &amp; Entrega</span>
            <div class="ms-process-phase__line"></div>
          </div>

          <!-- Card -->
          <article
            class="ms-process-card"
            :class="{ 'ms-process-card--featured': step.num === '05' }"
            role="listitem"
            data-aos="fade-up"
            :data-aos-delay="(idx % 3) * 100"
          >
            <!-- Watermark number -->
            <span class="ms-process-watermark" aria-hidden="true">{{ step.num }}</span>

            <!-- Card header: icon + step badge -->
            <div class="ms-process-card__header">
              <div class="ms-icon-box" :class="{ 'ms-icon-box--accent': step.num === '05' }">
                <i :class="step.icon" aria-hidden="true"></i>
              </div>
              <span class="ms-process-badge">{{ step.num }}</span>
            </div>

            <h3 class="ms-process-card__title">{{ step.title }}</h3>
            <p class="ms-process-card__desc">{{ step.desc }}</p>
          </article>

        </template>
      </div>

      <!-- CTA bottom -->
      <div class="ms-process-cta" data-aos="fade-up" data-aos-delay="150">
        <div class="ms-process-cta__inner">
          <div class="ms-process-cta__copy">
            <p class="ms-process-cta__title">¿Listo para dar el primer paso?</p>
            <p class="ms-process-cta__sub">30 minutos · Sin compromiso · Nada técnico que preparar</p>
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
.ms-process {
  background: var(--ms-bg-surface-2);
  overflow: hidden;
  position: relative;
}

/* Circuit grid pattern */
.ms-process::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle, rgba(14, 165, 233, 0.18) 1.5px, transparent 1.5px),
    linear-gradient(rgba(14, 165, 233, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(14, 165, 233, 0.05) 1px, transparent 1px);
  background-size: 32px 32px, 32px 32px, 32px 32px;
  pointer-events: none;
  opacity: 0.6;
}

/* Curly-brace code watermark */
.ms-process::after {
  content: '{ }';
  position: absolute;
  bottom: -3rem;
  right: -2.5rem;
  font-size: 20rem;
  font-weight: 900;
  font-family: 'Courier New', monospace;
  color: var(--ms-brand-primary);
  opacity: 0.04;
  line-height: 1;
  pointer-events: none;
  user-select: none;
  letter-spacing: -0.1em;
  rotate: 8deg;
  z-index: 0;
}

/* ── Header ─────────────────────────────────────── */
.ms-section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.ms-process-subtitle {
  margin-top: var(--ms-spacing-md);
  font-size: var(--ms-font-size-lg);
  color: var(--ms-text-secondary);
  max-width: 560px;
  text-align: center;
  line-height: var(--ms-leading-relaxed);
}

/* ── Steps grid ─────────────────────────────────── */
.ms-process-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--ms-spacing-lg);
  margin-top: var(--ms-spacing-2xl);
}

@media (max-width: 1024px) {
  .ms-process-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .ms-process-grid {
    grid-template-columns: 1fr;
    gap: var(--ms-spacing-md);
  }
}

/* ── Phase separator ─────────────────────────────── */
.ms-process-phase {
  grid-column: 1 / -1;
  align-self: center;
  display: flex;
  align-items: center;
  gap: var(--ms-spacing-md);
  padding: var(--ms-spacing-xs) 0;
}

.ms-process-phase__line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--ms-border-color), transparent);
}

.ms-process-phase__label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--ms-font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ms-text-muted);
  font-weight: 600;
  white-space: nowrap;
}

.ms-process-phase__label i {
  font-size: 0.65rem;
  color: var(--ms-brand-secondary);
  opacity: 0.7;
}

/* ── Card ───────────────────────────────────────── */
.ms-process-card {
  position: relative;
  background: var(--ms-bg-deep);
  border: 1px solid var(--ms-border-color);
  border-left: 3px solid rgba(14, 165, 233, 0.25);
  border-radius: var(--ms-border-radius-lg);
  padding: var(--ms-spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--ms-spacing-md);
  overflow: hidden;
  transition: border-color 0.25s ease, border-left-color 0.25s ease,
              box-shadow 0.25s ease, transform 0.25s ease;
}

.ms-process-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 0% 50%, rgba(14, 165, 233, 0.05) 0%, transparent 65%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.ms-process-card:hover {
  border-color: rgba(14, 165, 233, 0.25);
  border-left-color: var(--ms-brand-primary);
  box-shadow: 0 8px 32px rgba(14, 165, 233, 0.08);
  transform: translateY(-3px);
}

.ms-process-card:hover::before { opacity: 1; }

/* Featured step (05 – Testing y Lanzamiento) */
.ms-process-card--featured {
  border-left-color: var(--ms-brand-primary);
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.07) 0%, var(--ms-bg-surface) 55%);
}

/* ── Watermark number ─────────────────────────────── */
.ms-process-watermark {
  position: absolute;
  bottom: -0.5rem;
  right: 0.75rem;
  font-size: 5.5rem;
  font-weight: 900;
  color: var(--ms-text-primary);
  opacity: 0.04;
  line-height: 1;
  pointer-events: none;
  user-select: none;
  letter-spacing: -0.05em;
  animation: watermark-float 7s ease-in-out infinite;
}

@keyframes watermark-float {
  0%, 100% { transform: translateY(0) scale(1);    opacity: 0.04; }
  50%       { transform: translateY(-6px) scale(1.03); opacity: 0.065; }
}

.ms-process-card:hover .ms-process-watermark {
  opacity: 0.09;
  animation-play-state: paused;
}

/* ── Card header ─────────────────────────────────── */
.ms-process-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Global .ms-icon-box hover enhancement inside process cards */
.ms-process-card:hover .ms-icon-box {
  background: rgba(14, 165, 233, 0.2);
  border-color: rgba(14, 165, 233, 0.35);
  box-shadow: 0 0 16px rgba(14, 165, 233, 0.2);
}

.ms-icon-box--accent {
  background: rgba(14, 165, 233, 0.15) !important;
  border-color: rgba(14, 165, 233, 0.35) !important;
  color: var(--ms-brand-secondary) !important;
  box-shadow: 0 0 18px rgba(14, 165, 233, 0.25);
}

/* ── Step badge ──────────────────────────────────── */
.ms-process-badge {
  font-size: 0.7rem;
  font-weight: 800;
  color: rgba(14, 165, 233, 0.45);
  letter-spacing: 0.08em;
  font-family: var(--ms-font-family-mono, 'Courier New', monospace);
  line-height: 1;
}

/* ── Typography ──────────────────────────────────── */
.ms-process-card__title {
  font-size: var(--ms-font-size-base);
  font-weight: 700;
  color: var(--ms-text-primary);
  letter-spacing: -0.01em;
  line-height: var(--ms-leading-snug);
  margin: 0;
}

.ms-process-card__desc {
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
  line-height: var(--ms-leading-relaxed);
  margin: 0;
}

/* ── CTA Banner ─────────────────────────────────── */
.ms-process-cta {
  margin-top: var(--ms-spacing-4xl);
  border-radius: var(--ms-border-radius-xl);
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(56, 189, 248, 0.04) 100%);
  border: 1px solid rgba(14, 165, 233, 0.18);
  overflow: hidden;
  position: relative;
}

.ms-process-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 100% 50%, rgba(14, 165, 233, 0.06) 0%, transparent 60%);
  pointer-events: none;
}

.ms-process-cta__inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ms-spacing-xl);
  padding: var(--ms-spacing-2xl) var(--ms-spacing-3xl);
}

.ms-process-cta__copy { flex: 1; }

.ms-process-cta__title {
  font-size: var(--ms-font-size-lg);
  font-weight: 700;
  color: var(--ms-text-primary);
  margin: 0 0 var(--ms-spacing-xs);
  letter-spacing: -0.01em;
}

.ms-process-cta__sub {
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
  margin: 0;
}

@media (max-width: 768px) {
  .ms-process-cta__inner {
    flex-direction: column;
    align-items: flex-start;
    padding: var(--ms-spacing-xl);
    gap: var(--ms-spacing-lg);
  }
  .ms-process-cta__inner .ms-btn {
    width: 100%;
    justify-content: center;
  }
}

.mb-md { margin-bottom: var(--ms-spacing-md); }
</style>
