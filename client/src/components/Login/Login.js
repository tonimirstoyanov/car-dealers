import styles from './Login.module.css';

import { useHistory } from 'react-router';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import * as authService from '../../services/authService.js'
import { AuthContext } from '../../context/authContext.js'
import { isGuest } from '../../hoc/isGuest.js';
import { NotificationContext } from '../../context/notificationContext.js';



const Login = () => {

    const { login } = useContext(AuthContext)
    const { successAlert, errorAlert } = useContext(NotificationContext)
    let history = useHistory()
    const loginSubmitHandler = (e) => {

        e.preventDefault();


        let formData = new FormData(e.currentTarget)
        let { email, password } = Object.fromEntries(formData);

        authService.login(email, password)
            .then(result => {
                login(result)
                successAlert('Successful login')
                history.push('/')
            })
            .catch(err => {
                console.log(err)
                errorAlert(err.message)
            })
    }

    return (
        <>
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
                        <p className={styles.acc}>Don't have an account? <Link to={'/register'}>Sing up</Link></p>
                    </div>
                </form>
            </section>
        </>
    )
}
export default isGuest(Login);