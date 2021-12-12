import styles from './Login.module.css';

import { useHistory } from 'react-router';
import { useContext } from 'react';

import * as authService from '../../services/authService.js'
import { AuthContext } from '../../context/authContext.js'

const Login = () => {

    const { login } = useContext(AuthContext)
    let history = useHistory()
    const loginSubmitHandler = (e) => {

        e.preventDefault();


        let formData = new FormData(e.currentTarget)
        let { email, password } = Object.fromEntries(formData);

        authService.login(email, password)
            .then(result => {
                login(result)

                history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const navigateToRegister = (e) =>{
        e.preventDefault()
        history.push('/register')
    }
    return (
        <section className={styles['login-box']}>
            <form id="login" method="POST" onSubmit={loginSubmitHandler}>
                <h2>Login</h2>
                <div className={styles['login-field']}>
                    <input type="email" id="email" name="email" />
                    <label>Email</label>
                </div>
                <div className={styles['login-field']}>
                    <input type="password" id="login-password" name="password" />
                    <label>Password</label>
                </div>
                <button type="submit">Submit</button>
                <div className={styles['sing-in']}>
                    <p className={styles.acc}>Don't have an account? <a onClick={navigateToRegister}>Sing up</a></p>
                </div>
            </form>
        </section>
    )
}
export default Login;