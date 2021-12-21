import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css"

const PageNotFound = () => {

    return (
        <div className={styles.container}>
            <h2>Oops! Page not found.</h2>
            <h1>404</h1>
            <p>We can't find the page you're looking for.</p>
            <Link to="/"><button>Home Page</button></Link>
        </div>
    )
}

export default PageNotFound;