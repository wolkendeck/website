<template>
  <div id="app">
    <GraphAnimation />
    <Header />
    <HeroSection />
    <section class="services-section">
      <div class="container">
         <h2>Our Services</h2>
         <ul>
           <li>AWS Landing Zones</li>
           <li>Processes and Infrastructure Improvements</li>
         </ul>
         <RefractionButton type="primary" size="large">
           Learn More
         </RefractionButton>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import GraphAnimation from './components/GraphAnimation.vue'
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import RefractionButton from './components/RefractionButton.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    GraphAnimation,
    Header,
    HeroSection,
    RefractionButton,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

#app {
  position: relative;
  text-align: center;
}

/* Services Section styling */
.services-section {
  background: rgba(255, 255, 255, 0.9); /* Semi-transparent white to let the animation show through */
  padding: 40px 20px;
  text-align: left;
}

.services-section .container {
  max-width: 960px;
  margin: 0 auto;
}

.services-section h2 {
  margin-top: 0;
  margin-bottom: 40px;
  text-align: center;
  font-size: 3em;       /* Bigger font */
  color: #4A90E2;       /* Blue color for the title */
}

.services-section ul {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 20px;
  text-align: left;
}

@media (max-width: 768px) {
  .services-section {
    padding: 20px 10px;
  }
  .services-section h2 {
    font-size: 2em;
  }
}
</style> 