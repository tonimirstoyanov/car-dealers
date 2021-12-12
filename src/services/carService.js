export const getAll = () => {
    return fetch('http://localhost:3030/car/catalog')
        .then(respone => respone.json())
}
export const lastAdded = () => {
    return fetch('http://localhost:3030')
        .then(response => response.json())
}

export const getOne = (id) => {
    return fetch(`http://localhost:3030/car/${id}/details`)
    .then(response => response.json())
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
    let jsonResult = await result.json();

    if (result.ok) {
        return jsonResult
    } else {
        throw jsonResult.message
    }
}


export const deleteOne = async (carId, token) => {
    let result = await fetch(`http://localhost:3030/car/${carId}/delete`, {
        method: 'DELETE',
        headers: {
            'auth_token': token
        }
    })
    let jsonResult = await result.json();
    
    if (result.ok) {
        return jsonResult
    } else {
        throw jsonResult.message
    }
}