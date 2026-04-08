import { ViteSSG } from 'vite-ssg'
import App from './app.vue'

// PrimeVue Core
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

// Prime Icons
import 'primeicons/primeicons.css'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// PrimeFlex
import 'primeflex/primeflex.css'

// Estilos globales corporativos Metasoft
import './assets/styles/index.css'

// PrimeVue Services
import ToastService from 'primevue/toastservice'

// PrimeVue Components — only components used in this project
import Drawer    from 'primevue/drawer'
import Toast     from 'primevue/toast'
import InputText from 'primevue/inputtext'
import Select    from 'primevue/select'
import Textarea  from 'primevue/textarea'

// Routes — imported directly for SSG route discovery
import websiteCorporateRoutes from './website-corporate/presentation/website-corporate.routes.js'

// Pinia
import { createPinia } from 'pinia'

// ─────────────────────────────────────────────────────────────────
// ViteSSG factory — handles both SSG build and regular Vite dev/SPA
// ─────────────────────────────────────────────────────────────────
export const createApp = ViteSSG(
  App,
  // Router options — ViteSSG creates the router internally
  {
    routes: [
      ...websiteCorporateRoutes,
      { path: '/:pathMatch(.*)*', redirect: '/' }
    ],
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition
      if (to.hash) return { el: to.hash, behavior: 'smooth', top: 80 }
      return { top: 0, behavior: 'smooth' }
    }
  },
  // App setup callback — called on every render (SSG + client hydration)
  ({ app, router, isClient }) => {
    // Suppress known non-critical Vue warnings (client only)
    if (import.meta.env.DEV && isClient) {
      app.config.warnHandler = (msg, instance, trace) => {
        if (msg.includes('onMounted is called when there is no active component')) return
        console.warn(`[Vue warn]: ${msg}`, trace)
      }
    }

    // ─── Plugins ───
    const pinia = createPinia()
    app.use(pinia)

    app
      .use(PrimeVue, {
        theme: {
          preset: Aura,
          options: {
            darkModeSelector: '.force-dark-mode',
            cssLayer: false
          }
        },
        ripple: true
      })
      .use(ToastService)

    // ─── Global Components — used components only (pv- prefix) ───
    app
      .component('pv-drawer',     Drawer)
      .component('pv-toast',      Toast)
      .component('pv-input-text', InputText)
      .component('pv-select',     Select)
      .component('pv-textarea',   Textarea)

    // ─── Update document meta on route change (client only) ───
    router.afterEach((to) => {
      if (!isClient) return
      const meta = to.meta
      if (meta?.title) {
        document.title = meta.title
      }
      if (meta?.description) {
        const desc = document.querySelector('meta[name="description"]')
        if (desc) desc.setAttribute('content', meta.description)
      }
    })

    // ─── Initialize Scroll Animations (client only — uses window/DOM) ───
    if (isClient) {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 40
      })
    }
  }
)