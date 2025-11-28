<template>
  <footer class="custom-footer text-center py-4 mt-5">

    <!-- Línea dorada decorativa -->
    <div class="gold-line mx-auto mb-3"></div>

    <!-- Texto principal -->
    <p class="footer-text mb-1">
      © 2025 Marisol Lazo — Desarrolladora Web
    </p>
  </footer>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&family=Sacramento&display=swap");

/*  Fondo  */
.custom-footer {
  background: linear-gradient(135deg,
      #052159,
      #0E2773,
      #590212,
      #8C2048,
      #BF9180);
  background-size: 400% 400%;
  animation: footerGradient 12s ease infinite;
  color: #fff;
  position: relative;
}

/* Animación del degradado */
@keyframes footerGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/*  Texto */
.footer-text {
  font-family: "Poppins", sans-serif;
  font-size: 0.95rem;
  opacity: 0.9;
}

/* Hover*/
.signature:hover {
  transform: scale(1.08);
  text-shadow: 0 0 16px gold;
}
</style>
