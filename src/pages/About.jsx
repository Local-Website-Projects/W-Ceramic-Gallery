import React from 'react'
import {Link} from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from "../components/Breadcrumb";
import Awards from "../components/Awards";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";

function About() {
    return (
        <div>
            <Header></Header>
            <Breadcrumb title="About Us"></Breadcrumb>

            {/* About Us */}
            <section className="about-us pq-pb-180">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-us-img">
                                <img src="assets/images/about-us/1.jpg" className="pq-image1 wow animated fadeInLeft"
                                     alt=""/>
                                <img src="assets/images/about-us/2.jpg" className="pq-image2 wow animated zoomIn"
                                     alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 pq-about-us-padding wow animated fadeInRight">
                            <div className="pq-section-title pq-style-1 pq-mb-35">
                                <span className="pq-section-sub-title">who we are</span>
                                <h5 className="pq-section-main-title">Ceramics Gallery, the newest concern</h5>
                                <p className="pq-section-description">has started the commercial production of its
                                    exclusive line of floor and wall
                                    tiles. With a state-of-the-art factory and modern technology, the commercial
                                    production of Sheltech Ceramic tiles
                                    started from February 2019. </p>
                            </div>
                            <div className="row pq-mb-45">
                                <div className="col-lg-6 col-md-6">
                                    <div className="pq-icon-box pq-style-2">
                                        <div className="pq-icon">
                                            <i className="flaticon-tile-2"></i>
                                        </div>
                                        <div className="pq-icon-box-content">
                                            <h5>Modern<br/> Technology</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mt-4 mt-md-0">
                                    <div className="pq-icon-box pq-style-2">
                                        <div className="pq-icon">
                                            <i className="flaticon-modern-art"></i>
                                        </div>
                                        <div className="pq-icon-box-content">
                                            <h5>Commercial<br/> Production</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="pq-section-description">With our expertise in the building industry, and our
                                commitment to innovative design
                                and quality, Sheltech Ceramics is quickly gaining popularity among satisfied customers
                                and the leading position in
                                ceramic industry. Currently we have a wide variety of wall and floor tiles, both
                                interior and exterior, with the designs,
                                sizes and textures being based on analyzing current market trends and styles preferred
                                by customers.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Us */}

            {/* Team */}
            <section className="services pq-bg-img-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 wow animated fadeInRight">
                            <div className="pq-section-title pq-style-1">
                                <span className="pq-section-sub-title">We Works with</span>
                                <h5 className="pq-section-main-title">Our Board of Directors</h5>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="divider pq-right-border pq-45"></div>
                        </div>
                        <div className="row wow animated fadeInUp">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                                <div className="pq-team pq-team-style-1">
                                    <div className="pq-team-box">
                                        <div className="pq-team-img">
                                            <img decoding="async" src="assets/images/team/1.jpg"
                                                 alt="team-image"/>
                                            <div className="pq-team-social">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-12">
                                <div className="pq-fancy-box pq-style-1">
                                    <div className="pq-fancy-box-info">
                                        <h5 className="pq-fancy-box-title">Engr. Kutubuddin Ahmed</h5>
                                        <p className="pq-fancy-box-description">is the Founder Chairman of Sheltech
                                            Group. He is also the Chairman of Envoy Legacy, which
                                            includes both garments and textiles. Envoy Textiles Limited (ETL), a wing of
                                            Envoy Legacy, is an international leading brand
                                            that is also listed in the Stock Exchange of Bangladesh, and boasts the
                                            first LEED Platinum certified denim mill in the world.
                                            Envoy Textiles has also recently won the National Export Trophy
                                            (Gold). <br></br>
                                            In 1988, he pioneered in the real estate sector establishing Sheltech, which
                                            currently has more than 12 flourishing entities
                                            including Sheltech Private, Sheltech Ceramics, Platinum Hotels, Sheltech
                                            Brokerage, Sheltech Engineering, Sheltech
                                            Technology, Grind Tech, Sheltech Consultants, Aerospeed, Sheltech Homes,
                                            Sreemangal Tea Estate, Bengal Meat, etc
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row wow animated fadeInUp mt-3">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                                <div className="pq-team pq-team-style-1">
                                    <div className="pq-team-box">
                                        <div className="pq-team-img">
                                            <img decoding="async" src="assets/images/team/1.jpg"
                                                 alt="team-image"/>
                                            <div className="pq-team-social">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-12">
                                <div className="pq-fancy-box pq-style-1">
                                    <div className="pq-fancy-box-info">
                                        <h5 className="pq-fancy-box-title">Engr. Kutubuddin Ahmed</h5>
                                        <p className="pq-fancy-box-description">is the Founder Chairman of Sheltech
                                            Group. He is also the Chairman of Envoy Legacy, which
                                            includes both garments and textiles. Envoy Textiles Limited (ETL), a wing of
                                            Envoy Legacy, is an international leading brand
                                            that is also listed in the Stock Exchange of Bangladesh, and boasts the
                                            first LEED Platinum certified denim mill in the world.
                                            Envoy Textiles has also recently won the National Export Trophy
                                            (Gold). <br></br>
                                            In 1988, he pioneered in the real estate sector establishing Sheltech, which
                                            currently has more than 12 flourishing entities
                                            including Sheltech Private, Sheltech Ceramics, Platinum Hotels, Sheltech
                                            Brokerage, Sheltech Engineering, Sheltech
                                            Technology, Grind Tech, Sheltech Consultants, Aerospeed, Sheltech Homes,
                                            Sreemangal Tea Estate, Bengal Meat, etc
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Team */}


            {/* Awards */}
            <Awards></Awards>
            {/* Awards */}

            {/* Client */}
            <Clients></Clients>
            {/* Client */}

            {/* Testimonial */}
            <Testimonials></Testimonials>
            {/* Testimonial */}

            <Footer></Footer>
        </div>
    )
}

export default About

