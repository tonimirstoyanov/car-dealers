import styles from './Register.module.css'
import * as authService from '../../services/authService.js'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { isGuest } from '../../hoc/isGuest.js'
import { useContext, useState } from 'react'
import { NotificationContext } from '../../context/notificationContext.js'

const Register = () => {
    const history = useHistory()
    const { successAlert, errorAlert } = useContext(NotificationContext)

    const initialValue = { fullName: '', email: '', password: '', repeatPassword: '' }
    const [errorMessage, setErrorMessage] = useState(initialValue)
    const [error, setError] = useState(false)
    const [pass, setPass] = useState('')

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget)
        let { fullName, email, password, repeatPassword } = Object.fromEntries(formData);

        if (!error) {
            authService.register(fullName, email, password, repeatPassword)
                .then(result => {
                    console.log(result)
                    successAlert('Successful registration')
                    history.push('/login')
                })
                .catch(err => {
                    console.log(err)
                    errorAlert(err.message)
                })
        }
    }
    const fullNameChangeHandler = (e) => {
        let currentName = e.target.value
        if (currentName.length < 3) {
            setErrorMessage(state => ({ ...state, fullName: 'You name should be at least 3 characters!' }))
            setError(true)
        } else {
            setErrorMessage(state => ({ ...state, fullName: '' }))
            setError(false)
        }
    }
    const emailChangeHandler = (e) => {
        let email = e.target.value
        if (!/^[A-Za-z0-9]*@[A-za-z]+\.[A-Za-z]+$/.test(email)) {
            setErrorMessage(state => ({ ...state, email: 'Invalid email address! Example: example@example.com' }))
            setError(true)
        } else {
            setErrorMessage(state => ({ ...state, email: '' }))
            setError(false)
        }
    }

    const passwordChangeHandler = (e) => {
        let password = e.target.value
        if (password.length < 5) {
            setErrorMessage(state => ({ ...state, password: 'You name should be at least 5 characters!' }))
            setError(true)
        } else {
            setErrorMessage(state => ({ ...state, password: '' }))
            setError(false)
            setPass(password)
        }
    }
    const repeatPasswordChangeHandler = (e) => {
        let repeatPassword = e.target.value
        if (repeatPassword !== pass) {
            setErrorMessage(state => ({ ...state, repeatPassword: 'Password and repeat rassword must be equal! ' }))
            setError(true)
        } else {
            setErrorMessage(state => ({ ...state, repeatPassword: '' }))
            setError(false)
        }
    }



    return (
        <section className={styles['register-box']}>
            <h2>Register</h2>
            <form id="register" metod="POST" onSubmit={registerSubmitHandler}>
                <div className={styles['register-field']}>
                    <input type="fullName" name="fullName" id="fullName" onBlur={fullNameChangeHandler} />
                    <label>Full Name</label>
                    <span className={errorMessage.fullName ? styles['errors'] : 'hidden'}>{errorMessage.fullName}</span>
                </div>
                <div className={styles['register-field']}>
                    <input type="text" name="email" id="email" onBlur={emailChangeHandler} />
                    <label>Email</label>
                    <span className={errorMessage.email ? styles['errors'] : 'hidden'}>{errorMessage.email}</span>
                </div>
                <div className={styles['register-field']}>
                    <input type="password" name="password" id="registerPassword" onBlur={passwordChangeHandler} />
                    <label>Password</label>
                    <span className={errorMessage.password ? styles['errors'] : 'hidden'}>{errorMessage.password}</span>
                </div>
                <div className={styles['register-field']}>
                    <input type="password" name="repeatPassword" id="repeatPassword" onBlur={repeatPasswordChangeHandler} />
                    <label>Repeat Password</label>
                    <span className={errorMessage.repeatPassword ? styles['errors'] : 'hidden'}>{errorMessage.repeatPassword}</span>
                </div>
                <button type="submit">Submit</button>
                <div className={styles['sing-in']}>
                    <p className={styles.acc}>Already have an account?<Link to={'/login'}>Sing in</Link></p>
                </div>
            </form>
        </section>
    );
}

export default isGuest(Register);