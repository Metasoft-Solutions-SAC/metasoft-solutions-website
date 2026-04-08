import { defineStore } from 'pinia'
import { ref } from 'vue'
import { WebsiteCorporateApi } from '../infrastructure/website-corporate.api.js'
import { WebsiteSectionAssembler } from '../infrastructure/website-section.assembler.js'

// ── Resolve asset URLs at build time without eagerly loading into main chunk ──
// new URL(..., import.meta.url) lets Vite hash and emit assets while keeping
// the store module lightweight — images are only downloaded when rendered.

// Tracker Mobility ERP
const trackerLogin          = new URL('../../assets/img/tracker-mobility/1.login-tracker.webp', import.meta.url).href
const trackerOrdenes        = new URL('../../assets/img/tracker-mobility/2.ordenes-tracker.webp', import.meta.url).href
const trackerDetalleOrden   = new URL('../../assets/img/tracker-mobility/2.1.detalle-orden-tracker.webp', import.meta.url).href
const trackerReportes       = new URL('../../assets/img/tracker-mobility/3.reportes-tracker.webp', import.meta.url).href
const trackerDetalleReporte = new URL('../../assets/img/tracker-mobility/3.1.detalle-reporte-tracker.webp', import.meta.url).href
const trackerVerificadores  = new URL('../../assets/img/tracker-mobility/4.verificadores-tracker.webp', import.meta.url).href
const trackerCliente        = new URL('../../assets/img/tracker-mobility/5.cliente-tracker.webp', import.meta.url).href
const trackerInicioCliente  = new URL('../../assets/img/tracker-mobility/6.inicio-cliente-tracker.webp', import.meta.url).href
const trackerOrdenesCliente = new URL('../../assets/img/tracker-mobility/7.ordenes-cliente-tracker.webp', import.meta.url).href
const trackerDetalleOrdenCliente = new URL('../../assets/img/tracker-mobility/7.1.detalle-orden-cliente-tracker.webp', import.meta.url).href

// Lizzo App
const lizzoLogin          = new URL('../../assets/img/lizzo/1.login-lizzo.webp', import.meta.url).href
const lizzoRegistro       = new URL('../../assets/img/lizzo/2.registro-lizzo.webp', import.meta.url).href
const lizzoHome           = new URL('../../assets/img/lizzo/3.home-lizzo.webp', import.meta.url).href
const lizzoPagos          = new URL('../../assets/img/lizzo/4.pagos-lizzo.webp', import.meta.url).href
const lizzoFinanciamiento = new URL('../../assets/img/lizzo/5.financiamiento-lizzo.webp', import.meta.url).href
const lizzoDocumentos     = new URL('../../assets/img/lizzo/6.documentos-lizzo.webp', import.meta.url).href

// Tracker Mobility App (móvil)
const trackerMobileOrdenes = new URL('../../assets/img/tracker-mobility-mobile/1.ordenes-tracker-mobile.webp', import.meta.url).href

// Logos de clientes
const logoTrackerMobility = new URL('../../assets/img/logo-clientes/logo-tracker-mobility.png', import.meta.url).href
const logoMillennium      = new URL('../../assets/img/logo-clientes/logo-millennium.jpg', import.meta.url).href

/**
 * useWebsiteCorporateStore
 * APPLICATION LAYER — Pinia Composition Store. Single source of truth for all
 * website-corporate content data. Consumes API + Assembler for remote section
 * metadata, and owns static content as initial reactive state.
 * No HTTP direct. No visual logic.
 */
