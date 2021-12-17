import { response } from './response.js'

export const register = async (fullName, email, password, repeatPassword) => {
    let result = await fetch('http://localhost:3030/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullName, email, password, repeatPassword })
    })
    return response(result)

}

export const login = async (email, password) => {
    let result = await fetch('http://localhost:3030/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    return response(result)
}

export const logout = async (token) => {
    let result = await fetch('http://localhost:3030/user/logout', {
        headers: {
            'auth_token': token
        }
    })
    return response(result)

}