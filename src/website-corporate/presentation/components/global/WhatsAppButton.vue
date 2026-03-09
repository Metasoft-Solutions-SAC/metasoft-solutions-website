<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showBackToTop = ref(false)

function onScroll() {
  showBackToTop.value = window.scrollY > 320
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="ms-floating-group">
    <Transition name="bounce-up">
      <button
        v-if="showBackToTop"
        type="button"
        class="ms-back-to-top"
        aria-label="Volver al inicio"
        @click="scrollToTop"
      >
        <i class="pi pi-chevron-up" aria-hidden="true"></i>
      </button>
    </Transition>

    <a
      href="https://wa.me/51992016075"
      target="_blank"
      rel="noopener noreferrer"
      class="ms-whatsapp-btn"
      aria-label="Contactar por WhatsApp — ¿Necesitas ayuda?"
      title="¿Necesitas ayuda? Escríbenos por WhatsApp"
    >
      <i class="pi pi-whatsapp" aria-hidden="true"></i>
    </a>
  </div>
</template>

<style scoped>
.ms-floating-group {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

/* ── WhatsApp ─────────────────── */
.ms-whatsapp-btn {
  width: 56px;
  height: 56px;
  background: #25D366;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45);
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
}

@media (prefers-reduced-motion: no-preference) {
  .ms-whatsapp-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: #25D366;
    animation: whatsapp-pulse 2.5s ease-out infinite;
    z-index: -1;
  }
}

@keyframes whatsapp-pulse {
  0%   { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(1.9); opacity: 0; }
}

.ms-whatsapp-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 28px rgba(37, 211, 102, 0.6);
}

/* ── Back to top ──────────────── */
.ms-back-to-top {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(10, 18, 36, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s, color 0.2s;
}

.ms-back-to-top:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.25);
  color: #fff;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.55);
}

.ms-back-to-top:hover .pi {
  animation: arrow-bounce 0.4s ease;
}

@keyframes arrow-bounce {
  0%, 100% { transform: translateY(0); }
  40%       { transform: translateY(-3px); }
  70%       { transform: translateY(-1px); }
}

/* ── Transition ───────────────── */
.bounce-up-enter-active {
  animation: bounce-in 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.bounce-up-leave-active {
  animation: bounce-in 0.2s ease reverse;
}
@keyframes bounce-in {
  from { opacity: 0; transform: translateY(12px) scale(0.85); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
</style>
