<template>
  <header class="header">
    <div class="container">
      <div class="logo">Wolkendeck</div>
      <!-- Desktop Navigation -->
      <nav class="nav">
        <a href="#home">{{ $t("nav.home") }}</a>
        <a href="#services">{{ $t("nav.services") }}</a>
        <a href="#who-we-are">{{ $t("nav.whoWeAre") }}</a>
        <a href="#contact">{{ $t("nav.contact") }}</a>
        <div class="language-switcher desktop-lang">
          <button @click="changeLanguage('en')">EN</button>
          <button @click="changeLanguage('es')">ES</button>
          <button @click="changeLanguage('de')">DE</button>
        </div>
      </nav>

      <!-- Hamburger button for mobile -->
      <button class="hamburger" @click="toggleSidebar">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Sidebar for mobile navigation -->
    <transition name="slide">
      <div class="sidebar" v-if="isSidebarOpen">
        <button class="close-btn" @click="toggleSidebar">X</button>
        <nav class="sidebar-nav">
          <a @click="toggleSidebar" href="#home">{{ $t("nav.home") }}</a>
          <a @click="toggleSidebar" href="#services">{{ $t("nav.services") }}</a>
          <a @click="toggleSidebar" href="#who-we-are">{{ $t("nav.whoWeAre") }}</a>
          <a @click="toggleSidebar" href="#contact">{{ $t("nav.contact") }}</a>
          <div class="language-switcher mobile-lang">
            <button @click="changeLanguage('en')">EN</button>
            <button @click="changeLanguage('es')">ES</button>
            <button @click="changeLanguage('de')">DE</button>
          </div>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isSidebarOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      // Optionally close the sidebar when a language is chosen on mobile
      this.isSidebarOpen = false;
    }
  }
}
</script>

<style scoped>
.header {
  background: #fff;
  padding: 10px 20px;
  color: #333;
  border-bottom: 1px solid #eee;
}
.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  font-size: 1.8em;
  font-weight: bold;
  color: #333;
}
.nav {
  display: flex;
  align-items: center;
}
.nav a {
  color: #333;
  margin: 0 10px;
  text-decoration: none;
  font-weight: 500;
}
.nav a:hover {
  text-decoration: underline;
}
.language-switcher button {
  margin-left: 10px;
  padding: 5px 8px;
  border: none;
  background: #4A90E2;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
}
.language-switcher button:hover {
  background: #357ABD;
}

/* Hamburger styles */
.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}
.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background: #333;
  margin: 4px 0;
}

/* Sidebar styles */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background: #fff;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1000;
}
.close-btn {
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}
.sidebar-nav a {
  display: block;
  margin: 10px 0;
  text-decoration: none;
  color: #333;
  font-weight: 500;
}
.sidebar-nav a:hover {
  text-decoration: underline;
}
.sidebar .language-switcher {
  margin-top: 20px;
}

/* Slide transition */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .nav {
    display: none; /* Hide full navigation on mobile */
  }
  .hamburger {
    display: block; /* Show hamburger on mobile */
  }
  /* Hide desktop language switcher on mobile */
  .desktop-lang {
    display: none;
  }
}
</style> 