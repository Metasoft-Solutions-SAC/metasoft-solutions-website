<script setup>
import { storeToRefs } from 'pinia'
import { useWebsiteCorporateStore } from '../../application/website-corporate.store.js'
import SpotlightCard from './global/SpotlightCard.vue'
import { useScrollTo } from '../composables/useScrollTo.js'

const store = useWebsiteCorporateStore()
const { services } = storeToRefs(store)
const { scrollTo } = useScrollTo()
</script>

<template>
  <section id="servicios" class="ms-section ms-services" aria-labelledby="services-title">
    <div class="ms-container">

      <div class="ms-section-header text-center" data-aos="fade-up">
        <p class="ms-section-overline" aria-hidden="true">01 / Servicios</p>
        <span class="ms-badge mb-md">Soluciones Digitales</span>
        <h2 id="services-title">Todo lo que podemos <span class="text-gradient">construir juntos</span></h2>
        <p class="ms-services-subtitle">Desde sitios web corporativos hasta aplicaciones empresariales a medida. Aquí está lo que podemos construir juntos.</p>
      </div>

      <div class="ms-services-grid">
        <SpotlightCard
          v-for="(service, idx) in services"
          :key="service.id"
          class="ms-service-card"
          :class="{ 'ms-service-card--highlight': service.highlight }"
          data-aos="fade-up"
          :data-aos-delay="idx * 80"
        >
          <!-- "Más popular" badge -->
          <div v-if="service.highlight" class="ms-service-popular" aria-label="Servicio más solicitado">
            <i class="pi pi-bolt" aria-hidden="true"></i> Más popular
          </div>

          <!-- Icon -->
          <div class="ms-service-icon-wrap">
            <div class="ms-icon-box" :class="{ 'ms-icon-box--featured': service.highlight }">
              <i :class="service.icon" aria-hidden="true"></i>
            </div>
          </div>

          <!-- Title + description -->
          <h3 class="ms-service-title">{{ service.title }}</h3>
          <p class="ms-service-desc">{{ service.description }}</p>

          <!-- Tags -->
          <div class="ms-service-tags">
            <p class="ms-service-tags__label">Ideal para:</p>
            <ul class="ms-service-tags__list" role="list">
              <li v-for="tag in service.tags" :key="tag" class="ms-service-tag">
                <i class="pi pi-check-circle" aria-hidden="true"></i>
                <span>{{ tag }}</span>
              </li>
            </ul>
          </div>

          <!-- Footer CTA -->
          <div class="ms-service-card__footer">
            <button type="button" class="ms-service-card__cta" @click="scrollTo('#contacto')">
              Hablar con un experto <i class="pi pi-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </SpotlightCard>
      </div>

      <!-- Bottom CTA Banner -->
      <div class="ms-services-banner" data-aos="fade-up" data-aos-delay="200">
        <div class="ms-services-banner__inner">
          <div class="ms-services-banner__icon">
            <i class="pi pi-comments" aria-hidden="true"></i>
          </div>
          <div class="ms-services-banner__copy">
            <h3>¿Todavía no tienes claro qué necesitas?</h3>
            <p>En 30 minutos analizamos tu situación y te decimos exactamente qué solución tiene sentido — sin compromiso ni tecnicismos.</p>
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
.ms-services {
  background: var(--ms-bg-deep);
  position: relative;
  overflow: hidden;
}

/* Circuit-board dot grid — cyan nodes at every intersection */
.ms-services::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(ellipse 65% 55% at 80% 18%, rgba(14, 165, 233, 0.12) 0%, transparent 58%),
    radial-gradient(circle, rgba(14, 165, 233, 0.22) 1.5px, transparent 1.5px),
    linear-gradient(rgba(14, 165, 233, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(14, 165, 233, 0.04) 1px, transparent 1px);
  background-size: 100% 100%, 32px 32px, 32px 32px, 32px 32px;
  pointer-events: none;
}

/* Code bracket watermark */
.ms-services::after {
  content: '</>';
  position: absolute;
  bottom: -1rem;
  right: -1rem;
  font-size: 18rem;
  font-weight: 900;
  font-family: 'Courier New', monospace;
  color: var(--ms-brand-primary);
  opacity: 0.035;
  line-height: 1;
  pointer-events: none;
  user-select: none;
  letter-spacing: -0.05em;
  rotate: -8deg;
  z-index: 0;
}

/* ── Section header ─────────────────────────────── */
.ms-section-header.text-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.ms-services-subtitle {
  margin-top: var(--ms-spacing-md);
  font-size: var(--ms-font-size-lg);
  color: var(--ms-text-secondary);
  max-width: 560px;
  text-align: center;
}

/* ── Grid: 3 arriba + 1 centrada abajo ── */
.ms-services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--ms-spacing-lg);
  margin-top: var(--ms-spacing-3xl);
}

/* 4ta card sola en su fila → columna central */
.ms-service-card:nth-child(4):last-child {
  grid-column: 2;
}

