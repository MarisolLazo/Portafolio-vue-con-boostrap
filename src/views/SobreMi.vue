<template>
<section class="experience-section py-5">
  <div class="container">

    <!-- TÍTULO -->
    <h2 class="text-center mb-4 fw-bold section-title">
      Mi Experiencia
    </h2>

    <!-- EXPERIENCIA -->
    <div class="row g-4">

      <!-- CARD 1 -->
      <div class="col-md-6">
        <div class="p-4 experience-card">
          <div class="d-flex align-items-center mb-3">
            <div class="icon-box me-3">
              <i class="bi bi-code-slash"></i>
            </div>
            <h5 class="fw-bold accent-text mb-0">2021-2022: Curso Frontend</h5>
          </div>
          <p class="text-light mb-0">
            Aprendizaje de HTML, CSS, JavaScript y Bootstrap.
          </p>
        </div>
      </div>

      <!-- CARD 2 -->
      <div class="col-md-6">
        <div class="p-4 experience-card">
          <div class="d-flex align-items-center mb-3">
            <div class="icon-box me-3">
              <i class="bi bi-laptop"></i>
            </div>
            <h5 class="fw-bold accent-text mb-0">
              2025: Bootcamp Full Stack Junior (En proceso)
            </h5>
          </div>
          <p class="text-light mb-0">
            Actualmente desarrollando habilidades en frontend y backend con tecnologías modernas.
          </p>
        </div>
      </div>

    </div>

    <!-- HABILIDADES -->
    <h3 class="fw-bold text-uppercase mt-5 mb-4 text-light subtitle">
      Habilidades
    </h3>

    <div class="row text-center gy-5 justify-content-center">

      <!-- HTML -->
      <div class="col-6 col-md-3">
        <div class="skill-circle" style="--percent: 90; --color: #8C2048;">
          <div class="inner-circle">
            <i class="bi bi-filetype-html"></i>
            <small>90%</small>
          </div>
        </div>
        <h5 class="text-light mt-2">HTML & CSS</h5>
      </div>

      <!-- JS -->
      <div class="col-6 col-md-3">
        <div class="skill-circle" style="--percent: 80; --color: #BF9180;">
          <div class="inner-circle">
            <i class="bi bi-filetype-js"></i>
            <small>80%</small>
          </div>
        </div>
        <h5 class="text-light mt-2">JavaScript</h5>
      </div>

      <!-- Bootstrap -->
      <div class="col-6 col-md-3">
        <div class="skill-circle" style="--percent: 85; --color: #0E2773;">
          <div class="inner-circle">
            <i class="bi bi-bootstrap-fill"></i>
            <small>85%</small>
          </div>
        </div>
        <h5 class="text-light mt-2">Bootstrap</h5>
      </div>

      <!-- PHP -->
      <div class="col-6 col-md-3">
        <div class="skill-circle" style="--percent: 50; --color: #590212;">
          <div class="inner-circle">
            <i class="bi bi-filetype-php"></i>
            <small>50%</small>
          </div>
        </div>
        <h5 class="text-light mt-2">PHP</h5>
      </div>

      <!-- Laravel -->
      <div class="col-6 col-md-3">
        <div class="skill-circle" style="--percent: 50; --color: #8C2048;">
          <div class="inner-circle">
            <i class="bi bi-laravel"></i>
            <small>50%</small>
          </div>
        </div>
        <h5 class="text-light mt-2">Laravel</h5>
      </div>

      <!-- Vue -->
      <div class="col-6 col-md-3">
        <div class="skill-circle" style="--percent: 80; --color: #052159;">
          <div class="inner-circle">
            <i class="bi bi-vuejs"></i>
            <small>80%</small>
          </div>
        </div>
        <h5 class="text-light mt-2">Vue.js</h5>
      </div>

      <!-- Tailwind -->
      <div class="col-6 col-md-3">
        <div class="skill-circle" style="--percent: 90; --color: #590212;">
          <div class="inner-circle">
            <i class="bi bi-brush-fill"></i>
            <small>90%</small>
          </div>
        </div>
        <h5 class="text-light mt-2">Tailwind CSS</h5>
      </div>

    </div>

  </div>
</section>
</template>

<style scoped>
/* FONDO GENERAL — PALETA OFICIAL */
.experience-section {
  background: linear-gradient(135deg, #0E2773, #052159, #590212);
  min-height: 100vh;
  padding-bottom: 150px;
}

/* TITULOS */
.section-title,
.subtitle {
  color: #BF9180;
}

/* TARJETAS DE EXPERIENCIA */
.experience-card {
  background: rgba(255, 255, 255, 0.05);
  border-left: 6px solid #8C2048;
  border-radius: 12px;
  backdrop-filter: blur(4px);
  transition: 0.4s;
  height: 230px;          /* MISMO TAMAÑO PARA TODAS */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.experience-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 18px rgba(191, 145, 128, 0.6);
  border-left-color: #BF9180;
}

/* ICONO */
.icon-box {
  width: 70px;
  height: 70px;
  border-radius: 12px;
  background: linear-gradient(135deg, #8C2048, #590212);
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-box i {
  font-size: 32px;
  color: white;
}

.accent-text {
  color: #BF9180 !important;
}

/* CÍRCULOS HABILIDADES */
.skill-circle {
  width: 150px;
  height: 150px;
  margin: auto;
  border-radius: 50%;
  background: conic-gradient(
    var(--color) calc(var(--percent) * 1%),
    #1a1a1a 0
  );
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-in-out;
}

.skill-circle:hover {
  transform: scale(1.08);
  filter: drop-shadow(0 0 10px #BF9180);
}

.inner-circle {
  width: 110px;
  height: 110px;
  background: #0E2773;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: white;
}

.inner-circle small {
  margin-top: -4px;
  font-size: 14px;
  font-weight: bold;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .experience-card {
    height: auto;
  }
}
</style>
