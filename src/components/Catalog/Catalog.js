import { useEffect, useState } from 'react';

import styles from './Catalog.module.css'
import CatalogCard from './CatalogCard.js';
import * as carService from '../../services/carService.js';


const Catalog = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        carService.getAll()
            .then(cars => {
                setCars(cars)
            })
    }, [])


    return (
        <>
            <p className={styles['text-box']}></p>

            <div className={styles['search-box']}>
                <i className={styles['fa-search']} aria-hidden="true"></i>
                <input type="text" name="" placeholder="Search by brand" />
            </div>

            <h2 className={styles['destination-catalog']}>Cars Catalog</h2>


            <div className={styles['main-card']}>


                {cars.length > 0
                    ? cars.map(x => <CatalogCard key={x._id} car={x} />)
                    : <h2 className={styles['no-cars']}>No cars yet</h2>
                }

            </div>

        </>
    );

}

export default Catalog;