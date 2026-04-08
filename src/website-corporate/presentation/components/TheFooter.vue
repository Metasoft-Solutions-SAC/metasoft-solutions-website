<script setup>
import { useScrollTo } from '../composables/useScrollTo.js'

const currentYear = new Date().getFullYear()
const { scrollTo } = useScrollTo()
</script>

<template>
  <footer class="ms-footer" role="contentinfo" aria-label="Pie de página Metasoft Solutions SAC">
    <div class="ms-footer__top">
      <div class="ms-container ms-footer__top-inner">
        <!-- Brand -->
        <div class="ms-footer__brand">
          <a href="#inicio" @click.prevent="scrollTo('#inicio')" aria-label="Metasoft Solutions SAC">
            <img src="/metasoft-logo-inline.png" alt="Metasoft Solutions SAC" width="160" height="40" style="width: auto; display: block;" />
          </a>
          <p class="ms-footer__tagline mt-md">
            Software a medida que hace crecer tu negocio.
          </p>
          <div class="ms-footer__contact-quick mt-md">
            <a href="https://wa.me/51992016075" target="_blank" rel="noopener noreferrer" class="ms-footer__contact-item">
              <i class="pi pi-whatsapp" aria-hidden="true"></i> +51 992 016 075
            </a>
            <a href="mailto:janover@metasoft.pe" class="ms-footer__contact-item">
              <i class="pi pi-envelope" aria-hidden="true"></i> janover@metasoft.pe
            </a>
          </div>
          <div class="ms-footer__social mt-lg">
            <a href="https://www.linkedin.com/company/metasoft-solutions" target="_blank" rel="noopener noreferrer" class="ms-icon-box ms-icon-box--small" aria-label="LinkedIn"><i class="pi pi-linkedin"></i></a>
            <a href="https://twitter.com/metasoftperu" target="_blank" rel="noopener noreferrer" class="ms-icon-box ms-icon-box--small" aria-label="Twitter"><i class="pi pi-twitter"></i></a>
            <a href="https://github.com/metasoft-solutions" target="_blank" rel="noopener noreferrer" class="ms-icon-box ms-icon-box--small" aria-label="GitHub"><i class="pi pi-github"></i></a>
            <a href="mailto:janover@metasoft.pe" class="ms-icon-box ms-icon-box--small" aria-label="Email"><i class="pi pi-envelope"></i></a>
          </div>
        </div>

        <!-- Links Grid -->
        <div class="ms-footer__links-grid">
          <nav aria-label="Empresa">
            <h3 class="ms-footer__nav-title">Empresa</h3>
            <ul role="list">
              <li><a href="#nosotros" class="ms-footer__nav-link" @click.prevent="scrollTo('#nosotros')">Nosotros</a></li>
              <li><a href="#metodologia" class="ms-footer__nav-link" @click.prevent="scrollTo('#metodologia')">Nuestro Proceso</a></li>
              <li><a href="#faq" class="ms-footer__nav-link" @click.prevent="scrollTo('#faq')">Preguntas Frecuentes</a></li>
              <li><a href="#contacto" class="ms-footer__nav-link" @click.prevent="scrollTo('#contacto')">Contacto</a></li>
            </ul>
          </nav>

          <nav aria-label="Servicios">
            <h3 class="ms-footer__nav-title">Servicios</h3>
            <ul role="list">
              <li><a href="/desarrollo-sitios-web-corporativos" class="ms-footer__nav-link">Sitios Web Corporativos</a></li>
              <li><a href="/desarrollo-aplicaciones-web" class="ms-footer__nav-link">Aplicaciones Web a Medida</a></li>
              <li><a href="/desarrollo-aplicaciones-moviles" class="ms-footer__nav-link">Aplicaciones Móviles</a></li>
              <li><a href="/plataformas-saas" class="ms-footer__nav-link">Plataformas SaaS</a></li>
              <li><a href="/consultoria-migracion-software" class="ms-footer__nav-link">Consultoría y Migración</a></li>
            </ul>
          </nav>

          <nav aria-label="Recursos">
            <h3 class="ms-footer__nav-title">Recursos</h3>
            <ul role="list">
              <li><a href="#tecnologias" class="ms-footer__nav-link" @click.prevent="scrollTo('#tecnologias')">Tecnologías</a></li>
              <li><a href="#metodologia" class="ms-footer__nav-link" @click.prevent="scrollTo('#metodologia')">Metodología</a></li>
              <li><a href="#testimonios" class="ms-footer__nav-link" @click.prevent="scrollTo('#testimonios')">Casos de Éxito</a></li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 class="ms-footer__nav-title">Legal</h3>
            <ul role="list">
              <li><a href="/privacidad.html" class="ms-footer__nav-link" target="_blank" rel="noopener">Política de Privacidad</a></li>
              <li><a href="/terminos.html" class="ms-footer__nav-link" target="_blank" rel="noopener">Términos y Condiciones</a></li>
              <li><a href="/privacidad.html#cookies" class="ms-footer__nav-link" target="_blank" rel="noopener">Política de Cookies</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="ms-footer__bottom">
      <div class="ms-container ms-footer__bottom-inner">
        <p class="ms-footer__copyright text-secondary">
          © {{ currentYear }} Metasoft Solutions S.A.C. Todos los derechos reservados.
        </p>
        <div class="ms-footer__slogan">
          <span class="text-gradient">Tecnología que impulsa tus metas</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.ms-footer {
  background: var(--ms-bg-primary);
  border-top: 1px solid var(--ms-border-color);
  position: relative;
  overflow: hidden;
}

