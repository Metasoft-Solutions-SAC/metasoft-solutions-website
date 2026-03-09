<script setup>
// App root — renders RouterView and global Toast notification layer
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
