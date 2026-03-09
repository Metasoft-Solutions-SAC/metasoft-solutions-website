<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cardRef = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)

const onMouseMove = (e) => {
  if (!cardRef.value) return
  const { left, top } = cardRef.value.getBoundingClientRect()
  mouseX.value = e.clientX - left
  mouseY.value = e.clientY - top
}

// Optimization check to prevent tracking if completely out of view (optional)
</script>

<template>
  <div 
    ref="cardRef"
    class="ms-spotlight-card"
    @mousemove="onMouseMove"
  >
    <!-- The glowing border effect tracking the mouse -->
    <div 
      class="ms-spotlight-border"
      :style="{
        background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, var(--ms-brand-primary), transparent 40%)`
      }"
    ></div>

    <!-- The actual inner background to hide most of the glow, letting it strictly shine through the border 'gap' -->
    <div class="ms-spotlight-inner">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.ms-spotlight-card {
  position: relative;
  border-radius: var(--ms-border-radius-lg);
  background: var(--ms-bg-card-solid);
  padding: 1px; /* The "border" width */
  overflow: hidden;
  transition: transform var(--ms-transition-base), box-shadow var(--ms-transition-base);
  z-index: 1;
}

.ms-spotlight-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--ms-shadow-lg);
}

.ms-spotlight-border {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 0;
  opacity: 0; /* Default invisible until hover via child CSS or JS logic, but we leave opacity up to JS inline */
  transition: opacity 0.5s ease;
}

.ms-spotlight-card:hover .ms-spotlight-border {
  opacity: 1 !important; /* Force show the js inline style on hover */
}

.ms-spotlight-inner {
  position: relative;
  z-index: 1;
  background: var(--ms-bg-card-solid);
  border-radius: calc(var(--ms-border-radius-lg) - 1px);
  height: 100%;
  padding: var(--ms-spacing-xl);
  display: flex;
  flex-direction: column;
}

/* Subtle inner background glow as well on hover */
.ms-spotlight-card:hover .ms-spotlight-inner {
  background: radial-gradient(
    800px circle at 50% 100%, 
    rgba(20, 31, 54, 0.8), 
    var(--ms-bg-card-solid) 40%
  );
}
</style>
