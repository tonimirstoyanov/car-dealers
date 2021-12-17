import { useEffect, useState, useContext, } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import styles from './Details.module.css';

import * as carService from '../../services/carService.js'
import { AuthContext } from '../../context/authContext.js';
import ConfirmDialog from '../Common/ConfirmDialog/ConfirmDialog.js';

const Details = ({ match }) => {

    let carId = match.params.carId;

    let history = useHistory()
    const [car, setCar] = useState({})
    const [isOpen, setIsOpen] = useState(false)
    let { user, setIsOwner } = useContext(AuthContext)


    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                setCar(result)
                setIsOwner(Boolean(result.creator === user.userId))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const deleteHandler = (e) => {
        e.preventDefault()

        carService.deleteOne(carId, user.accessToken)
            .then(res => {
                console.log(res)

                history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
            .finally(
                setIsOpen(false)
            )
    }

    const likeButtonClick = (e) => {
        e.preventDefault()
        if (user.userId == car.creator) {
            console.log('as')
            return;
        }

        if (car.votesOnAd.includes(user.userId)) {
            console.log('here')
            return;
        }

        carService.like(carId, user, user.accessToken)
            .then((res) => {
                console.log(res)
                // state => ...setState and spinner logic
                console.log(car)
                setCar(car => ({ ...car, likes: res.likes, votesOnAd: res.votesOnAd }))
            })
            .catch(err => {
                console.log(err)
            })
    };

    const dislikeButtonClick = (e) => {
        e.preventDefault()
        if (user.userId == car.creator) {
            console.log('as')
            return;
        }

        if (car.votesOnAd.includes(user.userId)) {
            console.log('here')
            return;
        }

        carService.dislike(carId, user, user.accessToken)
            .then((res) => {
                // console.log(res)
                // spinner logic
                // console.log(car)
                setCar(car => ({ ...car, dislikes: res.dislikes, votesOnAd: res.votesOnAd }))
            })
            .catch(err => {
                console.log(err)
            })
    }

    const ownerButtons = (
        <>
            <Link to={`/car/${car._id}/edit`} className={styles['edit-btn']}><button>Edit</button></Link>
            <Link to={`/car/${car._id}/delete`} className={styles['del-btn']} onClick={() => setIsOpen(true)}><button>Delete</button></Link>
        </>
    );

    const userButtons = (
        <>
            <Link to={`/car/${car._id}/likes`} onClick={likeButtonClick} className={car.votesOnAd?.includes(user.userId) ? styles.disabledLike : styles.like}><button disabled={car.votesOnAd?.includes(user.userId)}>Like</button></Link>
            <Link to={`/car/${car._id}/dislikes`} onClick={dislikeButtonClick} className={car.votesOnAd?.includes(user.userId) ? styles.disabledDislike : styles.dislike}><button disabled={car.votesOnAd?.includes(user.userId)}>Dislike</button></Link>
        </>
    )


    return (
        <>
            {isOpen && <ConfirmDialog setIsOpen={setIsOpen} onDelete={deleteHandler} />}
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
                        <p className={styles.likeCount}>Like: {car.likes}</p>
                        <p className={styles.dislikeCount} >Dislike: {car.dislikes}</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Details