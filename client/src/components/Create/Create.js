import styles from './Create.module.css'

import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import * as carService from '../../services/carService.js'
import { AuthContext } from '../../context/authContext.js'
import { isAuthenticated } from '../../hoc/isAuth.js'
import * as validation from '../../validation/validation.js'
import { NotificationContext } from '../../context/notificationContext.js'

const Create = () => {
    
    let history = useHistory()
    const { user } = useContext(AuthContext)
    const { successAlert } = useContext(NotificationContext)

    const initialValue = {
        brand: '', price: '', year: '', category: '', mileage: '', horsePower: '', fuel: '',
        gearbox: '', color: '', extras: '', description: '', location: '', contactNumber: '', imageUrl: '', error: 'false'
    }
    const [errorMessage, setErrorMessage] = useState(initialValue)
    const [error, setError] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const createSubmitHandler = (e) => {

        e.preventDefault()

        let formData = new FormData(e.currentTarget)

        let { brand, price, year, category, mileage, horsePower, fuel, gearbox, color, extras, description, location, contactNumber, imageUrl } = Object.fromEntries(formData)

        let data = {
            brand, price, year, category, mileage, horsePower, fuel,
            gearbox, color, extras, description, location, contactNumber, imageUrl
        };
        if (!error) {
            carService.create(data, user.accessToken)
                .then(result => {
                    console.log(result)
                    successAlert('Successfully created')
                    history.push('/car/catalog')
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
        <section className={styles['create-box']}>
            <h2>Create Ad</h2>
            <form id="create" method="POST" onSubmit={createSubmitHandler}>
                <div className={styles['create-field']}>
                    <input type="text" name="brand" id="brand" onBlur={brandChangeHandler} />
                    <label>Brand</label>
                    <span className={errorMessage.brand ? styles['errors'] : 'hidden'}>{errorMessage.brand}</span>
                </div>
                <div className={styles['create-field']}>
                    <input type="number" name="price" id="price " onBlur={priceChangeHandler} />
                    <label>Price</label>
                    <span className={errorMessage.price ? styles['errors'] : 'hidden'}>{errorMessage.price}</span>
                </div>
                <div className={styles['create-field']}>
                    <input type="number" name="year" id="year" onBlur={yearChangeHandler} />
                    <label>Year</label>
                    <span className={errorMessage.year ? styles['errors'] : 'hidden'}>{errorMessage.year}</span>

                </div>
                <div className={styles['create-field']}>
                    <label htmlFor="category" className={styles['category-label']}>Category</label>
                    <select name="category" className={styles.category} onBlur={categoryChangeHandler}>
                        <option value="Choose category">Choose category...</option>
                        <option value="Cabriolet">Cabriolet</option>
                        <option value="Small Car">Small Car</option>
                        <option value="SUV/Off-road">SUV/Off-road</option>
                        <option value="Estate Car">Estate Car</option>
                        <option value="Saloon">Saloon</option>
                        <option value="Sports Car/Coupe">Sports Car/Coupe</option>
                        <option value="Van">Van</option>
                    </select>
                    <span className={errorMessage.category ? styles['errors'] : 'hidden'}>{errorMessage.category}</span>
                </div>
                <div className={styles['create-field']}>
                    <input type="number" name="mileage" id="mileage" onBlur={mileageChangeHandler} />
                    <label>Mileage</label>
                    <span className={errorMessage.mileage ? styles['errors'] : 'hidden'}>{errorMessage.mileage}</span>
                </div>
                <div className={styles['create-field']}>
                    <input type="number" name="horsePower" id="horse-power" onBlur={horsePowerChangeHandler} />
                    <label>Horse Power</label>
                    <span className={errorMessage.horsePower ? styles['errors'] : 'hidden'}>{errorMessage.horsePower}</span>
                </div>
                <div className={styles['create-field']}>
                    <label htmlFor="fuel" className={styles['fuel-label']}>Fuel</label>
                    <select name="fuel" className={styles.fuel} onBlur={fuelChangeHandler}>
                        <option value="Choose fuel">Choose fuel...</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Electric">Electric</option>
                        <option value="LPG">LPG</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Hydrogen">Hydrogen</option>
                    </select>
                    <span className={errorMessage.fuel ? styles['errors'] : 'hidden'}>{errorMessage.fuel}</span>
                </div>
                <div className={styles['create-field']}>
                    <label htmlFor="gearbox" className={styles['gearbox-label']}>Gearbox</label>
                    <select name="gearbox" className={styles.gearbox} onBlur={gearboxChangeHandler}>
                        <option value="Choose gearbox">Choose gearbox...</option>
                        <option value="Manual">Manual</option>
                        <option value="Semi-automatic">Semi-automatic</option>
                        <option value="Automatic">Automatic</option>
                    </select>
                    <span className={errorMessage.gearbox ? styles['errors'] : 'hidden'}>{errorMessage.gearbox}</span>
                </div>
                <div className={styles['create-field']}>
                    <input type="text" name="color" id="color" onBlur={colorChangeHandler} />
                    <label>Color</label>
                    <span className={errorMessage.color ? styles['errors'] : 'hidden'}>{errorMessage.color}</span>
                </div>
                <div className={styles['create-field']}>
                    <input type="text" name="extras" id="extras" onBlur={extrasChangeHandler} />
                    <label>Extras</label>
                    <span className={errorMessage.extras ? styles['errors'] : 'hidden'}>{errorMessage.extras}</span>
                </div>
                <div className={styles['create-field']}>
                    <input type="text" name="description" id="description" onBlur={descriptionChangeHandler} />
                    <label>Description</label>
                    <span className={errorMessage.description ? styles['errors'] : 'hidden'}>{errorMessage.description}</span>
                </div>
                <div className={styles['create-field']}>
                    <input type="text" name="location" id="location" onBlur={locationChangeHandler} />
                    <label>Location</label>
                    <span className={errorMessage.location ? styles['errors'] : 'hidden'}>{errorMessage.location}</span>
                </div>
                <div className={styles['create-field']}>
                    <input type="number" name="contactNumber" id="contact-number" onBlur={contactNumberChangeHandler} />
                    <label>Contact Number</label>
                    <span className={errorMessage.contactNumber ? styles['errors'] : 'hidden'}>{errorMessage.contactNumber}</span>
                </div>
                <div className={styles['create-field']}>
                    <input type="text" name="imageUrl" id="imageUrl" onBlur={imageUrlChangeHandler} />
                    <label>Image Url</label>
                    <span className={errorMessage.imageUrl ? styles['errors'] : 'hidden'}>{errorMessage.imageUrl}</span>
                </div>
                <button className={styles['btn-submit']} type="submit">Submit</button>
            </form>
        </section>
    );
}

export default isAuthenticated(Create)