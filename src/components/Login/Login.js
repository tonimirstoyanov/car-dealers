import styles from './Login.module.css';

const Login = () => {

    return (
        <section className={styles['login-box']}>
            <form id="login">
                <h2>Login</h2>
                <div className={styles['login-field']}>
                    <input type="email" id="email" name="email" required="" />
                    <label>Email</label>
                </div>
                <div className={styles['login-field']}>
                    <input type="password" id="login-password" name="password" required="" />
                    <label>Password</label>
                </div>
                <button type="submit">Submit</button>
                <div className={styles['sing-in']}>
                    <p className={styles.acc}>Don't have an account? <a href="#">Sing up</a></p>
                </div>
            </form>
        </section>
    )
}
export default Login;