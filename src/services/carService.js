import { response } from "./response.js"

export const getAll = async () => {
    let result = await fetch('http://localhost:3030/car/catalog')
    return response(result)

}
export const lastAdded = async () => {
    let result = await fetch('http://localhost:3030')
    return response(result)

}

export const getOne = async (id) => {
    let result = await fetch(`http://localhost:3030/car/${id}/details`)
    return response(result)

}

export const create = async (data, token) => {
    let result = await fetch('http://localhost:3030/car/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth_token': token
        },
        body: JSON.stringify(data)
    })
    return response(result)

}


export const deleteOne = async (carId, token) => {
    let result = await fetch(`http://localhost:3030/car/${carId}/delete`, {
        method: 'DELETE',
        headers: {
            'auth_token': token
        }
    })
    return response(result)

}

export const updateOne = async (carId, data, token) => {
    let result = await fetch(`http://localhost:3030/car/${carId}/edit`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'auth_token': token
        },
        body: JSON.stringify(data)
    })
    return response(result)

}

export const like = async (carId, data, token) => {
    let result = await fetch(`http://localhost:3030/car/${carId}/likes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth_token': token
        },
        body: JSON.stringify(data)
    })
    return response(result)

}
export const dislike = async (carId, data, token) => {
    let result = await fetch(`http://localhost:3030/car/${carId}/dislikes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth_token': token
        },
        body: JSON.stringify(data)
    })
    return response(result)

}