export const useWebsiteCorporateStore = defineStore('website-corporate', () => {
  // ──────────────────────────────────────────────────
  // Infrastructure
  // ──────────────────────────────────────────────────
  const api = new WebsiteCorporateApi()

  // ──────────────────────────────────────────────────
  // Section metadata state (hydrated from API)
  // ──────────────────────────────────────────────────
  /** @type {import('vue').Ref<import('../domain/models/website-section.entity.js').WebsiteSection[]>} */
  const sections = ref([])
  const isLoading = ref(false)
  const hasError = ref(false)
  const errorMessage = ref('')

  // ──────────────────────────────────────────────────
  // Static content state — single source of truth for display data.
  // Presentation components must consume these refs via the store;
  // no component should import content data independently.
  // ──────────────────────────────────────────────────

  const services = ref([
    {
      id: 'corporate-web',
      icon: 'pi pi-desktop',
      title: 'Sitios Web Corporativos',
      description: 'Tu empresa merece una presencia digital que convierta visitas en clientes. Diseñamos sitios rápidos, bien posicionados y optimizados para generar contactos.',
      tags: ['Reflejar tu marca con diseño moderno', 'Generar leads con formularios efectivos', 'Mostrar portafolio y casos de éxito'],
      highlight: false
    },
    {
      id: 'web-apps',
      icon: 'pi pi-server',
      title: 'Aplicaciones Web a Medida',
      description: 'Sistemas web internos diseñados para tu operación: automatiza flujos de trabajo, integra tus herramientas CRM y ERP, y centraliza la información de tu equipo en una sola plataforma escalable.',
      tags: ['Sistemas de gestión internos personalizados', 'Integración con CRM, ERP y herramientas externas', 'Dashboards y reportes en tiempo real'],
      highlight: true
    },
    {
      id: 'mobile-apps',
      icon: 'pi pi-mobile',
      title: 'Aplicaciones Móviles',
      description: 'Lleva tu negocio al bolsillo de tus clientes o equipo. Desarrollamos apps Android e iOS con Flutter — un solo código, dos plataformas, sin doblar el presupuesto.',
      tags: ['Conectar con clientes en sus dispositivos', 'App de delivery o servicios a domicilio', 'Herramienta interna para equipo en campo'],
      highlight: false
    },
    {
      id: 'consulting',
      icon: 'pi pi-code',
      title: 'Consultoría y Migración',
      description: 'Tu sistema actual es lento, difícil de mantener o ya no escala. Auditamos tu código, te damos un diagnóstico claro y ejecutamos la migración sin interrumpir tu operación.',
      tags: ['Sistema legacy lento o difícil de mantener', 'Evaluar escalabilidad antes de crecer', 'Modernizar stack tecnológico obsoleto'],
      highlight: false
    }
  ])

  const faqs = ref([
    {
      id: 'faq-1',
      question: '¿Cuánto cuesta desarrollar un proyecto de software?',
      answer: 'Depende del alcance y complejidad. Un sitio web corporativo básico parte desde S/ 3,000, mientras que una aplicación web con gestión de usuarios y dashboard puede ir desde S/ 12,000. Para aplicaciones móviles nativas, los proyectos inician desde S/ 18,000. Ofrecemos una consulta inicial gratuita donde evaluamos tu caso específico y te damos un presupuesto detallado sin compromiso.'
    },
    {
      id: 'faq-2',
      question: '¿Cuánto tiempo tarda el desarrollo?',
      answer: 'Un sitio web corporativo toma entre 2-4 semanas. Una aplicación web mediana requiere 6-10 semanas. Aplicaciones móviles nativas arrancan desde 8-12 semanas. Trabajamos con sprints de 2 semanas donde entregas versiones funcionales que puedes probar, lo que permite ajustar prioridades y ver progreso constante.'
    },
    {
      id: 'faq-3',
      question: '¿Trabajan con empresas pequeñas o solo grandes corporativos?',
      answer: 'Trabajamos con todo tipo de empresas. De hecho, muchos de nuestros clientes son PYMEs y startups que buscan digitalizar procesos o validar ideas de negocio. Nos adaptamos a tu presupuesto y priorizamos las funcionalidades que generen mayor impacto en tu operación, permitiendo un crecimiento gradual de la solución.'
    },
    {
      id: 'faq-4',
      question: '¿Ofrecen mantenimiento después del lanzamiento?',
      answer: 'Sí. Todos los proyectos incluyen 30 días de garantía donde corregimos cualquier error sin costo adicional. Después, ofrecemos planes de mantenimiento mensuales desde S/ 500 que incluyen hosting, actualizaciones de seguridad, soporte técnico y pequeñas modificaciones. También hacemos contratos por horas para nuevas funcionalidades.'
    },
    {
      id: 'faq-5',
      question: '¿Qué pasa si el resultado no cumple mis expectativas?',
      answer: 'Trabajamos con metodología ágil justamente para evitar esto. Cada 2 semanas entregas funcionales que validas antes de continuar. Si en algún momento no estás conforme, ajustamos el enfoque. Además, documentamos el alcance en detalle desde el inicio y obtenemos tu aprobación antes de cada etapa. El contrato protege tanto tu inversión como nuestro trabajo.'
    },
    {
      id: 'faq-6',
      question: '¿Necesito tener conocimientos técnicos para trabajar con ustedes?',
      answer: 'Para nada. Nos especializamos en explicar decisiones técnicas en términos empresariales simples. Muchos de nuestros clientes son dueños de negocio sin formación técnica. Te guiamos en todo el proceso, desde definir requerimientos hasta capacitar a tu equipo en el uso de la solución final.'
    },
    {
      id: 'faq-7',
      question: '¿Puedo ver ejemplos de proyectos anteriores?',
      answer: 'Por políticas de confidencialidad con nuestros clientes, no publicamos proyectos sin autorización. Sin embargo, en la consulta inicial podemos mostrarte casos de estudio relevantes a tu industria (con datos anonimizados) y compartir referencias de clientes que aceptaron dar testimonios. También revisamos tu idea específica y te explicamos cómo la abordaríamos.'
    }
  ])

  const techCategories = ref([
    { id: 'all',       label: 'Destacadas',     filterIcon: 'pi pi-th-large', description: 'Principales tecnologías de nuestro stack completo' },
    { id: 'languages', label: 'Lenguajes',      filterIcon: 'pi pi-code',     description: 'Lenguajes de programación que dominamos' },
    { id: 'backend',   label: 'Backend',        filterIcon: 'pi pi-server',   description: 'Frameworks y plataformas de servidor' },
    { id: 'frontend',  label: 'Frontend',       filterIcon: 'pi pi-desktop',  description: 'Frameworks y herramientas para interfaces de usuario' },
    { id: 'mobile',    label: 'Mobile',         filterIcon: 'pi pi-mobile',   description: 'Apps nativas y multiplataforma' },
    { id: 'cloud',     label: 'Cloud & DevOps', filterIcon: 'pi pi-cloud',    description: 'Infraestructura cloud y contenedores' },
    { id: 'databases', label: 'Databases',      filterIcon: 'pi pi-database', description: 'Motores de base de datos' },
    { id: 'tools',     label: 'Herramientas',   filterIcon: 'pi pi-wrench',   description: 'Diseño, gestión y colaboración' }
  ])

  const techStack = ref([
    // ── Lenguajes ─────────────────────────────────────────────────────────────
    { id: 'csharp',          name: 'C#',               featured: true,  logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', category: 'languages', expertise: 92, color: '#A179DC', desc: 'Lenguaje de Microsoft con el que construimos APIs y servicios empresariales de alto rendimiento.' },
    { id: 'java',            name: 'Java',             featured: true,  logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',          category: 'languages', expertise: 90, color: '#ED8B00', desc: 'Lenguaje maduro y confiable para backends que necesitan escalar sin comprometer la estabilidad.' },
    { id: 'javascript',      name: 'JavaScript',       featured: true,  logoUrl: 'https://cdn.simpleicons.org/javascript/F7DF1E',       category: 'languages', expertise: 95, color: '#F7DF1E', desc: 'El lenguaje universal de la web: desde interfaces dinámicas hasta dashboards en tiempo real.' },
    { id: 'typescript',      name: 'TypeScript',       featured: true,  logoUrl: 'https://cdn.simpleicons.org/typescript/3178C6',       category: 'languages', expertise: 95, color: '#3178C6', desc: 'JavaScript con tipado estático: detecta errores antes de producción y reduce bugs en proyectos grandes.' },
    { id: 'python',          name: 'Python',           featured: false, logoUrl: 'https://cdn.simpleicons.org/python/3776AB',           category: 'languages', expertise: 85, color: '#3776AB', desc: 'Ideal para automatizaciones, integraciones y proyectos con componentes de inteligencia artificial.' },
    { id: 'kotlin',          name: 'Kotlin',           featured: false, logoUrl: 'https://cdn.simpleicons.org/kotlin/7F52FF',           category: 'languages', expertise: 87, color: '#7F52FF', desc: 'El lenguaje moderno para Android: código más limpio y compatible con sistemas Java existentes.' },
    // ── Backend ───────────────────────────────────────────────────────────────
    { id: 'aspnet',          name: 'ASP.NET',          featured: true,  logoUrl: 'https://cdn.simpleicons.org/dotnet/512BD4',           category: 'backend',   expertise: 90, color: '#512BD4', desc: 'Plataforma Microsoft para construir APIs rápidas y confiables en proyectos empresariales de alto volumen.' },
    { id: 'springboot',      name: 'Spring Boot',      featured: true,  logoUrl: 'https://cdn.simpleicons.org/springboot/6DB33F',       category: 'backend',   expertise: 88, color: '#6DB33F', desc: 'Framework Java con el que construimos microservicios seguros y escalables listos para cloud.' },
    // ── Frontend ──────────────────────────────────────────────────────────────
    { id: 'angular',         name: 'Angular',          featured: true,  logoUrl: 'https://cdn.simpleicons.org/angular/DD0031',          category: 'frontend',  expertise: 90, color: '#DD0031', desc: 'Framework de Google para aplicaciones web empresariales con estructura sólida y equipos grandes.' },
    { id: 'vuejs',           name: 'Vue.js',           featured: true,  logoUrl: 'https://cdn.simpleicons.org/vuedotjs/4FC08D',         category: 'frontend',  expertise: 92, color: '#4FC08D', desc: 'Nuestro framework estrella para interfaces reactivas que priorizan velocidad de entrega y UX.' },
    { id: 'tailwind',        name: 'Tailwind CSS',     featured: false, logoUrl: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',      category: 'frontend',  expertise: 90, color: '#06B6D4', desc: 'Acelera la creación de interfaces de alta calidad sin sacrificar velocidad ni coherencia visual.' },
    // ── Mobile ───────────────────────────────────────────────────────────────
    { id: 'flutter',         name: 'Flutter',          featured: true,  logoUrl: 'https://cdn.simpleicons.org/flutter/54C5F8',          category: 'mobile',    expertise: 90, color: '#54C5F8', desc: 'SDK de Google para crear apps Android e iOS con un único código, reduciendo el presupuesto a la mitad.' },
    { id: 'jetpackcompose',  name: 'Jetpack Compose',  featured: false, logoUrl: 'https://cdn.simpleicons.org/jetpackcompose/4285F4',   category: 'mobile',    expertise: 85, color: '#4285F4', desc: 'Herramienta moderna de Google para interfaces Android nativas fluidas y bien diseñadas.' },
    // ── Cloud & DevOps ────────────────────────────────────────────────────────
    { id: 'gcp',             name: 'GCP',              featured: true,  logoUrl: 'https://cdn.simpleicons.org/googlecloud/4285F4',      category: 'cloud',     expertise: 85, color: '#4285F4', desc: 'Plataforma de Google Cloud para alojar y escalar aplicaciones con infraestructura global y servicios de IA.' },
    { id: 'docker',          name: 'Docker',           featured: true,  logoUrl: 'https://cdn.simpleicons.org/docker/2496ED',           category: 'cloud',     expertise: 90, color: '#2496ED', desc: 'Garantiza que la aplicación funcione igual en desarrollo, pruebas y producción — cero sorpresas.' },
    { id: 'huaweicloud',     name: 'Huawei Cloud',     featured: false, logoUrl: 'https://cdn.simpleicons.org/huawei/CF0A2C',           category: 'cloud',     expertise: 80, color: '#CF0A2C', desc: 'Alternativa robusta para proyectos en sectores regulados o con presencia en mercados latinoamericanos.' },
    // ── Databases ─────────────────────────────────────────────────────────────
    { id: 'mysql',           name: 'MySQL',            featured: false, logoUrl: 'https://cdn.simpleicons.org/mysql/4479A1',            category: 'databases', expertise: 90, color: '#4479A1', desc: 'Base de datos open source líder para proyectos web que necesitan almacenar y consultar información eficientemente.' },
    { id: 'postgresql',      name: 'PostgreSQL',       featured: true,  logoUrl: 'https://cdn.simpleicons.org/postgresql/4169E1',       category: 'databases', expertise: 90, color: '#4169E1', desc: 'Base de datos avanzada para proyectos complejos con millones de registros y alta disponibilidad.' },
    // ── Herramientas ──────────────────────────────────────────────────────────
    { id: 'jira',            name: 'Jira',             featured: false, logoUrl: 'https://cdn.simpleicons.org/jira/0052CC',             category: 'tools',     expertise: 88, color: '#0052CC', desc: 'Gestión ágil de proyectos en sprints con seguimiento de tareas y visibilidad total del avance.' },
    { id: 'notion',          name: 'Notion',           featured: false, logoUrl: 'https://cdn.simpleicons.org/notion/FFFFFF',           category: 'tools',     expertise: 85, color: '#AAAAAA', desc: 'Espacio colaborativo para documentar proyectos, decisiones técnicas y wikis del equipo.' },
    { id: 'github',          name: 'GitHub',           featured: false, logoUrl: 'https://cdn.simpleicons.org/github/FFFFFF',           category: 'tools',     expertise: 95, color: '#AAAAAA', desc: 'Control de versiones con CI/CD integrado: cada cambio pasa validación automática antes de producción.' },
    { id: 'figma',           name: 'Figma',            featured: false, logoUrl: 'https://cdn.simpleicons.org/figma/F24E1E',            category: 'tools',     expertise: 90, color: '#F24E1E', desc: 'Wireframes y prototipos interactivos que puedes probar antes de que escribamos una línea de código.' },
    { id: 'git',             name: 'Git',              featured: false, logoUrl: 'https://cdn.simpleicons.org/git/F05032',             category: 'tools',     expertise: 82, color: '#F05032', desc: 'Control de versiones que permite trabajo en equipo ordenado y recuperación ante errores sin perder trabajo.' }
  ])

  const processSteps = ref([
    { num: '01', icon: 'pi pi-comments',    title: 'Consulta Inicial',        desc: 'Reunión de análisis para entender tus objetivos, procesos actuales y requerimientos específicos.' },
    { num: '02', icon: 'pi pi-file-edit',   title: 'Propuesta Técnica',        desc: 'Documentamos alcance, arquitectura propuesta, cronograma y presupuesto detallado.' },
    { num: '03', icon: 'pi pi-palette',     title: 'Diseño de Experiencia',    desc: 'Creamos wireframes y prototipos interactivos para validar flujos antes del desarrollo.' },
    { num: '04', icon: 'pi pi-code',        title: 'Desarrollo Iterativo',     desc: 'Sprints de 2 semanas con demos funcionales y oportunidad de ajustar prioridades.' },
    { num: '05', icon: 'pi pi-send',        title: 'Testing y Lanzamiento',    desc: 'Pruebas exhaustivas, capacitación a usuarios y despliegue asistido a producción.' },
    { num: '06', icon: 'pi pi-headphones',  title: 'Soporte Post-Lanzamiento', desc: 'Garantía de 30 días y planes de mantenimiento opcional para evolución continua.' }
  ])

  const differentiators = ref([
    { id: 'speed',    span: 2, icon: 'pi pi-bolt',         title: 'Entregamos en semanas, no en meses',  desc: 'Metodología ágil con demos funcionales cada 2 semanas. Ves avances reales desde el primer sprint, sin esperar meses para ver resultados.' },
    { id: 'language', span: 1, icon: 'pi pi-comments',     title: 'Hablamos negocio, no técnico',         desc: 'Traducimos decisiones técnicas a impacto comercial. Sin jerga innecesaria. Tú tomas decisiones informadas sin necesitar un CTO.' },
    { id: 'price',    span: 1, icon: 'pi pi-check-circle', title: 'Precio sin sorpresas',                desc: 'Alcance documentado, presupuesto fijo y sin costos ocultos. Los cambios se presupuestan por separado con tu aprobación previa.' }
  ])

  const aboutStats = ref([
    { value: '4 sem',   label: 'Entrega Promedio',      sub: 'Sitios web y plataformas' },
    { value: '30 días', label: 'Garantía de calidad',   sub: 'Correcciones sin costo adicional' },
    { value: '<24h',    label: 'Tiempo de respuesta',   sub: 'Soporte garantizado' }
  ])

  const aboutValues = ref([
    { title: 'Enfoque en Resultados', desc: 'Cada línea de código está orientada a generar impacto medible en tu negocio',      icon: 'pi pi-chart-line' },
    { title: 'Comunicación Clara',    desc: 'Hablamos tu idioma, sin tecnicismos innecesarios ni jerga complicada',            icon: 'pi pi-comments' },
    { title: 'Innovación Práctica',   desc: 'Tecnología de punta aplicada a resolver problemas reales de tu operación',        icon: 'pi pi-lightbulb' },
    { title: 'Compromiso Total',      desc: 'Tu proyecto es nuestro proyecto. Nos involucramos hasta ver resultados',          icon: 'pi pi-shield' }
  ])

  const testimonials = ref([
    {
      id: 'tracker-erp',
      name: 'ERP Tracker Mobility',
      client: 'Tracker Mobility SAC',
      logo: logoTrackerMobility,
      type: 'Plataforma Web Empresarial',
      category: 'web',
      url: 'tracker.metasoft.pe',
      year: '2025',
      excerpt: 'Sistema integral para gestionar verificaciones domiciliarias, órdenes de servicio y reportes. Conecta administradores, empresas clientes y verificadores de campo con trazabilidad total del proceso.',
      tags: ['Vue.js', 'Spring Boot', 'PostgreSQL', 'JWT', 'Docker'],
      metrics: [
        { label: 'Roles de usuario', value: '3' },
        { label: 'Trazabilidad', value: '100%' },
        { label: 'Exportación', value: 'Multi-formato' }
      ],
      highlights: [
        'Dashboard analítico con KPIs en tiempo real',
        'Gestión completa de órdenes CRUD',
        'Control de acceso granular por roles (Admin, Cliente, Verificador)',
        'Generación y exportación de reportes detallados'
      ],
      images: [
        { label: 'Login — Acceso al sistema',                   src: trackerLogin },
        { label: 'Órdenes de servicio — Vista general',         src: trackerOrdenes },
        { label: 'Detalle de orden de servicio',                src: trackerDetalleOrden },
        { label: 'Reportes y exportación de datos',             src: trackerReportes },
        { label: 'Detalle de reporte',                          src: trackerDetalleReporte },
        { label: 'Gestión de verificadores',                    src: trackerVerificadores },
        { label: 'Panel de clientes',                           src: trackerCliente },
        { label: 'Inicio — Portal del cliente solicitante',     src: trackerInicioCliente },
        { label: 'Órdenes del cliente solicitante',             src: trackerOrdenesCliente },
        { label: 'Detalle de orden — Vista del cliente',        src: trackerDetalleOrdenCliente }
      ]
    },
    {
      id: 'tracker-mobile',
      name: 'Tracker Mobility App',
      client: 'Tracker Mobility SAC',
      logo: logoTrackerMobility,
      type: 'Aplicación Móvil Flutter',
      category: 'web',
      url: 'download.tracker.metasoft.pe',
      year: '2025',
      excerpt: 'App móvil para verificadores en campo que digitaliza el proceso completo de verificación domiciliaria. Formularios inteligentes multi-paso, captura de evidencias y modo offline robusto.',
      tags: ['Flutter', 'Dart', 'REST API', 'SQLite', 'JWT'],
      metrics: [
        { label: 'Reducción de tiempos', value: '−60%' },
        { label: 'Plataformas', value: 'iOS + Android' },
        { label: 'Modo offline', value: 'Sí' }
      ],
      highlights: [
        'Formularios multi-paso con guardado automático de progreso',
        'Captura y organización de evidencias fotográficas',
        'Sincronización offline inteligente con el ERP',
        'Estadísticas de productividad personal del verificador'
      ],
      images: [
        { label: 'Pantalla de órdenes asignadas', src: trackerMobileOrdenes }
      ]
    },
    {
      id: 'lizzo-ux',
      name: 'Lizzo App',
      client: 'Millennium Mobility SAC',
      logo: logoMillennium,
      type: 'Diseño UX/UI · Mockups',
      category: 'design',
      url: 'lizzo.pe',
      year: '2025',
      excerpt: 'Diseño de interfaces móviles para la app de clientes de leasing vehicular Lizzo. Flujos de autenticación, gestión de pagos, solicitudes de financiamiento y acceso a información del vehículo y beneficios.',
      tags: ['Figma', 'UX Design', 'Mobile UI', 'Prototyping'],
      metrics: [
        { label: 'Pantallas diseñadas', value: '20+' },
        { label: 'Flujos clave', value: '5' },
        { label: 'Plataforma', value: 'iOS + Android' }
      ],
      highlights: [
        'Flujo de autenticación y recuperación de contraseña por SMS/correo',
        'Módulo de pagos: cuotas pendientes, Yape y tarjeta de crédito',
        'Solicitud de financiamiento vehicular con selección de modelos y cuotas',
        'Componentes de gestión de vehículo, beneficios y perfil de usuario'
      ],
      images: [
        { label: 'Login y recuperación de contraseña',           src: lizzoLogin },
        { label: 'Registro y validación de celular/correo',       src: lizzoRegistro },
        { label: 'Home — resumen de vehículo y notificaciones',   src: lizzoHome },
        { label: 'Módulo de pagos con Yape y tarjeta',            src: lizzoPagos },
        { label: 'Solicitud de financiamiento vehicular',          src: lizzoFinanciamiento },
        { label: 'Subida de documentos de identidad y licencia',  src: lizzoDocumentos }
      ]
    }
  ])

  // ──────────────────────────────────────────────────
  // Actions
  // ──────────────────────────────────────────────────

  /**
   * Load all website sections from API
   */
  async function loadSections() {
    if (isLoading.value) return

    isLoading.value = true
    hasError.value = false
    errorMessage.value = ''

    try {
      const response = await api.getSections()
      sections.value = WebsiteSectionAssembler.toEntitiesFromResponse(response)
    } catch (err) {
      hasError.value = true
      errorMessage.value = err?.message ?? 'Error al cargar las secciones'
      sections.value = []
    } finally {
      isLoading.value = false
    }
  }

  return {
    // Section metadata (from API)
    sections,
    isLoading,
    hasError,
    errorMessage,
    // Static content state
    services,
    faqs,
    techCategories,
    techStack,
    processSteps,
    differentiators,
    aboutStats,
    aboutValues,
    testimonials,
    // Actions
    loadSections
  }
})
