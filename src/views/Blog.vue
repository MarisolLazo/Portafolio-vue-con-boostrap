<template>
  <section class="blog-section py-5">
    <div class="container py-4">
      <!-- FOTO + PRESENTACIÓN -->
      <div class="text-center mb-5">
        <div class="profile-container">
          <div class="profile-frame">
            <img
              src="../assets/Mi foto de perfil.jpg"
              class="profile-img"
              alt="Foto"
            />
          </div>
        </div>

        <!-- TÍTULO CON ANIMACIÓN DE ESCRITURA -->
        <h1 class="main-title mt-4">Bienvenida a Mi Blog Personal ✨</h1>

        <p class="lead subtitle mt-3">
          ¡Hola! Soy <strong>Marisol Lazo</strong>, desarrolladora web
          apasionada por crear experiencias modernas, elegantes y funcionales.
        </p>
      </div>

      <!-- SOBRE MÍ -->
      <section class="mb-5 text-center">
        <h2 class="fw-bold section-title mb-3">Sobre mí 🎤</h2>

        <p class="fs-5 text-light">
          Además de que me gusta desarrollar páginas y entornos web, me encanta
          <strong>cantar</strong> 🎶, participar en eventos y compartir con las
          personas. Creativa, alegre y apasionada en todo lo que hago.
        </p>

        <p class="fs-5 mt-4 contact-line">
          📞 <strong>Teléfono:</strong>
          <a href="tel:+50377773574" class="text-accent fw-bold">
            +503 7777 3574
          </a>
        </p>
      </section>

      <!-- TARJETAS GLASS MORPHISM -->
      <section class="mb-5">
        <h2 class="fw-bold section-title text-center mb-4">
          Lo que me define ✨
        </h2>

        <div class="row g-4">
          <div class="col-md-4">
            <div class="glass-card p-4 text-center">
              <i class="bi bi-music-note-beamed icon"></i>
              <h4 class="mt-3 text-accent">Cantante</h4>
              <p class="text-light">
                La música forma parte de mi vida, me inspira y me conecta con
                otros.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="glass-card p-4 text-center">
              <i class="bi bi-code-slash icon"></i>
              <h4 class="mt-3 text-accent">Desarrolladora Web</h4>
              <p class="text-light">
                Creo interfaces modernas, limpias y atractivas con pasión por el
                detalle.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="glass-card p-4 text-center">
              <i class="bi bi-people-fill icon"></i>
              <h4 class="mt-3 text-accent">Sociable</h4>
              <p class="text-light">
                Me encanta conectar con personas, aprender y compartir
                experiencias.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- GALERÍA PROFESIONAL DE FOTOS -->
      <section class="mb-5">
        <h2 class="fw-bold section-title text-center mb-4">
          Mis Momentos Favoritos 📸
        </h2>

        <div class="gallery-grid">
          <div class="gallery-card">
            <img src="../assets/ULI00325-Mejorado-NR.jpg" />
          </div>

          <div class="gallery-card">
            <img src="../assets/ULI02989-Mejorado-NR.jpg" />
          </div>

          <div class="gallery-card">
            <img src="../assets/ULI02988.jpg" />
          </div>

          <div class="gallery-card">
            <img src="../assets/ULI00306-Mejorado-NR.jpg" />
          </div>

          <div class="gallery-card">
            <img src="../assets/ULI00307.jpg" />
          </div>

          <div class="gallery-card">
            <img src="../assets/Fondo.jpg" />
          </div>
        </div>
      </section>

      <!-- FIRMA DIGITAL -->
      <div class="signature text-center mt-5">
        <p> <span>Marisol Lazo</span></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* ---------------------------------------------------
   FONDO
----------------------------------------------------- */
.blog-section {
  background: linear-gradient(135deg, #0e2773, #052159, #590212);
  min-height: 100vh;
}

/* ---------------------------------------------------
   TIPO DE TITULOS
----------------------------------------------------- */
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


@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.section-title {
  color: #bf9180;
}

.subtitle {
  color: #e8d6cf;
}

.text-accent {
  color: #bf9180 !important;
}

/* ---------------------------------------------------
   FOTO PREMIUM
----------------------------------------------------- */
.profile-frame {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid #bf9180;
  box-shadow: 0 12px 35px rgba(191, 145, 128, 0.4);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* EFECTO DE ILUMINACIÓN PROFESIONAL PARA LA FOTO */
.profile-frame {
  position: relative;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid #bf9180;
  box-shadow: 0 0 25px rgba(191, 145, 128, 0.6),
    0 0 60px rgba(255, 255, 255, 0.25), inset 0 0 20px rgba(191, 145, 128, 0.3);
  animation: glowPulse 4s ease-in-out infinite;
}

/* HALO BRILLANTE DETRÁS DE LA FOTO */
.profile-frame::before {
  content: "";
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(191, 145, 128, 0.45),
    rgba(0, 0, 0, 0)
  );
  z-index: -1;
  filter: blur(25px);
  animation: haloSpin 8s linear infinite;
}

/* ANIMACIÓN DE RESPIRACIÓN */
@keyframes glowPulse {
  0% {
    box-shadow: 0 0 25px rgba(191, 145, 128, 0.7),
      0 0 60px rgba(255, 255, 255, 0.25),
      inset 0 0 20px rgba(191, 145, 128, 0.2);
  }
  50% {
    box-shadow: 0 0 40px rgba(191, 145, 128, 1),
      0 0 80px rgba(255, 255, 255, 0.35),
      inset 0 0 35px rgba(191, 145, 128, 0.4);
  }
  100% {
    box-shadow: 0 0 25px rgba(191, 145, 128, 0.7),
      0 0 60px rgba(255, 255, 255, 0.25),
      inset 0 0 20px rgba(191, 145, 128, 0.2);
  }
}

/* ANIMACIÓN DE GIRAR EL HALO */
@keyframes haloSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* ---------------------------------------------------
   FOTO PREMIUM ULTRA 
-----------------------------------------------------*/
.profile-container {
  position: relative;
  width: 240px;
  margin: auto;
}

/* GLOW EXTERIOR + SOMBRAS DE COLORES (paleta completa) */
.profile-container::before {
  content: "";
  position: absolute;
  inset: -25px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #bf9180,
    #8c2048,
    #0e2773,
    #052159,
    #590212,
    #bf9180
  );
  filter: blur(30px);
  z-index: -2;
  animation: spinHalo 10s linear infinite;
}

