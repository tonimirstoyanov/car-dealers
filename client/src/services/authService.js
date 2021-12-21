import { response } from './response.js'

const baseUrl = 'https://car-dealers-react-project.herokuapp.com'

export const register = async (fullName, email, password, repeatPassword) => {
    let result = await fetch(`${baseUrl}/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullName, email, password, repeatPassword })
    })
    return response(result)

}

export const login = async (email, password) => {
    let result = await fetch(`${baseUrl}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    return response(result)
}

export const logout = async (token) => {
    let result = await fetch(`${baseUrl}/user/logout`, {
        headers: {
            'auth_token': token
        }
    })
    return response(result)

}