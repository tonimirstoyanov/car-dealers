import styles from './Details.module.css';

const Details = () => {

    return (
        <section className={styles['details-box']}>
            <div className={styles.info}>
                <div className={styles.brand}>Subaru Impreza</div>
                <div className={styles['car-info']}>
                    <p className={styles['car-info-title']}>Car Info:</p>
                    <p className={styles.price}>Price: 22222 BGN</p>
                    <p className={styles.year}>Year: 2007</p>
                    <p className={styles.category}>Category: Saloon</p>
                    <p className={styles.mileage}>Mileage: 22222km</p>
                    <p className={styles.power}>Horse Power: 218 hp</p>
                    <p className={styles.fuel}>Fuel: Petrol</p>
                    <p className={styles.gearbox}>Gearbox: Manual</p>
                    <p className={styles.color}>Color: Blue</p>
                </div>
                <div className={styles.extras}>
                    Extras:
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quaerat veritatis odio doloremque fuga id, iure aspernatur iusto magni consectetur?</p>
                </div>
                <div className={styles.description}>
                    Description:
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quibusdam iusto ipsam non excepturi quam, enim reprehenderit placeat nemo delectus itaque neque at repudiandae omnis quaerat voluptas error ad? Labore repellat ipsum hic perspiciatis quisquam vitae dicta voluptate consequuntur ipsa nobis velit nulla libero dignissimos omnis, aliquid eligendi illum beatae. Ducimus illo earum eos excepturi provident magnam rem ipsam odit adipisci corrupti, nulla harum modi voluptatum dolorem quaerat, assumenda ex?</p>
                </div>
                <div className={styles['seller-info']}>
                    Seller Info:
                    <p>Location: Stara Zagora</p>
                    <p>Contact Number: +3599999999</p>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjARLOrKqF7VJ4aVHSL1395w92cIFvIjyFng&usqp=CAU" alt="" />
            </div>
            <div className={styles['social-btn']}>
                <a href="#" className={styles['edit-btn']}><button>Edit</button></a>
                <a href="#" className={styles['del-btn']}><button>Delete</button></a>
                <a href="#" className={styles.like}><button>Like 0</button></a>
                <a href="#" className={styles.dislike}><button>Dislike 0</button></a>
                <p className={styles['thanks-for-vote']}>Thanks For Voting!</p>
            </div>
        </section>
    )
}

export default Details