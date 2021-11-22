import './Catalog.css'

const Catalog = () => {

    return (
        <>
            <p className="text-box"></p>

            <div className="search-box">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text" name="" placeholder="Search by brand" />
            </div>

            <h2 className="destination-catalog">Cars Catalog</h2>


            <div className="main-card">


                <div className="card">

                    <div className="image">
                        <img src="https://wallpaperaccess.com/full/329482.jpg" alt="cars" />
                    </div>
                    <div className="title">
                        <h1>
                            Subaru Impreza</h1>
                    </div>
                    <div className="des">
                        <p>Year:2007, Fuel:Petrol, Mileage:222222 km</p>
                        <p>Price: 20000 </p>
                        <p>City: Stara Zagora</p>
                        <button>Read More...</button>
                    </div>
                </div>


                <div className="card">

                    <div className="image">

                        <img src="https://wallpaperaccess.com/full/329482.jpg" alt="cars" />
                    </div>
                    <div className="title">
                        <h1>
                            Subaru Impreza</h1>
                    </div>
                    <div className="des">
                        <p>Year:2007, Fuel:Petrol, Mileage:222222 km</p>
                        <p>Price: 20000 </p>
                        <p>City: Stara Zagora</p>
                        <button>Read More...</button>
                    </div>
                </div>


                <div className="card">
                    <div className="image">
                        <img
                            src="https://wallpaperaccess.com/full/329482.jpg" alt="cars" />
                    </div>
                    <div className="title">
                        <h1>
                            Subaru Impreza</h1>
                    </div>
                    <div className="des">
                        <p>Year:2007, Fuel:Petrol, Mileage:222222 km</p>
                        <p>Price: 20000 </p>
                        <p>City: Stara Zagora</p>
                        <button>Read More...</button>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img
                            src="https://wallpaperaccess.com/full/329482.jpg" alt="cars" />
                    </div>
                    <div className="title">
                        <h1>
                            Subaru Impreza</h1>
                    </div>
                    <div className="des">
                        <p>Year:2007, Fuel:Petrol, Mileage:222222 km</p>
                        <p>Price: 20000 </p>
                        <p>City: Stara Zagora</p>
                        <button>Read More...</button>
                    </div>
                </div>

                <div className="card">

                    <div className="image">

                        <img src="https://wallpaperaccess.com/full/329482.jpg" alt="cars" />
                    </div>
                    <div className="title">
                        <h1>
                            Subaru Impreza</h1>
                    </div>
                    <div className="des">
                        <p>Year:2007, Fuel:Petrol, Mileage:222222 km</p>
                        <p>Price: 20000 </p>
                        <p>City: Stara Zagora</p>
                        <button>Read More...</button>
                    </div>
                </div>
                <div className="card">

                    <div className="image">
                        <img src="https://wallpaperaccess.com/full/329482.jpg" alt="cars" />
                    </div>
                    <div className="title">
                        <h1>
                            Subaru Impreza</h1>
                    </div>
                    <div className="des">
                        <p>Year:2007, Fuel:Petrol, Mileage:222222 km</p>

                        <p>Price: 20000 </p>
                        <p>City: Stara Zagora</p>
                        <button>Read More...</button>
                    </div>
                </div>

            </div>
            <footer>
                © JS Back-End Exam 2021
            </footer>
        </>
    );

}

export default Catalog;