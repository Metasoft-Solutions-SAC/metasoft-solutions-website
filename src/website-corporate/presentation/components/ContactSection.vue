<script setup>
import { ref, reactive } from 'vue'
import { useWebsiteCorporateStore } from '../../application/website-corporate.store.js'

const store = useWebsiteCorporateStore()

const projectTypes = [
  { value: 'web',        label: 'Sitio Web Corporativo' },
  { value: 'web-mobile', label: 'Aplicación Web/Móvil' },
  { value: 'saas',       label: 'Plataforma SaaS' },
  { value: 'consulting', label: 'Consultoría Técnica' },
  { value: 'other',      label: 'Otro tipo de proyecto' }
]

const form = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  projectType: null,
  message: ''
})

const errors = reactive({})
const hasAttemptedSubmit = ref(false)

const validate = () => {
  const e = {}
  if (!form.name.trim())    e.name = 'Completa este campo'
  if (!form.email.trim())   e.email = 'Completa este campo'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email inválido'
  if (!form.message.trim()) e.message = 'Completa este campo'
  Object.keys(errors).forEach(k => delete errors[k])
  Object.assign(errors, e)
  return Object.keys(e).length === 0
}

const handleSubmit = async () => {
  hasAttemptedSubmit.value = true
  if (!validate()) return
  await store.submitContactForm({ ...form })
}

const resetForm = () => {
  Object.assign(form, { name: '', email: '', company: '', phone: '', projectType: null, message: '' })
  Object.keys(errors).forEach(k => delete errors[k])
  hasAttemptedSubmit.value = false
  store.resetContactState()
}


</script>

