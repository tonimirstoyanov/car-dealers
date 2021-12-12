import { useState } from "react"

const useLocalStorage = (key, initialValue) => {

    const [state, setState] = useState(() => {

        try {
            let item = localStorage.getItem(key)

            console.log(item)
            console.log(JSON.parse(item))
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error)
            return initialValue;
        }
    })

    const setLocalStorageItem = (value) => {

        try {
            localStorage.setItem(key, JSON.stringify(value))

            setState(value)
        } catch (error) {
            console.log(error)
        }
    }

    return [
        state,
        setLocalStorageItem,
    ]
}


export default useLocalStorage;