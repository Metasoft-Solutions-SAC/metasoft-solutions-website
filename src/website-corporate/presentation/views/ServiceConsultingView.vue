<script setup>
import { useHead } from '@unhead/vue'
import TheNavbar from '../components/TheNavbar.vue'
import TheFooter from '../components/TheFooter.vue'
import ContactSection from '../components/ContactSection.vue'
import { useWebsiteCorporateStore } from '../../application/website-corporate.store.js'

useWebsiteCorporateStore()

useHead({
  title: 'Consultoría y Migración de Software en Lima, Perú — Metasoft Solutions',
  meta: [
    {
      name: 'description',
      content:
        'Auditoría de sistemas legacy, diagnóstico técnico y migración a tecnologías modernas en Lima, Perú. Sin interrumpir tu operación. Stack moderno, arquitectura escalable. Consulta gratuita.'
    },
    { property: 'og:title', content: 'Consultoría y Migración de Software en Lima, Perú — Metasoft Solutions' },
    {
      property: 'og:description',
      content: 'Auditamos tu sistema legacy, te damos un diagnóstico claro y ejecutamos la migración sin interrumpir tu operación. Lima, Perú.'
    },
    { property: 'og:url', content: 'https://www.metasoft.pe/consultoria-migracion-software' },
    { property: 'og:image', content: 'https://www.metasoft.pe/og-image.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [{ rel: 'canonical', href: 'https://www.metasoft.pe/consultoria-migracion-software' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Consultoría y Migración de Software',
        description:
          'Auditoría de código existente, diagnóstico técnico, optimización de arquitectura y migración a tecnologías modernas sin interrumpir la operación.',
        url: 'https://www.metasoft.pe/consultoria-migracion-software',
        provider: { '@type': 'Organization', '@id': 'https://www.metasoft.pe/#organization' },
        areaServed: { '@type': 'Country', name: 'Perú' }
      })
    }
  ]
})
</script>

<template>
  <div class="ms-app">
    <TheNavbar />

    <main class="ms-main-content">

      <section class="ms-service-hero ms-section" aria-labelledby="cons-title">
        <div class="ms-container">

          <nav class="ms-breadcrumb" aria-label="Migas de pan">
            <a href="/">Inicio</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Consultoría y Migración</span>
          </nav>

          <span class="ms-badge mb-md">Consultoría Técnica</span>
          <h1 id="cons-title">
            Consultoría y Migración<br />
            <span class="text-gradient">de Software en Lima, Perú</span>
          </h1>
          <p class="ms-service-lead">
            Tu sistema actual es lento, difícil de mantener o ya no escala. Auditamos tu código, te damos un
            <strong>diagnóstico claro y accionable</strong>, y ejecutamos la migración sin interrumpir tu operación.
          </p>
          <div class="ms-service-ctas">
            <a href="/#contacto" class="ms-btn ms-btn-glow ms-btn-lg">Solicitar Auditoría Gratuita</a>
            <a href="/" class="ms-btn ms-btn-outline ms-btn-lg">Ver todos los servicios</a>
          </div>

        </div>
      </section>

      <!-- Señales de que necesitas consultoría -->
      <section class="ms-section" aria-labelledby="cons-signals">
        <div class="ms-container">
          <h2 id="cons-signals">¿Cuándo necesitas consultoría o migración de software?</h2>
          <p class="ms-section-subtitle">Estas son las señales más comunes de que tu sistema está limitando el crecimiento de tu negocio:</p>
          <ul class="ms-check-list">
            <li>El sistema actual es tan lento que tu equipo pierde tiempo esperando que cargue</li>
            <li>Nadie del equipo original puede mantener el código — o ya no hay quién lo entienda</li>
            <li>Agregar una funcionalidad simple tarda semanas y siempre rompe otra cosa</li>
            <li>La tecnología usada está obsoleta y sin soporte del fabricante</li>
            <li>Los costos de hosting y mantenimiento crecen sin que el rendimiento mejore</li>
            <li>Tu equipo teme hacer cambios porque "algo puede romperse"</li>
          </ul>
        </div>
      </section>

      <!-- Qué ofrecemos -->
      <section class="ms-section ms-section--alt" aria-labelledby="cons-services">
        <div class="ms-container">
          <h2 id="cons-services">¿Qué incluye nuestro servicio de consultoría técnica?</h2>
          <div class="ms-features-grid">

            <article class="ms-feature-card">
              <h3>Auditoría de código y arquitectura</h3>
              <p>Revisamos el código existente, identificamos deuda técnica, cuellos de botella y riesgos de seguridad. Entregamos un informe con prioridades claras.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Diagnóstico de rendimiento y escalabilidad</h3>
              <p>Medimos tiempos de respuesta, uso de recursos, índices de base de datos y eficiencia de queries. Identificamos exactamente qué hace lento tu sistema.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Plan de migración gradual</h3>
              <p>Diseñamos una ruta de modernización por etapas que mantiene el sistema operativo mientras se migra módulo a módulo. Cero downtime.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Migración de stack tecnológico</h3>
              <p>Reescritura o refactorización a tecnologías modernas: de monolito a microservicios, de on-premise a cloud, de legacy a frameworks actuales.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Optimización de base de datos</h3>
              <p>Revisión de esquemas, índices, queries lentas y estrategias de caching. Mejoras de rendimiento sin necesidad de reescribir el sistema completo.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Capacitación del equipo interno</h3>
              <p>Transferencia de conocimiento a tu equipo técnico: nuevas prácticas, herramientas modernas, convenciones de código y procesos de CI/CD.</p>
            </article>

          </div>
        </div>
      </section>

      <!-- Proceso -->
      <section class="ms-section" aria-labelledby="cons-process">
        <div class="ms-container">
          <h2 id="cons-process">Nuestro proceso de consultoría</h2>
          <ol class="ms-steps-list">
            <li><strong>Semana 1:</strong> Reunión de diagnóstico inicial — revisamos estado actual del sistema con tu equipo</li>
            <li><strong>Semana 1–2:</strong> Auditoría técnica profunda — análisis de código, BD, infraestructura y procesos</li>
            <li><strong>Semana 2–3:</strong> Entrega del informe con hallazgos, prioridades y propuesta de migración</li>
            <li><strong>Semana 3+:</strong> Ejecución del plan de migración en fases — con tu aprobación en cada etapa</li>
          </ol>
        </div>
      </section>

      <!-- Inversión -->
      <section class="ms-section ms-section--alt" aria-labelledby="cons-pricing">
        <div class="ms-container">
          <h2 id="cons-pricing">Inversión en consultoría técnica</h2>
          <ul class="ms-pricing-list">
            <li><strong>Auditoría técnica + informe ejecutivo</strong> — desde S/ 3,500 · 1–2 semanas</li>
            <li><strong>Optimización de rendimiento y base de datos</strong> — desde S/ 6,000 · 2–4 semanas</li>
            <li><strong>Migración gradual de sistema legacy</strong> — presupuesto según alcance · desde 4 semanas</li>
          </ul>
          <a href="/#contacto" class="ms-btn ms-btn-glow ms-btn-lg mt-lg">Solicitar diagnóstico gratuito</a>
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
.ms-steps-list,
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
