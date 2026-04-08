<script setup>
import { useHead } from '@unhead/vue'
import TheNavbar from '../components/TheNavbar.vue'
import TheFooter from '../components/TheFooter.vue'
import ContactSection from '../components/ContactSection.vue'
import { useWebsiteCorporateStore } from '../../application/website-corporate.store.js'

// Ensure store is initialized (needed for ContactSection)
useWebsiteCorporateStore()

useHead({
  title: 'Desarrollo de Sitios Web Corporativos en Lima, Perú — Metasoft Solutions',
  meta: [
    {
      name: 'description',
      content:
        'Empresa especializada en desarrollo de sitios web corporativos en Lima, Perú. Diseño moderno, carga rápida y optimizado para conversión. Entrega en 2–4 semanas. Consulta gratuita.'
    },
    { property: 'og:title', content: 'Desarrollo de Sitios Web Corporativos en Lima, Perú — Metasoft Solutions' },
    {
      property: 'og:description',
      content: 'Diseñamos sitios web corporativos en Lima que generan leads, cargan rápido y posicionan en Google. Entrega en 2–4 semanas.'
    },
    { property: 'og:url', content: 'https://www.metasoft.pe/desarrollo-sitios-web-corporativos' },
    { property: 'og:image', content: 'https://www.metasoft.pe/og-image.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [{ rel: 'canonical', href: 'https://www.metasoft.pe/desarrollo-sitios-web-corporativos' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Desarrollo de Sitios Web Corporativos',
        description:
          'Diseño y desarrollo de sitios web corporativos modernos, rápidos y optimizados para SEO y conversión de clientes.',
        url: 'https://www.metasoft.pe/desarrollo-sitios-web-corporativos',
        provider: { '@type': 'Organization', '@id': 'https://www.metasoft.pe/#organization' },
        areaServed: { '@type': 'Country', name: 'Perú' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'PEN',
          priceSpecification: { '@type': 'UnitPriceSpecification', minPrice: '3000', priceCurrency: 'PEN' }
        }
      })
    }
  ]
})
</script>

<template>
  <div class="ms-app">
    <TheNavbar />

    <main class="ms-main-content">

      <!-- Hero de servicio -->
      <section class="ms-service-hero ms-section" aria-labelledby="sw-title">
        <div class="ms-container">

          <nav class="ms-breadcrumb" aria-label="Migas de pan">
            <a href="/">Inicio</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Sitios Web Corporativos</span>
          </nav>

          <span class="ms-badge mb-md">Sitios Web Corporativos</span>
          <h1 id="sw-title">
            Desarrollo de Sitios Web<br />
            <span class="text-gradient">Corporativos en Lima, Perú</span>
          </h1>
          <p class="ms-service-lead">
            Tu empresa merece una presencia digital que convierta visitantes en clientes.
            Diseñamos sitios web modernos, rápidos y bien posicionados en Google — con entrega en <strong>2 a 4 semanas</strong>.
          </p>
          <div class="ms-service-ctas">
            <a href="/#contacto" class="ms-btn ms-btn-glow ms-btn-lg">Solicitar Presupuesto Gratuito</a>
            <a href="/" class="ms-btn ms-btn-outline ms-btn-lg">Ver todos los servicios</a>
          </div>

        </div>
      </section>

      <!-- Qué incluye -->
      <section class="ms-section" aria-labelledby="sw-includes">
        <div class="ms-container">
          <h2 id="sw-includes">¿Qué incluye un sitio web corporativo profesional?</h2>
          <div class="ms-features-grid">

            <article class="ms-feature-card">
              <h3>Diseño UX/UI moderno y responsive</h3>
              <p>Interfaz atractiva y funcional en todos los dispositivos — móvil, tablet y escritorio. Diseños únicos alineados con la identidad visual de tu marca.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Optimización SEO desde la base</h3>
              <p>Estructura semántica, meta tags correctas, velocidad de carga optimizada e imágenes comprimidas. Core Web Vitals cuidados para que Google te encuentre primero.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Formularios de captación de leads</h3>
              <p>Integración con WhatsApp, formularios validados y notificaciones automáticas por correo para no perder ninguna oportunidad de negocio.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Hospedaje en infraestructura cloud</h3>
              <p>Desplegamos tu sitio en Cloudflare Pages con certificado SSL, CDN global y tiempos de carga menores a 2 segundos desde cualquier parte del mundo.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Analytics y métricas de rendimiento</h3>
              <p>Integración con Google Analytics 4 y Search Console para que veas exactamente cuántas visitas recibes, de dónde vienen y qué hacen en tu sitio.</p>
            </article>

            <article class="ms-feature-card">
              <h3>30 días de garantía post-entrega</h3>
              <p>Corregimos cualquier error sin costo adicional durante el primer mes. Y si quieres seguir creciendo, ofrecemos planes de mantenimiento mensual.</p>
            </article>

          </div>
        </div>
      </section>

      <!-- Inversión y tiempos -->
      <section class="ms-section ms-section--alt" aria-labelledby="sw-pricing">
        <div class="ms-container">
          <h2 id="sw-pricing">Inversión y tiempos de entrega</h2>
          <p class="ms-section-subtitle">
            Los proyectos parten desde <strong>S/ 3,000</strong> y se entregan en <strong>2 a 4 semanas</strong>.
            El precio depende del número de páginas, funcionalidades y nivel de personalización.
          </p>
          <ul class="ms-pricing-list">
            <li><strong>Landing page + formulario de contacto</strong> — desde S/ 3,000 · 2 semanas</li>
            <li><strong>Sitio multipágina con portafolio o catálogo</strong> — desde S/ 6,000 · 3–4 semanas</li>
            <li><strong>Sitio con panel de administración de contenido</strong> — desde S/ 9,000 · 4–6 semanas</li>
          </ul>
          <a href="/#contacto" class="ms-btn ms-btn-glow ms-btn-lg mt-lg">Solicitar presupuesto sin compromiso</a>
        </div>
      </section>

      <!-- Stack tecnológico -->
      <section class="ms-section" aria-labelledby="sw-stack">
        <div class="ms-container">
          <h2 id="sw-stack">Tecnologías que usamos</h2>
          <p>
            Construimos sitios web con <strong>Vue.js</strong>, <strong>Vite SSG</strong> o <strong>Nuxt</strong> según el caso de uso.
            Siempre priorizamos velocidad de carga, seguridad y SEO técnico desde el código.
          </p>
          <ul class="ms-tech-list">
            <li><strong>Frontend:</strong> Vue.js 3, Vite SSG, Nuxt</li>
            <li><strong>Hosting:</strong> Cloudflare Pages, GCP Cloud Run</li>
            <li><strong>CMS opcional:</strong> Headless CMS para gestión autónoma de contenido</li>
            <li><strong>Analítica:</strong> Google Analytics 4, Search Console, Tag Manager</li>
          </ul>
        </div>
      </section>

      <!-- Para qué empresas -->
      <section class="ms-section ms-section--alt" aria-labelledby="sw-forwhom">
        <div class="ms-container">
          <h2 id="sw-forwhom">¿Para qué tipo de empresa es ideal?</h2>
          <p>El desarrollo de sitios web corporativos es perfecto para:</p>
          <ul class="ms-check-list">
            <li>Empresas que quieren <strong>generar más clientes potenciales</strong> de forma orgánica desde Google</li>
            <li>Negocios que tienen una web desactualizada que no refleja su nivel profesional</li>
            <li>Startups y PYMEs que buscan <strong>validar su propuesta de valor</strong> con una presencia digital sólida</li>
            <li>Profesionales independientes que necesitan un portafolio o sitio de captación</li>
          </ul>
        </div>
      </section>

      <!-- CTA + Contacto -->
      <ContactSection />

    </main>

    <TheFooter />
  </div>
