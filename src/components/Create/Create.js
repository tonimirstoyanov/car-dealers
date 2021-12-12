import styles from './Create.module.css'
import * as carService from '../../services/carService.js'
import { useContext } from 'react'
import {AuthContext} from '../../context/authContext.js'
import { useHistory } from 'react-router'

const Create = () => {
    const { user } = useContext(AuthContext)
    let history = useHistory()
    const createSubmitHandler = (e) => {

        e.preventDefault()

        let formData = new FormData(e.currentTarget)

        let { brand, price, year, category, mileage, horsePower, fuel, gearbox, color, extras, description, location, contactNumber, imageUrl } = Object.fromEntries(formData)

        let data = {
            brand, price, year, category, mileage, horsePower, fuel,
            gearbox, color, extras, description, location, contactNumber, imageUrl
        };
        let accessToken = user.accessToken;

        carService.create(data, accessToken)
            .then(result => {
                    console.log(result)

                    history.push('/car/catalog')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <section className={styles['create-box']}>
            <h2>Create Ad</h2>
            <form id="create" method="POST" onSubmit={createSubmitHandler}>
                <div className={styles['create-field']}>
                    <input type="text" name="brand" id="brand" required="" />
                    <label>Brand</label>
                </div>
                <div className={styles['create-field']}>
                    <input type="number" name="price" id="price " required="" />
                    <label>Price</label>
                </div>
                <div className={styles['create-field']}>
                    <input type="number" name="year" id="year" required="" />
                    <label>Year</label>
                </div>
                <div className={styles['create-field']}>
                    <label htmlFor="category" className={styles['category-label']}>Category</label>
                    <select name="category" className={styles.category}>
                        <option value="cabriolet">Cabriolet</option>
                        <option value="small-car">Small Car</option>
                        <option value="suv/off-road">SUV/Off-road</option>
                        <option value="estate">Estate Car</option>
                        <option value="saloon">Saloon</option>
                        <option value="sports car/coupe">Sports Car/Coupe</option>
                        <option value="van">Van</option>
                    </select>
                </div>
                <div className={styles['create-field']}>
                    <input type="number" name="mileage" id="mileage" required="" />
                    <label>Mileage</label>
                </div>
                <div className={styles['create-field']}>
                    <input type="number" name="horsePower" id="horse-power" required="" />
                    <label>Horse Power</label>
                </div>
                <div className={styles['create-field']}>
                    <label htmlFor="fuel" className={styles['fuel-label']}>Fuel</label>
                    <select name="fuel" className={styles.fuel}>
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                        <option value="electric">Electric</option>
                        <option value="lpg">LPG</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="hydrogen">Hydrogen</option>
                    </select>
                </div>
                <div className={styles['create-field']}>
                    <label htmlFor="gearbox" className={styles['gearbox-label']}>Gearbox</label>
                    <select name="gearbox" className={styles.gearbox}>
                        <option value="manual">Manual</option>
                        <option value="semi-automatic">Semi-automatic</option>
                        <option value="automatic">Automatic</option>
                    </select>
                </div>
                <div className={styles['create-field']}>
                    <input type="text" name="color" id="color" required="" />
                    <label>Color</label>
                </div>
                <div className={styles['create-field']}>
                    <input type="text" name="extras" id="extras" required="" />
                    <label>Extras</label>
                </div>
                <div className={styles['create-field']}>
                    <input type="text" name="description" id="description" required="" />
                    <label>Description</label>
                </div>
                <div className={styles['create-field']}>
                    <input type="text" name="location" id="location" required="" />
                    <label>Location</label>
                </div>
                <div className={styles['create-field']}>
                    <input type="number" name="contactNumber" id="contact-number" required="" />
                    <label>Contact Number</label>
                </div>
                <div className={styles['create-field']}>
                    <input type="text" name="imageUrl" id="imageUrl" required="" />
                    <label>Image</label>
                </div>
                <button className={styles['btn-submit']} type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Create