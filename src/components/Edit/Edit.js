import './Edit.css'

const Edit = () => {

    return (
        <section className="edit-box">
            <h2>Edit Ad</h2>
            <form id="edit">
                <div className="edit-field">
                    <input type="text" name="brand" id="brand" required="" />
                    <label>Brand</label>
                </div>
                <div className="edit-field">
                    <input type="number" name="price" id="price " required="" />
                    <label>Price</label>
                </div>
                <div className="edit-field">
                    <input type="number" name="year" id="year" required="" />
                    <label>Year</label>
                </div>
                <div className="edit-field">
                    <label htmlFor="category" id="category-label">Category</label>
                    <select name="category" id="category">
                        <option id="cabriolet">Cabriolet</option>
                        <option id="small-car">Small Car</option>
                        <option id="suv">SUV/Off-road</option>
                        <option id="estate">Estate Car</option>
                        <option id="saloon">Saloon</option>
                        <option id="coupe">Sports Car/Coupe</option>
                        <option id="van">Van</option>
                    </select>
                </div>
                <div className="edit-field">
                    <input type="number" name="mileage" id="mileage" required="" />
                    <label>Mileage</label>
                </div>
                <div className="edit-field">
                    <input type="number" name="horsePower" id="horse-power" required="" />
                    <label>Horse Power</label>
                </div>
                <div className="edit-field">
                    <label htmlFor="fuel" id="fuel-label">Fuel</label>
                    <select name="fuel" id="fuel">
                        <option id="petrol">Petrol</option>
                        <option id="diesel">Diesel</option>
                        <option id="electric">Electric</option>
                        <option id="lpg">LPG</option>
                        <option id="hybrid">Hybrid</option>
                        <option id="hydrogen">Hydrogen</option>
                    </select>
                </div>
                <div className="edit-field">
                    <label htmlFor="gearbox" id="gearbox-label">Gearbox</label>
                    <select name="gearbox" id="gearbox">
                        <option id="manual">Manual</option>
                        <option id="semi-automatic">Semi-automatic</option>
                        <option id="automatic">Automatic</option>
                    </select>
                </div>
                <div className="edit-field">
                    <input type="text" name="color" id="color" required="" />
                    <label>Color</label>
                </div>
                <div className="edit-field">
                    <input type="text" name="extras" id="extras" required="" />
                    <label>Extras</label>
                </div>
                <div className="edit-field">
                    <input type="text" name="description" id="description" required="" />
                    <label>Description</label>
                </div>
                <div className="edit-field">
                    <input type="text" name="location" id="location" required="" />
                    <label>Location</label>
                </div>
                <div className="edit-field">
                    <input type="number" name="contactNumber" id="contact-number" required="" />
                    <label>Contact Number</label>
                </div>
                <div className="edit-field">
                    <input type="text" name="ImageUrl" id="imageUrl" required="" />
                    <label>Image</label>
                </div>
                <button className="btn submit" type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Edit;