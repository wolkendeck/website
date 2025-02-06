<template>
  <div id="app">
    <GraphAnimation />
    <Header />
    <section id="home">
      <HeroSection />
    </section>
    
    <section id="services" class="services-section">
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
    
    <section id="who-we-are" class="who-we-are">
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
    
    <section id="contact" class="contact-section">
      <div class="container">
        <h2>Contact</h2>
        <div class="contact-buttons">
          <a href="mailto:info@example.com" class="contact-button">
            <!-- Email Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-mail">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Email
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" class="contact-button">
            <!-- LinkedIn Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-linkedin">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            LinkedIn
          </a>
          <a href="https://github.com/your-profile" target="_blank" class="contact-button">
            <!-- GitHub Icon with preserveAspectRatio to prevent cutting -->
            <svg xmlns="http://www.w3.org/2000/svg" role="img" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              preserveAspectRatio="xMidYMid meet"
              class="feather feather-github">
              <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.205 11.385c.6.11.82-.26.82-.577v-2.222c-3.338.727-4.047-1.61-4.047-1.61-.546-1.386-1.334-1.755-1.334-1.755-1.09-.746.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.81 1.304 3.495.997.107-.775.418-1.304.762-1.605-2.664-.3-5.467-1.332-5.467-5.93 0-1.31.47-2.382 1.235-3.222-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404 11.52 11.52 0 0 1 3.003.404c2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.242 2.874.12 3.176.77.84 1.232 1.912 1.912 3.222 0 4.61-2.807 5.625-5.479 5.92.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576A12.004 12.004 0 0 0 24 12c0-6.63-5.373-12-12-12z"></path>
            </svg>
            GitHub
          </a>
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

/* Contact Section styling */
.contact-section {
  background: #fff;
  padding: 40px 20px;
  text-align: center;
}

.contact-section .container {
  max-width: 960px;
  margin: 0 auto;
}

.contact-section h2 {
  font-size: 2.5em;
  color: #4A90E2;
  margin-bottom: 20px;
}

.contact-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.contact-button {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #4A90E2;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s;
}

.contact-button:hover {
  background: #357ABD;
}

.contact-button svg {
  width: 24px;
  height: 24px;
}
</style> 