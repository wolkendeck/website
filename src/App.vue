<template>
  <div id="app">
    <GraphAnimation />
    <Header />
    <HeroSection />
    <section class="services-section">
      <div class="container">
        <h2>Our Services</h2>
        <div class="cards-grid">
          <div class="card" v-for="(service, index) in services" :key="index">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- New "Who We Are" Section -->
    <section class="who-we-are">
      <div class="container">
        <h2>Who We Are</h2>
        <div class="who-cards">
          <div class="card">
            <h3>Founder: John Doe</h3>
            <p>John brings a wealth of expertise in cloud infrastructure and development.</p>
          </div>
          <div class="card">
            <h3>Founder: Jane Smith</h3>
            <p>Jane leads our innovation and strategy initiatives, ensuring top-notch solutions.</p>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script>
import GraphAnimation from './components/GraphAnimation.vue'
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    GraphAnimation,
    Header,
    HeroSection,
    Footer
  },
  data() {
    return {
      services: [
        {
          title: 'AWS Landing Zones',
          description: 'Deploy robust multi-account AWS foundations for your organization.'
        },
        {
          title: 'Processes and Infrastructure Improvements',
          description: 'Optimize operations and modernize your infrastructure for efficiency.'
        },
        {
          title: 'Cloud Infrastructure Design and Migration',
          description: 'Plan, design, and execute a seamless migration to cloud infrastructure.'
        },
        {
          title: 'DevOps and Automation',
          description: 'Streamline your processes with automation and effective DevOps practices.'
        },
        {
          title: 'Network Architecture and Security',
          description: 'Design secure and scalable network architectures to protect your data.'
        },
        {
          title: 'Disaster Recovery and Business Continuity Planning',
          description: 'Ensure operational continuity with robust disaster recovery strategies.'
        },
        {
          title: 'Monitoring and Performance Optimization',
          description: 'Enhance system performance with proactive monitoring and tuning.'
        },
        {
          title: 'Compliance and Governance',
          description: 'Stay compliant with industry standards and implement effective governance.'
        },
        {
          title: 'Cost Optimization and Management',
          description: 'Reduce operational costs with smart resource management and optimization.'
        },
        {
          title: 'Legacy System Modernization',
          description: 'Upgrade outdated systems to modern, efficient, and secure solutions.'
        },
        {
          title: 'Containerization and Orchestration',
          description: 'Accelerate deployments using container-based architectures and orchestration tools.'
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

/* Services Section styling */
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

/* Flexbox layout for service cards */
.cards-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* centers items in the last row if not full */
  gap: 20px;
  margin-bottom: 20px;
}

.card {
  width: 300px; /* approximate width so that three cards fit in a row on larger screens */
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.card h3 {
  margin: 0 0 10px;
  font-size: 1.2em;
  color: #4A90E2; /* blue title matching the button */
}

@media (max-width: 768px) {
  .services-section {
    padding: 20px 10px;
  }
  .services-section h2 {
    font-size: 2em;
  }
  .card {
    width: 100%; /* on smaller screens, cards can take full width */
  }
}

/* Who We Are Section styling */
.who-we-are {
  background: #f7f7f7;
  padding: 40px 20px;
  text-align: left;
}

.who-we-are .container {
  max-width: 960px;
  margin: 0 auto;
}

.who-we-are h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 3em;
  color: #4A90E2;
}

.who-cards {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.who-we-are .card {
  flex: 1;
  min-width: 250px;
  /* Reusing card styling for consistency */
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.who-we-are .card h3 {
  margin: 0;
  font-size: 1.2em;
  color: #4A90E2;
}

@media (max-width: 768px) {
  .who-cards {
    flex-direction: column;
  }
}
</style> 