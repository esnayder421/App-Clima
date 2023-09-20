<script setup>
import Formulario from '../components/Formulario.vue';
import Clima from '../components/Clima.vue';
import Alerta from '../components/Alerta.vue';
import {clima, mostrarClima, cargando, error} from '../services/getClima.js'
import Spinner from '../components/Spiner.vue'
</script>

<template>
  <main>
    <h1 class="titulo">Buscador de Clima</h1>
    <div class="contenedor buscador-clima">
      <Formulario />
      <Clima
        v-if="mostrarClima"
        :clima="clima"
      />
      <Spinner v-if="cargando" />
      <Alerta v-if="error">{{ error }}</Alerta>


    </div>
    
  </main>
</template>