<template>
  <section id="contacto" class="ms-section ms-contact" aria-labelledby="contact-title">
    <div class="ms-container">
      <div class="ms-section-header text-center" data-aos="fade-up">
        <p class="ms-section-overline" aria-hidden="true">07 / Contacto</p>
        <span class="ms-badge mb-md"><i class="pi pi-bolt" aria-hidden="true"></i> Respuesta garantizada en menos de 24 horas</span>
        <h2 id="contact-title">Cuéntanos <span class="text-gradient">tu idea</span></h2>
        <p class="ms-section-subtitle">Sin compromiso, sin tecnicismos. Te respondemos con un plan claro para tu proyecto.</p>
      </div>

      <div class="ms-contact__layout">
        <!-- Contact info panel -->
        <aside class="ms-contact__sidebar" data-aos="fade-right" data-aos-delay="200">
          
          <a href="https://wa.me/51992016075" target="_blank" rel="noopener" class="ms-card ms-contact-card ms-contact-card--primary">
            <div class="ms-icon-box ms-icon-whatsapp">
              <i class="pi pi-whatsapp"></i>
            </div>
            <div class="ms-contact-card__content">
              <h3>WhatsApp</h3>
              <p>Respuesta en minutos</p>
              <span class="ms-tag">Más rápido</span>
            </div>
          </a>

          <a href="mailto:janover@metasoft.pe" class="ms-card ms-contact-card">
            <div class="ms-icon-box">
              <i class="pi pi-envelope"></i>
            </div>
            <div class="ms-contact-card__content">
              <h3>Correo Electrónico</h3>
              <p>janover@metasoft.pe</p>
              <span class="text-xs text-secondary">&lt; 24h respuesta</span>
            </div>
          </a>

          <a href="tel:+51992016075" class="ms-card ms-contact-card">
            <div class="ms-icon-box">
              <i class="pi pi-phone"></i>
            </div>
            <div class="ms-contact-card__content">
              <h3>Llamada Directa</h3>
              <p>+51 992 016 075</p>
              <span class="text-xs text-secondary">Horario 9am-6pm</span>
            </div>
          </a>

        </aside>

        <!-- Form Panel -->
        <div class="ms-card ms-contact__form-panel" data-aos="fade-left" data-aos-delay="400">
          <div class="ms-form-header">
            <h3 class="ms-form-title">Cuéntanos tu proyecto</h3>
            <div class="ms-form-trust">
              <span><i class="pi pi-clock" aria-hidden="true"></i> Respuesta en &lt;24h</span>
              <span><i class="pi pi-shield" aria-hidden="true"></i> Datos protegidos</span>
              <span><i class="pi pi-times-circle" aria-hidden="true"></i> Sin compromiso</span>
            </div>
          </div>

          <!-- Success state -->
          <div v-if="store.contactSuccess" class="ms-contact__success animate-fade-in-up">
            <div class="ms-icon-box ms-icon-success mb-lg">
              <i class="pi pi-check" style="color: var(--ms-accent-success);"></i>
            </div>
            <h3>¡Mensaje enviado con éxito!</h3>
            <p class="text-secondary">Tus datos están protegidos. Te responderemos en menos de 24 horas a tu correo electrónico.</p>
            <button type="button" class="ms-btn ms-btn-outline mt-lg" @click="resetForm">
              Enviar nuevo mensaje
            </button>
          </div>

          <!-- Form -->
          <form v-else @submit.prevent="handleSubmit" novalidate class="ms-form-grid animate-fade-in" aria-label="Formulario de contacto">

            <div class="ms-form-group" :class="{ 'ms-has-error': hasAttemptedSubmit && errors.name }">
              <label class="ms-label" for="c-name">
                <i class="pi pi-user" aria-hidden="true"></i> Nombre completo <span class="ms-req">*</span>
              </label>
              <pv-input-text id="c-name" v-model="form.name" autocomplete="name" class="w-full" :class="{ 'p-invalid': hasAttemptedSubmit && errors.name }" placeholder="Tu nombre completo" />
              <span class="ms-error-text" v-if="hasAttemptedSubmit && errors.name" role="alert">{{ errors.name }}</span>
            </div>

            <div class="ms-form-group" :class="{ 'ms-has-error': hasAttemptedSubmit && errors.email }">
              <label class="ms-label" for="c-email">
                <i class="pi pi-envelope" aria-hidden="true"></i> Correo electrónico <span class="ms-req">*</span>
              </label>
              <pv-input-text id="c-email" type="email" v-model="form.email" autocomplete="email" class="w-full" :class="{ 'p-invalid': hasAttemptedSubmit && errors.email }" placeholder="tu@empresa.com" />
              <span class="ms-error-text" v-if="hasAttemptedSubmit && errors.email" role="alert">{{ errors.email }}</span>
            </div>

            <div class="ms-form-group ms-col-span-2" :class="{ 'ms-has-error': hasAttemptedSubmit && errors.message }">
              <label class="ms-label" for="c-message">
                <i class="pi pi-comment" aria-hidden="true"></i> Tu proyecto <span class="ms-req">*</span>
              </label>
              <pv-textarea id="c-message" v-model="form.message" :rows="4" :maxlength="500" class="w-full" :class="{ 'p-invalid': hasAttemptedSubmit && errors.message }" placeholder="Describe brevemente qué necesitas construir, automatizar o mejorar..." />
              <div class="ms-form-footer">
                <span class="ms-error-text" v-if="hasAttemptedSubmit && errors.message" role="alert">{{ errors.message }}</span>
                <span v-else></span>
                <span class="text-xs text-secondary">{{ form.message.length }}/500</span>
              </div>
            </div>

            <!-- Optional divider -->
            <div class="ms-fields-divider ms-col-span-2">
              <span>Opcional — nos ayuda a preparar mejor la propuesta</span>
            </div>

            <div class="ms-form-group ms-col-span-2">
              <label class="ms-label" for="c-type">
                <i class="pi pi-briefcase" aria-hidden="true"></i> Tipo de proyecto
              </label>
              <pv-select id="c-type" v-model="form.projectType" :options="projectTypes" option-label="label" option-value="value" class="w-full" placeholder="Selecciona una opción" />
            </div>

            <div class="ms-form-group">
              <label class="ms-label" for="c-company">
                <i class="pi pi-building" aria-hidden="true"></i> Empresa
              </label>
              <pv-input-text id="c-company" v-model="form.company" autocomplete="organization" class="w-full" placeholder="Nombre de tu empresa" />
            </div>

            <div class="ms-form-group">
              <label class="ms-label" for="c-phone">
                <i class="pi pi-phone" aria-hidden="true"></i> Teléfono
              </label>
              <pv-input-text id="c-phone" v-model="form.phone" type="tel" autocomplete="tel" class="w-full" placeholder="+51 999 000 000" />
            </div>

            <div v-if="hasAttemptedSubmit && store.hasError" class="ms-form-error ms-col-span-2" role="alert">
              <i class="pi pi-exclamation-circle" aria-hidden="true"></i>
              <span>Error al enviar. Intenta nuevamente o escríbenos a <a href="mailto:janover@metasoft.pe">janover@metasoft.pe</a></span>
            </div>

            <div class="ms-form-action ms-col-span-2">
              <button type="submit" class="ms-btn ms-btn-lg ms-btn-glow w-full" :disabled="store.isContactSubmitting">
                <i v-if="store.isContactSubmitting" class="pi pi-spin pi-spinner"></i>
                <i v-else class="pi pi-send"></i>
                {{ store.isContactSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
              </button>
              <p class="text-xs text-secondary text-center mt-sm">Al enviar aceptas nuestra <a href="/privacidad.html" target="_blank" rel="noopener" class="ms-link">política de privacidad</a>. Nunca compartiremos tu información.</p>
            </div>

          </form>
        </div>
      </div>
    </div>

    <!-- Success Toast — fixed above floating buttons -->
    <Transition name="ms-toast-slide">
      <div v-if="showToast" class="ms-toast" role="alert" aria-live="polite">
        <i class="pi pi-check-circle ms-toast__icon" aria-hidden="true"></i>
        <div class="ms-toast__body">
          <strong>¡Mensaje enviado!</strong>
          <p>Te responderemos en menos de 24h</p>
        </div>
        <button type="button" class="ms-toast__close" @click="showToast = false" aria-label="Cerrar notificación">
          <i class="pi pi-times" aria-hidden="true"></i>
        </button>
        <div class="ms-toast__progress" aria-hidden="true"></div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.ms-contact {
  background: var(--ms-bg-primary);
  position: relative;
  overflow: hidden;
}

/* Top light cone — focuses eye on the form */
.ms-contact::before {
  content: '';
  position: absolute;
  top: -25%;
  left: 50%;
  transform: translateX(-50%);
  width: 90vw;
  height: 65vh;
  background: radial-gradient(ellipse at top, rgba(14, 165, 233, 0.12) 0%, transparent 65%);
  pointer-events: none;
}

.ms-contact > .ms-container {
  position: relative;
  z-index: 1;
}

.ms-section-header.text-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: var(--ms-spacing-3xl);
}

.ms-section-header h2 {
  max-width: 900px;
  font-size: clamp(2rem, 4vw, 3rem);
}

.ms-contact__layout {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: var(--ms-spacing-2xl);
  align-items: start;
}

@media (max-width: 1024px) {
  .ms-contact__layout { grid-template-columns: 1fr; }
}

/* Sidebar Cards */
.ms-contact__sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--ms-spacing-md);
}

