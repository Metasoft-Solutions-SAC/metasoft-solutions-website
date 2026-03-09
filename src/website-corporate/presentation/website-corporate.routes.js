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
      title: 'Metasoft Solutions SAC — Desarrollo de Software a Medida en Perú',
      description: 'Empresa de desarrollo de software en Lima, Perú. Aplicaciones web, apps móviles y SaaS a medida. MVP en 2 semanas.',
      keywords: 'desarrollo de software, empresa de software Perú, desarrollo a medida, SaaS Lima'
    }
  }
]
