<script setup>
import { useHead } from '@unhead/vue'
import TheNavbar from '../components/TheNavbar.vue'
import TheFooter from '../components/TheFooter.vue'
import ContactSection from '../components/ContactSection.vue'
import { useWebsiteCorporateStore } from '../../application/website-corporate.store.js'

useWebsiteCorporateStore()

useHead({
  title: 'Desarrollo de Aplicaciones Web a Medida en Lima, Perú — Metasoft Solutions',
  meta: [
    {
      name: 'description',
      content:
        'Desarrollamos aplicaciones web a medida en Lima, Perú: CRM, ERP, sistemas de gestión y plataformas internas. Sprints de 2 semanas, entrega garantizada y soporte post-lanzamiento.'
    },
    { property: 'og:title', content: 'Desarrollo de Aplicaciones Web a Medida en Lima, Perú — Metasoft Solutions' },
    {
      property: 'og:description',
      content: 'Sistemas de gestión, CRM, ERP y plataformas internas a medida para empresas en Lima, Perú. Entrega en sprints de 2 semanas.'
    },
    { property: 'og:url', content: 'https://www.metasoft.pe/desarrollo-aplicaciones-web' },
    { property: 'og:image', content: 'https://www.metasoft.pe/og-image.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [{ rel: 'canonical', href: 'https://www.metasoft.pe/desarrollo-aplicaciones-web' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Desarrollo de Aplicaciones Web a Medida',
        description:
          'Desarrollo de sistemas de gestión, CRMs, ERPs y plataformas internas diseñadas para la operación específica del cliente.',
        url: 'https://www.metasoft.pe/desarrollo-aplicaciones-web',
        provider: { '@type': 'Organization', '@id': 'https://www.metasoft.pe/#organization' },
        areaServed: { '@type': 'Country', name: 'Perú' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'PEN',
          priceSpecification: { '@type': 'UnitPriceSpecification', minPrice: '12000', priceCurrency: 'PEN' }
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

      <section class="ms-service-hero ms-section" aria-labelledby="wa-title">
        <div class="ms-container">

          <nav class="ms-breadcrumb" aria-label="Migas de pan">
            <a href="/">Inicio</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Aplicaciones Web a Medida</span>
          </nav>

          <span class="ms-badge mb-md">Aplicaciones Web a Medida</span>
          <h1 id="wa-title">
            Desarrollo de Aplicaciones Web<br />
            <span class="text-gradient">a Medida en Lima, Perú</span>
          </h1>
          <p class="ms-service-lead">
            Si tus procesos aún viven en hojas de cálculo o correos, construimos el sistema exacto que necesitas:
            gestora de pedidos, CRM, ERP o plataforma interna. <strong>Entrega en sprints de 2 semanas.</strong>
          </p>
          <div class="ms-service-ctas">
            <a href="/#contacto" class="ms-btn ms-btn-glow ms-btn-lg">Solicitar Presupuesto Gratuito</a>
            <a href="/" class="ms-btn ms-btn-outline ms-btn-lg">Ver todos los servicios</a>
          </div>

        </div>
      </section>

      <!-- Qué construimos -->
      <section class="ms-section" aria-labelledby="wa-whatwedo">
        <div class="ms-container">
          <h2 id="wa-whatwedo">¿Qué tipo de aplicaciones desarrollamos?</h2>
          <div class="ms-features-grid">

            <article class="ms-feature-card">
              <h3>Sistemas de Gestión (ERP / CRM)</h3>
              <p>Centraliza clientes, pedidos, inventario y facturación en un solo sistema. Acceso por roles, reportes en tiempo real y exportación de datos.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Dashboards analíticos</h3>
              <p>Paneles de control con métricas de negocio en tiempo real. Visualizaciones claras para tomar decisiones rápidas sin necesitar un analista.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Portales de clientes y proveedores</h3>
              <p>Acceso controlado para que tus clientes o socios consulten su información, hagan pedidos o descarguen documentos sin intermediarios.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Automatización de procesos internos</h3>
              <p>Reemplazamos flujos manuales en papel o Excel con sistemas digitales: aprobaciones, notificaciones automáticas y trazabilidad completa.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Integraciones con sistemas existentes</h3>
              <p>Conectamos tu nueva aplicación con herramientas que ya usas: facturación electrónica, WhatsApp Business API, pasarelas de pago, ERP legacy.</p>
            </article>

            <article class="ms-feature-card">
              <h3>APIs y microservicios</h3>
              <p>Arquitectura backend robusta con ASP.NET o Spring Boot. Escalable, documentada y lista para integrarse con apps móviles u otros sistemas.</p>
            </article>

          </div>
        </div>
      </section>

      <!-- Metodología -->
      <section class="ms-section ms-section--alt" aria-labelledby="wa-methodology">
        <div class="ms-container">
          <h2 id="wa-methodology">Cómo entregamos tu aplicación</h2>
          <p class="ms-section-subtitle">Trabajamos en sprints de 2 semanas con demos funcionales que puedes probar y validar antes de continuar. Sin sorpresas al final.</p>
          <ol class="ms-steps-list">
            <li><strong>Semana 1–2:</strong> Análisis de requerimientos, diseño de arquitectura y wireframes</li>
            <li><strong>Semana 3–4:</strong> Sprint 1 — módulo base funcional y autenticación</li>
            <li><strong>Semana 5–6:</strong> Sprint 2 — módulos principales y lógica de negocio</li>
            <li><strong>Semana 7–8:</strong> Sprint 3 — integraciones, reportes y ajustes finales</li>
            <li><strong>Semana 9–10:</strong> Testing, capacitación del equipo y despliegue a producción</li>
          </ol>
        </div>
      </section>

      <!-- Inversión -->
      <section class="ms-section" aria-labelledby="wa-pricing">
        <div class="ms-container">
          <h2 id="wa-pricing">Inversión en aplicaciones web a medida</h2>
          <p class="ms-section-subtitle">Los proyectos parten desde <strong>S/ 12,000</strong> con un tiempo estimado de <strong>6 a 10 semanas</strong>.</p>
          <ul class="ms-pricing-list">
            <li><strong>Sistema básico con CRUD y reportes</strong> — desde S/ 12,000 · 6 semanas</li>
            <li><strong>Sistema con módulos múltiples y control de roles</strong> — desde S/ 22,000 · 8–10 semanas</li>
            <li><strong>Plataforma empresarial con integraciones externas</strong> — desde S/ 35,000 · 12–16 semanas</li>
          </ul>
          <a href="/#contacto" class="ms-btn ms-btn-glow ms-btn-lg mt-lg">Hablar con un experto</a>
        </div>
      </section>

      <!-- Stack -->
      <section class="ms-section ms-section--alt" aria-labelledby="wa-stack">
        <div class="ms-container">
          <h2 id="wa-stack">Tecnologías para aplicaciones web empresariales</h2>
          <ul class="ms-tech-list">
            <li><strong>Frontend:</strong> Vue.js 3, Angular, TypeScript</li>
            <li><strong>Backend:</strong> ASP.NET Core, Spring Boot, Node.js</li>
            <li><strong>Bases de datos:</strong> PostgreSQL, MySQL, SQL Server</li>
            <li><strong>Infraestructura:</strong> Docker, GCP Cloud Run, Cloudflare</li>
            <li><strong>Autenticación:</strong> JWT, OAuth 2.0, RBAC</li>
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

.ms-pricing-list,
.ms-steps-list {
  margin: var(--ms-spacing-xl) 0;
  display: flex;
  flex-direction: column;
  gap: var(--ms-spacing-md);
  color: var(--ms-text-secondary);
}

.ms-pricing-list {
  list-style: none;
  padding: 0;
}

.ms-pricing-list li {
  padding: var(--ms-spacing-md) var(--ms-spacing-lg);
  border: 1px solid var(--ms-border-color);
  border-radius: var(--ms-radius-md);
  background: var(--ms-bg-primary);
}

.ms-steps-list {
  padding-left: var(--ms-spacing-xl);
}

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
