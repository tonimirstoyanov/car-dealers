import './Header.css'

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext.js';

const Header = () => {

    const { user } = useContext(AuthContext)

    let guestNavigation = (
        <>
            <Link className="button-login" to="/login"><button>Login</button></Link>
            <Link className="button-register" to="/register"><button>Register</button></Link>
        </>
    );

    let userNavigation = (
        <>
            <li><Link to="/car/create">Create ad</Link></li>
            <span className="fullName">Welcome, {user.fullName}</span>
            <Link className="button-logout" to="/logout"><button>Logout</button></Link>
        </>
    );

    return (<header>
        <Link to="/" className="logo"><span>Cars</span> Dealers</Link>
        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/car/catalog">Car Catalog</Link></li>
            {user.email
                ? userNavigation
                : guestNavigation
            }
        </ul>

    </header>);
}

export default Header