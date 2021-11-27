import styles from './Home.module.css'

const Home = () => {

    return (
        <>
            <div className={styles.main}>

                <div class={styles['main-text']}>
                    <p>Welcome,</p>
                    <button>View Catalog</button>
                </div>
                <div className={styles['main-card']}>

                    <div className={styles['last-offers']}>Last added offers</div>

                    <div className={styles.card}>

                        <div className={styles.image}>
                            <img src="https://wallpaperaccess.com/full/329482.jpg" alt="car" />
                        </div>
                        <div className={styles.title}>
                            <h1>
                                Subaru Impreza</h1>
                        </div>
                        <div className={styles.des}>
                            <p>Year:2006</p>
                            <button>Read More...</button>
                        </div>
                    </div>


                    <div className={styles.card}>

                        <div className={styles.image}>
                            <img src="https://wallpaperaccess.com/full/329482.jpg" alt="car" />
                        </div>
                        <div className={styles.title}>
                            <h1>
                                Subaru Impreza</h1>
                        </div>
                        <div className={styles.des}>
                            <p>Year:2006</p>
                            <button>Read More...</button>
                        </div>
                    </div>


                    <div className={styles.card}>

                        <div className={styles.image}>
                            <img src="https://wallpaperaccess.com/full/329482.jpg" alt="car" />
                        </div>
                        <div className={styles.title}>
                            <h1>
                                Subaru Impreza</h1>
                        </div>
                        <div className={styles.des}>
                            <p>Year:2006</p>
                            <button>Read More...</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Home;