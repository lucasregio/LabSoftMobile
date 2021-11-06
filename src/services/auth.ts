import axios from "axios";


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
    const result = await axios
        .post("http://178.238.233.159:5555/auth/login", {
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

            return {
                data: {
                    error: "Invalid Email and/or password.",
                },
                status: 401,
            }
        });
    console.log("resultado: ",result.status);
    return result;
}
