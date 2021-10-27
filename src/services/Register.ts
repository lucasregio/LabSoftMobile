interface Response {
    data: object,
    status: number
}

export function register(email: string, name: string, password: string, athletic: string, course: string): Promise<Response> {

    return new Promise((resolve, reject) => {
        // DEBUG ONLY
        // TODO: Alterar para utilizar a API
        setTimeout(() => {
            resolve({
                data: {
                    name,
                    email
                },
                status: 200
            })
        }, 1000);
    })
}
