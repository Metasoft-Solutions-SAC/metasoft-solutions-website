<script setup>
import { useHead } from '@unhead/vue'

// Preserve the html lang attribute across all SSG-rendered pages
useHead({ htmlAttrs: { lang: 'es-PE' } })
</script>

<template>
  <RouterView />
  <pv-toast position="bottom-right" />
</template>

<style>
/* Force dark mode for PrimeVue Aura theme */
.force-dark-mode {
  color-scheme: dark;
}
</style>
