import './Header.css'

import { Link } from 'react-router-dom';

const Header = () => {

    return (<header>
        <Link to="/" className="logo"><span>Cars</span> Dealers</Link>
        <nav>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/car/catalog">Car Catalog</Link></li>
                {/* <!-- Logged users --> */}
                <li><Link to="/car/create">Create ad</Link></li>
            </ul>
        </nav>
        {/* <!-- Guest users --> */}
        <Link className="button-login" to="/login"><button>Login</button></Link>
        <Link className="button-register" to="/register"><button>Register</button></Link>
        <Link className="button-logout" to="/logout"><button>Logout</button></Link>
    </header>);
}

export default Header