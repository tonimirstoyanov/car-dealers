import './Header.css'

const Header = () => {

    return (<header>
        <a href="#home" className="logo"><span>Cars</span> Dealers</a>
        <nav>
            <ul className="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#catalog">Car Catalog</a></li>
                {/* <!-- Logged users --> */}
                <li><a href="#create">Create ad</a></li>
            </ul>
        </nav>
        {/* <!-- Guest users --> */}
        <a className="button-login" href="#login"><button>Login</button></a>
        <a className="button-register" href="#register"><button>Register</button></a>
        <a className="button-logout" href="#logout"><button>Logout</button></a>
    </header>);
}

export default Header