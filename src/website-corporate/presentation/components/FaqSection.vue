<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useWebsiteCorporateStore } from '../../application/website-corporate.store.js'

const store = useWebsiteCorporateStore()
const { faqs } = storeToRefs(store)

const openId = ref(null)

function toggle(id) {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <section id="faq" class="ms-section ms-faq" aria-labelledby="faq-title">
    <div class="ms-container">

      <!-- Centered header -->
      <div class="ms-faq-header" data-aos="fade-up">
        <p class="ms-section-overline" aria-hidden="true">06 / FAQ</p>
        <span class="ms-badge mb-sm">
          <i class="pi pi-comment" aria-hidden="true"></i> Preguntas Frecuentes
        </span>
        <h2 id="faq-title">Tus dudas, <span class="text-gradient">resueltas</span></h2>
        <p class="ms-faq-header__sub">
          Respondemos las preguntas más comunes sobre costos, tiempos y cómo trabajamos.
        </p>
      </div>

      <div class="ms-faq-layout">

        <!-- Left: sticky topics + CTA -->
        <aside class="ms-faq-aside" data-aos="fade-right">

          <!-- Topics covered -->
          <ul class="ms-faq-topics">
            <li><i class="pi pi-dollar-sign" aria-hidden="true"></i> Costos y presupuestos</li>
            <li><i class="pi pi-clock" aria-hidden="true"></i> Tiempos de entrega</li>
            <li><i class="pi pi-cog" aria-hidden="true"></i> Proceso de trabajo</li>
            <li><i class="pi pi-wrench" aria-hidden="true"></i> Soporte post-lanzamiento</li>
            <li><i class="pi pi-users" aria-hidden="true"></i> Con quiénes trabajamos</li>
          </ul>

          <!-- CTA card -->
          <div class="ms-faq-cta">
            <p class="ms-faq-cta__title">¿No encontraste tu respuesta?</p>
            <p class="ms-faq-cta__sub">Escríbenos directamente y te respondemos hoy.</p>
            <a
              href="https://wa.me/51992016075"
              target="_blank"
              rel="noopener noreferrer"
              class="ms-btn ms-btn-glow ms-btn-lg ms-faq-cta__btn"
            >
              <i class="pi pi-whatsapp" aria-hidden="true"></i>
              Conversemos por WhatsApp
            </a>
          </div>

        </aside>

        <!-- Right: custom accordion -->
        <div class="ms-faq__content" data-aos="fade-left" data-aos-delay="100">
          <div class="ms-faq__list" role="list">
            <div
              v-for="faq in faqs"
              :key="faq.id"
              class="ms-faq__item"
              :class="{ 'ms-faq__item--open': openId === faq.id }"
              role="listitem"
            >
              <button
                class="ms-faq__trigger"
                :aria-expanded="openId === faq.id"
                @click="toggle(faq.id)"
              >
                <span class="ms-faq__question">{{ faq.question }}</span>
                <span class="ms-faq__icon" aria-hidden="true">+</span>
              </button>
              <div v-show="openId === faq.id" class="ms-faq__body">
                <p class="ms-faq__answer">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.ms-faq {
  background: var(--ms-bg-primary);
  position: relative;
  overflow: hidden;
}

.ms-faq::before {
  content: '';
  position: absolute;
  top: -20%;
  right: -12%;
  width: 55vw;
  height: 55vw;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(14, 165, 233, 0.07) 0%, transparent 65%);
  pointer-events: none;
}

.ms-faq > .ms-container {
  position: relative;
  z-index: 1;
}

/* ── Section header (centered) ─────────────────────── */
.ms-faq-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ms-spacing-md);
  margin-bottom: var(--ms-spacing-3xl);
}

.ms-faq-header h2 {
  font-size: var(--ms-font-size-4xl);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: var(--ms-leading-tight);
  margin: 0;
}

.ms-faq-header__sub {
  font-size: var(--ms-font-size-base);
  color: var(--ms-text-secondary);
  line-height: var(--ms-leading-relaxed);
  margin: 0;
  max-width: 52ch;
}

/* ── Two-column layout ──────────────────────────────── */
.ms-faq-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--ms-spacing-3xl);
  align-items: start;
}

@media (max-width: 1024px) {
  .ms-faq-layout {
    grid-template-columns: 1fr;
    gap: var(--ms-spacing-2xl);
  }
}

/* ── Left aside ─────────────────────────────────────── */
.ms-faq-aside {
  position: sticky;
  top: calc(var(--ms-navbar-height, 64px) + 2rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--ms-spacing-lg);
}

@media (max-width: 1024px) {
  .ms-faq-aside { position: static; }
}

/* ── Topics list ───────────────────────────────────── */
.ms-faq-topics {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--ms-spacing-sm);
  width: 100%;
}

.ms-faq-topics li {
  display: flex;
  align-items: center;
  gap: var(--ms-spacing-sm);
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
  padding: var(--ms-spacing-sm) var(--ms-spacing-md);
  background: var(--ms-bg-card);
  border: 1px solid var(--ms-border-color);
  border-radius: var(--ms-border-radius-md);
}

.ms-faq-topics li i {
  color: var(--ms-brand-primary);
  font-size: 0.8rem;
  flex-shrink: 0;
}

/* ── CTA card ───────────────────────────────────────── */
.ms-faq-cta {
  width: 100%;
  background: linear-gradient(135deg, rgba(14,165,233,0.07) 0%, rgba(56,189,248,0.03) 100%);
  border: 1px solid rgba(14,165,233,0.18);
  border-radius: var(--ms-border-radius-xl);
  padding: var(--ms-spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--ms-spacing-sm);
}

.ms-faq-cta__title {
  font-size: var(--ms-font-size-base);
  font-weight: 700;
  color: var(--ms-text-primary);
  margin: 0;
}

.ms-faq-cta__sub {
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
  margin: 0 0 var(--ms-spacing-sm);
}

.ms-faq-cta__btn {
  width: 100%;
  justify-content: center;
  gap: var(--ms-spacing-sm);
}

/* ── Custom accordion ───────────────────────────────── */
.ms-faq__list {
  display: flex;
  flex-direction: column;
  gap: var(--ms-spacing-sm);
}

.ms-faq__item {
  background: var(--ms-bg-card);
  border: 1px solid var(--ms-border-color);
  border-radius: var(--ms-border-radius-lg);
  overflow: hidden;
  transition: border-color 0.2s ease;
}

.ms-faq__item:hover,
.ms-faq__item--open {
  border-color: rgba(14, 165, 233, 0.45);
}

.ms-faq__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ms-spacing-md);
  padding: 1.1rem 1.25rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
}

.ms-faq__question {
  font-size: var(--ms-font-size-base);
  font-weight: 600;
  color: var(--ms-text-primary);
  line-height: var(--ms-leading-snug);
  letter-spacing: -0.01em;
}

.ms-faq__icon {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(14, 165, 233, 0.12);
  color: var(--ms-brand-primary);
  font-size: 1.25rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: background 0.2s ease, transform 0.25s ease, color 0.2s ease;
}

.ms-faq__item--open .ms-faq__icon {
  background: var(--ms-brand-primary);
  color: white;
  transform: rotate(45deg);
}

.ms-faq__body {
  padding: 0 1.25rem 1.25rem;
}

.ms-faq__answer {
  color: var(--ms-text-secondary);
  font-size: var(--ms-font-size-sm);
  line-height: var(--ms-leading-relaxed);
  margin: 0;
  padding-top: var(--ms-spacing-md);
  border-top: 1px solid var(--ms-border-color);
}
</style>