/* MARCO GLASS BORRADO CON BORDE PREMIUM */
.profile-frame {
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  overflow: hidden;

  /* Glass + metal + lujo */
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 4px solid rgba(255, 255, 255, 0.25);

  /* Glow multicapa */
  box-shadow: 0 0 40px rgba(191, 145, 128, 0.8), 0 0 90px rgba(140, 32, 72, 0.5),
    0 0 120px rgba(14, 39, 115, 0.45), inset 0 0 25px rgba(191, 145, 128, 0.2);

  animation: breathingGlow 4s ease-in-out infinite;
}

/* HALO DORADO ANIMADO ALREDEDOR */
.profile-frame::before {
  content: "";
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  padding: 3px;
  background: conic-gradient(
    #bf9180,
    #ffffff,
    #8c2048,
    #ffffff,
    #0e2773,
    #ffffff,
    #bf9180
  );
  -webkit-mask: radial-gradient(farthest-side, transparent 60%, black 61%);
  mask: radial-gradient(farthest-side, transparent 60%, black 61%);
  animation: rotateGold 6s linear infinite;
  z-index: -1;
}

/* IMAGEN */
.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ---------------------------------------------------
   HOVERS
-----------------------------------------------------*/
.profile-frame:hover {
  transform: scale(1.06) rotate(1deg);
  transition: 0.4s ease;

  box-shadow: 0 0 70px rgba(191, 145, 128, 1), 0 0 140px rgba(140, 32, 72, 0.6),
    0 0 160px rgba(14, 39, 115, 0.6), inset 0 0 40px rgba(191, 145, 128, 0.4);
}

/* ---------------------------------------------------
   ANIMACIONES
-----------------------------------------------------*/
@keyframes breathingGlow {
  0% {
    box-shadow: 0 0 30px rgba(191, 145, 128, 0.75),
      0 0 70px rgba(140, 32, 72, 0.45), inset 0 0 25px rgba(191, 145, 128, 0.25);
  }
  50% {
    box-shadow: 0 0 55px rgba(191, 145, 128, 1),
      0 0 120px rgba(140, 32, 72, 0.7), inset 0 0 38px rgba(191, 145, 128, 0.45);
  }
  100% {
    box-shadow: 0 0 30px rgba(191, 145, 128, 0.75),
      0 0 70px rgba(140, 32, 72, 0.45), inset 0 0 25px rgba(191, 145, 128, 0.25);
  }
}

@keyframes rotateGold {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spinHalo {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* ---------------------------------------------------
   TARJETAS GLASS
----------------------------------------------------- */
.glass-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: 0.3s;
}

.glass-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(191, 145, 128, 0.3);
}

.icon {
  font-size: 2.8rem;
  color: #bf9180;
}

.skill-box span {
  font-size: 1.1rem;
  color: #e8d6cf;
}

.bar {
  width: 100%;
  height: 14px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  overflow: hidden;
  margin-top: 6px;
}

.bar div {
  height: 100%;
  background: #bf9180;
  width: 0;
  animation: fill-bar 2s forwards;
}

@keyframes fill-bar {
  to {
    width: var(--percent);
  }
}

.gallery-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.gallery-card {
  overflow: hidden;
  border-radius: 16px;
  border: 3px solid #bf9180;
  transition: 0.4s;
}

.gallery-card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: 0.4s ease;
}

.gallery-card:hover img {
  transform: scale(1.1);
  filter: brightness(85%);
}

/* ---------------------------------------------------
   FIRMA DIGITAL
----------------------------------------------------- */
.signature {
  margin-top: 50px;
}

.signature p {
  font-size: 1.4rem;
  color: #bf9180;
  font-family: "Brush Script MT", cursive;
}
</style>
