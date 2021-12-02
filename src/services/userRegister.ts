import { AxiosResponse } from 'axios';
import api from "../services/api"

interface userData{
    email: string;
    password: string;
    name: string;
    userImage: string;
    instagram: string;
    idAthletic: string;
    registration: string; //matrícula do usuário
    birthDate: string;
    idCourse: string;

}

interface Response {
    data?: userData;
    status: number;
}
export async function createUser(user: userData): Promise<any> {
    console.log("o user está :", user);
    const result = await api
        .post("/auth/register",{
            email: user.email,
            senha: user.password,
            nome: user.name,
            foto: user.userImage,
            instagram: user.instagram,
            id_atletica: user.idAthletic,
            matricula: ''+Math.ceil(Math.random() * (999999999 - 299999999) + 299999999), //matrícula do usuário
            data_nascimento:  "04/04/2000",
            id_curso:"1c77f244-5cf1-460f-9487-26afb1cee589" // curso ciência da computacao
        })
        .then((res) => {
            return res
        })
        .catch((error) => { 

            // Error 😨
            if (error.response) {
                /*
                * The request was made and the server responded with a
                * status code that falls out of the range of 2xx
                */
                console.log("Entrou no Erro do Response")
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                /*
                * The request was made but no response was received, `error.request`
                * is an instance of XMLHttpRequest in the browser and an instance
                * of http.ClientRequest in Node.js
                */
                console.log("Entrou no Erro do request")
                console.log(error.request);
            } else {
                console.log("Entrou no último Erro")
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }

            //console.log(error);
            //console.log("Deu erro!");
            //console.log(err.response)
            //console.log("O body do error: ", error.response.data)

            throw new Error("\n Message: "+error.response.data.message+"\n Status: "+error.response.data.status);
            
        })
    //console.log("resultado: ",result);
    return result;
}

  