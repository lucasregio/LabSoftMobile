import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./api";
import { Usuario } from "./interfaces/Usuario";
import jwt_decode from 'jwt-decode';
import * as athletic from './athletic';

export async function get(id: string) {
    let usuario: Usuario;
    try {
        usuario = (await api.get(`usuarios/${id}`)).data;
    } catch(error) {
        return Promise.reject(error);
    }
    return usuario;
}

export async function getLoginUser() {
    let usuario: Usuario;
    const storagedToken = await AsyncStorage.getItem('@token');
    try {
        
        const decoded: any = jwt_decode(storagedToken as any);
        const id = decoded.id || undefined;
        usuario = await get(id);
        usuario.atletica = await athletic.get(usuario.id_atletica);
    } catch(error) {
        return Promise.reject(error);
    }
    
    return usuario;
}
