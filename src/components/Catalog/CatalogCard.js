import styles from './Catalog.module.css'

const CatalogCard = ({car}) => {

    return (
        <div className={styles.card}>

            <div className={styles.image}>
                <img src={car.imageUrl} alt="cars" />
            </div>
            <div className={styles.title}>
                <h1>
                    {car.brand}</h1>
            </div>
            <div className={styles.des}>
                <p>Year: {car.year}, Fuel: {car.fuel}, Mileage: {car.mileage} km</p>
                <p>Price: {car.price} </p>
                <p>City: {car.location}</p>
                <button>Read More...</button>
            </div>
        </div>
    );
}

export default CatalogCard;