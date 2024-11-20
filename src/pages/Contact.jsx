import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

function Contact() {
    return (
        <div>
            <Header></Header>
            <Breadcrumb title="Tile Calculator"></Breadcrumb>
            <section className="contact-us pb-xl-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="pq-section-title pq-style-1 pq-mb-30">
                                <span className="pq-section-sub-title">our contact</span>
                                <h5 className="pq-section-main-title">Get in touch with us</h5>
                                <p className="pq-section-description">Lorem Ipsum is simply dummy text of the
                                    printing &amp; typesetting industry. Contrary to popular belief, Lorem Ipsum is not
                                    simply random text.</p>
                            </div>
                            <div className="pq-icon-box pq-style-3">
                                <div className="pq-icon">
                                    <i className="ion ion-ios-home"></i>
                                </div>
                                <div className="pq-icon-box-content">
                                    <h6>Visit A Office</h6>
                                    <p className="mb-0">4642 Roosevelt Wilson lane<br/>long Beach, CA90802</p>
                                </div>
                            </div>
                            <div className="divider pq-my-15"></div>
                            <div className="pq-icon-box pq-style-3">
                                <div className="pq-icon">
                                    <i className="ion ion-ios-telephone"></i>
                                </div>
                                <div className="pq-icon-box-content">
                                    <h6>Contact-Us</h6>
                                    <p className="mb-0">+ (567) 1234-567-8900<br/>+ (567) 1234-567-8900</p>
                                </div>
                            </div>
                            <div className="divider pq-my-15"></div>
                            <div className="pq-icon-box pq-style-3">
                                <div className="pq-icon">
                                    <i className="ion ion-ios-email"></i>
                                </div>
                                <div className="pq-icon-box-content">
                                    <h6>Email-Us</h6>
                                    <p className="mb-0">info@peacefulthemes.com<br/>info2@peacefulthemes.com</p>
                                </div>
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
            <section className="contact-form pt-0 pb-xl-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 p-xl-0">
                            <div className="pq-contact-img">
                                <img src="assets/images/portfolio/1.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0 ps-xl-5">
                            <div className="pq-section-title pq-style-1 pq-mb-30">
                                <h5 className="pq-section-main-title">How Can We Help You ?</h5>
                                <p className="pq-section-description">Please feel free to get in touch using the form
                                    below. We’d love to hear for you.</p>
                            </div>
                            <form action="#" className="pq-contact-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="your-name" placeholder="Your Name"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" name="your-gender" placeholder="Email"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="phone-number" placeholder="Phone Number"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="project-scope" placeholder="Project Scope"/>
                                    </div>
                                    <div className="col-md-12">
                                        <textarea name="your-message" cols="40" rows="10"
                                                  placeholder="Write Your Message"></textarea>
                                    </div>
                                    <div className="col-md-12">
                                        <a className="pq-button" href="#">
                                            <div className="pq-button-block">
                                                <span className="pq-button-text me-0">SEND NOW</span>
                                            </div>
                                        </a>
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

export default Contact;