<template>
  <div class="home-background">
    <div class="container py-5">

      <!-- FOTO ELEGANTE PREMIUM CON LINK A LA SECCIÓN BLOG -->
      <div class="d-flex justify-content-center mt-3">
        <router-link to="/blog" class="gold-frame">
          <img src="../assets/Mi foto de perfil.jpg" alt="Marisol" class="profile-img" />
        </router-link>
      </div>

      <!-- SECCIÓN DE PRESENTACIÓN -->
      <div class="text-center mt-4">
        <h1 class="title-typing">Hola, soy Marisol ✨</h1>
        <p class="lead">Desarrolladora web apasionada por crear experiencias modernas y funcionales.</p>
      </div>

      <!-- CARRUSEL -->
      <div id="carouselExample"
        class="carousel slide mt-5 shadow-lg"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/Turismo El Salvador.png" class="d-block w-100 carrusel-img" />
          </div>
          <div class="carousel-item">
            <img src="../assets/My Spotify.png" class="d-block w-100 carrusel-img" />
          </div>
          <div class="carousel-item">
            <img src="../assets/Comercial Josue.png" class="d-block w-100 carrusel-img" />
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>

      <!-- SERVICIOS -->
      <section class="mt-5">
        <h2 class="text-center mb-4">Mis Servicios</h2>

        <div class="row g-4">
          <div class="col-md-4" v-for="servicio in servicios" :key="servicio.id">
            <div class="card h-100 text-center service-card">
              <div class="card-body">
                <h5 class="card-title">{{ servicio.titulo }}</h5>
                <p class="card-text">{{ servicio.descripcion }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FIRMA DIGITAL -->
      <p class="signature mt-5 text-center"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      servicios: [
        { id: 1, titulo: "Diseño Web", descripcion: "Sitios web modernos, responsivos y elegantes." },
        { id: 2, titulo: "Frontend Development", descripcion: "Interfaces interactivas profesionales." },
        { id: 3, titulo: "Optimización", descripcion: "SEO, accesibilidad y rendimiento avanzado." },
      ],
    };
  },
};
</script>

<style scoped>
/*========================================================
   PALETA
   #590212 - vino oscuro
   #8C2048 - rosa fuerte
   #0E2773 - azul rey
   #052159 - azul profundo
   #BF9180 - arena cálida
========================================================*/

.home-background {
  min-height: 100vh;
  background: linear-gradient(135deg, #052159, #0E2773, #8C2048);
  padding-bottom: 70px;
}

.container {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  padding: 45px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
  animation: fadeIn 1.1s ease-out;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(25px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* FOTO PREMIUM GOLD */
.gold-frame {
  width: 210px;
  height: 210px;
  padding: 8px;
  border-radius: 50%;
  background: radial-gradient(circle, #BF9180, #8C2048);
  box-shadow:
    0 0 25px rgba(191, 145, 128, 0.8),
    0 0 60px rgba(140, 32, 72, 0.5);
  animation: goldGlow 3s infinite alternate ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
}

@keyframes goldGlow {
  0% {
    transform: scale(1);
    box-shadow: 0 0 25px rgba(191,145,128,0.8), 0 0 40px rgba(89, 2, 18, 0.4);
  }
  100% {
    transform: scale(1.05);
    box-shadow: 0 0 45px rgba(191,145,128,1), 0 0 70px rgba(140, 32, 72, 0.7);
  }
}

.profile-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

/* TÍTULO ANIMADO */
.title-typing {
  font-size: 2.6rem;
  font-weight: bold;
  color: #BF9180;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: typing 3s steps(25) forwards, blink 1s infinite;
}

@keyframes typing {
  to { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

.lead {
  color: #F5D7C6;
  font-size: 1.2rem;
}

/* CARRUSEL */
.carrusel-img {
  height: 430px;
  object-fit: contain;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.35);
  padding: 18px;
  box-shadow: 0 0 35px rgba(89, 2, 18, 0.4);
}

.carousel-item:hover .carrusel-img {
  transform: scale(1.02);
  transition: 0.3s ease;
}

/* TARJETAS GLASS */
.service-card {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.15);
  border-radius: 18px;
  border: 1px solid rgba(255, 190, 170, 0.3);
  transition: 0.4s ease;
  box-shadow: 0 0 25px rgba(191, 145, 128, 0.3);
}

.service-card:hover {
  transform: translateY(-12px) scale(1.04);
  box-shadow: 0 0 40px rgba(191, 145, 128, 0.7);
  border-color: #BF9180;
}

.card-title {
  color: #F5D7C6;
}

.card-text {
  color: #fff;
  opacity: 0.85;
}

/* Firma digital */
.signature {
  font-size: 1.4rem;
  color: #BF9180;
  font-family: 'Segoe Script', cursive;
  opacity: 0.9;
}
</style>
