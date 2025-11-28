<template>
  <nav class="navbar navbar-expand-lg navbar-dark custom-navbar">
    <div class="container position-relative">

      <!-- LOGO -->
      <router-link class="navbar-brand brand-logo" to="/">
        <img src="../assets/Logo-dorado.png" alt="Logo Marisol" class="logo-img" />
      </router-link>

      <!-- BOTÓN RESPONSIVE -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto menu-items">

          <!-- HOME solo si no estás en home -->
          <li class="nav-item" v-if="route.path !== '/'">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <li class="nav-item"><router-link class="nav-link" to="/portafolio">Portafolio</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/sobre-mi">Sobre mí</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/contacto">Contacto</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/blog">Blog</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Sacramento&display=swap");

/* ⭐ LOGO PREMIUM SIEMPRE VISIBLE */
.logo-img {
  width: 150px;
  height: auto;
  object-fit: contain;
  border: none;
  filter: drop-shadow(0 0 10px #bf9180aa); /* sombra dorada fina */
  transition: 0.3s;
}

.logo-img:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 0 15px #bf9180ff);
}

/* ⭐ NAVBAR PREMIUM CON TU PALETA */
.custom-navbar {
  background: linear-gradient(
    90deg,
    #590212,
    #8C2048,
    #0E2773,
    #052159
  );
  background-size: 300% 300%;
  animation: gradientFlow 13s ease infinite;
  padding: 12px 0;
  border-bottom: 1px solid #bf918055; /* línea dorada suave */
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* ⭐ ESTILO MENÚ */
.menu-items .nav-link {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.05rem;
  color: #fcefeacc !important;  /* arena cálida clara */
  transition: 0.3s;
}

/* ⭐ EFECTO HOVER DORADO ELEGANTE */
.menu-items .nav-link:hover {
  color: #BF9180 !important;
  text-shadow: 0 0 8px #bf9180, 0 0 18px #8C2048;
  transform: translateY(-2px);
}

/* ⭐ ACTIVO */
.router-link-active {
  color: #BF9180 !important;
  font-weight: 700;
  text-shadow: 0 0 10px #bf9180aa;
}
</style>
