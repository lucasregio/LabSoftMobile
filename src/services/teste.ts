import axios from 'axios';

export const testeAxios = async (email: string, password: string) => {
    const result = await axios.post('http://178.238.233.159:5555/auth/login',
     {
         email: email,
         senha: password
     });
    console.log("teste",result)
}; 