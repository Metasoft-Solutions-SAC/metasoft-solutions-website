<script setup>
import TheNavbar       from '../components/TheNavbar.vue'
import HeroSection     from '../components/HeroSection.vue'
import TrustSection    from '../components/TrustSection.vue'
import AboutSection    from '../components/AboutSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import ProcessSection  from '../components/ProcessSection.vue'
import TechStackSection from '../components/TechStackSection.vue'
import FaqSection      from '../components/FaqSection.vue'
import ContactSection  from '../components/ContactSection.vue'
import TheFooter       from '../components/TheFooter.vue'
import WhatsAppButton  from '../components/global/WhatsAppButton.vue'
import { useWebsiteCorporateStore } from '../../application/website-corporate.store.js'
import { onMounted } from 'vue'

const store = useWebsiteCorporateStore()

onMounted(() => {
  store.loadSections()
})
</script>

<template>
  <div class="ms-app" id="ms-home">
    <!-- Navigation -->
    <TheNavbar />

    <!-- Main content -->
    <main class="ms-main-content">
      <!-- Ambient Background Glows -->
      <div class="ms-ambient-glow ms-ambient-glow-1"></div>
      <div class="ms-ambient-glow ms-ambient-glow-2"></div>

      <HeroSection />
      
      <!-- Social Proof Divider -->
      <TrustSection />

      <!-- Narrative flow: Services -> Process -> TechStack -> About -> Testimonials -> FAQ -->
      <div class="ms-story-flow">
        <ServicesSection />
        <ProcessSection />
        <TechStackSection />
        <AboutSection />
        <TestimonialsSection />
        <FaqSection />
      </div>

      <ContactSection />
    </main>

    <!-- Footer -->
    <TheFooter />

    <!-- Floating WhatsApp button -->
    <WhatsAppButton />
  </div>
</template>

<style scoped>
.ms-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--ms-bg-primary);
}

.ms-main-content {
  flex: 1;
}

/* Enhancing vertical rhythm between major narrative blocks */
.ms-story-flow > section {
  padding-top: var(--ms-spacing-5xl);
  padding-bottom: var(--ms-spacing-5xl);
  position: relative;
  z-index: 10;
}

/* Ambient WebGL-style Background Glows */
.ms-ambient-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.15;
}

.ms-ambient-glow-1 {
  top: 10%;
  left: -10%;
  width: 60vw;
  height: 60vw;
  background: var(--ms-brand-primary);
}

.ms-ambient-glow-2 {
  top: 40%;
  right: -20%;
  width: 50vw;
  height: 50vw;
  background: var(--ms-brand-secondary);
}
</style>
