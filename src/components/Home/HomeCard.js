import styles from './Home.module.css'

const HomeCard = ({car}) => {

    return (
        <div className={styles.card}>

            <div className={styles.image}>
                <img src={car.imageUrl} alt="car" />
            </div>
            <div className={styles.title}>
                <h1>
                    {car.brand}</h1>
            </div>
            <div className={styles.des}>
                <p>Year:{car.year}, Price: {car.price} lv.</p>
                <button>Read More...</button>
            </div>
        </div>
    );
}

export default HomeCard;
