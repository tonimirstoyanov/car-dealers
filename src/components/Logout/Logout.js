import { AuthContext } from '../../context/authContext.js'
import { useContext, useEffect } from 'react'
import * as authService from '../../services/authService.js'
import { useHistory } from 'react-router'

export const Logout = () => {

    let history = useHistory()
    const { user, logout } = useContext(AuthContext)
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(res => {
                logout(res)

                history.push('/')
            })
            .catch(error => {
                console.log(error)
            })
    }, [history, logout, user.accessToken])
    return null
}