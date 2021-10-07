interface Response {
    data: object,
    status: number
}

export function RegisterSystem(email: string, name: string, password: string, confirmPasswor: string, athletic: string, course: string): Promise<Response> {

    return new Promise((resolve, reject) => {
        // DEBUG ONLY
        // TODO: Alterar para utilizar a API
        setTimeout(() => {
            if (email != '' && name != '' && password != '' && confirmPasswor != '' && athletic != '' && course != '') {
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
