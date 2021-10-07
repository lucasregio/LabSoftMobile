interface AuthData {
    token: string;
    user: {
        email: string;
    }
}

interface Response {
    data: AuthData,
    status: number
}

export function signIn(email: string, password: string): Promise<Response> {

    return new Promise((resolve, reject) => {
        // DEBUG ONLY
        // TODO: Alterar para utilizar a API
        setTimeout(() => {
            if (email === 'aluno@uvvnet.com.br' && password === 'aluno') {
                resolve({
                    data: {
                        token: 'a0h7aTNg8aMAsA6AnK79h1R5agda4dPsuBjasQU7Jasyh1',
                        user: {
                            email: 'aluno@uvvnet.com.br'
                        }
                    },
                    status: 200
                })
            } else {
                let error: any = new Error('Invalid Email and/or password.');
                error.response = {
                    data: {
                        error: 'Invalid Email and/or password.'
                    },
                    status: 400
                }
                reject(error);
            }
            
        }, 1000);
    })
    
}
