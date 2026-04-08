<script setup>
import { useScrollTo } from '../composables/useScrollTo.js'
import bgMetasoftUrl from '../../../assets/img/background-metasoft.png'

const { scrollTo } = useScrollTo()
</script>

<template>
  <section id="inicio" class="ms-hero" aria-label="Hero">
    <!-- Fondo dinámico estilo Vercel (grid + glow) -->
    <div class="ms-hero__bg">
      <div class="ms-hero__glow ms-hero__glow--1"></div>
      <div class="ms-hero__glow ms-hero__glow--2"></div>
      <div class="ms-hero__grid"></div>
    </div>

    <div class="ms-container ms-hero__inner">

      <!-- Left: text content -->
      <div class="ms-hero__content">

        <div class="ms-hero__badge-container">
          <span class="ms-badge"><span class="ms-badge-dot"></span> Desarrollo de Software · Lima, Perú</span>
        </div>

        <h1 class="ms-hero__title">
          Desarrollo de Software a Medida<br />
          <span class="text-gradient animate-shine">en Lima, Perú</span>
        </h1>

        <p class="ms-hero__slogan">
          <span class="ms-hero__slogan-line"></span>
          Tecnología que impulsa tus metas
          <span class="ms-hero__slogan-line"></span>
        </p>

        <p class="ms-hero__subtitle">
          Creamos aplicaciones web, apps móviles y sistemas a medida para empresas que quieren digitalizarse. Entrega en semanas, soporte garantizado.
        </p>

        <div class="ms-hero__sep" data-aos="fade-right" data-aos-delay="350"></div>

        <div class="ms-hero__pills" data-aos="fade-up" data-aos-delay="400">
          <span class="ms-tag"><i class="pi pi-bolt text-brand"> </i> MVP en 2 semanas</span>
          <span class="ms-tag"><i class="pi pi-shield text-brand"> </i> 30 días de garantía</span>
          <span class="ms-tag"><i class="pi pi-comments text-brand"> </i> Sin jerga técnica</span>
        </div>

        <div class="ms-hero__ctas" data-aos="fade-up" data-aos-delay="450">
          <a href="#contacto" class="ms-btn ms-btn-lg ms-btn-glow" @click.prevent="scrollTo('#contacto')">
            Solicita una Consulta Gratuita
          </a>
          <a href="#servicios" class="ms-btn ms-btn-lg ms-btn-outline" @click.prevent="scrollTo('#servicios')">
            Ver Servicios
          </a>
        </div>

      </div>

      <!-- Right: hero visual -->
      <div class="ms-hero__visual" data-aos="fade-left" data-aos-delay="300" aria-hidden="true">
        <img
          :src="bgMetasoftUrl"
          alt="Equipo de desarrollo de software Metasoft Solutions"
          class="ms-hero__visual-img"
          width="860"
          height="720"
          fetchpriority="high"
        />
      </div>

    </div>

    <a class="ms-hero__scroll-hint" @click.prevent="scrollTo('#servicios')" href="#servicios">
      Ver qué hacemos <i class="pi pi-angle-down"></i>
    </a>
  </section>
</template>

<style scoped>
.ms-hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-top: var(--ms-navbar-height);
  background-color: #02060e;
  overflow: hidden;
}

.ms-hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

/* Left vignette — keeps text readable without darkening the image area */
.ms-hero__bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to right, rgba(2, 6, 14, 0.92) 0%, rgba(2, 6, 14, 0.65) 45%, rgba(2, 6, 14, 0.05) 75%, transparent 100%),
    linear-gradient(to bottom, transparent 60%, rgba(2, 6, 14, 0.7) 100%);
}

.ms-hero__grid {
  position: absolute;
  inset: 0;
  /* Circuit-board: cyan intersection nodes + subtle grid lines */
  background-image:
    radial-gradient(circle, rgba(14, 165, 233, 0.22) 1.5px, transparent 1.5px),
    linear-gradient(to right,  rgba(14, 165, 233, 0.07) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(14, 165, 233, 0.07) 1px, transparent 1px);
  background-size: 40px 40px, 40px 40px, 40px 40px;
  mask-image: linear-gradient(135deg, black 0%, black 55%, transparent 85%);
  -webkit-mask-image: linear-gradient(135deg, black 0%, black 55%, transparent 85%);
}

/* Scan-line overlay for extra depth */
.ms-hero__bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    transparent,
    transparent 3px,
    rgba(0, 0, 0, 0.06) 3px,
    rgba(0, 0, 0, 0.06) 4px
  );
  pointer-events: none;
  z-index: 1;
}

.ms-hero__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(110px);
  animation: float 8s ease-in-out infinite alternate;
}

.ms-hero__glow--1 {
  width: min(55vw, 900px);
  height: min(55vw, 900px);
  top: -15%;
  left: -15%;
  background: var(--ms-brand-primary);
  opacity: 0.18;
}

.ms-hero__glow--2 {
  width: min(45vw, 750px);
  height: min(45vw, 750px);
  bottom: -10%;
  right: 5%;
  background: var(--ms-brand-secondary);
  opacity: 0.14;
  animation-delay: -4s;
}

.ms-hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--ms-spacing-2xl);
  align-items: center;
  min-height: calc(100svh - var(--ms-navbar-height));
  padding-top: clamp(2.5rem, 6vh, 5rem);
  padding-bottom: clamp(2.5rem, 5vh, 4rem);
  width: 100%;
}

.ms-hero__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--ms-spacing-md);
  align-self: center;
  /* Push text above vertical midpoint — classic hero composition */
  padding-bottom: clamp(3rem, 6vh, 5rem);
}