.ms-contact-card {
  display: flex;
  align-items: center;
  gap: var(--ms-spacing-md);
  padding: var(--ms-spacing-md);
  text-decoration: none;
}

.ms-contact-card--primary {
  background: rgba(37, 211, 102, 0.05); /* WhatsApp green hint */
  border-color: rgba(37, 211, 102, 0.2);
}
.ms-contact-card--primary:hover {
  background: rgba(37, 211, 102, 0.1);
  border-color: rgba(37, 211, 102, 0.3);
}

.ms-icon-whatsapp {
  background: #25D366;
  color: #fff;
  border: none;
}

.ms-contact-card__content h3 {
  font-size: var(--ms-font-size-base);
  font-weight: 600;
  color: var(--ms-text-primary);
  margin: 0 0 2px 0;
}

.ms-contact-card__content p {
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
  margin: 0 0 4px 0;
}

/* Form Panel */
.ms-contact__form-panel {
  padding: var(--ms-spacing-2xl);
  overflow: hidden;
}

.ms-contact__form-panel::before {
  content: '';
  display: block;
  height: 3px;
  background: var(--ms-gradient-primary);
  margin: calc(-1 * var(--ms-spacing-2xl)) calc(-1 * var(--ms-spacing-2xl)) var(--ms-spacing-2xl);
}

@media (max-width: 640px) {
  .ms-contact__form-panel { padding: var(--ms-spacing-lg); }
  .ms-contact__form-panel::before { margin: calc(-1 * var(--ms-spacing-lg)) calc(-1 * var(--ms-spacing-lg)) var(--ms-spacing-lg); }
}

/* Form header */
.ms-form-header {
  margin-bottom: var(--ms-spacing-xl);
  padding-bottom: var(--ms-spacing-lg);
  border-bottom: 1px solid var(--ms-border-color);
}

.ms-form-title {
  font-size: var(--ms-font-size-xl);
  font-weight: 700;
  color: var(--ms-text-primary);
  margin: 0 0 var(--ms-spacing-md);
  letter-spacing: -0.02em;
}

.ms-form-trust {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ms-spacing-lg);
}

.ms-form-trust span {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: var(--ms-font-size-xs);
  color: var(--ms-text-secondary);
}

.ms-form-trust i {
  color: var(--ms-brand-primary);
  font-size: 0.7rem;
}

/* Form grid */
.ms-form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--ms-spacing-lg);
}

@media (max-width: 640px) {
  .ms-form-grid { grid-template-columns: 1fr; }
}

