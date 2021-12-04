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