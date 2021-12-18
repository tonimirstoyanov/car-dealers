import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './Home.module.css'
import HomeCard from './HomeCard.js';
import * as carService from '../../services/carService.js';

const Home = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        carService.lastAdded()
            .then(car => {
                setCars(car)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div className={styles.main}>

                <div className={styles['main-text']}>
                    <p>Welcome,</p>
                    <Link className={styles['button-view-catalog']} to="/car/catalog"><button>View Catalog</button></Link>
                </div>
                <div className={styles['main-card']}>

                    <div className={styles['last-offers']}>Last added offers</div>

                    {cars.length > 0
                        ? cars.map(x => <HomeCard key={x._id} car={x} />)
                        : <h2 className={styles['no-cars']}>No cars yet</h2>
                    }

                </div>

            </div>
        </>
    );
}

export default Home;