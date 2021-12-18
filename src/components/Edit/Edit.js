import styles from './Edit.module.css'

import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router'

import * as carService from '../../services/carService.js'
import { AuthContext } from '../../context/authContext.js'
import Spinner from '../Common/Spinner/Spinner.js'


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
    const carId = match.params.carId
    const [car, setCar] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    let { user } = useContext(AuthContext)


    useEffect(() => {
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
        setIsLoading(true)
        let formData = new FormData(e.currentTarget)
        let carData = Object.fromEntries(formData)

        console.log(carData)

        carService.updateOne(carId, carData, user.accessToken)
            .then(res => {
                setIsLoading(false)
                setCar(res)
                history.push(`/car/${carId}/details`)
            })
            .catch(err => {
                console.log(err)
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

export default Edit;