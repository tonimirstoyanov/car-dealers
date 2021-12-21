import { useContext } from "react"
import { AuthContext } from "../context/authContext.js"
import { Redirect } from "react-router-dom"

export const isAuthenticated = (Component) => {

    const AuthGuardComponent = (props) => {

        const { isAuth } = useContext(AuthContext)

        return isAuth ? <Component {...props} /> : <Redirect to='/login' />
    }

    return AuthGuardComponent
}