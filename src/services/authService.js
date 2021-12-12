export const register = (fullName, email, password, repeatPassword) => {
    return fetch('http://localhost:3030/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullName, email, password, repeatPassword })
    })
        .then(res => res.json())

}

export const login = async (email, password) => {
    let result = await fetch('http://localhost:3030/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    let jsonResult = await result.json();
    
    if (result.ok) {
        return jsonResult
    } else {
        throw jsonResult.message
    }
}

export const logout = async (token) => {
    let result = await fetch('http://localhost:3030/user/logout', {
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