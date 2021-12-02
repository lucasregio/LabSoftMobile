import axios from 'axios';

const api = axios.create({
    baseURL:"http://178.238.233.159:5555"
})

api.interceptors.response.use((response) => {
    console.log("Response Interceptor!");
    return response

    },(error) => {
        const status = error.response ? error.response.status : null;    
        console.log("Error Interceptor!");
        //console.log("Error data:",error.response.data);
        if (status === 401) {
            console.log("Token Invalido!")
        }

        return Promise.reject(error);
}); 

export default api;