import styles from './Register.module.css'
import * as authService from '../../services/authService.js'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { isntGuest } from '../../hoc/isntGuest.js'

const Register = () => {
    const history = useHistory()

    const registerSubmitHandler = (e) => {

        e.preventDefault();


        let formData = new FormData(e.currentTarget)
        let { fullName, email, password, repeatPassword } = Object.fromEntries(formData);

        authService.register(fullName, email, password, repeatPassword)
            .then(result => {
                console.log(result)

                history.push('/login')
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <section className={styles['register-box']}>
            <h2>Register</h2>
            <form id="register" metod="POST" onSubmit={registerSubmitHandler}>
                <div className={styles['register-field']}>
                    <input type="fullName" name="fullName" id="fullName" required="" />
                    <label>Full Name</label>
                </div>
                <div className={styles['register-field']}>
                    <input type="text" name="email" required="" />
                    <label>Email</label>
                </div>
                <div className={styles['register-field']}>
                    <input type="password" name="password" id="registerPassword" required="" />
                    <label>Password</label>
                </div>
                <div className={styles['register-field']}>
                    <input type="password" name="repeatPassword" id="repeatPassword" required="" />
                    <label>Repeat Password</label>
                </div>
                <button type="submit">Submit</button>
                <div className={styles['sing-in']}>
                    <p className={styles.acc}>Already have an account?<Link to={'/login'}>Sing in</Link></p>
                </div>
            </form>
        </section>
    );
}

export default isntGuest(Register);