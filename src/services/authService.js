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
        mode: "cors",
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