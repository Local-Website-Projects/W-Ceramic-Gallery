import React, {useState, useEffect } from 'react'
import {Link} from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";
import $ from 'jquery';

function Home() {
    useEffect(() => {
        if (typeof window !== "undefined" && window.jQuery) {
            // Initialize the client slider
            window.jQuery("#showroomSelection").owlCarousel({
                items: 6, // Show 6 items at a time
                loop: true, // Loop through the items
                autoplay: true, // Autoplay
                autoplayTimeout: 5000, // Autoplay timeout
                nav: false, // No navigation arrows
                dots: true, // Show navigation dots
                margin: 30, // Margin between items
            });
            window.jQuery("#designSample").owlCarousel({
                items: 4, // Show 6 items at a time
                loop: true, // Loop through the items
                autoplay: true, // Autoplay
                autoplayTimeout: 5000, // Autoplay timeout
                nav: false, // No navigation arrows
                dots: true, // Show navigation dots
                margin: 30, // Margin between items
            });
        }
    }, []);
    return (
        <div>
            <Header></Header>

            <div style={{height:"100vh", width:"100%" ,margin:"0" ,padding:"0"}}>
                <video src='assets/rev/assets/Stone-Collection-exposure-boost-hero.mp4' autoPlay loop muted
                       style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                <div className='videoContent'>
                    <span
                        className='.pq-section-title.pq-style-1 .pq-section-sub-title'>Welcome To Ceramic Gallery</span>
                    <h5 className="pq-section-main-title">High Performance
                        <br></br>Natural Stone Plane
                    </h5>
                    <a className="bannerButton" href="#">
                        <div className="pq-button-block">
                            <span className="pq-button-text">read more </span>
                        </div>
                    </a>
                </div>
            </div>


            {/* Services */}
            <section className="services pq-bg-img-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 wow animated fadeInRight">
                            <div className="pq-section-title pq-style-1">
                            <span className="pq-section-sub-title">what we offer</span>
                                <h5 className="pq-section-main-title">provides best services</h5>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 wow animated fadeInRight">
                            <div className="button-align">
                                <a className="pq-button pq-button-flat" href="about-us.html">
                                    <div className="pq-button-block">
                                        <span className="pq-button-text">read more </span>
                                        <span className="pq-button-line-right"></span>
                                        <i className="ion ion-ios-arrow-right"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-12 wow animated fadeInRight">
                            <div className="divider pq-right-border pq-45"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 wow animated fadeInUp">
                            <div className="pq-fancy-box pq-style-1 text-left">
                                <div className="pq-fancy-box-icon">
                                    <i className=" flaticon-floor"></i>
                                </div>
                                <div className="pq-fancy-box-right-icon">
                                    <i className="flaticon-floor" aria-hidden="true"></i>
                                </div>
                                <div className="pq-fancy-box-info">
                                    <h5 className="pq-fancy-box-title">carpets &amp; Rugs</h5>
                                    <p className="pq-fancy-box-description">There are many variations of passages of
                                        Lorem Ipsum
                                        available majority </p>
                                    <div className="pq-btn-container">
                                        <a className="pq-button pq-button-link" href="carpets-rugs.html">
                                            <div className="pq-button-block">
                                                <div className="pq-svg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="64.356"
                                                         height="36.52" viewBox="0 0 64.356 36.52">
                                                        <g transform="translate(-6.444 -1.74)">
                                                            <g data-name="Group 2">
                                                                <circle data-name="Ellipse 2" cx="17" cy="17.76"
                                                                        r="17.76"
                                                                        transform="translate(34.78 2.24)" fill="none"
                                                                        stroke="#e6af5d" stroke-width="1"
                                                                        opacity="0.5"></circle>
                                                                <circle data-name="Ellipse 3" cx="17" cy="17.76"
                                                                        r="17.76"
                                                                        transform="translate(34.78 2.24)" fill="none"
                                                                        stroke="#e6af5d" stroke-width="1">
                                                                </circle>
                                                            </g>
                                                            <path data-name="Path 1"
                                                                  d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                  fill="#e6af5d">
                                                            </path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4 mt-md-0 wow animated fadeInUp">
                            <div className="pq-fancy-box pq-style-1 text-left">
                                <div className="pq-fancy-box-icon">
                                    <i className=" flaticon-trowel"></i>
                                </div>
                                <div className="pq-fancy-box-right-icon">
                                    <i className="  flaticon-trowel" aria-hidden="true"></i>
                                </div>
                                <div className="pq-fancy-box-info">
                                    <h5 className="pq-fancy-box-title">Laminate flooring</h5>
                                    <p className="pq-fancy-box-description">There are many variations of passages of
                                        Lorem Ipsum
                                        available majority </p>
                                    <div className="pq-btn-container">
                                        <a className="pq-button pq-button-link"
                                           href="laminate-flooring.html">
                                            <div className="pq-button-block">
                                                <div className="pq-svg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="64.356"
                                                         height="36.52" viewBox="0 0 64.356 36.52">
                                                        <g transform="translate(-6.444 -1.74)">
                                                            <g data-name="Group 2">
                                                                <circle data-name="Ellipse 2" cx="17" cy="17.76"
                                                                        r="17.76"
                                                                        transform="translate(34.78 2.24)" fill="none"
                                                                        stroke="#e6af5d" stroke-width="1"
                                                                        opacity="0.5"></circle>
                                                                <circle data-name="Ellipse 3" cx="17" cy="17.76"
                                                                        r="17.76"
                                                                        transform="translate(34.78 2.24)" fill="none"
                                                                        stroke="#e6af5d" stroke-width="1">
                                                                </circle>
                                                            </g>
                                                            <path data-name="Path 1"
                                                                  d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                  fill="#e6af5d">
                                                            </path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mt-4 mt-lg-0 wow animated fadeInUp">
                            <div className="pq-fancy-box pq-style-1 text-left">
                                <div className="pq-fancy-box-icon">
                                    <i className="flaticon-wood"></i>
                                </div>
                                <div className="pq-fancy-box-right-icon">
                                    <i className="flaticon-wood" aria-hidden="true"></i>
                                </div>
                                <div className="pq-fancy-box-info">
                                    <h5 className="pq-fancy-box-title">vinyl flooring</h5>
                                    <p className="pq-fancy-box-description">There are many variations of passages of
                                        Lorem Ipsum
                                        available majority </p>
                                    <div className="pq-btn-container">
                                        <a className="pq-button pq-button-link" href="vinyl-flooring.html">
                                            <div className="pq-button-block">
                                                <div className="pq-svg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="64.356"
                                                         height="36.52" viewBox="0 0 64.356 36.52">
                                                        <g transform="translate(-6.444 -1.74)">
                                                            <g data-name="Group 2">
                                                                <circle data-name="Ellipse 2" cx="17" cy="17.76"
                                                                        r="17.76"
                                                                        transform="translate(34.78 2.24)" fill="none"
                                                                        stroke="#e6af5d" stroke-width="1"
                                                                        opacity="0.5"></circle>
                                                                <circle data-name="Ellipse 3" cx="17" cy="17.76"
                                                                        r="17.76"
                                                                        transform="translate(34.78 2.24)" fill="none"
                                                                        stroke="#e6af5d" stroke-width="1">
                                                                </circle>
                                                            </g>
                                                            <path data-name="Path 1"
                                                                  d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                  fill="#e6af5d"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services */}

            {/* About Us */}
            <section className="about-us py-xl-0">
                <div className="floating-image floating-image-right floating-image-1">
                    <img src="assets/images/floating-assets/assets/images/1.png" alt=""/>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 pe-xl-30 wow animated fadeInLeft">
                            <div className="pq-about-img">
                                <img src="assets/images/about-us/marble.png" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 ps-xl-30 mt-4 mt-xl-0 wow animated fadeInRight">
                            <div className="pq-section-title pq-style-1">
                                <span className="pq-section-sub-title">about us</span>
                                <h5 className="pq-section-main-title">Visit Our marble &amp; granite Display
                                    Warehouse</h5>
                                <p className="pq-section-description">At Marblex stone, we offer quality stone products
                                    in
                                    the form of
                                    tiles and slabs selected from all over the world to enhance your home project.</p>
                            </div>
                            <div className="divider pq-my-30"></div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <h6 className="pq-list-heading">Marble At A Glance</h6>
                                    <ul className="pq-list-check">
                                        <li>
                                            <i className="fas fa-circle"></i>
                                            <span>More Expensive</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-circle"></i>
                                            <span>Red Alicante Marble</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-circle"></i>
                                            <span>Less Maintenance</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-circle"></i>
                                            <span>Very Durable</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-6 mt-4 mt-md-0">
                                    <h6 className="pq-list-heading">Marble Slab Creamery</h6>
                                    <ul className="pq-list-check">
                                        <li>
                                            <i className="fas fa-circle"></i>
                                            <span>Elegant Vein Patterns</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-circle"></i>
                                            <span>Heat-Resistant</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-circle"></i>
                                            <span>Stargate Gold Marble</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-circle"></i>
                                            <span>Red Beauty Marble</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Us */}

            {/* Stone */}
            <section className="stone pq-bg-dark pq-bg-img-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 wow animated fadeInLeft">
                            <div className="pq-section-title pq-style-1">
                                <span className="pq-section-sub-title">choose your stone</span>
                                <h5 className="pq-section-main-title pq-text-white">Showroom With Selection</h5>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 wow animated fadeInLeft">
                            <div className="button-align">
                                <a className="pq-button pq-button-flat" href="about-us.html">
                                    <div className="pq-button-block">
                                        <span className="pq-button-text">read more </span>
                                        <span className="pq-button-line-right"></span>
                                        <i className="ion ion-ios-arrow-right"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="divider pq-left-border pq-45"></div>
                        </div>
                        <div className="col-lg-12 wow animated fadeInUp">
                            <div className="owl-carousel owl-loaded owl-drag" id="showroomSelection">
                                <div className="item">
                                    <div className="pq-image-box pq-style-1  text-center">
                                        <div className="pq-image-box-media">
                                            <a>
                                                <img decoding="async" src="assets/images/stone/1.png" alt="box"/>
                                            </a>
                                        </div>
                                        <div className="pq-image-box-info">
                                            <h5 className="pq-image-box-title"><a> Marble</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="pq-image-box pq-style-1  text-center">
                                        <div className="pq-image-box-media">
                                            <a>
                                                <img decoding="async" src="assets/images/stone/2.png" alt="box"/>
                                            </a>
                                        </div>
                                        <div className="pq-image-box-info">
                                            <h5 className="pq-image-box-title"><a> limestone</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="pq-image-box pq-style-1  text-center">
                                        <div className="pq-image-box-media">
                                            <a>
                                                <img decoding="async" src="assets/images/stone/3.png" alt="box"/>
                                            </a>
                                        </div>
                                        <div className="pq-image-box-info">
                                            <h5 className="pq-image-box-title"><a> onyx</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="pq-image-box pq-style-1  text-center">
                                        <div className="pq-image-box-media">
                                            <a>
                                                <img decoding="async" src="assets/images/stone/4.png" alt="box"/>
                                            </a>
                                        </div>
                                        <div className="pq-image-box-info">
                                            <h5 className="pq-image-box-title"><a> quartz</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="pq-image-box pq-style-1  text-center">
                                        <div className="pq-image-box-media">
                                            <a>
                                                <img decoding="async" src="assets/images/stone/5.png" alt="box"/>
                                            </a>
                                        </div>
                                        <div className="pq-image-box-info">
                                            <h5 className="pq-image-box-title"><a> granite</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="pq-image-box pq-style-1  text-center">
                                        <div className="pq-image-box-media">
                                            <a>
                                                <img decoding="async" src="assets/images/stone/6.png" alt="box"/>
                                            </a>
                                        </div>
                                        <div className="pq-image-box-info">
                                            <h5 className="pq-image-box-title"><a> travertine</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="pq-image-box pq-style-1  text-center">
                                        <div className="pq-image-box-media">
                                            <a>
                                                <img decoding="async" src="assets/images/stone/7.png" alt="box"/>
                                            </a>
                                        </div>
                                        <div className="pq-image-box-info">
                                            <h5 className="pq-image-box-title"><a> travertine</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="pq-image-box pq-style-1  text-center">
                                        <div className="pq-image-box-media">
                                            <a>
                                                <img decoding="async" src="assets/images/stone/8.png" alt="box"/>
                                            </a>
                                        </div>
                                        <div className="pq-image-box-info">
                                            <h5 className="pq-image-box-title"><a> onyx</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Stone */}

            {/* Latest Work */}
            <section className="latest-work">
                <div className="container">
                    <div className="floating-image floating-image-left floating-image-2">
                        <img src="assets/images/floating-assets/images/2.png" alt=""/>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 wow animated fadeInRight">
                            <div className="pq-section-title pq-style-1">
                                <span className="pq-section-sub-title">choose your stone</span>
                                <h5 className="pq-section-main-title">Discover Our Creation</h5>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 wow animated fadeInRight">
                            <div className="button-align">
                                <a className="pq-button pq-button-flat" href="laminate-flooring.html">
                                    <div className="pq-button-block">
                                        <span className="pq-button-text">view more</span>
                                        <span className="pq-button-line-right"></span>
                                        <i className="ion ion-ios-arrow-right"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="divider pq-right-border pq-45"></div>
                        </div>
                        <div className="col-lg-12 wow animated fadeInUp">
                            <div className="pq-portfoliobox pq-portfoliobox-style-1 pq-me-320">
                                <div className="owl-carousel owl-loaded owl-drag" id="designSample">
                                    <div className="item">
                                        <div className="pq-portfoliobox-1">
                                            <div className="pq-portfolio-block">
                                                <div className="pq-portfolio-img  ">
                                                    <img decoding="async" src="assets/images/gallery/1.jpg"
                                                         alt=""/>
                                                </div>
                                                <div className="pq-portfolio-info">
                                                    <h5><a href="portfolio-single.html">indoor court</a></h5>
                                                    <span> <a href="portfolio-single.html">Laminate</a>
                                            </span>
                                                </div>
                                                <div className="pq-btn-container">
                                                    <a href="portfolio-single.html"
                                                       className="pq-button pq-button-link">
                                                        <div className="pq-button-block">
                                                            <div className="pq-svg">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="64.356"
                                                                     height="36.52" viewBox="0 0 64.356 36.52">
                                                                    <g transform="translate(-6.444 -1.74)">
                                                                        <g data-name="Group 2">
                                                                            <circle data-name="Ellipse 2" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1"
                                                                                    opacity="0.5"></circle>
                                                                            <circle data-name="Ellipse 3" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1">
                                                                            </circle>
                                                                        </g>
                                                                        <path data-name="Path 1"
                                                                              d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                              fill="#e6af5d"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="pq-portfoliobox-1">
                                            <div className="pq-portfolio-block">
                                                <div className="pq-portfolio-img  ">
                                                    <img decoding="async" src="assets/images/gallery/2.jpg"
                                                         alt=""/>
                                                </div>
                                                <div className="pq-portfolio-info">
                                                    <h5><a href="portfolio-single.html">Awesome
                                                        Outdoor
                                                        Project</a></h5>
                                                    <span> <a href="portfolio-single.html">Laminate</a>
                                            </span>
                                                </div>
                                                <div className="pq-btn-container">
                                                    <a href="portfolio-single.html"
                                                       className="pq-button pq-button-link">
                                                        <div className="pq-button-block">
                                                            <div className="pq-svg">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="64.356"
                                                                     height="36.52" viewBox="0 0 64.356 36.52">
                                                                    <g transform="translate(-6.444 -1.74)">
                                                                        <g data-name="Group 2">
                                                                            <circle data-name="Ellipse 2" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1"
                                                                                    opacity="0.5"></circle>
                                                                            <circle data-name="Ellipse 3" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1">
                                                                            </circle>
                                                                        </g>
                                                                        <path data-name="Path 1"
                                                                              d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                              fill="#e6af5d"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="pq-portfoliobox-1">
                                            <div className="pq-portfolio-block">
                                                <div className="pq-portfolio-img  ">
                                                    <img decoding="async" src="assets/images/gallery/3.jpg"
                                                         alt=""/>
                                                </div>
                                                <div className="pq-portfolio-info">
                                                    <h5><a href="portfolio-single.html">kitchen
                                                        renovation</a>
                                                    </h5>
                                                    <span> <a href="portfolio-single.html">flooring</a>
                                            </span>
                                                </div>
                                                <div className="pq-btn-container">
                                                    <a href="portfolio-single.html"
                                                       className="pq-button pq-button-link">
                                                        <div className="pq-button-block">
                                                            <div className="pq-svg">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="64.356"
                                                                     height="36.52" viewBox="0 0 64.356 36.52">
                                                                    <g transform="translate(-6.444 -1.74)">
                                                                        <g data-name="Group 2">
                                                                            <circle data-name="Ellipse 2" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1"
                                                                                    opacity="0.5"></circle>
                                                                            <circle data-name="Ellipse 3" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1">
                                                                            </circle>
                                                                        </g>
                                                                        <path data-name="Path 1"
                                                                              d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                              fill="#e6af5d"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="pq-portfoliobox-1">
                                            <div className="pq-portfolio-block">
                                                <div className="pq-portfolio-img  ">
                                                    <img decoding="async" src="assets/images/gallery/4.jpg"
                                                         alt=""/>
                                                </div>
                                                <div className="pq-portfolio-info">
                                                    <h5><a href="portfolio-single.html">Industrial
                                                        Flooring</a>
                                                    </h5>
                                                    <span> <a href="portfolio-single.html">flooring</a>
                                            </span>
                                                </div>
                                                <div className="pq-btn-container">
                                                    <a href="portfolio-single.html"
                                                       className="pq-button pq-button-link">
                                                        <div className="pq-button-block">
                                                            <div className="pq-svg">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="64.356"
                                                                     height="36.52" viewBox="0 0 64.356 36.52">
                                                                    <g transform="translate(-6.444 -1.74)">
                                                                        <g data-name="Group 2">
                                                                            <circle data-name="Ellipse 2" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1"
                                                                                    opacity="0.5"></circle>
                                                                            <circle data-name="Ellipse 3" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1">
                                                                            </circle>
                                                                        </g>
                                                                        <path data-name="Path 1"
                                                                              d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                              fill="#e6af5d"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="pq-portfoliobox-1">
                                            <div className="pq-portfolio-block">
                                                <div className="pq-portfolio-img  ">
                                                    <img decoding="async" src="assets/images/gallery/5.jpg"
                                                         alt=""/>
                                                </div>
                                                <div className="pq-portfolio-info">
                                                    <h5><a
                                                        href="portfolio-single.html">eco-friendly-flooring</a>
                                                    </h5>
                                                    <span> <a href="portfolio-single.html">marble</a>
                                            </span>
                                                </div>
                                                <div className="pq-btn-container">
                                                    <a href="portfolio-single.html"
                                                       className="pq-button pq-button-link">
                                                        <div className="pq-button-block">
                                                            <div className="pq-svg">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="64.356"
                                                                     height="36.52" viewBox="0 0 64.356 36.52">
                                                                    <g transform="translate(-6.444 -1.74)">
                                                                        <g data-name="Group 2">
                                                                            <circle data-name="Ellipse 2" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1"
                                                                                    opacity="0.5"></circle>
                                                                            <circle data-name="Ellipse 3" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1">
                                                                            </circle>
                                                                        </g>
                                                                        <path data-name="Path 1"
                                                                              d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                              fill="#e6af5d"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="pq-portfoliobox-1">
                                            <div className="pq-portfolio-block">
                                                <div className="pq-portfolio-img  ">
                                                    <img decoding="async" src="assets/images/gallery/6.jpg"
                                                         alt=""/>
                                                </div>
                                                <div className="pq-portfolio-info">
                                                    <h5><a href="portfolio-single.html">Laminate
                                                        Flooring</a></h5>
                                                    <span> <a href="portfolio-single.html">flooring</a>
                                            </span>
                                                </div>
                                                <div className="pq-btn-container">
                                                    <a href="portfolio-single.html"
                                                       className="pq-button pq-button-link">
                                                        <div className="pq-button-block">
                                                            <div className="pq-svg">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="64.356"
                                                                     height="36.52" viewBox="0 0 64.356 36.52">
                                                                    <g transform="translate(-6.444 -1.74)">
                                                                        <g data-name="Group 2">
                                                                            <circle data-name="Ellipse 2" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1"
                                                                                    opacity="0.5"></circle>
                                                                            <circle data-name="Ellipse 3" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1">
                                                                            </circle>
                                                                        </g>
                                                                        <path data-name="Path 1"
                                                                              d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                              fill="#e6af5d"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="pq-portfoliobox-1">
                                            <div className="pq-portfolio-block">
                                                <div className="pq-portfolio-img  ">
                                                    <img decoding="async" src="assets/images/gallery/7.jpg"
                                                         alt=""/>
                                                </div>
                                                <div className="pq-portfolio-info">
                                                    <h5><a href="portfolio-single.html">Bamboo flooring</a>
                                                    </h5>
                                                    <span> <a href="portfolio-single.html">tiles</a> </span>
                                                </div>
                                                <div className="pq-btn-container">
                                                    <a href="portfolio-single.html"
                                                       className="pq-button pq-button-link">
                                                        <div className="pq-button-block">
                                                            <div className="pq-svg">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="64.356"
                                                                     height="36.52" viewBox="0 0 64.356 36.52">
                                                                    <g transform="translate(-6.444 -1.74)">
                                                                        <g data-name="Group 2">
                                                                            <circle data-name="Ellipse 2" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1"
                                                                                    opacity="0.5"></circle>
                                                                            <circle data-name="Ellipse 3" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1">
                                                                            </circle>
                                                                        </g>
                                                                        <path data-name="Path 1"
                                                                              d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                              fill="#e6af5d"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="pq-portfoliobox-1">
                                            <div className="pq-portfolio-block">
                                                <div className="pq-portfolio-img  ">
                                                    <img decoding="async" src="assets/images/gallery/8.jpg"
                                                         alt=""/>
                                                </div>
                                                <div className="pq-portfolio-info">
                                                    <h5><a href="portfolio-single.html">Stone Cladding</a></h5>
                                                    <span> <a href="portfolio-single.html">flooring</a>
                                            </span>
                                                </div>
                                                <div className="pq-btn-container">
                                                    <a href="portfolio-single.html"
                                                       className="pq-button pq-button-link">
                                                        <div className="pq-button-block">
                                                            <div className="pq-svg">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="64.356"
                                                                     height="36.52" viewBox="0 0 64.356 36.52">
                                                                    <g transform="translate(-6.444 -1.74)">
                                                                        <g data-name="Group 2">
                                                                            <circle data-name="Ellipse 2" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1"
                                                                                    opacity="0.5"></circle>
                                                                            <circle data-name="Ellipse 3" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1">
                                                                            </circle>
                                                                        </g>
                                                                        <path data-name="Path 1"
                                                                              d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                              fill="#e6af5d"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="pq-portfoliobox-1">
                                            <div className="pq-portfolio-block">
                                                <div className="pq-portfolio-img  ">
                                                    <img decoding="async" src="assets/images/gallery/9.jpg"
                                                         alt=""/>
                                                </div>
                                                <div className="pq-portfolio-info">
                                                    <h5><a href="portfolio-single.html">Ceramic Tiles</a></h5>
                                                    <span> <a href="portfolio-single.html">Laminate</a>
                                            </span>
                                                </div>
                                                <div className="pq-btn-container">
                                                    <a href="portfolio-single.html"
                                                       className="pq-button pq-button-link">
                                                        <div className="pq-button-block">
                                                            <div className="pq-svg">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="64.356"
                                                                     height="36.52" viewBox="0 0 64.356 36.52">
                                                                    <g transform="translate(-6.444 -1.74)">
                                                                        <g data-name="Group 2">
                                                                            <circle data-name="Ellipse 2" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1"
                                                                                    opacity="0.5"></circle>
                                                                            <circle data-name="Ellipse 3" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1">
                                                                            </circle>
                                                                        </g>
                                                                        <path data-name="Path 1"
                                                                              d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                              fill="#e6af5d"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="pq-portfoliobox-1">
                                            <div className="pq-portfolio-block">
                                                <div className="pq-portfolio-img  ">
                                                    <img decoding="async" src="assets/images/gallery/10.jpg"
                                                         alt=""/>
                                                </div>
                                                <div className="pq-portfolio-info">
                                                    <h5><a href="portfolio-single.html">Wall Carpeting</a></h5>
                                                    <span> <a href="portfolio-single.html">stone</a> </span>
                                                </div>
                                                <div className="pq-btn-container">
                                                    <a href="portfolio-single.html"
                                                       className="pq-button pq-button-link">
                                                        <div className="pq-button-block">
                                                            <div className="pq-svg">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="64.356"
                                                                     height="36.52" viewBox="0 0 64.356 36.52">
                                                                    <g transform="translate(-6.444 -1.74)">
                                                                        <g data-name="Group 2">
                                                                            <circle data-name="Ellipse 2" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1"
                                                                                    opacity="0.5"></circle>
                                                                            <circle data-name="Ellipse 3" cx="17"
                                                                                    cy="17.76"
                                                                                    r="17.76"
                                                                                    transform="translate(34.78 2.24)"
                                                                                    fill="none"
                                                                                    stroke="#e6af5d"
                                                                                    stroke-width="1">
                                                                            </circle>
                                                                        </g>
                                                                        <path data-name="Path 1"
                                                                              d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                              fill="#e6af5d"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Latest Work */}

            {/* Video */}
            <div className="video pq-p-300 pq-video-bg-img pq-bg-secondary wow animated zoomIn">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pq-popup-video-block pq-popup-style-1">
                                <div className="pq-video-icon">
                                    <a href="https://www.youtube.com/watch?v=XHOmBV4js_E"
                                       className="pq-video default popup-youtube">
                                        <i aria-hidden="true" className=" ti-control-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Video */}

            {/* Testimonial */}
            <Testimonials></Testimonials>
            {/* Testimonial */}

            {/* Client */}
            <Clients></Clients>
            {/* Client */}

            {/* Form */}
            <section className="form-section py-0">
                <div className="container">
                    <div className="row align-items-center flex-column-reverse flex-lg-row pq-p-0">
                        <div className="col-xl-6 col-lg-6 pe-xl-5 pq-bg-dark pq-bg-dark-side-left mt-4 mt-lg-0">
                            <form action="#" className="pq-applyform wow animated fadeInLeft">
                                <div className="pq-section-title pq-style-1 pq-mb-30">
                                    <span className="pq-section-sub-title">appointment</span>
                                    <h5 className="pq-section-main-title pq-text-white">get a free quote</h5>
                                </div>
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
                        <div className="col-xl-6 col-lg-6 ps-lg-0 wow animated fadeInRight">
                            <img src="assets/images/from-img.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            {/* Form */}

            <Footer></Footer>

        </div>
    )
}

export default Home

