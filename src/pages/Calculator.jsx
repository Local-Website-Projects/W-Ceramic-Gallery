import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

function Calculator() {
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
                                        <label className='p-md-2'>Enter Wall Height</label>
                                        <input type="text" name="height" placeholder="Wall Height"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className='p-md-2'>Enter Wall Width</label>
                                        <input type="email" name="Width" placeholder="Wall Width"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className='p-md-2'>Select Tile Size</label>
                                        <select>
                                            <option>Select Tile Size</option>
                                            <option>1x1</option>
                                            <option>2x2</option>
                                        </select>
                                    </div>

                                    <div className="col-md-12">
                                        <a className="pq-button">
                                            <div className="pq-button-block">
                                                <span className="pq-button-text me-0">CALCULATE</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-6 mt-5">
                                        <label className='p-md-2'>Approximate Number of Tiles</label>
                                        <input type="text" name="tile_number" placeholder="Number of Tiles"
                                               readOnly={true}/>
                                    </div>
                                    <div className='col-md-12'>
                                        <small style={{color: "red"}}>*** Please remember the number of tiles shown here
                                            is not constant, it can
                                            vary in real environment</small>
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