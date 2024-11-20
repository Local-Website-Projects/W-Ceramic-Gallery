import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

function ShowRoom() {
    return (
        <div>
            <Header></Header>
            <Breadcrumb title="Showroom"></Breadcrumb>

            <section className="contact-us pb-xl-0 mb-5">
                <div className="container">
                    <div className='row'>
                        <div className="col-lg-8 col-md-8 wow animated fadeInRight">
                            <div className="pq-section-title pq-style-1">
                                <span className="pq-section-sub-title">CERAMIC gallery’s</span>
                                <h5 className="pq-section-main-title">Display Center</h5>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="divider pq-right-border pq-45"></div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center" style={{minHeight: '600px'}}>
                        <div className="col-12 d-flex justify-content-center">
                            <iframe
                                src="https://www.youtube.com/embed/6stlCkUDG_s?si=ab6ApvFmf7T-sbL6"
                                title="YouTube video"
                                style={{
                                    width: '100%',
                                    maxWidth: '800px', // Optional max-width for better responsiveness
                                    height: '600px',
                                    border: 'none'
                                }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                </div>
            </section>

            <section className="contact-form pt-0 pb-xl-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 p-xl-0">
                            <div className="pq-contact-img">
                                <img src="assets/images/portfolio/1.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0 p-xl-0">
                            <div className="pq-map pq-me-330">
                                <iframe loading="lazy"
                                        src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                                        title="London Eye, London, United Kingdom"
                                        aria-label="London Eye, London, United Kingdom"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    )
}

export default ShowRoom;