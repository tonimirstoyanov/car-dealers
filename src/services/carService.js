export const getAll = () => {
    return fetch('http://localhost:3030/car/catalog')
        .then(respone => respone.json())
}
export const lastAdded = () => {
    return fetch('http://localhost:3030')
        .then(response => response.json())
}