/* Subtle glow at bottom */
.ms-footer::before {
  content: '';
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 200px;
  background: radial-gradient(ellipse at center, rgba(0, 112, 243, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.ms-footer__top {
  padding: var(--ms-spacing-2xl) 0 var(--ms-spacing-3xl);
}

.ms-footer__top-inner {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: var(--ms-spacing-3xl);
  align-items: start;
}

@media (max-width: 1024px) {
  .ms-footer__top-inner { grid-template-columns: 1fr; gap: var(--ms-spacing-3xl); }
}

.ms-footer-logo-text {
  display: flex;
  align-items: center;
  gap: 4px;
}
.font-bold { font-weight: 800; letter-spacing: -0.02em; }
.text-white { color: #fff; }

.ms-footer__tagline {
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-secondary);
  line-height: var(--ms-leading-relaxed);
  margin: 0;
}

.ms-footer__contact-quick {
  display: flex;
  flex-direction: column;
  gap: var(--ms-spacing-xs);
}

.ms-footer__contact-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--ms-font-size-xs);
  color: var(--ms-text-muted);
  text-decoration: none;
  transition: color var(--ms-transition-fast);
}

.ms-footer__contact-item i { font-size: 0.7rem; color: var(--ms-brand-primary); }

.ms-footer__contact-item:hover { color: var(--ms-text-primary); }

.ms-footer__social {
  display: flex;
  gap: var(--ms-spacing-sm);
}

.ms-icon-box--small {
  width: 32px; height: 32px; font-size: 0.875rem;
  background: transparent;
  border-color: var(--ms-border-color-2);
  color: var(--ms-text-secondary);
}
.ms-icon-box--small:hover {
  background: rgba(255,255,255,0.05);
  color: #fff;
  border-color: rgba(255,255,255,0.3);
}

/* Links */
.ms-footer__links-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--ms-spacing-2xl);
}

@media (max-width: 768px) {
  .ms-footer__links-grid { grid-template-columns: repeat(2, 1fr); gap: var(--ms-spacing-xl); }
}

@media (max-width: 480px) {
  .ms-footer__links-grid { grid-template-columns: 1fr; }
}

.ms-footer__nav-title {
  font-size: var(--ms-font-size-sm);
  font-weight: 600;
  color: #fff;
  margin-bottom: var(--ms-spacing-lg);
  letter-spacing: 0.05em;
}

.ms-footer__links-grid ul {
  display: flex;
  flex-direction: column;
  gap: var(--ms-spacing-md);
  padding: 0; margin: 0; list-style: none;
}

.ms-footer__nav-link {
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-muted);
  text-decoration: none;
  transition: color var(--ms-transition-fast);
}

.ms-footer__nav-link:hover {
  color: var(--ms-brand-secondary);
}

/* Bottom */
.ms-footer__bottom {
  border-top: 1px solid var(--ms-border-color);
  padding: var(--ms-spacing-lg) 0;
  position: relative;
  z-index: 1;
}

.ms-footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--ms-spacing-md);
}

.ms-footer__copyright {
  font-size: var(--ms-font-size-xs);
  margin: 0;
}

.ms-footer__slogan {
  font-size: var(--ms-font-size-sm);
  font-weight: 600;
}

@media (max-width: 640px) {
  .ms-footer__bottom-inner {
    flex-direction: column-reverse;
    text-align: center;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .ms-footer__top { padding: var(--ms-spacing-xl) 0 var(--ms-spacing-2xl); }
  .ms-footer__nav-title { margin-bottom: var(--ms-spacing-md); }
}

.mt-md { margin-top: var(--ms-spacing-md); }
.mt-lg { margin-top: var(--ms-spacing-lg); }
.text-secondary { color: var(--ms-text-secondary); }
</style>
