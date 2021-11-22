import './Home.css'

const Home = () => {

    return (
        <>
            <div class="main-text">
                <p>Welcome,</p>
                <button>View Catalog</button>
            </div>
            <div className="main-card">

                <div className="last-offers">Last added offers</div>

                <div className="card">

                    <div className="image">
                        <img src="/img/impreza/329482.jpg" alt="car" />
                    </div>
                    <div className="title">
                        <h1>
                            Subaru Impreza</h1>
                    </div>
                    <div className="des">
                        <p>Year:2006</p>
                        <button>Read More...</button>
                    </div>
                </div>


                <div className="card">

                    <div className="image">

                        <img src="/img/impreza/329480.jpg" alt="car" />
                    </div>
                    <div className="title">
                        <h1>
                            Subaru Impreza</h1>
                    </div>
                    <div className="des">
                        <p>Year: 2005</p>
                        <button>Read More...</button>
                    </div>
                </div>


                <div className="card">
                    <div className="image">
                        <img
                            src="/img/impreza/1826230.jpg" alt="car" />
                    </div>
                    <div className="title">
                        <h1>
                            Subaru Impreza</h1>
                    </div>
                    <div className="des">
                        <p>Year:2007</p>
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

export default Home;