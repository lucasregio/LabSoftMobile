import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useAuth } from '../contexts/auth';

const api = axios.create({
    baseURL:"http://178.238.233.159:5555"
})

api.interceptors.response.use(response => response, error => {
    const status = error.response ? error.response.status : null;

    // 401 Unauthorized
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
    if (status === 401) {
        console.log("Token Invalido!")
        //AsyncStorage.clear().then(() => {
            //api.defaults.headers.common.Authorization = '';
        //})
    }

    return error;
})

export default api;