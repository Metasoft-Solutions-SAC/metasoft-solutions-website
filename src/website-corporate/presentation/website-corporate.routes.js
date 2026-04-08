/**
 * website-corporate.routes.js
 * PRESENTATION LAYER — Route definitions with lazy loading
 * export default array — consumed by src/router/index.js
 */

/** @type {import('vue-router').RouteRecordRaw[]} */
export default [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/HomeView.vue'),
    meta: {
      title: 'Metasoft Solutions SAC — Desarrollo de Software a Medida en Lima, Perú',
      description: 'Empresa de desarrollo de software en Lima, Perú. Aplicaciones web, apps móviles y SaaS a medida. MVP en 2 semanas.'
    }
  },
  {
    path: '/desarrollo-sitios-web-corporativos',
    name: 'service-websites',
    component: () => import('./views/ServiceWebsiteView.vue'),
    meta: {
      title: 'Desarrollo de Sitios Web Corporativos en Lima, Perú — Metasoft Solutions',
      description: 'Empresa especializada en desarrollo de sitios web corporativos en Lima, Perú. Moderno, rápido y optimizado para conversión. Entrega en 2–4 semanas.'
    }
  },
  {
    path: '/desarrollo-aplicaciones-web',
    name: 'service-webapps',
    component: () => import('./views/ServiceWebAppView.vue'),
    meta: {
      title: 'Desarrollo de Aplicaciones Web a Medida en Lima, Perú — Metasoft Solutions',
      description: 'Desarrollamos aplicaciones web a medida en Lima, Perú: CRM, ERP, sistemas de gestión y plataformas internas. Sprints de 2 semanas.'
    }
  },
  {
    path: '/desarrollo-aplicaciones-moviles',
    name: 'service-mobile',
    component: () => import('./views/ServiceMobileView.vue'),
    meta: {
      title: 'Desarrollo de Aplicaciones Móviles Android e iOS en Perú — Metasoft Solutions',
      description: 'Apps móviles nativas para Android e iOS con Flutter en Lima, Perú. Un solo código, dos plataformas, sin doblar el presupuesto.'
    }
  },
  {
    path: '/plataformas-saas',
    name: 'service-saas',
    component: () => import('./views/ServiceSaasView.vue'),
    meta: {
      title: 'Desarrollo de Plataformas SaaS Multi-tenant en Perú — Metasoft Solutions',
      description: 'Plataformas SaaS escalables en la nube con arquitectura multi-tenant, pagos recurrentes y panel de administración. Lima, Perú.'
    }
  },
  {
    path: '/consultoria-migracion-software',
    name: 'service-consulting',
    component: () => import('./views/ServiceConsultingView.vue'),
    meta: {
      title: 'Consultoría y Migración de Software en Lima, Perú — Metasoft Solutions',
      description: 'Auditoría de sistemas legacy, diagnóstico técnico y migración a tecnologías modernas. Sin interrumpir tu operación. Lima, Perú.'
    }
  }
]
