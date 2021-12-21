import { useState, useEffect, useContext } from 'react';

import styles from './MyCar.module.css'
import * as carService from '../../services/carService.js'
import { AuthContext } from '../../context/authContext.js';
import MyCarCard from './MyCarCard.js';
import { isAuthenticated } from '../../hoc/isAuth.js';

function MyCars({ match }) {

    let userId = match.params.userId;
    console.log(userId)
    const { user } = useContext(AuthContext)

    let [cars, myCars] = useState([]);
    useEffect(() => {
        carService.getMyCars(userId, user.accessToken)
            .then(result => {
                myCars(result)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <section className={styles['my-listings-section']}>
            <div className={styles.container}>
                <h1 className={styles.textAd}>My added cars</h1>
                <div className={styles['main-card']}>
                    {cars.length > 0
                        ? cars.map(x => <MyCarCard key={x._id} car={x} />)
                        : <h2 className={styles['no-cars']}>No cars yet</h2>
                    }
                </div>
            </div>
        </ section>
    );
}

export default isAuthenticated(MyCars);