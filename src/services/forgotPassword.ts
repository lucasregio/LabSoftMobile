interface Response {
    data: object,
    status: number
}

export function forgotPassword(email: string): Promise<Response> {

    return new Promise((resolve, reject) => {
        // DEBUG ONLY
        // TODO: Alterar para utilizar a API
        setTimeout(() => {
            if (email === 'aluno@uvvnet.com.br') {
                resolve({
                    data: {},
                    status: 200
                })
            } else {
                let error: any = new Error('User not found.');
                error.response = {
                    data: {
                        error: 'User not found.'
                    },
                    status: 400
                }
                reject(error);
            }
            
        }, 1000);
    })
}
