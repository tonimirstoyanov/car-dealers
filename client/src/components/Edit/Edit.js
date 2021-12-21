import styles from './Edit.module.css'

import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router'

import * as carService from '../../services/carService.js'
import { AuthContext } from '../../context/authContext.js'
import Spinner from '../Common/Spinner/Spinner.js'
import * as validation from '../../validation/validation.js'
import { isOwner } from '../../hoc/isOwner.js'
import { isAuthenticated } from '../../hoc/isAuth.js'
import { NotificationContext } from '../../context/notificationContext.js'

const categories = [
    { value: 'Choose category', text: 'Choose category...' },
    { value: 'Cabriolet', text: 'Cabriolet' },
    { value: 'Small Car', text: 'Small Car' },
    { value: 'SUV/Off-road', text: 'SUV/Off-road' },
    { value: 'Estate Car', text: 'Estate Car' },
    { value: 'Saloon', text: 'Saloon' },
    { value: 'Sports Car/Coupe', text: 'Sports Car/Coupe' },
    { value: 'Van', text: 'Van' },
]

const fuels = [
    { value: 'Choose fuel', text: 'Choose fuel...' },
    { value: 'Petrol', text: 'Petrol' },
    { value: 'Diesel', text: 'Diesel' },
    { value: 'Electric', text: 'Electric' },
    { value: 'LPG', text: 'LPG' },
    { value: 'Hybrid', text: 'Hybrid' },
    { value: 'Hydrogen', text: 'Hydrogen' },
]

const gearboxes = [
    { value: 'Choose gearbox', text: 'Choose gearbox...' },
    { value: 'Manual', text: 'Manual' },
    { value: 'Semi-automatic', text: 'Semi-automatic' },
    { value: 'Automatic', text: 'Automatic' },
]

