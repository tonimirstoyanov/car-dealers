import { useContext } from "react"
import { AuthContext } from "../context/authContext.js"
import { Redirect } from "react-router-dom"

export const isGuest = (Component) => {

    const GuestGuardComponent = (props) => {

        const { isAuth } = useContext(AuthContext)

        return isAuth ? <Redirect to='/' /> : <Component {...props} />
    }

    return GuestGuardComponent
}