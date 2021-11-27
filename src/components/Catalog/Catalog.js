import styles from './Catalog.module.css'


const Catalog = () => {

    return (
        <>
            <p className={styles['text-box']}></p>

            <div className={styles['search-box']}>
                <i className={styles['fa-search']} aria-hidden="true"></i>
                <input type="text" name="" placeholder="Search by brand" />
            </div>

            <h2 className={styles['destination-catalog']}>Cars Catalog</h2>


            <div className={styles['main-card']}>


                <div className={styles.card}>

                    <div className={styles.image}>
                        <img src="https://wallpaperaccess.com/full/329482.jpg" alt="cars" />
                    </div>
                    <div className={styles.title}>
                        <h1>
                            Subaru Impreza</h1>
                    </div>
                    <div className={styles.des}>
                        <p>Year:2007, Fuel:Petrol, Mileage:222222 km</p>
                        <p>Price: 20000 </p>
                        <p>City: Stara Zagora</p>
                        <button>Read More...</button>
                    </div>
                </div>


                <div className={styles.card}>

                    <div className={styles.image}>
                        <img src="https://wallpaperaccess.com/full/329482.jpg" alt="cars" />
                    </div>
                    <div className={styles.title}>
                        <h1>
                            Subaru Impreza</h1>
                    </div>
                    <div className={styles.des}>
                        <p>Year:2007, Fuel:Petrol, Mileage:222222 km</p>
                        <p>Price: 20000 </p>
                        <p>City: Stara Zagora</p>
                        <button>Read More...</button>
                    </div>
                </div>


                <div className={styles.card}>

                    <div className={styles.image}>
                        <img src="https://wallpaperaccess.com/full/329482.jpg" alt="cars" />
                    </div>
                    <div className={styles.title}>
                        <h1>
                            Subaru Impreza</h1>
                    </div>
                    <div className={styles.des}>
                        <p>Year:2007, Fuel:Petrol, Mileage:222222 km</p>
                        <p>Price: 20000 </p>
                        <p>City: Stara Zagora</p>
                        <button>Read More...</button>
                    </div>
                </div>

                <div className={styles.card}>

                    <div className={styles.image}>
                        <img src="https://wallpaperaccess.com/full/329482.jpg" alt="cars" />
                    </div>
                    <div className={styles.title}>
                        <h1>
                            Subaru Impreza</h1>
                    </div>
                    <div className={styles.des}>
                        <p>Year:2007, Fuel:Petrol, Mileage:222222 km</p>
                        <p>Price: 20000 </p>
                        <p>City: Stara Zagora</p>
                        <button>Read More...</button>
                    </div>
                </div>

                <div className={styles.card}>

                    <div className={styles.image}>
                        <img src="https://wallpaperaccess.com/full/329482.jpg" alt="cars" />
                    </div>
                    <div className={styles.title}>
                        <h1>
                            Subaru Impreza</h1>
                    </div>
                    <div className={styles.des}>
                        <p>Year:2007, Fuel:Petrol, Mileage:222222 km</p>
                        <p>Price: 20000 </p>
                        <p>City: Stara Zagora</p>
                        <button>Read More...</button>
                    </div>
                </div>

                <div className={styles.card}>

                    <div className={styles.image}>
                        <img src="https://wallpaperaccess.com/full/329482.jpg" alt="cars" />
                    </div>
                    <div className={styles.title}>
                        <h1>
                            Subaru Impreza</h1>
                    </div>
                    <div className={styles.des}>
                        <p>Year:2007, Fuel:Petrol, Mileage:222222 km</p>
                        <p>Price: 20000 </p>
                        <p>City: Stara Zagora</p>
                        <button>Read More...</button>
                    </div>
                </div>

            </div>

        </>
    );

}

export default Catalog;