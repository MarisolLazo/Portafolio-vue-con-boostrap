<template>
  <section class="py-5 contact-section">
    <div class="container text-center">

      <!-- TÍTULO -->
      <h1 class="main-title mt-4">Contacto</h1>


      <!-- FOTO PREMIUM EN MARCO DE LUJO -->
      <div class="circle-frame mx-auto mb-4">
        <img
          src="../assets/Foto-progra.jpg"
          alt="Foto"
          class="img-fluid profile-img"
        />
      </div>

      <h5 class="subtitle mb-4">Sígueme en mis redes</h5>

      <!-- ICONOS REDES -->
      <div class="d-flex justify-content-center gap-4 mt-4 flex-wrap">

        <a href="https://www.facebook.com/share/1PFLSthiYC/"
           target="_blank"
           class="icon-wrapper fb">
          <i class="bi bi-facebook"></i>
        </a>

        <a href="https://www.instagram.com/marisol_lazo19"
           target="_blank"
           class="icon-wrapper ig">
          <i class="bi bi-instagram"></i>
        </a>

        <a href="https://www.linkedin.com/in/marisol-lazo-1abb93286"
           target="_blank"
           class="icon-wrapper ln">
          <i class="bi bi-linkedin"></i>
        </a>

        <a href="mailto:marisollazo253@gmail.com"
           class="icon-wrapper mail">
          <i class="bi bi-envelope-fill"></i>
        </a>

        <a href="https://youtube.com/@marisollazo114"
           target="_blank"
           class="icon-wrapper yt">
          <i class="bi bi-youtube"></i>
        </a>

      </div>
    </div>
  </section>
</template>

<style scoped>

/* ============================================
   FONDO PREMIUM — IGUAL AL HOME
   ============================================ */
.contact-section {
  background: linear-gradient(135deg, #0E2773, #052159, #590212);
  min-height: 100vh;
  padding-top: 80px;
  padding-bottom: 120px;
}

/* ============================================
   TÍTULO
   ============================================ */
.main-title {
  font-size: 3rem;
  font-weight: 700;
  color: #bf9180;
  text-shadow: 
    0 0 5px rgba(191, 145, 128, 0.6),
    0 0 12px rgba(191, 145, 128, 0.4),
    0 0 22px rgba(191, 145, 128, 0.3);
  animation: softGlow 4s ease-in-out infinite alternate;
}

@keyframes softGlow {
  0% {
    text-shadow:
      0 0 8px rgba(191, 145, 128, 0.6),
      0 0 16px rgba(191, 145, 128, 0.3);
  }
  100% {
    text-shadow:
      0 0 14px rgba(191, 145, 128, 1),
      0 0 24px rgba(191, 145, 128, 0.6);
  }
}

.subtitle {
  color: #BF9180;
  font-size: 1.1rem;
  margin-top: 5px;
}

/* ============================================
   FOTO PREMIUM — MÁS GRANDE
   ============================================ */
/* ============================================
   FOTO PREMIUM — ANIMADA COMO EN EL BLOG
   ============================================ */
.circle-frame {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  overflow: hidden;

  /* Bordes con más glamour */
  border: 6px solid rgba(191, 145, 128, 0.7);

  background: radial-gradient(circle, #0E2773, #052159, #590212);
  
  box-shadow:
    0 0 18px rgba(191, 145, 128, 0.5),
    0 0 35px rgba(140, 32, 72, 0.45);

  display: flex;
  justify-content: center;
  align-items: center;

  animation: pulseGlow 4s ease-in-out infinite alternate;
}

/* Animación suave del resplandor */
@keyframes pulseGlow {
  0% {
    box-shadow:
      0 0 10px rgba(191, 145, 128, 0.5),
      0 0 18px rgba(140, 32, 72, 0.35);
    transform: scale(1);
  }
  100% {
    box-shadow:
      0 0 25px rgba(191, 145, 128, 0.9),
      0 0 45px rgba(140, 32, 72, 0.6);
    transform: scale(1.05);
  }
}

.profile-img {
  width: 110%;
  height: 110%;
  object-fit: cover;
  transform: scale(1.06);
  filter: brightness(1.08);
}


/* ============================================
   ICONOS — ESTILO PROFESIONAL
   ============================================ */
.icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 22px;

  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.2rem;
  color: white;

  transition: 0.35s ease;
  text-decoration: none;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.35);

  position: relative;
}

/* ANILLO ANIMADO DE PROGRESO (80%) */
.icon-wrapper::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 22px;
  border: 5px solid transparent;

  /* Anillo premium rosa-dorado */
  border-top-color: #BF9180;
  border-right-color: #BF9180;

  transform: rotate(45deg);
}

/* COLORES HOVER */
.fb:hover  { background: #0E2773; transform: scale(1.18); }
.ig:hover  { background: #8C2048; transform: scale(1.18); }
.ln:hover  { background: #052159; transform: scale(1.18); }
.mail:hover{ background: #BF9180; transform: scale(1.18); }
.yt:hover  { background: #590212; transform: scale(1.18); }

.icon-wrapper:hover {
  box-shadow: 0 18px 45px rgba(191, 145, 128, 0.55);
  rotate: 4deg;
}

</style>