/* ── Right visual column — bottom-anchored, bleeds right ──── */
.ms-hero__visual {
  display: flex;
  align-items: flex-end;        /* image sits at the bottom of the column */
  justify-content: flex-start;  /* overflow goes RIGHT, not into the text */
  position: relative;
  align-self: stretch;          /* column fills the full grid row height */
  overflow: visible;            /* allow right bleed (section clips it) */
}

/* Ambient glow behind the image */
.ms-hero__visual::before {
  content: '';
  position: absolute;
  bottom: -5%;
  left: -5%;
  right: -20%;
  top: 5%;
  background: radial-gradient(ellipse at 45% 80%, rgba(14, 165, 233, 0.22) 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
}

/*
 * Key sizing logic:
 *   - width: min(135%, 920px)  → image is 135% of its column width
 *     At a ~570px column (1200px layout): 770px wide → 646px tall.
 *     The ~200px that exceeds the column bleeds off the right edge,
 *     clipped by  overflow:hidden  on .ms-hero. Text is never overlapped.
 *   - height: auto  → pure aspect-ratio scaling, zero pillarboxing.
 *   - object-fit / object-position: not needed (natural dimensions).
 */
.ms-hero__visual-img {
  width: min(135%, 920px);
  height: auto;
  display: block;
  position: relative;
  z-index: 1;
  filter:
    drop-shadow(0 0 40px rgba(14, 165, 233, 0.30))
    drop-shadow(0 30px 80px rgba(14, 165, 233, 0.18))
    drop-shadow(0 4px 24px rgba(0, 0, 0, 0.7));
  animation: hero-float 7s ease-in-out infinite alternate;
}

@keyframes hero-float {
  from { transform: translateY(0px); }
  to   { transform: translateY(-10px); }
}

.ms-hero__title {
  font-size: clamp(2rem, 3.8vw, 3.8rem);
  font-weight: 800;
  line-height: var(--ms-leading-tight);
  letter-spacing: -0.04em;
  margin: 0;
  color: #fff;
}

.text-gradient {
  background: var(--ms-gradient-brand-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  background-size: 200% auto;
}

.animate-shine {
  animation: shine 4s linear infinite;
}

.ms-hero__subtitle {
  font-size: clamp(var(--ms-font-size-base), 1.2vw, var(--ms-font-size-xl));
  color: var(--ms-text-secondary);
  line-height: var(--ms-leading-relaxed);
  max-width: 580px;
  margin: 0;
}

.ms-hero__slogan {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--ms-font-size-xs);
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ms-brand-secondary);
  margin: 0;
  white-space: nowrap;
}

.ms-hero__slogan-line {
  flex: 0 0 24px;
  height: 1px;
  background: var(--ms-brand-secondary);
  opacity: 0.5;
}

.ms-hero__sep {
  width: 48px;
  height: 2px;
  background: var(--ms-gradient-brand-text);
  border-radius: 2px;
  margin: var(--ms-spacing-xs) 0;
}

.ms-hero__pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: var(--ms-spacing-md);
}

.text-brand { color: var(--ms-brand-secondary); }

.ms-hero__ctas {
  display: flex;
  gap: var(--ms-spacing-md);
  flex-wrap: wrap;
  justify-content: flex-start;
}

/* ── Responsive ─────────────────────────────────── */

/* Large laptop (≤1280px) — tighten gap */
@media (max-width: 1280px) {
  .ms-hero__inner { gap: var(--ms-spacing-xl); }
}

/* Tablet landscape (≤1100px) — symmetric columns, smaller bleed */
@media (max-width: 1100px) {
  .ms-hero__inner {
    grid-template-columns: 1fr 1fr;
    gap: var(--ms-spacing-lg);
  }
  /* Less bleed so subjects stay on-screen at narrower widths */
  .ms-hero__visual-img { width: min(115%, 700px); }
}

/* Ultra-wide monitors — allow slightly larger cap */
@media (min-width: 1600px) {
  .ms-hero__visual-img { width: min(135%, 1000px); }
}

/* Tablet portrait (≤860px): stack vertically, show full image below text */
@media (max-width: 860px) {
  .ms-hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
    padding-bottom: 0;
  }
  .ms-hero__content {
    align-items: center;
    order: 1;
    padding-bottom: var(--ms-spacing-xl);
    align-self: auto;
  }
  .ms-hero__visual {
    order: 2;
    align-self: auto;
    justify-content: center; /* center when stacked */
    overflow: hidden;        /* no bleed when stacked */
  }
  .ms-hero__visual-img {
    /* Full natural image, centered, no bleed */
    width: 90%;
    max-width: 500px;
  }
  .ms-hero__pills  { justify-content: center; }
  .ms-hero__ctas   { justify-content: center; }
  .ms-hero__slogan { justify-content: center; }
}

/* Mobile (≤640px): hide image, full-width CTAs */
@media (max-width: 640px) {
  .ms-hero__visual { display: none; }
  .ms-hero__ctas { flex-direction: column; width: 100%; }
  .ms-btn { width: 100%; text-align: center; }
  .ms-hero__subtitle { font-size: var(--ms-font-size-base); }
}

.ms-hero__scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;
  white-space: nowrap;
  animation: hero-bounce 2.4s ease-in-out infinite;
}
.ms-hero__scroll-hint:hover {
  color: var(--ms-text-primary);
}

@keyframes hero-bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(7px); }
}
.ms-hero__scroll-hint i {
  animation: bounce-y 1.6s ease-in-out infinite;
}
@keyframes bounce-y {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
}
</style>
