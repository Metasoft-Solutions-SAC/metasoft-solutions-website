<script setup>
// No form — direct WhatsApp / email CTAs
</script>

<template>
  <section id="contacto" class="ms-section ms-contact" aria-labelledby="contact-title">
    <div class="ms-container">
      <div class="ms-contact__layout">

        <!-- LEFT: heading + description + trust pills -->
        <div class="ms-contact__left" data-aos="fade-right">
          <span class="ms-contact__badge">
            <i class="pi pi-comments" aria-hidden="true"></i> ¿Hablamos?
          </span>
          <h2 id="contact-title" class="ms-contact__heading">
            Cotiza tu proyecto<br>
            <span class="text-gradient">sin costo</span> ni compromiso
          </h2>
          <p class="ms-contact__desc">
            Cuéntanos qué necesitas. Sin formularios extensos ni compromisos
            apresurados — solo una charla directa para ver cómo podemos ayudarte.
          </p>
          <div class="ms-contact__pills">
            <span><i class="pi pi-clock" aria-hidden="true"></i> Respuesta en &lt; 24 h</span>
            <span><i class="pi pi-shield" aria-hidden="true"></i> Sin compromisos</span>
            <span><i class="pi pi-globe" aria-hidden="true"></i> Trabajo remoto</span>
          </div>
        </div>

        <!-- RIGHT: contact cards + status note -->
        <div class="ms-contact__right" data-aos="fade-left" data-aos-delay="200">

          <a
            href="https://wa.me/51992016075?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto"
            target="_blank"
            rel="noopener"
            class="ms-ccard ms-ccard--wa"
            aria-label="Escríbenos por WhatsApp al +51 992 016 075"
          >
            <div class="ms-ccard__icon ms-ccard__icon--wa">
              <i class="pi pi-whatsapp" aria-hidden="true"></i>
            </div>
            <div class="ms-ccard__body">
              <strong>Escríbenos por WhatsApp</strong>
              <span>+51 992 016 075</span>
            </div>
            <i class="pi pi-arrow-right ms-ccard__arrow" aria-hidden="true"></i>
          </a>

          <a
            href="mailto:janover@metasoft.pe"
            class="ms-ccard ms-ccard--email"
            aria-label="Envíanos un correo a janover@metasoft.pe"
          >
            <div class="ms-ccard__icon ms-ccard__icon--email">
              <i class="pi pi-envelope" aria-hidden="true"></i>
            </div>
            <div class="ms-ccard__body">
              <strong>Envíanos un correo</strong>
              <span>janover@metasoft.pe</span>
            </div>
            <i class="pi pi-arrow-right ms-ccard__arrow" aria-hidden="true"></i>
          </a>

          <div class="ms-contact__status" role="status">
            <span class="ms-contact__status-dot" aria-hidden="true"></span>
            <p>
              Respondemos en menos de <strong>24 horas hábiles</strong>.
              La propuesta incluye alcance, tecnología y precio estimado.
            </p>
          </div>

        </div>
      </div>
    </div>

    <!-- Circuit dots background -->
    <div class="ms-contact__bg" aria-hidden="true"></div>
  </section>
</template>

<style scoped>
/* ── Section shell ──────────────────────────────────────── */
.ms-contact {
  background: var(--ms-bg-deep);
  position: relative;
  overflow: hidden;
}

/* Radial top-center glow */
.ms-contact::before {
  content: '';
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  height: 60vh;
  background: radial-gradient(ellipse at top, rgba(14, 165, 233, 0.10) 0%, transparent 65%);
  pointer-events: none;
}

/* Circuit dots — fade away toward the center */
.ms-contact__bg {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle, rgba(14, 165, 233, 0.20) 1.5px, transparent 1.5px),
    linear-gradient(rgba(14, 165, 233, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(14, 165, 233, 0.04) 1px, transparent 1px);
  background-size: 32px 32px, 32px 32px, 32px 32px;
  mask-image: radial-gradient(ellipse 75% 75% at 50% 50%, transparent 30%, black 72%);
  -webkit-mask-image: radial-gradient(ellipse 75% 75% at 50% 50%, transparent 30%, black 72%);
  pointer-events: none;
  z-index: 0;
}

.ms-container {
  position: relative;
  z-index: 1;
}

/* ── Two-column layout ──────────────────────────────────── */
.ms-contact__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(var(--ms-spacing-2xl), 5vw, var(--ms-spacing-4xl));
  align-items: center;
  padding: var(--ms-spacing-4xl) 0;
}

@media (max-width: 900px) {
  .ms-contact__layout {
    grid-template-columns: 1fr;
    gap: var(--ms-spacing-3xl);
  }
}

