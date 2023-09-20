import axios from "axios";
import { ref,computed } from 'vue';


export const clima = ref({})
export const cargando = ref(false)
export const error = ref('')

export const getClima = async ({ciudad, pais}) => { 
    const key = import.meta.env.VITE_API_KEY

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`;
    clima.value = {}
    cargando.value = true;
    error.value = '';

    try {
        const {data} = await axios(url);
        const {lat,lon} = data[0]; 

        //obtener el clima

        const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`

        const {data:dataClima} = await axios(urlClima);
        
        clima.value = dataClima

        console.log(clima.value);
    } catch {
        error.value = 'No se encontro la ciudad!'
    } finally{
        cargando.value = false;
    }
}

export const mostrarClima = computed(()=>{
    return Object.values(clima.value).length > 0;
})