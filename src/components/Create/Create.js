import styles from './Create.module.css'

const Create = () => {

    return (
        <section className={styles['create-box']}>
            <h2>Create Ad</h2>
            <form id="create">
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
                        <option id="cabriolet">Cabriolet</option>
                        <option id="small-car">Small Car</option>
                        <option id="suv">SUV/Off-road</option>
                        <option id="estate">Estate Car</option>
                        <option id="saloon">Saloon</option>
                        <option id="coupe">Sports Car/Coupe</option>
                        <option id="van">Van</option>
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
                        <option id="petrol">Petrol</option>
                        <option id="diesel">Diesel</option>
                        <option id="electric">Electric</option>
                        <option id="lpg">LPG</option>
                        <option id="hybrid">Hybrid</option>
                        <option id="hydrogen">Hydrogen</option>
                    </select>
                </div>
                <div className={styles['create-field']}>
                    <label htmlFor="gearbox" className={styles['gearbox-label']}>Gearbox</label>
                    <select name="gearbox" className={styles.gearbox}>
                        <option id="manual">Manual</option>
                        <option id="semi-automatic">Semi-automatic</option>
                        <option id="automatic">Automatic</option>
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
                    <input type="text" name="ImageUrl" id="imageUrl" required="" />
                    <label>Image</label>
                </div>
                <button className={styles['btn-submit']} type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Create