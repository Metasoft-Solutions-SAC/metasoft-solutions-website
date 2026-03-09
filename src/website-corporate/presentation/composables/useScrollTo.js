/**
 * useScrollTo
 * PRESENTATION LAYER — Composable for smooth anchor scrolling with navbar offset.
 * Shared across all components that need to navigate to page sections.
 */
export function useScrollTo() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (!el) return
    const offset = 80 // Fixed navbar height
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return { scrollTo }
}
