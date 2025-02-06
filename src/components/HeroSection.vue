<template>
  <section class="hero-section">
    <GraphAnimation />
    <div class="overlay">
      <h1>Wolkendeck</h1>
      <p>Your trusted partner for innovative infrastructure solutions</p>
    </div>
  </section>
</template>

<script>
import GraphAnimation from './GraphAnimation.vue'

export default {
  name: 'HeroSection',
  components: {
    GraphAnimation
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 60vh;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Center content both vertically and horizontally */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

h1 {
  font-size: 4em;
  margin: 0;
  color: #4A90E2; /* Blue color matching the button */
  /* Text shadow removed */
}

p {
  font-size: 1.5em;
  margin-top: 10px;
  color: #4A90E2; /* Same blue color for the description */
  /* Text shadow removed */
}

@media (max-width: 768px) {
  h1 {
    font-size: 3em;
  }
  p {
    font-size: 1.2em;
  }
}
</style> 