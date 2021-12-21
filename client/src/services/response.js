export const response = async (result) => {

    let jsonData = await result.json()

    if (result.ok) {
        return jsonData
    } else {
        throw jsonData
    }
}