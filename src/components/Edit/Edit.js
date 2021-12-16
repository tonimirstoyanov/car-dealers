import styles from './Edit.module.css'

import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router'

import * as carService from '../../services/carService.js'
import { AuthContext } from '../../context/authContext.js'
import Spinner from '../Common/Spinner/Spinner.js'
import { isAuthenticated } from '../../hoc/isAuth.js'
import { isOwner } from '../../hoc/isOwner.js'


const categories = [
    { value: 'cabriolet', text: 'Cabriolet' },
    { value: 'small-car', text: 'Small Car' },
    { value: 'suv/off-road', text: 'SUV/Off-road' },
    { value: 'estate', text: 'Estate Car' },
    { value: 'saloon', text: 'Saloon' },
    { value: 'sports car/coupe', text: 'Sports Car/Couper' },
    { value: 'van', text: 'Van' },
]

const fuels = [
    { value: 'petrol', text: 'Petrol' },
    { value: 'diesel', text: 'Diesel' },
    { value: 'electric', text: 'Electric' },
    { value: 'lpg', text: 'LPG' },
    { value: 'hybrid', text: 'Hybrid' },
    { value: 'hydrogen', text: 'Hydrogen' },
]

const gearboxes = [
    { value: 'manual', text: 'Manual' },
    { value: 'semi-automatic', text: 'Semi-automatic' },
    { value: 'automatic', text: 'Automatic' },
]

const Edit = ({ match }) => {

    let history = useHistory()
    const carId = match.params.carId
    const [car, setCar] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    let { user } = useContext(AuthContext)


    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                setCar(result)
            })
    }, [carId])

    const carEditSumbitHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        let formData = new FormData(e.currentTarget)
        let carData = Object.fromEntries(formData)

        console.log(carData)

        carService.updateOne(carId, carData, user.accessToken)
            .then(res => {
                console.log(res)
                setIsLoading(false)
                setCar(res)
                history.push(`/car/${carId}/details`)
            })

    }

    return (
        <>
            {isLoading ? <Spinner /> :
                <section className={styles['edit-box']}>
                    <h2>Edit Ad</h2>
                    <form id="edit" method="PUT" onSubmit={carEditSumbitHandler}>
                        <div className={styles['edit-field']}>
                            <input type="text" name="brand" id="brand" defaultValue={car.brand} />
                            <label>Brand</label>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="number" name="price" id="price " defaultValue={car.price} />
                            <label>Price</label>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="number" name="year" id="year" defaultValue={car.year} />
                            <label>Year</label>
                        </div>
                        <div className={styles['edit-field']}>
                            <label htmlFor="category" className={styles['category-label']}>Category</label>
                            <select name="category" className={styles.category} value={car.category} onChange={(e) => setCar(st => ({ ...st, category: e.target.value }))}>
                                {categories.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                            </select>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="number" name="mileage" id="mileage" defaultValue={car.mileage} />
                            <label>Mileage</label>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="number" name="horsePower" id="horse-power" defaultValue={car.horsePower} />
                            <label>Horse Power</label>
                        </div>
                        <div className={styles['edit-field']}>
                            <label htmlFor="fuel" className={styles['fuel-label']}>Fuel</label>
                            <select name="fuel" className={styles.fuel} value={car.fuel} onChange={(e) => setCar(st => ({ ...st, fuel: e.target.value }))}>
                                {fuels.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                            </select>
                        </div>
                        <div className={styles['edit-field']}>
                            <label htmlFor="gearbox" className={styles['gearbox-label']}>Gearbox</label>
                            <select name="gearbox" className={styles.gearbox} value={car.gearbox} onChange={(e) => setCar(st => ({ ...st, gearbox: e.target.value }))}>
                                {gearboxes.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                            </select>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="text" name="color" id="color" defaultValue={car.color} />
                            <label>Color</label>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="text" name="extras" id="extras" defaultValue={car.extras} />
                            <label>Extras</label>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="text" name="description" id="description" defaultValue={car.description} />
                            <label>Description</label>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="text" name="location" id="location" defaultValue={car.location} />
                            <label>Location</label>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="number" name="contactNumber" id="contact-number" defaultValue={car.contactNumber} />
                            <label>Contact Number</label>
                        </div>
                        <div className={styles['edit-field']}>
                            <input type="text" name="imageUrl" id="imageUrl" defaultValue={car.imageUrl} />
                            <label>Image</label>
                        </div>
                        <button className={styles['btn-submit']} type="submit">Submit</button>
                    </form>
                </section>}
        </>
    );
}

export default isOwner(isAuthenticated(Edit));