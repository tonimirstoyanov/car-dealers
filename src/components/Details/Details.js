import './Details.css';

const Details = () => {

    return (
        <section className="details-box">
            <div className="info">
                <div className="brand">Subaru Impreza</div>
                <div className="car-info">
                    <p className="car-info-title">Car Info:</p>
                    <p className="price">Price: 22222 BGN</p>
                    <p className="year">Year: 2007</p>
                    <p className="category">Category: Saloon</p>
                    <p className="mileage">Mileage: 22222km</p>
                    <p className="power">Horse Power: 218 hp</p>
                    <p className="fuel">Fuel: Petrol</p>
                    <p className="gearbox">Gearbox: Manual</p>
                    <p className="colour">Color: Blue</p>
                </div>
                <div className="extras">
                    Extras:
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere qui nam eius tempore quam adipisci, ipsum incidunt enim reprehenderit.</p>
                </div>
                <div className="description">
                    Description:
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perferendis, commodi ex voluptatem asperiores atque omnis nesciunt eaque praesentium veniam rem adipisci iure, tempore consequuntur delectus inventore odit non voluptas nisi! Animi, debitis minus! Minima, ratione quaerat officia quibusdam itaque saepe expedita, libero odit velit enim natus dolore officiis minus.</p>
                </div>
                <div className="seller-info">
                    Seller Info:
                    <p>Location: Stara Zagora</p>
                    <p>Contact Number: +3599999999</p>
                </div>
                <img src="/img/impreza/329482.jpg" alt="" />
            </div>
            <div className="social-btn">
                <a href="#" className="edit-btn"><button>Edit</button></a>
                <a href="#" className="del-btn"><button>Delete</button></a>
                <a href="#" className="like"><button>Like 0</button></a>
                <a href="#" className="dislike"><button>Dislike 0</button></a>
                <p className="thanks-for-vote">Thanks For Voting!</p>

            </div>
        </section>
    )
}

export default Details