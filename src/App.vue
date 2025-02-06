<template>
  <div id="app">
    <GraphAnimation />
    <Header />
    <HeroSection />
    <section class="services-section">
      <div class="container">
         <h2>Nuestros Servicios</h2>
         <div class="cards-grid">
           <div class="card" v-for="(service, index) in services" :key="index">
             <h3>{{ service.title }}</h3>
             <p>{{ service.description }}</p>
           </div>
         </div>
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
  },
  data() {
    return {
      services: [
        {
          title: 'AWS Landing Zones',
          description: 'Implementa bases sólidas de AWS multi-cuenta para tu organización.'
        },
        {
          title: 'Mejoras en Procesos e Infraestructura',
          description: 'Optimiza tus operaciones y moderniza tu infraestructura para lograr mayor eficiencia.'
        },
        {
          title: 'Diseño y Migración de Infraestructura en la Nube',
          description: 'Planifica, diseña y ejecuta una migración sin contratiempos hacia la nube.'
        },
        {
          title: 'DevOps y Automatización',
          description: 'Optimiza tus procesos con prácticas efectivas de DevOps y automatización.'
        },
        {
          title: 'Arquitectura de Redes y Seguridad',
          description: 'Diseña arquitecturas de red seguras y escalables para proteger tus datos.'
        },
        {
          title: 'Recuperación ante Desastres y Continuidad del Negocio',
          description: 'Asegura la continuidad operativa con estrategias robustas de recuperación ante desastres.'
        },
        {
          title: 'Monitoreo y Optimización del Rendimiento',
          description: 'Mejora el rendimiento del sistema mediante el monitoreo proactivo y ajustes especializados.'
        },
        {
          title: 'Cumplimiento y Gobernanza',
          description: 'Garantiza el cumplimiento de normativas y establece marcos efectivos de gobernanza.'
        },
        {
          title: 'Optimización y Gestión de Costos',
          description: 'Reduce costos operativos gestionando eficientemente los recursos en la nube.'
        },
        {
          title: 'Modernización de Sistemas Legados',
          description: 'Actualiza sistemas obsoletos a soluciones modernas, eficientes y seguras.'
        },
        {
          title: 'Contenerización y Orquestación',
          description: 'Acelera los despliegues adoptando contenedores y herramientas de orquestación.'
        }
      ]
    };
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

/* Estilos para la sección de servicios */
.services-section {
  background: rgba(255, 255, 255, 0.9);
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
  font-size: 3em;
  color: #4A90E2;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.card h3 {
  margin: 0 0 10px;
  font-size: 1.2em;
  color: #4A90E2; /* Color del título, igual que el botón */
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