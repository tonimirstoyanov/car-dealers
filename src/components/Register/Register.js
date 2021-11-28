import styles from './Register.module.css'

const Register = () => {

    return (
        <section className={styles['register-box']}>
            <h2>Register</h2>
            <form id="register">
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
                    <p className={styles.acc}>Already have an account?<a href="#">Sing in</a></p>
                </div>
            </form>
        </section>
    );
}

export default Register;