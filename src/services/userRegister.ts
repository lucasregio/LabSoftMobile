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
            matricula: "123456789", //matrícula do usuário
            data_nascimento:  "04/04/2000",
            id_curso:"1c77f244-5cf1-460f-9487-26afb1cee589" // curso ciência da computacao
        })
        .then((res) => {
            return res
        })
        .catch((err) => { 

            // return {
            //     data: {
            //         error: "Invalid Email and/or password.",
            //     },
            //     status: 401,
            // }
            //throw new Error(" Invalid Email and/or password.");
            
        })
    //console.log("resultado: ",result);
    return result;
}

  