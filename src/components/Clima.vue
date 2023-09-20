<script setup>
defineProps({
    clima:{
        type:Object,
        requiered: true,
    }
})

const temperatura = temp => parseInt(temp - 273.15)
</script>



<template>
    <div class="resultado">
        <h2>Clima de: {{ clima.name }} </h2>
        <p class="actual">{{ temperatura(clima.main.temp) }}&deg;C</p>
        <div class="temperaturas">
            <p>Min: {{ temperatura(clima.main.temp_min) }}<span>&deg;C</span></p>    
            <p>Max: {{ temperatura(clima.main.temp_max) }}<span>&deg;C</span></p>        
        </div>
    </div>
</template>