const Edit = ({ match }) => {

    let history = useHistory()
    const { successAlert } = useContext(NotificationContext)
    const carId = match.params.carId
    const [car, setCar] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState({})
    const [error, setError] = useState(false)
    let { user } = useContext(AuthContext)

    useEffect(() => {
        window.scrollTo(0, 0)
        carService.getOne(carId)
            .then(result => {
                console.log(result)
                setCar(result)
            })
            .catch(err => {
                console.log(err)
            })
    }, [carId])

    const carEditSumbitHandler = (e) => {

        e.preventDefault()
        let formData = new FormData(e.currentTarget)
        let carData = Object.fromEntries(formData)

        console.log(error)

        if (!error) {
            setIsLoading(true)
            carService.updateOne(carId, carData, user.accessToken)

                .then(res => {
                    setIsLoading(false)
                    setCar(res)
                    setErrorMessage(res)
                    successAlert('Successfully edited')
                    history.push(`/car/${carId}/details`)
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }
    const brandChangeHandler = (e) => {
        let isValid = validation.brand(e.target.value);
        setErrorMessage(state => ({ ...state, brand: isValid.message }))
        setError(isValid.error)
    }
    const priceChangeHandler = (e) => {
        let isValid = validation.price(e.target.value);
        setErrorMessage(state => ({ ...state, price: isValid.message }))
        setError(isValid.error)
    }
    const yearChangeHandler = (e) => {
        let isValid = validation.year(e.target.value);
        setErrorMessage(state => ({ ...state, year: isValid.message }))
        setError(isValid.error)
    }
    const categoryChangeHandler = (e) => {
        let isValid = validation.category(e.target.value);
        setErrorMessage(state => ({ ...state, category: isValid.message }))
        setError(isValid.error)
    }
    const mileageChangeHandler = (e) => {
        let isValid = validation.mileage(e.target.value);
        setErrorMessage(state => ({ ...state, mileage: isValid.message }))
        setError(isValid.error)
    }
    const horsePowerChangeHandler = (e) => {
        let isValid = validation.horsePower(e.target.value);
        setErrorMessage(state => ({ ...state, horsePower: isValid.message }))
        setError(isValid.error)
    }
    const fuelChangeHandler = (e) => {
        let isValid = validation.fuel(e.target.value);
        setErrorMessage(state => ({ ...state, fuel: isValid.message }))
        setError(isValid.error)
    }
    const gearboxChangeHandler = (e) => {
        let isValid = validation.gearbox(e.target.value);
        setErrorMessage(state => ({ ...state, gearbox: isValid.message }))
        setError(isValid.error)
    }
    const colorChangeHandler = (e) => {
        let isValid = validation.color(e.target.value);
        setErrorMessage(state => ({ ...state, color: isValid.message }))
        setError(isValid.error)
    }
    const extrasChangeHandler = (e) => {
        let isValid = validation.extras(e.target.value);
        setErrorMessage(state => ({ ...state, extras: isValid.message }))
        setError(isValid.error)
    }
    const descriptionChangeHandler = (e) => {
        let isValid = validation.description(e.target.value);
        setErrorMessage(state => ({ ...state, description: isValid.message }))
        setError(isValid.error)
    }
    const locationChangeHandler = (e) => {
        let isValid = validation.location(e.target.value);
        setErrorMessage(state => ({ ...state, location: isValid.message }))
        setError(isValid.error)
    }
    const contactNumberChangeHandler = (e) => {
        let isValid = validation.contactNumber(e.target.value);
        setErrorMessage(state => ({ ...state, contactNumber: isValid.message }))
        setError(isValid.error)
    }
    const imageUrlChangeHandler = (e) => {
        let isValid = validation.image(e.target.value);
        setErrorMessage(state => ({ ...state, imageUrl: isValid.message }))
        setError(isValid.error)
    }
    return (
        <>
            {isLoading ? <Spinner /> :
                <section className={styles['edit-box']}>
                    <h2>Edit Ad</h2>
                    <form id="edit" method="PUT" onSubmit={carEditSumbitHandler}>
                        <div className={styles['edit-field']}>
                            <input type="text" name="brand" id="brand" defaultValue={car.brand} onBlur={brandChangeHandler} />
                            <label>Brand</label>
                            <span className={errorMessage.brand ? styles['errors'] : 'hidden'}>{errorMessage.brand}</span>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="number" name="price" id="price " defaultValue={car.price} onBlur={priceChangeHandler} />
                            <label>Price</label>
                            <span className={errorMessage.price ? styles['errors'] : 'hidden'}>{errorMessage.price}</span>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="number" name="year" id="year" defaultValue={car.year} onBlur={yearChangeHandler} />
                            <label>Year</label>
                            <span className={errorMessage.year ? styles['errors'] : 'hidden'}>{errorMessage.year}</span>
                        </div>
                        <div className={styles['edit-field']}>
                            <label htmlFor="category" className={styles['category-label']}>Category</label>
                            <select name="category" className={styles.category} value={car.category} onChange={(e) => setCar(st => ({ ...st, category: e.target.value }))} onBlur={categoryChangeHandler}>
                                {categories.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                            </select>
                            <span className={errorMessage.category ? styles['errors'] : 'hidden'}>{errorMessage.category}</span>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="number" name="mileage" id="mileage" defaultValue={car.mileage} onBlur={mileageChangeHandler} />
                            <label>Mileage</label>
                            <span className={errorMessage.mileage ? styles['errors'] : 'hidden'}>{errorMessage.mileage}</span>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="number" name="horsePower" id="horse-power" defaultValue={car.horsePower} onBlur={horsePowerChangeHandler} />
                            <label>Horse Power</label>
                            <span className={errorMessage.horsePower ? styles['errors'] : 'hidden'}>{errorMessage.horsePower}</span>
                        </div>
                        <div className={styles['edit-field']}>
                            <label htmlFor="fuel" className={styles['fuel-label']}>Fuel</label>
                            <select name="fuel" className={styles.fuel} value={car.fuel} onChange={(e) => setCar(st => ({ ...st, fuel: e.target.value }))} onBlur={fuelChangeHandler}>
                                {fuels.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                            </select>
                            <span className={errorMessage.fuel ? styles['errors'] : 'hidden'}>{errorMessage.fuel}</span>
                        </div>
                        <div className={styles['edit-field']}>
                            <label htmlFor="gearbox" className={styles['gearbox-label']}>Gearbox</label>
                            <select name="gearbox" className={styles.gearbox} value={car.gearbox} onChange={(e) => setCar(st => ({ ...st, gearbox: e.target.value }))} onBlur={gearboxChangeHandler}>
                                {gearboxes.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                            </select>
                            <span className={errorMessage.gearbox ? styles['errors'] : 'hidden'}>{errorMessage.gearbox}</span>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="text" name="color" id="color" defaultValue={car.color} onBlur={colorChangeHandler} />
                            <label>Color</label>
                            <span className={errorMessage.color ? styles['errors'] : 'hidden'}>{errorMessage.color}</span>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="text" name="extras" id="extras" defaultValue={car.extras} onBlur={extrasChangeHandler} />
                            <label>Extras</label>
                            <span className={errorMessage.extras ? styles['errors'] : 'hidden'}>{errorMessage.extras}</span>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="text" name="description" id="description" defaultValue={car.description} onBlur={descriptionChangeHandler} />
                            <label>Description</label>
                            <span className={errorMessage.description ? styles['errors'] : 'hidden'}>{errorMessage.description}</span>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="text" name="location" id="location" defaultValue={car.location} onBlur={locationChangeHandler} />
                            <label>Location</label>
                            <span className={errorMessage.location ? styles['errors'] : 'hidden'}>{errorMessage.location}</span>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="number" name="contactNumber" id="contact-number" defaultValue={car.contactNumber} onBlur={contactNumberChangeHandler} />
                            <label>Contact Number</label>
                            <span className={errorMessage.contactNumber ? styles['errors'] : 'hidden'}>{errorMessage.contactNumber}</span>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="text" name="imageUrl" id="imageUrl" defaultValue={car.imageUrl} onBlur={imageUrlChangeHandler} />
                            <label>Image</label>
                            <span className={errorMessage.imageUrl ? styles['errors'] : 'hidden'}>{errorMessage.imageUrl}</span>
                        </div>
                        <button className={styles['btn-submit']} type="submit">Submit</button>
                    </form>
                </section>}
        </>
    );
}

export default isAuthenticated(isOwner(Edit));