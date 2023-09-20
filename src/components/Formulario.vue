<script setup>
import {ref} from 'vue'
import Alerta from './Alerta.vue'
import { getClima} from '../services/getClima.js'
const busqueda = ref(
    {
        ciudad:'',
        pais:''
    }
)
const error = ref('')


const paises= [
    {codigo: 'US', nombre: 'Estados unidos'},
    {codigo: 'MX', nombre: 'México'},
    {codigo: 'AR', nombre: 'Argentina'},
    {codigo: 'CO', nombre: 'Colombia'},
    {codigo: 'CR', nombre: 'Costa Rica'},
    {codigo: 'ES', nombre: 'España'},
    {codigo: 'PE', nombre: 'Perú'},
]


const consultarClima = () => {
    
    if(Object.values(busqueda.value).includes('')){
        error.value = "Todos los campos son obligatorios"
        return
    }

    error.value = ''
    getClima(busqueda.value);
}

</script>



<template>

    <form @submit.prevent="consultarClima" class="formulario">

        <Alerta v-if="error">{{ error }}</Alerta>

        <div class="campo">
            <label for="Ciudad">Ciudad</label>
            <input v-model="busqueda.ciudad" type="text" id="ciudad" placeholder="Ciudad">
        </div>

        <div class="campo">
            <label for="Pais">Pais</label>
            <select v-model="busqueda.pais" class="select-form" name="" id="Pais">
                <option value="">-- Seleccione un pais --</option>
                <option
                    v-for="(pais, index) in paises" :key="index" 
                    :value="pais.codigo"
                >
                {{ pais.nombre }}
                </option>
            </select>
        </div>
        <input type="submit" value="Consultar clima">
    </form>
    
</template>