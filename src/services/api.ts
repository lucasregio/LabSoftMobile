import axios from 'axios';

const api = axios.create({
    baseURL:"http://178.238.233.159:5555"
})
export default api;