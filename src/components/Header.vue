<template>
  <header class="header">
    <div class="container">
      <div class="logo">Wolkendeck</div>
      <nav class="nav">
        <a href="#home">{{ $t("nav.home") }}</a>
        <a href="#services">{{ $t("nav.services") }}</a>
        <a href="#who-we-are">{{ $t("nav.whoWeAre") }}</a>
        <a href="#contact">{{ $t("nav.contact") }}</a>
        <div class="language-switcher">
          <button @click="changeLanguage('en')">EN</button>
          <button @click="changeLanguage('es')">ES</button>
          <button @click="changeLanguage('de')">DE</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
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
.language-switcher {
  display: flex;
  margin-left: 20px;
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
@media (max-width: 768px) {
  .nav a {
    margin: 0 5px;
  }
  .language-switcher button {
    margin-left: 5px;
    padding: 4px 6px;
  }
}
</style> 