<script setup>
import { useScrollTo } from '../composables/useScrollTo.js'

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
  background-image: url('/background.png');
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
}

.ms-hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.ms-hero__bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    #0A0F1C 40%,
    rgba(10, 15, 28, 0.80) 58%,
    rgba(10, 15, 28, 0.25) 78%,
    transparent 100%
  );
}

.ms-hero__grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
}

.ms-hero__glow {
  position: absolute;
  width: 60vw;
  height: 60vw;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
  animation: float 8s ease-in-out infinite alternate;
}

.ms-hero__glow--1 {
  top: -20%;
  left: -10%;
  background: var(--ms-brand-primary);
}

.ms-hero__glow--2 {
  bottom: -20%;
  right: -10%;
  background: var(--ms-brand-secondary);
  animation-delay: -4s;
}

.ms-hero__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  /* Responsive vertical padding — avoids overflow on short viewports */
  padding-top: clamp(2.5rem, 6vh, 5rem);
  padding-bottom: clamp(4rem, 8vh, 6rem);
  padding-left: clamp(2rem, 5vw, 7rem);
  margin-left: 0;
  margin-right: auto;
  width: 100%;
}

.ms-hero__content {
  max-width: min(52%, 660px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--ms-spacing-md);
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

/* Large laptop & below (≤1280px): reduce padding, allow wider content */
@media (max-width: 1280px) {
  .ms-hero__inner {
    padding-left: clamp(2rem, 4vw, 4rem);
  }
  .ms-hero__content {
    max-width: min(58%, 660px);
  }
}

/* Laptop / tablet landscape (≤1024px): full-width content, center overlay */
@media (max-width: 1024px) {
  .ms-hero__inner {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  .ms-hero__content {
    max-width: 70%;
  }
  .ms-hero__bg::after {
    background: linear-gradient(
      to right,
      rgba(10, 15, 28, 0.92) 50%,
      rgba(10, 15, 28, 0.55) 80%,
      rgba(10, 15, 28, 0.2) 100%
    );
  }
}

/* Tablet portrait (≤768px): single column, full width */
@media (max-width: 768px) {
  .ms-hero__inner {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    align-items: center;
    text-align: center;
  }
  .ms-hero__content {
    max-width: 100%;
    align-items: center;
  }
  .ms-hero__pills {
    justify-content: center;
  }
  .ms-hero__ctas {
    justify-content: center;
  }
  .ms-hero__bg::after {
    background: rgba(10, 15, 28, 0.80);
  }
}

/* Mobile (≤640px): stacked CTAs, smaller type */
@media (max-width: 640px) {
  .ms-hero__inner {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .ms-hero__ctas {
    flex-direction: column;
    width: 100%;
  }
  .ms-btn {
    width: 100%;
    text-align: center;
  }
  .ms-hero__subtitle {
    font-size: var(--ms-font-size-base);
  }
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
