<!-- App.vue -->
<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Personas</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <!-- Inclusion del componente "TablaPersonas" -->
        <tabla-personas />
      </div>
    </div>
  </div>
</template>
<script setup>
// Importacion del componente "TablaPersonas"
import TablaPersonas from '@/components/TablaPersonas.vue'
// Definicion del componente Vue
defineOptions({
  // Nombre del componente
  name: 'app',
});
</script>
<style>
/* Estilos globales para todos los elementos button en la aplicacion */
button {
  background: #009435;
  border: 1px solid #009435;
}
</style>