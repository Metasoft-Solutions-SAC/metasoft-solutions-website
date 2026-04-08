<script setup>
import { useHead } from '@unhead/vue'
import TheNavbar from '../components/TheNavbar.vue'
import TheFooter from '../components/TheFooter.vue'
import ContactSection from '../components/ContactSection.vue'
import { useWebsiteCorporateStore } from '../../application/website-corporate.store.js'

useWebsiteCorporateStore()

useHead({
  title: 'Desarrollo de Plataformas SaaS Multi-tenant en Perú — Metasoft Solutions',
  meta: [
    {
      name: 'description',
      content:
        'Desarrollamos plataformas SaaS multi-tenant escalables en la nube en Lima, Perú. Arquitectura cloud-native, pagos recurrentes, panel de administración y API. Consulta gratuita.'
    },
    { property: 'og:title', content: 'Desarrollo de Plataformas SaaS Multi-tenant en Perú — Metasoft Solutions' },
    {
      property: 'og:description',
      content: 'Construimos tu plataforma SaaS multi-tenant lista para escalar en la nube. Lima, Perú. Ingresos recurrentes, arquitectura sólida.'
    },
    { property: 'og:url', content: 'https://www.metasoft.pe/plataformas-saas' },
    { property: 'og:image', content: 'https://www.metasoft.pe/og-image.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [{ rel: 'canonical', href: 'https://www.metasoft.pe/plataformas-saas' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Desarrollo de Plataformas SaaS',
        description:
          'Plataformas SaaS multi-tenant escalables en la nube con arquitectura cloud-native, pagos recurrentes y panel de administración.',
        url: 'https://www.metasoft.pe/plataformas-saas',
        provider: { '@type': 'Organization', '@id': 'https://www.metasoft.pe/#organization' },
        areaServed: { '@type': 'Country', name: 'Perú' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'PEN',
          priceSpecification: { '@type': 'UnitPriceSpecification', minPrice: '25000', priceCurrency: 'PEN' }
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

      <section class="ms-service-hero ms-section" aria-labelledby="saas-title">
        <div class="ms-container">

          <nav class="ms-breadcrumb" aria-label="Migas de pan">
            <a href="/">Inicio</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Plataformas SaaS</span>
          </nav>

          <span class="ms-badge mb-md">Plataformas SaaS</span>
          <h1 id="saas-title">
            Desarrollo de Plataformas SaaS<br />
            <span class="text-gradient">Multi-tenant en Lima, Perú</span>
          </h1>
          <p class="ms-service-lead">
            Tienes una idea de producto digital y quieres monetizarla con suscripciones. Construimos la plataforma
            <strong>multi-tenant, escalable en la nube</strong> y lista para crecer desde el primer cliente.
          </p>
          <div class="ms-service-ctas">
            <a href="/#contacto" class="ms-btn ms-btn-glow ms-btn-lg">Solicitar Presupuesto Gratuito</a>
            <a href="/" class="ms-btn ms-btn-outline ms-btn-lg">Ver todos los servicios</a>
          </div>

        </div>
      </section>

      <!-- Qué incluye un SaaS -->
      <section class="ms-section" aria-labelledby="saas-includes">
        <div class="ms-container">
          <h2 id="saas-includes">¿Qué incluye el desarrollo de una plataforma SaaS?</h2>
          <div class="ms-features-grid">

            <article class="ms-feature-card">
              <h3>Arquitectura multi-tenant</h3>
              <p>Cada empresa cliente opera en un entorno aislado con sus propios datos. Escalamos de 1 a 1,000 tenants sin necesidad de modificar la arquitectura base.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Sistema de suscripciones y pagos recurrentes</h3>
              <p>Integración con pasarelas de pago (Stripe, Culqi, PayPal). Gestión de planes, períodos de prueba, upgrades, downgrades y cobros automáticos.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Panel de superadmin</h3>
              <p>Control total de tenants, suscripciones, métricas de uso, facturación e incidencias desde un panel de administración centralizado.</p>
            </article>

            <article class="ms-feature-card">
              <h3>API REST documentada</h3>
              <p>API pública con autenticación OAuth 2.0 para integraciones de terceros, webhooks y extensibilidad de la plataforma por parte de tus clientes.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Onboarding automatizado</h3>
              <p>Registro libre, setup guiado, correos transaccionales y activación de cuenta sin intervención manual. Tu plataforma vende mientras duermes.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Infraestructura cloud escalable</h3>
              <p>Despliegue en GCP o AWS con auto-scaling, bases de datos gestionadas, CDN y monitoreo de disponibilidad 24/7.</p>
            </article>

          </div>
        </div>
      </section>

      <!-- Para quién es -->
      <section class="ms-section ms-section--alt" aria-labelledby="saas-forwhom">
        <div class="ms-container">
          <h2 id="saas-forwhom">¿Para quién es ideal el desarrollo SaaS?</h2>
          <ul class="ms-check-list">
            <li>Emprendedores con una <strong>idea de producto digital</strong> que quieren validarla y monetizarla rápido</li>
            <li>Empresas que tienen un proceso interno exitoso y quieren <strong>venderlo como servicio a otras empresas</strong></li>
            <li>Startups que necesitan un <strong>MVP funcional</strong> para mostrar a inversores o primeros clientes</li>
            <li>Negocios que ofrecen servicios repetitivos y quieren <strong>automatizarlos con una plataforma propia</strong></li>
          </ul>
        </div>
      </section>

      <!-- Inversión -->
      <section class="ms-section" aria-labelledby="saas-pricing">
        <div class="ms-container">
          <h2 id="saas-pricing">Inversión en plataformas SaaS</h2>
          <p class="ms-section-subtitle">Los proyectos SaaS parten desde <strong>S/ 25,000</strong> con un MVP entregable en <strong>10 a 16 semanas</strong>.</p>
          <ul class="ms-pricing-list">
            <li><strong>MVP validable con funcionalidades core</strong> — desde S/ 25,000 · 10–12 semanas</li>
            <li><strong>SaaS con multi-tenant + suscripciones + API</strong> — desde S/ 45,000 · 14–18 semanas</li>
            <li><strong>Plataforma completa lista para mercado masivo</strong> — desde S/ 80,000 · 20–28 semanas</li>
          </ul>
          <a href="/#contacto" class="ms-btn ms-btn-glow ms-btn-lg mt-lg">Analizar mi idea de SaaS</a>
        </div>
      </section>

      <!-- Stack -->
      <section class="ms-section ms-section--alt" aria-labelledby="saas-stack">
        <div class="ms-container">
          <h2 id="saas-stack">Stack tecnológico para plataformas SaaS</h2>
          <ul class="ms-tech-list">
            <li><strong>Frontend:</strong> Vue.js 3, TypeScript, Vite</li>
            <li><strong>Backend:</strong> ASP.NET Core, Spring Boot, microservicios</li>
            <li><strong>Bases de datos:</strong> PostgreSQL (schema-per-tenant o row-level)</li>
            <li><strong>Pagos:</strong> Stripe, Culqi, PayPal, pasarelas peruanas</li>
            <li><strong>Cloud:</strong> GCP (Cloud Run, Cloud SQL, Pub/Sub)</li>
            <li><strong>Monitoreo:</strong> GCP Monitoring, Sentry, Uptime checks</li>
          </ul>
        </div>
      </section>

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

.ms-check-list,
.ms-tech-list {
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
