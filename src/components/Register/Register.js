import './Register.css'

const Register = () => {

    return (
        <section className="register-box">
            <h2>Register</h2>
            <form id="register">
                <div className="register-field">
                    <input type="fullName" name="fullName" id="fullName" required="" />
                    <label>Full Name</label>
                </div>
                <div className="register-field">
                    <input type="text" name="email" required="" />
                    <label>Email</label>
                </div>
                <div className="register-field">
                    <input type="password" name="password" id="registerPassword" required="" />
                    <label>Password</label>
                </div>
                <div className="register-field">
                    <input type="password" name="rePassword" id="rePassword" required="" />
                    <label>Repeat Password</label>
                </div>
                <button type="submit">Submit</button>
                <div className="sing-in">
                    <p className="acc">Already have an account?<a href="#">Sing in</a></p>
                </div>
            </form>
        </section>
    );
}

export default Register;