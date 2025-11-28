<template>
  <div class="portfolio-bg py-5">
    <div class="container">

      <!-- TÍTULO -->
      <h2 class="text-center mb-4 titulo">✨ Mis Proyectos ✨</h2>

      <!-- ============================
           FILTROS DE CATEGORÍAS
      ============================= -->
      <div class="text-center mb-4">
        <div class="btn-group glass-filter" role="group">
          <button 
            v-for="cat in categorias"
            :key="cat"
            class="btn btn-filter"
            :class="{ active: categoriaSeleccionada === cat }"
            @click="categoriaSeleccionada = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- LISTA DE PROYECTOS -->
      <div class="row g-4">
        <div
          class="col-md-4"
          v-for="proyecto in proyectosFiltrados"
          :key="proyecto.id"
        >

          <!-- TARJETA GLASS -->
          <div class="card project-card h-100 glass-card">

            <!-- IMAGEN -->
            <div class="img-wrapper">
              <img :src="proyecto.img" class="card-img-top" :alt="proyecto.titulo">
            </div>

            <!-- CUERPO -->
            <div class="card-body text-center">
              <h5 class="card-title project-title">{{ proyecto.titulo }}</h5>

              <button 
                type="button"
                class="btn btn-vermas"
                data-bs-toggle="modal"
                :data-bs-target="'#modal' + proyecto.id"
              >
                Ver Más
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- ============================
         MODALES GLASS
    ============================= -->
    <div 
      v-for="proyecto in proyectos"
      :key="'modal' + proyecto.id"
      :id="'modal' + proyecto.id"
      class="modal fade"
      tabindex="-1"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content glass-modal">

          <div class="modal-header">
            <h5 class="modal-title">{{ proyecto.titulo }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div class="modal-body">
            <img :src="proyecto.img" class="img-fluid mb-3 rounded" />
            <p class="fw-bold descripcion-modal">{{ proyecto.descripcion }}</p>
            <p class="detalle-modal">{{ proyecto.detalle }}</p>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import turismo from "../assets/Turismo El Salvador.png";
import spotify from "../assets/My Spotify.png";
import comercial from "../assets/Comercial Josue.png";

export default {
  data() {
    return {
      categoriaSeleccionada: "Todos",

      categorias: ["Todos", "UI", "Frontend", "Fullstack" ],

      proyectos: [
        { 
          id: 1,
          titulo: "Sitio Turístico El Salvador",
          img: turismo,
          categoria: "Frontend",
          descripcion: "Sitio web turístico de El Salvador con destinos, cultura y reservas.",
          detalle: "Creado con HTML, CSS, JS y UI moderna."
        },
        { 
          id: 2,
          titulo: "Clon de Spotify",
          img: spotify,
          categoria: "UI",
          descripcion: "Clon inspirado en Spotify con interfaz moderna y responsive.",
          detalle: "Diseño UI + animaciones + secciones dinámicas."
        },
        { 
          id: 3,
          titulo: "Sistema Comercial",
          img: comercial,
          categoria: "Fullstack",
          descripcion: "Sistema de tienda en línea con dashboard de administración.",
          detalle: "Productos, usuarios, roles y manejo de inventario."
        }
      ]
    };
  },

  computed: {
    proyectosFiltrados() {
      if (this.categoriaSeleccionada === "Todos") {
        return this.proyectos;
      }
      return this.proyectos.filter(
        (p) => p.categoria === this.categoriaSeleccionada
      );
    }
  }
};
</script>

<style scoped>

/* ===== FONDO ===== */
.portfolio-bg {
  background: linear-gradient(135deg, #052159, #0E2773, #590212);
  min-height: 100vh;
  padding-bottom: 80px;
}

/* ===== TÍTULO ===== */
.titulo {
  color: #BF9180;
  font-weight: 900;
  font-size: 40px;
  text-shadow: 0 0 10px rgba(191,145,128,0.7);
}


/* ============================
   BOTONES DE FILTRO GLASS
============================= */
.glass-filter {
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 8px;
  box-shadow: 0 3px 12px rgba(0,0,0,0.4);
}

.btn-filter {
  background: transparent;
  border: none;
  color: #e8d7d1;
  padding: 8px 18px;
  font-weight: 600;
  transition: 0.3s;
}

.btn-filter.active {
  background: rgba(255,255,255,0.25);
  border-radius: 12px;
  color: #fff;
  font-weight: 700;
}

.btn-filter:hover {
  background: rgba(255,255,255,0.18);
  border-radius: 12px;
}


/* ============================
   TARJETAS GLASS
============================= */
.glass-card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(14px);
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.25);
  box-shadow: 0px 8px 25px rgba(0,0,0,0.35);
  transition: 0.35s ease-in-out;
}

.glass-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0px 15px 40px rgba(0,0,0,0.5);
}

/* IMAGEN */
.img-wrapper {
  height: 220px;
  overflow: hidden;
  border-radius: 18px 18px 0 0;
}

.card-img-top {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 0.4s;
}

/* TÍTULO */
.project-title {
  color: #BF9180;
  font-weight: bold;
  font-size: 20px;
}

/* BOTÓN */
.btn-vermas {
  background: linear-gradient(135deg, #8C2048, #590212);
  border: none;
  color: white;
  padding: 10px 22px;
  border-radius: 30px;
  transition: 0.3s;
}

/* ============================
   MODAL GLASS
============================= */
.glass-modal {
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 18px;
  box-shadow: 0px 10px 35px rgba(0,0,0,0.45);
}

.descripcion-modal {
  color: #BF9180;
  font-size: 18px;
}

.detalle-modal {
  color: white;
}

.modal-title {
  color: #EED3C7 !important;
  font-weight: 800;
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.25);
}

</style>