</template>

<style scoped>
.ms-service-hero {
  padding-top: calc(var(--ms-navbar-height) + var(--ms-spacing-3xl));
  padding-bottom: var(--ms-spacing-3xl);
  background: var(--ms-bg-primary);
}

.ms-service-lead {
  font-size: var(--ms-font-size-xl);
  color: var(--ms-text-secondary);
  max-width: 680px;
  margin-top: var(--ms-spacing-lg);
  line-height: 1.7;
}

.ms-service-ctas {
  display: flex;
  gap: var(--ms-spacing-md);
  flex-wrap: wrap;
  margin-top: var(--ms-spacing-2xl);
}

.ms-breadcrumb {
  font-size: var(--ms-font-size-sm);
  color: var(--ms-text-muted);
  margin-bottom: var(--ms-spacing-lg);
}

.ms-breadcrumb a {
  color: var(--ms-text-secondary);
  text-decoration: none;
}

.ms-breadcrumb a:hover {
  color: var(--ms-brand-primary);
}

.ms-features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--ms-spacing-xl);
  margin-top: var(--ms-spacing-2xl);
}

.ms-feature-card {
  padding: var(--ms-spacing-xl);
  border: 1px solid var(--ms-border-color);
  border-radius: var(--ms-radius-lg);
  background: var(--ms-bg-secondary);
}

.ms-feature-card h3 {
  font-size: var(--ms-font-size-lg);
  margin-bottom: var(--ms-spacing-sm);
  color: var(--ms-text-primary);
}

.ms-section--alt {
  background: var(--ms-bg-secondary);
}

.ms-pricing-list {
  list-style: none;
  padding: 0;
  margin: var(--ms-spacing-xl) 0;
  display: flex;
  flex-direction: column;
  gap: var(--ms-spacing-md);
}

.ms-pricing-list li {
  padding: var(--ms-spacing-md) var(--ms-spacing-lg);
  border: 1px solid var(--ms-border-color);
  border-radius: var(--ms-radius-md);
  background: var(--ms-bg-primary);
  color: var(--ms-text-secondary);
}

.ms-tech-list,
.ms-check-list {
  margin-top: var(--ms-spacing-lg);
  padding-left: var(--ms-spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--ms-spacing-sm);
  color: var(--ms-text-secondary);
}

.mt-lg {
  margin-top: var(--ms-spacing-xl);
}
</style>
