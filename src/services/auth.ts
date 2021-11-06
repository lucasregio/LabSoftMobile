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
            console.log("response: ",res);
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
        .catch((...err) => { 
            console.log("error: ", err)
            return {
                data: {
                    error: "Invalid Email and/or password.",
                },
                status: 400,
            }
        });
    console.log("resultado: ",result.status);
    return result;
    //  console.log(result)

    // return new Promise((resolve, reject) => {
    //     // DEBUG ONLY
    //     // TODO: Alterar para utilizar a API
    //     setTimeout(() => {
    //         if (email === 'aluno@uvvnet.com.br' && password === 'aluno') {
    //             resolve({
    //                 data: {
    //                     token: 'a0h7aTNg8aMAsA6AnK79h1R5agda4dPsuBjasQU7Jasyh1',
    //                     user: {
    //                         email: 'aluno@uvvnet.com.br'
    //                     }
    //                 },
    //                 status: 200
    //             })
    //         } else {
    //             let error: any = new Error('Invalid Email and/or password.');
    //             error.response = {
    //                 data: {
    //                     error: 'Invalid Email and/or password.'
    //                 },
    //                 status: 400
    //             }
    //             reject(error);
    //         }

    //     }, 1000);
    // })
}
