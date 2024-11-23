import React from "react";
import {Link} from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            {/* Footer */}
            <footer id="pq-footer">
                <div className="pq-footer-style-1">
                    <div className="pq-subscribe align-items-center">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="pq-subscribe-bg">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="pq-footer-logo">
                                                    <img src="assets/images/Logo/logo-2.png" className="pq-footer-logo"
                                                         alt="marblex-footer-logo"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 align-self-center">
                                                <div className="pq-subscribe-from">
                                                    <form>
                                                        <div className="subscribe-form">
                                                            <input type="email" name="EMAIL" placeholder="Your email address"
                                                                   className="form-control" required=""/>
                                                            <input className="submit" type="submit" value="Sign up"/>
                                                            <i className="ion-ios-paperplane"></i>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pq-footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget">
                                        <h4 className="footer-title">About Us</h4>
                                        <p>There are many variations of passages of Lorem the majority suffer</p>
                                        <ul>
                                            <li>
                                                <a href="tel:+1800001658"><i className="fas fa-phone-alt"></i>
                                                    <span> +1800-001-658</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3  col-md-6">
                                    <div className="widget">
                                        <h4 className="footer-title">our navigate</h4>
                                        <div className="menu-navigate-menu-container">
                                            <ul id="menu-navigate-menu" className="menu">
                                                <li className="menu-item">
                                                    <Link to="/" aria-current="page">Ceramic Gallery</Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link to="/about">About us</Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link to="/Design-Idea">Design Idea</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3  col-md-6">
                                    <div className="widget">
                                        <h4 className="footer-title">Useful Links</h4>
                                        <div className="menu-product-menu-container">
                                            <ul id="menu-product-menu" className="menu">
                                                <li className="menu-item">
                                                    <Link to="/ShowRoom">Show Rooms</Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link to="/Tile-Calculator">Tile Calculator</Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link to="/Contact-Us">Contact</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3  col-md-6">
                                    <div className="widget widget-port-1">
                                        <h4 className="footer-title">Our showroom</h4>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <ul className="pq-contact">
                                                    <li>
                                                        <i className="fas fa-map-marker"></i>
                                                        <span>Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA </span>
                                                    </li>
                                                    <li>
                                                        <a href="tel:+1800001658">
                                                            <i className="fas fa-phone"></i>
                                                            <span> +1800-001-658</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="mailto:Info@Peacefulthemes.Com">
                                                            <i className="fas fa-envelope"></i>
                                                            <span>Info@Peacefulthemes.Com</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pq-copyright-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 align-self-center">
                                    <span className="pq-copyright">Copyright {currentYear} Ceramic Gallery All Rights Reserved.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer */}

            {/* Back To Top */}
            <div id="back-to-top" className="active">
                <Link className="top" id="top" to="" onClick={scrollToTop}>
                    <i className="ion-ios-arrow-up"></i>
                </Link>
            </div>
            {/* Back To Top */}
        </div>
    )

}

export default Footer;