import styles from './MyCar.module.css'
import { Link } from 'react-router-dom';

const MyCarCard = ({ car }) => {

    return (
        <div className={styles.card}>

            <div className={styles.image}>
                <img src={car.imageUrl} alt="car" />
            </div>
            <div className={styles.title}>
                <h1>
                    {car.brand}</h1>
            </div>
            <div className={styles.des}>
                <p>Year:{car.year}, Price: {car.price} BGN</p>
                <Link className={styles['button-read-more']} to={`/car/${car._id}/details`}><button>Read More...</button></Link>
            </div>
        </div>
    );
}

export default MyCarCard;
