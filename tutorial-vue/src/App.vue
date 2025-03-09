<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Personas</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <formulario-persona @add-persona="agregarPersona"/>
        <div id="tabla-personas" v-if="!personas.length" class="alert alert-info" role="alert" data-cy="no-persona">
          No se han encontrado personas :(
        </div>
        <div id="tabla-personas">
          <tabla-personas :personas="personas" @delete-persona="eliminarPersona" @actualizar-persona="actualizarPersona"/>
        </div>
      </div>
    </div>
  </div>
  <div>
    <p>Count is {{ store.count }}</p>
  </div>
</template>

<script setup>
  //importacion del componente TablaPersonas
  import TablaPersonas from '@/components/TablaPersonas.vue'
  import FormularioPersona from '@/components/FormularioPersona.vue';
  import { ref, onMounted} from 'vue';
  import { useCounterStore } from './stores/counter';

  const API_URL = import.meta.env.VITE_DJANGOURL;


  //Definicion del componente Vue
  defineOptions({
    //Nombre del componente
    name: 'app',
  });

  const personas = ref([]);
  const store = useCounterStore();

  const listadoPersonas = async () => {
    try {
      const response = await fetch(`${API_URL}/api/v1/personas/`);
      personas.value = await response.json()
    }
    catch (error){
      console.error(error)
    }

  };

  const agregarPersona = async (persona) => {

    try {

      const response = await fetch(
        `${API_URL}/api/v1/personas/`,
        {
          method: 'POST',
          body: JSON.stringify(persona),
          headers: {'Content-type' : 'application/json; charset=UTF-8'},
        }
      );

      const personaCreada = await response.json()
      personas.value = [...personas.value, personaCreada]
      store.increment()
    }
    catch (error) {
      console.error(error)
    }
    
  };

  const eliminarPersona = async (id) => {
    try {
      const response = await fetch(
        `${API_URL}/api/v1/personas/`+id+'/',
        {
          method: 'DELETE',
        }
      );

      personas.value = personas.value.filter(u => u.id !== id)
    }
    catch (error){
      console.error(error)
    }
  };

  const actualizarPersona = async (id, personaActualizada) => {
    try {
      const response = await fetch(
        `${API_URL}/api/v1/personas/`+personaActualizada.id+'/',
        {
          method: 'PUT',
          body: JSON.stringify(personaActualizada),
          headers: {'Content-type' : 'application/json; charset=UTF-8'},
        }
      );

      const personaActualizadaJS = await response.json();
      personas.value = personas.value.map(
        u => (u.id === personaActualizada.id ? personaActualizadaJS: u)
      );
    }

    catch (error){
      console.error(error);
    }
  };

  onMounted(() => {
    listadoPersonas();
  });

  const props = defineProps({
    personas : {type: Array, default: []},
  }); 
</script>

<style>
  button {
    background: #009435;
    border: 1px solid #009435;
  }
</style>