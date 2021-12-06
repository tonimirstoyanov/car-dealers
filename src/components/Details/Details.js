import { useEffect, useState } from 'react';
import styles from './Details.module.css';

import * as carService from '../../services/carService.js'

const Details = ({ match }) => {
    // console.log(match.params.carId)
    const [car, setCar] = useState({})

    useEffect(() => {
        carService.getOne(match.params.carId)
            .then(result => {
                setCar(result)
            })
    },[match.params.carId])

    return (
        <section className={styles['details-box']}>
            <div className={styles.info}>
                <div className={styles.brand}>{car.brand}</div>
                <div className={styles['car-info']}>
                    <p className={styles['car-info-title']}>Car Info:</p>
                    <p className={styles.price}>Price: {car.price} BGN</p>
                    <p className={styles.year}>Year: {car.year}</p>
                    <p className={styles.category}>Category: {car.category}</p>
                    <p className={styles.mileage}>Mileage: {car.mileage} km</p>
                    <p className={styles.power}>Horse Power: {car.horsePower} hp</p>
                    <p className={styles.fuel}>Fuel: {car.fuel}</p>
                    <p className={styles.gearbox}>Gearbox: {car.gearbox}</p>
                    <p className={styles.color}>Color: {car.color}</p>
                </div>
                <div className={styles.extras}>
                    Extras:
                    <p>{car.extras}</p>
                </div>
                <div className={styles.description}>
                    Description:
                    <p>{car.description}</p>
                </div>
                <div className={styles['seller-info']}>
                    Seller Info:
                    <p>Location: {car.location}</p>
                    <p>Contact Number: {car.contactNumber}</p>
                </div>
                <img src={car.imageUrl} alt="" />
            </div>
            <div className={styles['social-btn']}>
                <a href="#" className={styles['edit-btn']}><button>Edit</button></a>
                <a href="#" className={styles['del-btn']}><button>Delete</button></a>
                <a className={styles.like}><button>Like 0</button></a>
                <a className={styles.dislike}><button>Dislike 0</button></a>
                <p className={styles['thanks-for-vote']}>Thanks For Voting!</p>
            </div>
        </section>
    )
}

export default Details