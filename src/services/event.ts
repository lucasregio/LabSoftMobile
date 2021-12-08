import api from './api';
import Evento from "./interfaces/Evento";

export async function getAllEventos() {
    let eventos: Evento[];
    
    try {
        const result = await api.get('eventos')
            /*.then((response)=> {
                console.log("EU",response.data);
                response.data;
            }) */
        eventos = result.data;

    } catch (error: any) {
        return Promise.reject(error.response);
    }

    return eventos;
}