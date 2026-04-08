<script setup>
import { useHead } from '@unhead/vue'
import TheNavbar from '../components/TheNavbar.vue'
import TheFooter from '../components/TheFooter.vue'
import ContactSection from '../components/ContactSection.vue'
import { useWebsiteCorporateStore } from '../../application/website-corporate.store.js'

useWebsiteCorporateStore()

useHead({
  title: 'Desarrollo de Aplicaciones Móviles Android e iOS en Perú — Metasoft Solutions',
  meta: [
    {
      name: 'description',
      content:
        'Desarrollamos aplicaciones móviles para Android e iOS con Flutter en Lima, Perú. Un solo código, dos plataformas. MVP en semanas, modo offline, integraciones API. Consulta gratuita.'
    },
    { property: 'og:title', content: 'Desarrollo de Aplicaciones Móviles Android e iOS en Perú — Metasoft Solutions' },
    {
      property: 'og:description',
      content: 'Apps móviles nativas para Android e iOS con Flutter. Lima, Perú. Un código, dos plataformas, sin doblar presupuesto.'
    },
    { property: 'og:url', content: 'https://www.metasoft.pe/desarrollo-aplicaciones-moviles' },
    { property: 'og:image', content: 'https://www.metasoft.pe/og-image.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [{ rel: 'canonical', href: 'https://www.metasoft.pe/desarrollo-aplicaciones-moviles' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Desarrollo de Aplicaciones Móviles',
        description:
          'Aplicaciones móviles nativas para Android e iOS con Flutter. Un solo código base, dos plataformas, modo offline y sincronización con APIs.',
        url: 'https://www.metasoft.pe/desarrollo-aplicaciones-moviles',
        provider: { '@type': 'Organization', '@id': 'https://www.metasoft.pe/#organization' },
        areaServed: { '@type': 'Country', name: 'Perú' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'PEN',
          priceSpecification: { '@type': 'UnitPriceSpecification', minPrice: '18000', priceCurrency: 'PEN' }
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

      <section class="ms-service-hero ms-section" aria-labelledby="mob-title">
        <div class="ms-container">

          <nav class="ms-breadcrumb" aria-label="Migas de pan">
            <a href="/">Inicio</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Aplicaciones Móviles</span>
          </nav>

          <span class="ms-badge mb-md">Apps Android e iOS</span>
          <h1 id="mob-title">
            Desarrollo de Aplicaciones Móviles<br />
            <span class="text-gradient">Android e iOS en Lima, Perú</span>
          </h1>
          <p class="ms-service-lead">
            Llevamos tu negocio al bolsillo de tus clientes o equipo. Desarrollamos apps con <strong>Flutter</strong> —
            un solo código fuente, dos plataformas, sin doblar el presupuesto. <strong>MVP en 8 a 12 semanas.</strong>
          </p>
          <div class="ms-service-ctas">
            <a href="/#contacto" class="ms-btn ms-btn-glow ms-btn-lg">Solicitar Presupuesto Gratuito</a>
            <a href="/" class="ms-btn ms-btn-outline ms-btn-lg">Ver todos los servicios</a>
          </div>

        </div>
      </section>

      <!-- Tipos de apps -->
      <section class="ms-section" aria-labelledby="mob-types">
        <div class="ms-container">
          <h2 id="mob-types">¿Qué tipo de apps móviles desarrollamos?</h2>
          <div class="ms-features-grid">

            <article class="ms-feature-card">
              <h3>Apps de delivery y servicios a domicilio</h3>
              <p>Geolocalización en tiempo real, gestión de pedidos, pagos in-app y calificaciones. Todo integrado y listo para lanzar con tu marca.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Apps para equipo de campo y operaciones</h3>
              <p>Herramientas internas para vendedores, técnicos o repartidores: formularios offline, captura de evidencias fotográficas y sincronización automática.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Apps de fidelización y membresías</h3>
              <p>Sistema de puntos, notificaciones push personalizadas, tarjetas digitales y cupones. Perfecto para aumentar la recurrencia de tus clientes.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Apps de e-commerce y catálogos</h3>
              <p>Catálogo de productos, carrito de compras, pasarela de pago integrada (Culqi, Yape, Plin) y seguimiento de pedidos desde el celular.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Apps educativas y de capacitación</h3>
              <p>Contenido multimedia estructurado por módulos, quizzes interactivos, progreso del usuario y certificados digitales descargables.</p>
            </article>

            <article class="ms-feature-card">
              <h3>Apps con modo offline</h3>
              <p>Funcionalidad completa sin conexión a internet con sincronización inteligente al reconectarse. Ideal para zonas con conectividad limitada.</p>
            </article>

          </div>
        </div>
      </section>

      <!-- Por qué Flutter -->
      <section class="ms-section ms-section--alt" aria-labelledby="mob-flutter">
        <div class="ms-container">
          <h2 id="mob-flutter">¿Por qué elegimos Flutter para el desarrollo multiplataforma?</h2>
          <p class="ms-section-subtitle">Flutter de Google es la tecnología más eficiente para crear apps de alta calidad para Android e iOS sin duplicar el presupuesto.</p>
          <ul class="ms-check-list">
            <li><strong>Un solo código base</strong> para Android e iOS — reduce el costo a casi la mitad</li>
            <li><strong>Rendimiento nativo</strong> comparable a apps escritas en Kotlin o Swift</li>
            <li><strong>UI personalizable al 100%</strong> — diseños únicos sin limitaciones de componentes nativos</li>
            <li><strong>Hot reload</strong> para iterar y ajustar la interfaz en segundos durante el desarrollo</li>
            <li><strong>Ecosistema maduro</strong> con soporte oficial de Google y millones de apps en producción</li>
          </ul>
        </div>
      </section>

      <!-- Inversión -->
      <section class="ms-section" aria-labelledby="mob-pricing">
        <div class="ms-container">
          <h2 id="mob-pricing">Inversión en desarrollo de apps móviles</h2>
          <p class="ms-section-subtitle">Los proyectos móviles parten desde <strong>S/ 18,000</strong> con entrega en <strong>8 a 12 semanas</strong>.</p>
          <ul class="ms-pricing-list">
            <li><strong>App simple (catálogo, info, contacto)</strong> — desde S/ 18,000 · 8 semanas</li>
            <li><strong>App con autenticación, CRUD y API propia</strong> — desde S/ 28,000 · 10–12 semanas</li>
            <li><strong>App compleja con pagos, geolocalización u offline</strong> — desde S/ 45,000 · 14–18 semanas</li>
          </ul>
          <a href="/#contacto" class="ms-btn ms-btn-glow ms-btn-lg mt-lg">Analizar mi proyecto</a>
        </div>
      </section>

      <!-- Stack -->
      <section class="ms-section ms-section--alt" aria-labelledby="mob-stack">
        <div class="ms-container">
          <h2 id="mob-stack">Stack tecnológico para apps móviles</h2>
          <ul class="ms-tech-list">
            <li><strong>Framework:</strong> Flutter 3 (Dart)</li>
            <li><strong>Gestión de estado:</strong> Riverpod, Bloc</li>
            <li><strong>Backend:</strong> ASP.NET Core, Spring Boot o Firebase</li>
            <li><strong>Almacenamiento local:</strong> SQLite (drift), Hive</li>
            <li><strong>Distribución:</strong> Google Play Store, Apple App Store</li>
            <li><strong>Analítica:</strong> Firebase Analytics, Crashlytics</li>
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
