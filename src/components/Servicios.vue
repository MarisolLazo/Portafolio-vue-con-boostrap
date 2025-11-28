<template>
<section class="py-5">
  <div class="container">
    <h2 class="text-center mb-4">Mis Servicios</h2>
    <div class="row g-4">
      <div class="col-md-4" v-for="servicio in servicios" :key="servicio.id">
        <div class="card h-100 text-center">
          <div class="card-body">
            <h5 class="card-title">{{ servicio.titulo }}</h5>
            <p class="card-text">{{ servicio.descripcion }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      servicios: [
        { id: 1, titulo: 'Diseño Web', descripcion: 'Sitios web modernos y adaptables.' },
        { id: 2, titulo: 'Frontend', descripcion: 'Interfaces interactivas con HTML, CSS y JS.' },
        { id: 3, titulo: 'Optimización', descripcion: 'Performance, SEO y accesibilidad.' },
      ]
    }
  }
}
</script>