@media (max-width: 1100px) {
  .ms-services-grid { grid-template-columns: repeat(2, 1fr); }
  .ms-service-card:nth-child(4):last-child { grid-column: auto; }
}

@media (max-width: 580px) {
  .ms-services-grid { grid-template-columns: 1fr; }
}

/* ── Card ──────────────────────────────────────── */
.ms-service-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Highlight glow border */
.ms-service-card--highlight {
  border-color: rgba(14, 165, 233, 0.35) !important;
  box-shadow: 0 0 40px rgba(14, 165, 233, 0.07), inset 0 1px 0 rgba(14, 165, 233, 0.15) !important;
}

/* "Más popular" badge */
.ms-service-popular {
  position: absolute;
  top: var(--ms-spacing-md);
  right: var(--ms-spacing-md);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  background: rgba(14, 165, 233, 0.12);
  border: 1px solid rgba(14, 165, 233, 0.35);
  color: var(--ms-brand-secondary);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  white-space: nowrap;
  z-index: 2;
}

.ms-service-popular i { font-size: 0.6rem; }

/* Icon area */
.ms-service-icon-wrap {
  margin-bottom: var(--ms-spacing-lg);
}

.ms-icon-box--featured {
  background: rgba(14, 165, 233, 0.1);
  border-color: rgba(14, 165, 233, 0.3);
  color: var(--ms-brand-secondary);
}

/* Title */
.ms-service-title {
  font-size: var(--ms-font-size-xl);
  font-weight: 700;
  color: var(--ms-text-primary);
  letter-spacing: -0.02em;
  line-height: var(--ms-leading-snug);
  margin: 0 0 var(--ms-spacing-sm);
}

/* Description */
.ms-service-desc {
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
  line-height: var(--ms-leading-relaxed);
  margin: 0;
  flex-shrink: 0;
}

/* Tags */
.ms-service-tags {
  margin-top: var(--ms-spacing-lg);
  flex: 1;
}

.ms-service-tags__label {
  font-size: var(--ms-font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ms-text-muted);
  font-weight: 600;
  margin: 0 0 var(--ms-spacing-sm);
}

.ms-service-tags__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--ms-spacing-sm);
}

.ms-service-tag {
  display: flex;
  align-items: flex-start;
  gap: var(--ms-spacing-sm);
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
  line-height: 1.45;
}

.ms-service-tag i {
  color: var(--ms-brand-secondary);
  font-size: 0.85rem;
  flex-shrink: 0;
  margin-top: 2px;
}

/* Footer CTA */
.ms-service-card__footer {
  margin-top: var(--ms-spacing-xl);
  padding-top: var(--ms-spacing-md);
  border-top: 1px solid var(--ms-border-color);
}

.ms-service-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  padding: 0;
  font-size: var(--ms-font-size-sm);
  font-weight: 600;
  color: var(--ms-brand-secondary);
  cursor: pointer;
  transition: gap 0.2s ease, color 0.2s ease;
}

.ms-service-card__cta:hover {
  gap: 10px;
  color: var(--ms-brand-primary);
}

.ms-service-card__cta i {
  transition: transform 0.2s ease;
}

.ms-service-card__cta:hover i {
  transform: translateX(2px);
}

/* ── Bottom CTA Banner ──────────────────────────── */
.ms-services-banner {
  margin-top: var(--ms-spacing-3xl);
  border-radius: var(--ms-border-radius-xl);
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(56, 189, 248, 0.05) 100%);
  border: 1px solid rgba(14, 165, 233, 0.2);
  overflow: hidden;
  position: relative;
}

.ms-services-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 0% 50%, rgba(14, 165, 233, 0.08) 0%, transparent 60%);
  pointer-events: none;
}

.ms-services-banner__inner {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--ms-spacing-xl);
  padding: var(--ms-spacing-2xl) var(--ms-spacing-3xl);
}

.ms-services-banner__icon {
  width: 52px;
  height: 52px;
  border-radius: var(--ms-border-radius);
  background: rgba(14, 165, 233, 0.12);
  border: 1px solid rgba(14, 165, 233, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ms-brand-secondary);
  font-size: 1.3rem;
  flex-shrink: 0;
}

.ms-services-banner__copy {
  flex: 1;
}

.ms-services-banner__copy h3 {
  font-size: var(--ms-font-size-lg);
  font-weight: 700;
  color: var(--ms-text-primary);
  margin: 0 0 var(--ms-spacing-xs);
  letter-spacing: -0.01em;
}

.ms-services-banner__copy p {
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
  margin: 0;
  line-height: var(--ms-leading-relaxed);
}

@media (max-width: 768px) {
  .ms-services-banner__inner {
    flex-direction: column;
    align-items: flex-start;
    padding: var(--ms-spacing-xl);
    gap: var(--ms-spacing-lg);
  }
  .ms-services-banner__inner .ms-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>



