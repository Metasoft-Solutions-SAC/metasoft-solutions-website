<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollTo } from '../composables/useScrollTo.js'

const isScrolled = ref(false)
const drawerVisible = ref(false)
const activeSection = ref('inicio')

const navLinks = [
  { label: 'Servicios',        href: '#servicios' },
  { label: 'Cómo Trabajamos',  href: '#metodologia' },
  { label: 'Nosotros',         href: '#nosotros' },
  { label: 'Casos de Éxito',   href: '#testimonios' },
  { label: 'Tecnologías',      href: '#tecnologias' },
  { label: 'FAQ',              href: '#faq' },
  { label: 'Contacto',         href: '#contacto' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
  
  // Simple scrollspy
  const sections = ['inicio', 'servicios', 'metodologia', 'nosotros', 'testimonios', 'tecnologias', 'faq', 'contacto']
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = id
        break
      }
    }
  }
}

const { scrollTo: scrollToSection } = useScrollTo()
const scrollTo = (href) => {
  drawerVisible.value = false
  scrollToSection(href)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="ms-navbar" :class="{ 'ms-navbar--scrolled': isScrolled }" role="banner">
    <div class="ms-container ms-navbar__inner">
      <!-- Logo -->
      <a href="#inicio" class="ms-navbar__brand" @click.prevent="scrollTo('#inicio')" aria-label="Metasoft Solutions - Inicio">
        <img src="/metasoft-logo-inline.png" alt="Metasoft Solutions SAC" width="160" height="32" style="width: auto; display: block;" />
      </a>

      <!-- Desktop Nav -->
      <nav class="ms-navbar__nav hide-mobile" aria-label="Navegación principal">
        <ul role="list">
          <li v-for="link in navLinks" :key="link.href">
            <a 
              :href="link.href" 
              class="ms-navbar__link" 
              :class="{ 'ms-navbar__link--active': activeSection === link.href.replace('#', '') }"
              @click.prevent="scrollTo(link.href)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>

      <!-- Desktop CTA -->
      <div class="ms-navbar__actions hide-mobile">
        <button type="button" class="ms-btn ms-btn-primary ms-btn-glow" @click="scrollTo('#contacto')">
          Consulta Gratuita
        </button>
      </div>

      <!-- Mobile Toggle -->
      <button 
        type="button"
        class="ms-navbar__toggle hide-desktop" 
        @click="drawerVisible = true"
        aria-label="Abrir menú"
        :aria-expanded="String(drawerVisible)"
      >
        <i class="pi pi-bars"></i>
      </button>

      <!-- Mobile Drawer -->
      <pv-drawer 
        v-model:visible="drawerVisible" 
        position="right"
        class="ms-mobile-drawer"
        :show-close-icon="true"
      >
        <template #header>
          <img src="/metasoft-logo-inline.png" alt="Metasoft Solutions SAC" height="28" style="width: auto; display: block;" />
        </template>
        
        <nav class="ms-drawer-nav" aria-label="Navegación móvil">
          <ul role="list">
            <li v-for="link in navLinks" :key="link.href">
              <a 
                :href="link.href" 
                class="ms-drawer-link"
                :class="{ 'ms-navbar__link--active': activeSection === link.href.replace('#', '') }"
                @click.prevent="scrollTo(link.href)"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
          <div class="ms-drawer-footer">
            <button type="button" class="ms-btn ms-btn-primary ms-btn-glow w-full" @click="scrollTo('#contacto')">
              Consulta Gratuita
            </button>
          </div>
        </nav>
      </pv-drawer>
    </div>
  </header>
</template>

<style scoped>
.ms-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--ms-navbar-height);
  z-index: var(--ms-z-sticky);
  background: transparent;
  transition: all var(--ms-transition-base);
  border-bottom: 1px solid transparent;
}

.ms-navbar--scrolled {
  background: rgba(5, 5, 5, 0.85); /* Dark solid base */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08); /* Crisp bottom border */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}

/* Mobile: always show a subtle background so the navbar is visible
   against both the hero and scrolled sections */
@media (max-width: 768px) {
  .ms-navbar {
    background: rgba(5, 8, 20, 0.8);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
}

.ms-navbar__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Brand */
.ms-navbar__brand {
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  transition: opacity var(--ms-transition-fast);
}

.ms-navbar__brand:hover {
  opacity: 0.8;
}

.text-white { color: #fff; }
.text-secondary { color: var(--ms-text-secondary); }
.font-bold { font-weight: 800; letter-spacing: -0.02em; }
.text-xl { font-size: 1.25rem; }

/* Desktop Nav */
.ms-navbar__nav ul {
  display: flex;
  gap: var(--ms-spacing-xl);
  list-style: none;
  margin: 0; padding: 0;
}

.ms-navbar__link {
  font-size: var(--ms-font-size-sm);
  font-weight: 500;
  color: var(--ms-text-secondary);
  text-decoration: none;
  transition: color var(--ms-transition-fast);
  position: relative;
  padding: 0.5rem 0;
}

.ms-navbar__link:hover {
  color: #fff;
}

/* Scrollspy Active State Modifier */
.ms-navbar__link--active {
  color: #fff;
}

.ms-navbar__link--active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--ms-gradient-brand-text);
  border-radius: 2px;
  transform-origin: left center;
  animation: underline-slide-in 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes underline-slide-in {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

/* Mobile Toggle */
.ms-navbar__toggle {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Drawer Nav */
.ms-drawer-nav {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.ms-drawer-nav ul {
  list-style: none; padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: var(--ms-spacing-lg);
  margin-top: var(--ms-spacing-xl);
}

.ms-drawer-link {
  font-size: var(--ms-font-size-lg);
  font-weight: 500;
  color: var(--ms-text-secondary);
  text-decoration: none;
  display: block;
  transition: color var(--ms-transition-fast);
}
.ms-drawer-link:hover, .ms-navbar__link--active {
  color: #fff;
}

.ms-drawer-footer {
  margin-top: auto;
  padding-bottom: var(--ms-spacing-xl);
}
</style>
