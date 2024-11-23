import React,{useState} from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

function Calculator() {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        tileSize: "",
        tileNumber: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const calculateTiles = () => {
        const { height, width, tileSize } = formData;

        // Convert the height and width into numbers
        const wallHeight = parseFloat(height);
        const wallWidth = parseFloat(width);

        // Extract tile size (assuming square tiles like 1x1 or 2x2)
        const tileDimension = parseFloat(tileSize);

        if (!wallHeight || !wallWidth || !tileDimension) {
            alert("Please enter valid values for wall height, width, and tile size!");
            return;
        }

        // Calculate the number of tiles required (wall area / tile area)
        const wallArea = wallHeight * wallWidth; // Wall area in square units
        const tileArea = tileDimension * tileDimension; // Tile area in square units
        const numTiles = Math.ceil(wallArea / tileArea); // Round up to ensure full coverage

        // Update the tileNumber in the state
        setFormData({ ...formData, tileNumber: numTiles });
    };
    return (
        <div>
            <Header></Header>
            <Breadcrumb title="Tile Calculator"></Breadcrumb>
            <section className="contact-form pt-0 pb-xl-0 mt-5 mb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 p-xl-0">
                            <div className="pq-contact-img">
                                <img src="assets/images/portfolio/1.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0 ps-xl-5">
                            <div className="pq-section-title pq-style-1 pq-mb-30">
                                <h5 className="pq-section-main-title">How To Use Tile Calculator?</h5>
                                <p className="pq-section-description">Please enter the height and width of the wall,
                                    select tile size and press calculate to see the approximate number of tiles needed
                                    for the wall.</p>
                            </div>
                            <form action="#" className="pq-contact-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="p-md-2">Enter Wall Height</label>
                                        <input
                                            type="text"
                                            name="height"
                                            placeholder="Wall Height in Feet"
                                            value={formData.height}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="p-md-2">Enter Wall Width</label>
                                        <input
                                            type="text"
                                            name="width"
                                            placeholder="Wall Width in Feet"
                                            value={formData.width}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="p-md-2">Select Tile Size</label>
                                        <select
                                            name="tileSize"
                                            value={formData.tileSize}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Tile Size</option>
                                            <option value="1">1x1</option>
                                            <option value="2">2x2</option>
                                        </select>
                                    </div>

                                    <div className="col-md-12">
                                        <button
                                            type="button"
                                            className="pq-button"
                                            onClick={calculateTiles}
                                        >
                                            <div className="pq-button-block">
                                                <span className="pq-button-text me-0">CALCULATE</span>
                                            </div>
                                        </button>
                                    </div>

                                    <div className="col-md-6 mt-5">
                                        <label className="p-md-2">Approximate Number of Tiles</label>
                                        <input
                                            type="text"
                                            name="tile_number"
                                            placeholder="Number of Tiles"
                                            value={formData.tileNumber}
                                            readOnly={true}
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <small style={{color: "red"}}>
                                            *** Please remember the number of tiles shown here is not constant, it
                                            can vary in a real environment
                                        </small>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Calculator;