<template>
  <header class="header">
    <div class="container">
      <div class="logo">Wolkendeck</div>
      <nav class="nav">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#who-we-are">Who We Are</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
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
.nav a {
  color: #333;
  margin-left: 15px;
  text-decoration: none;
  font-weight: 500;
}
.nav a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .nav a {
    margin-left: 10px;
  }
}
</style> 