@media (max-width: 480px) {
  .ms-contact__layout {
    padding: var(--ms-spacing-2xl) 0;
    gap: var(--ms-spacing-2xl);
  }
}

/* ── Left column ────────────────────────────────────────── */
.ms-contact__badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 14px;
  border: 1px solid rgba(14, 165, 233, 0.3);
  border-radius: 999px;
  background: rgba(14, 165, 233, 0.06);
  color: var(--ms-brand-primary);
  font-size: var(--ms-font-size-sm);
  font-weight: 500;
  letter-spacing: 0.02em;
  margin-bottom: var(--ms-spacing-lg);
}

.ms-contact__heading {
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--ms-text-primary);
  margin: 0 0 var(--ms-spacing-lg);
}

.ms-contact__desc {
  font-size: var(--ms-font-size-lg);
  color: var(--ms-text-secondary);
  line-height: 1.7;
  max-width: 480px;
  margin: 0 0 var(--ms-spacing-xl);
}

.ms-contact__pills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ms-spacing-sm);
}

.ms-contact__pills span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border: 1px solid var(--ms-border-color);
  border-radius: 999px;
  font-size: var(--ms-font-size-xs);
  color: var(--ms-text-secondary);
  background: rgba(255, 255, 255, 0.03);
  font-weight: 500;
}

.ms-contact__pills i {
  font-size: 0.65rem;
  color: var(--ms-brand-primary);
}

/* ── Right column ───────────────────────────────────────── */
.ms-contact__right {
  display: flex;
  flex-direction: column;
  gap: var(--ms-spacing-md);
}

/* ── Contact cards ──────────────────────────────────────── */
.ms-ccard {
  display: flex;
  align-items: center;
  gap: var(--ms-spacing-md);
  padding: var(--ms-spacing-lg) var(--ms-spacing-xl);
  border-radius: var(--ms-border-radius-lg);
  border: 1px solid var(--ms-border-color);
  background: rgba(255, 255, 255, 0.03);
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
}

.ms-ccard:hover {
  background: rgba(255, 255, 255, 0.06);
  transform: translateY(-2px);
}

.ms-ccard--wa {
  border-color: rgba(37, 211, 102, 0.25);
  background: rgba(37, 211, 102, 0.04);
}
.ms-ccard--wa:hover {
  background: rgba(37, 211, 102, 0.09);
  border-color: rgba(37, 211, 102, 0.4);
}

.ms-ccard--email {
  border-color: rgba(14, 165, 233, 0.25);
  background: rgba(14, 165, 233, 0.04);
}
.ms-ccard--email:hover {
  background: rgba(14, 165, 233, 0.09);
  border-color: rgba(14, 165, 233, 0.4);
}

/* Icon box */
.ms-ccard__icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
}

.ms-ccard__icon--wa {
  background: rgba(37, 211, 102, 0.12);
  color: #25D366;
  border: 1px solid rgba(37, 211, 102, 0.25);
}

.ms-ccard__icon--email {
  background: rgba(14, 165, 233, 0.10);
  color: var(--ms-brand-primary);
  border: 1px solid rgba(14, 165, 233, 0.2);
}

.ms-ccard__body {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
}

.ms-ccard__body strong {
  font-size: var(--ms-font-size-base);
  font-weight: 700;
  color: var(--ms-text-primary);
}

.ms-ccard__body span {
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
}

.ms-ccard__arrow {
  font-size: 0.9rem;
  color: var(--ms-text-muted);
  transition: transform 0.2s, color 0.2s;
}

.ms-ccard:hover .ms-ccard__arrow {
  transform: translateX(4px);
  color: var(--ms-text-secondary);
}

/* ── Status note ────────────────────────────────────────── */
.ms-contact__status {
  display: flex;
  align-items: flex-start;
  gap: var(--ms-spacing-sm);
  padding: var(--ms-spacing-md) var(--ms-spacing-lg);
  border-radius: var(--ms-border-radius);
  background: rgba(16, 185, 129, 0.06);
  border: 1px solid rgba(16, 185, 129, 0.2);
  margin-top: var(--ms-spacing-xs);
}

.ms-contact__status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  flex-shrink: 0;
  margin-top: 5px;
  box-shadow: 0 0 6px rgba(16, 185, 129, 0.6);
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; box-shadow: 0 0 6px rgba(16, 185, 129, 0.6); }
  50%       { opacity: 0.7; box-shadow: 0 0 12px rgba(16, 185, 129, 0.9); }
}

.ms-contact__status p {
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
  margin: 0;
  line-height: 1.6;
}

.ms-contact__status strong {
  color: #10b981;
  font-weight: 600;
}
</style>
