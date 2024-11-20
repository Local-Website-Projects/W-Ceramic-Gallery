import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import {Link, useLocation} from "react-router-dom";
import Footer from "../components/Footer";

function DesignDetails() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const value = queryParams.get('value') || 'Default Title';
    return (
        <div>
            <Header></Header>
            <Breadcrumb title={value}></Breadcrumb>

            <section className="gallery">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8">
                            <div className="pq-section-title pq-style-1">
                                <span className="pq-section-sub-title">Our Design Ideas</span>
                                <h5 className="pq-section-main-title">{value}</h5>
                            </div>
                        </div>
                        <div className="col-lg-4 coll-md-4">
                            <div className="button-align">
                                <a className="pq-button pq-button-flat" href="laminate-flooring.html">
                                    <div className="pq-button-block">
                                        <span className="pq-button-text">view more </span>
                                        <span className="pq-button-line-right"></span>
                                        <i className="ion ion-ios-arrow-right"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="divider pq-left-border pq-45"></div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="assets/images/gallery/4.jpg">
                                <img src="assets/images/gallery/4.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                            <a href="assets/images/gallery/1.jpg">
                                <img src="assets/images/gallery/1.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <a href="assets/images/gallery/2.jpg">
                                <img src="assets/images/gallery/2.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <a href="assets/images/gallery/3.jpg">
                                <img src="assets/images/gallery/3.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4">
                            <a href="assets/images/gallery/5.jpg">
                                <img src="assets/images/gallery/5.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4">
                            <a href="assets/images/gallery/6.jpg">
                                <img src="assets/images/gallery/6.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4">
                            <a href="assets/images/gallery/7.jpg">
                                <img src="assets/images/gallery/7.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4">
                            <a href="assets/images/gallery/8.jpg">
                                <img src="assets/images/gallery/8.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default DesignDetails;