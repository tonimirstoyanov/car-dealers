import { useContext } from "react"
import { AuthContext } from "../context/authContext.js"
import { Redirect } from "react-router-dom"

export const isOwner = (Component) => {

    const OwnerGuardComponent = (props) => {

        const { isOwner } = useContext(AuthContext)

        return isOwner ? <Component {...props} /> : <Redirect to='/' />
    }

    return OwnerGuardComponent
}