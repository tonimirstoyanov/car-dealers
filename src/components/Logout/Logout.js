import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'

import { AuthContext } from '../../context/authContext.js'
import * as authService from '../../services/authService.js'
import { NotificationContext } from '../../context/notificationContext.js';

export const Logout = () => {

    let history = useHistory()
    const { user, logout } = useContext(AuthContext)
    const { successAlert} = useContext(NotificationContext)
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(res => {
                logout(res)
                localStorage.clear();
                successAlert('Successful logout')
                history.push('/')
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return null
}