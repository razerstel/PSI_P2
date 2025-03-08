<!-- src/components/TablaPersonas.vue-->

<template>

    <!-- Contenedor principal del componente-->
    <div id="tabla-personas">

        <!-- Tabla para mostrar información de personas-->
        <table class="table">

            <!-- Encabezado de la tabla-->
            <thead>
                <tr>
                    <!--Columnas del encabezado-->
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <!--Cuerpo de la tabla-->
            <tbody>

                <!--Iteracion sobre el array usanfo v-for-->
                <tr v-for="persona in personas" :key="persona.id">
                    <td v-if="editando == persona.id">
                        <input id="persona.nombre" v-model="persona.nombre" type="text" class="form-control" data-cy="persona-nombre"/>
                    </td>
                    <td v-else>{{ persona.nombre }}</td>
                    <td v-if="editando == persona.id">
                        <input id="persona.apellido" v-model="persona.apellido" type="text" class="form-control" data-cy="persona-apellido"/>
                    </td>
                    <td v-else>{{ persona.apellido }}</td>
                    <td v-if="editando == persona.id">
                        <input id="persona.email" v-model="persona.email" type="text" class="form-control" data-cy="persona-email"/>
                    </td>
                    <td v-else>{{ persona.email }}</td>
                    <td v-if="editando == persona.id">
                        <button class="btn btn-success" data-cy="save-button" @click="guardarPersona(persona)">
                            &#x1F5AB; Guardar
                        </button>
                        <button class="btn btn-secondary ml-2" data-cy="cancel-button" @click="cancelarEdicion(persona)">
                            &#x1F5D9; Cancelar
                        </button>
                    </td>
                    <td v-else>
                        <button class="btn btn-danger"  data-cy="delete-button" @click="$emit('delete-persona', persona.id)">&#x1F5D1; Eliminar</button>
                        <button class="btn btn-info ml-2" data-cy="edit-button"  @click="editarPersona(persona)">&#x1F58A; Editar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    import {ref} from 'vue';

    const emit = defineEmits(['actualizar-persona', 'delete-persona']);

    defineProps({
            personas: {
                type: Array,
                required: true
            }
        });
    //Definicion del componente Vue
    defineOptions({
        //Nombre del componente
        name: 'tabla-personas',
    });

    const editando = ref(null);
    const personaEditada = ref(null);

    const editarPersona = (persona) => {
        personaEditada.value = {...persona};
        editando.value = persona.id;
    };

    const guardarPersona = (persona) => {
        if (!persona.nombre.length || !persona.apellido.length || !persona.email.length){
            return;
        }

        emit('actualizar-persona', persona.id, persona);
        editando.value = null;
    };

    const cancelarEdicion = (persona) => {
        Object.assign(persona, personaEditada.value);
        editando.value = null;
    };

</script>

<style scoped>

</style>