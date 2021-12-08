import api from "../services/api"

interface Response {
    data: object,
    status: number
}

export async function forgotPassword(email: string): Promise<Response> {

  
    const result = await api
        .post("/auth/forgot_password",{
            email: email,
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

            throw new Error("\n Message: "+error.response.data.message+"\n Status: "+error.response.data.status);
            
        })
    return result;
}
