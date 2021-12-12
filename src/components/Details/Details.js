import { useEffect, useState, useContext, } from 'react';
import { useHistory } from 'react-router';

import styles from './Details.module.css';

import * as carService from '../../services/carService.js'
import { AuthContext } from '../../context/authContext.js';

const Details = ({ match }) => {

    let history = useHistory()
    // console.log(match.params.carId)
    let carId = match.params.carId;
    const [car, setCar] = useState({})
    let { user } = useContext(AuthContext)


    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                setCar(result)
            })
    }, [carId])

    const deleteHandler = (e) => {
        e.preventDefault()

        carService.deleteOne(carId, user.accessToken)
            .then(res => {
                console.log(res)

                history.push('/')
            })
    }

    const ownerButtons = (
        <>
            <a href={`/car/${match.params.carId}/edit`} className={styles['edit-btn']}><button>Edit</button></a>
            <a href="#" className={styles['del-btn']} onClick={deleteHandler}><button>Delete</button></a>
        </>
    );

    const userButtons = (
        <>
            <a className={styles.like}><button>Like</button></a>
            <a className={styles.dislike}><button>Dislike</button></a>
        </>
    )

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

                {user.userId && (user.userId == car.creator
                    ? ownerButtons
                    : userButtons)
                }

                <div>
                    <p className={styles.likeCount}>Like: 0</p>
                    <p className={styles.dislikeCount} >Dislike: 0</p>
                </div>
            </div>

        </section>
    )
}

export default Details