import axios from "axios";
import api from "../services/api"

interface AuthData {
    token?: string;
    user?: {
        email: string;
    };
    error?: string;
}

interface Response {
    data: AuthData;
    status: number;
}

export async function signIn(email: string, password: string): Promise<Response> {
    const result = await api
        .post("/auth/login",{
            email: email,
            senha: password,
        })
        .then((res) => {
            return {
                data: {
                    token: res.data.token,
                    user: {
                        email,
                    },
                },
                status: res.status,
            };
        })
        .catch((err) => { 

            // return {
            //     data: {
            //         error: "Invalid Email and/or password.",
            //     },
            //     status: 401,
            // }
            throw new Error(" Invalid Email and/or password.");
            
        });
    console.log("resultado: ",result.status);
    return result;
}