.ms-col-span-2 { grid-column: 1 / -1; }

/* Field label */
.ms-label {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--ms-text-secondary);
  margin-bottom: var(--ms-spacing-xs);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.ms-label i { font-size: 0.65rem; color: var(--ms-brand-primary); }
.ms-req { color: var(--ms-accent-danger); }

/* Optional section divider */
.ms-fields-divider {
  display: flex;
  align-items: center;
  gap: var(--ms-spacing-md);
  font-size: var(--ms-font-size-xs);
  color: var(--ms-text-muted);
  white-space: nowrap;
}

.ms-fields-divider::before,
.ms-fields-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--ms-border-color);
}

/* Input focus/error overrides */
.ms-has-error :deep(.p-inputtext),
.ms-has-error :deep(.p-textarea) {
  border-color: var(--ms-accent-danger) !important;
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.1) !important;
}

.ms-form-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 4px;
}

.ms-error-text {
  color: var(--ms-accent-danger);
  font-size: var(--ms-font-size-xs);
  font-weight: 500;
}

/* Success State */
.ms-contact__success {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--ms-spacing-4xl) 0;
}

.ms-icon-success {
  width: 80px; height: 80px; font-size: 2.5rem;
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.2);
}

.mb-sm { margin-bottom: var(--ms-spacing-sm); }

.ms-form-error {
  display: flex;
  align-items: flex-start;
  gap: var(--ms-spacing-sm);
  padding: var(--ms-spacing-md);
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.25);
  border-radius: var(--ms-border-radius);
  font-size: var(--ms-font-size-sm);
  color: var(--ms-accent-danger);
}

.ms-form-error i { font-size: 1rem; flex-shrink: 0; margin-top: 2px; }
.ms-form-error a { color: var(--ms-accent-danger); text-decoration: underline; }

.ms-link {
  color: var(--ms-brand-secondary);
  text-decoration: underline;
}

:deep(.p-inputtext),
:deep(.p-textarea) {
  min-height: 44px;
}
.mb-md { margin-bottom: var(--ms-spacing-md); }
.mb-lg { margin-bottom: var(--ms-spacing-lg); }
.mb-xl { margin-bottom: var(--ms-spacing-xl); }
.mt-md { margin-top: var(--ms-spacing-md); }
.mt-lg { margin-top: var(--ms-spacing-lg); }
.mt-sm { margin-top: var(--ms-spacing-sm); }
.text-center { text-align: center; }
.text-xs { font-size: var(--ms-font-size-xs); }
.text-secondary { color: var(--ms-text-secondary); }

/* ── Toast notification ───────────────────────────────── */
.ms-toast {
  position: fixed;
  bottom: 100px;
  right: 28px;
  z-index: 600;
  display: flex;
  align-items: flex-start;
  gap: var(--ms-spacing-md);
  padding: var(--ms-spacing-md) var(--ms-spacing-lg);
  background: var(--ms-bg-surface-2);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: var(--ms-border-radius-lg);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(16, 185, 129, 0.08);
  width: 280px;
  overflow: hidden;
}

.ms-toast__icon {
  font-size: 1.4rem;
  color: var(--ms-accent-success);
  flex-shrink: 0;
  margin-top: 2px;
}

.ms-toast__body strong {
  display: block;
  font-size: var(--ms-font-size-sm);
  font-weight: 700;
  color: var(--ms-text-primary);
  margin-bottom: 2px;
}

.ms-toast__body p {
  font-size: var(--ms-font-size-xs);
  color: var(--ms-text-secondary);
  margin: 0;
}

.ms-toast__close {
  margin-left: auto;
  background: transparent;
  border: none;
  color: var(--ms-text-muted);
  cursor: pointer;
  padding: 4px;
  line-height: 1;
  font-size: 0.7rem;
  flex-shrink: 0;
  border-radius: 4px;
  transition: color 0.2s, background 0.2s;
}
.ms-toast__close:hover { color: var(--ms-text-primary); background: rgba(255,255,255,0.05); }

.ms-toast__progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, var(--ms-accent-success), rgba(16, 185, 129, 0.3));
  transform-origin: left;
  animation: toast-shrink 5s linear forwards;
}

@keyframes toast-shrink {
  from { transform: scaleX(1); }
  to   { transform: scaleX(0); }
}

/* Transition: slide in from right */
.ms-toast-slide-enter-active { transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1); }
.ms-toast-slide-leave-active { transition: all 0.2s ease; }
.ms-toast-slide-enter-from,
.ms-toast-slide-leave-to    { transform: translateX(115%); opacity: 0; }
</style>
