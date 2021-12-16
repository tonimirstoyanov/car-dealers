import { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';


export const AuthContext = createContext()



export const AuthProvider = ({ children }) => {

    const [isOwner, setIsOwner] = useState(false)
    const [user, setUser] = useLocalStorage('user', {
        userId: '',
        fullName: '',
        email: '',
        accessToken: '',
    })

    const login = (authData) => {
        setUser(authData)
    }

    const logout = (authData) => {
        setUser(authData)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuth: Boolean(user.email), isOwner, setIsOwner }}>
            {children}
        </AuthContext.Provider>
    )

}