import React, {useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path ? "current-menu-item" : "";
    };

    return (
        <div>
            {/* Header */}
            <div className="pq-background-overlay"></div>
            <div className="pq-sidebar">
                <div className="pq-close-btn">
                    <a className="pq-close" href="javascript:void(0)">
                        <i className="ion-close-round"></i>
                    </a>
                </div>
                <div className="pq-sidebar-block">
                    <div className="pq-sidebar-header">
                        <img src="assets/images/Logo/logo.png" className="pq-sidebar-logo" alt="marblex-sidebar-logo"/>
                    </div>
                    <div className="pq-sidebar-content">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. search for will
                            uncover
                            many web sites still.</p>
                    </div>
                    <div className="pq-sidebars">
                        <div className="pq-widget">
                            <div className="wp-block-group">
                                <div className="wp-block-group__inner-container">
                                    <h2>Gallery</h2>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img src="assets/images/gallery/1.jpg" alt=""/>
                                        </div>
                                        <div className="col-lg-4">
                                            <img src="assets/images/gallery/2.jpg" alt=""/>
                                        </div>
                                        <div className="col-lg-4">
                                            <img src="assets/images/gallery/3.jpg" alt=""/>
                                        </div>
                                        <div className="col-lg-4 mt-4">
                                            <img src="assets/images/gallery/4.jpg" alt=""/>
                                        </div>
                                        <div className="col-lg-4 mt-4">
                                            <img src="assets/images/gallery/5.jpg" alt=""/>
                                        </div>
                                        <div className="col-lg-4 mt-4">
                                            <img src="assets/images/gallery/6.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pq-sidebar-contact">
                        <ul className="pq-contact">
                            <li>
                                <i className="fa fa-map-marker"></i>
                                <span> Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA </span>
                            </li>
                            <li>
                                <a href="tel:+1800001658"><i className="fa fa-phone"></i>
                                    <span> +1800-001-658</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@peacefulthemes.com"><i
                                    className="fa fa-envelope"></i><span>info@peacefulthemes.com</span></a>
                            </li>
                        </ul>
                    </div>
                    <div className="pq-sidebar-social">
                        <ul>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <header id="pq-header" className="pq-header-style-1  pq-has-sticky mb-3">
                <div className="pq-header-diff-block">
                    <div className="row g-0">
                        <div className="col-lg-12">
                            <div className="pq-top-header  top-style-1">
                                <div className="container-fluid p-0">
                                    <div className="row flex-row-reverse">
                                        <div className="col-md-6 text-right">
                                            <div className="pq-top-right text-right ">
                                                <div className="pq-header-time ">
                                                    <ul>
                                                        <li>
                                                            <i className="ti-timer"></i>
                                                            <span>Mon to Fri 9:00 am to 6:00pm</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pq-header-social">
                                                    <ul>
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-skype"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6   ">
                                            <div className="pq-header-contact ">
                                                <ul>
                                                    <li>
                                                        <a href="tel:+1800001658"><i className="fas fa-phone-alt"></i>
                                                            <span> +1800-001-658</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="mailto:Info@Peacefulthemes.Com"><i
                                                            className="fas fa-envelope"></i><span>Info@Peacefulthemes.Com</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pq-bottom-header">
                                <div className="row no-gutters">
                                    <div className="col-lg-12">
                                        <nav className="navbar navbar-expand-lg navbar-light">
                                            <a className="navbar-brand" href="index.html">
                                                <img className="img-fluid logo"
                                                     src="assets/images/Logo/logo.png"
                                                     alt="marblex"/>
                                            </a>
                                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                <div id="pq-menu-contain" className="pq-menu-contain">
                                                    <ul id="pq-main-menu" className="navbar-nav ml-auto">
                                                        <li className={`menu-item ${isActive("/")}`}>
                                                            <Link to="/">Home</Link>
                                                        </li>
                                                        <li className={`menu-item ${isActive("/About")}`}>
                                                            <Link to="/About">About</Link>
                                                        </li>
                                                        <li className={`menu-item ${isActive("/Tiles-Collection")}`}>
                                                            <Link to="/Tiles-Collection">Tiles Collection</Link>
                                                        </li>
                                                        <li className={`menu-item ${isActive("/Room-Visualizer")}`}>
                                                            <Link to="/Room-Visualizer">Room Visualizer</Link>
                                                        </li>
                                                        <li className={`menu-item ${isActive("/Design-Idea")}`}>
                                                            <Link to="/Design-Idea">Design Idea</Link>
                                                        </li>
                                                        <li className={`menu-item ${isActive("/ShowRoom")}`}>
                                                            <Link to="/ShowRoom">Show Room</Link>
                                                        </li>
                                                        <li className={`menu-item ${isActive("/Tile-Calculator")}`}>
                                                            <Link to="/Tile-Calculator">Tile Calculator</Link>
                                                        </li>
                                                        <li className={`menu-item ${isActive("/Contact-Us")}`}>
                                                            <Link to="/Contact-Us">Contact</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="pq-menu-search-block">
                                                <a href="javascript:void(0)" className="pq-tools-serach-button"
                                                   data-bs-toggle="offcanvas" data-bs-target="#offcanvassearch"><i
                                                    className="ti-search"></i></a>
                                                <div className="offcanvas offcanvas-top" tabIndex="-1"
                                                     id="offcanvassearch" aria-hidden="true">
                                                    <form role="search" method="get" className="search-form">
                                                        <button type="button" className="btn-close"
                                                                data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                        <label>
                                                            <span className="screen-reader-text">Search for:</span>
                                                            <input type="search" className="search-field mb-0"
                                                                   placeholder="Search …" value="" name="s"/>
                                                        </label>
                                                        <button type="submit" className="search-submit"><span
                                                            className="screen-reader-text">Search</span></button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="pq-toggle-btn">
                                                <a href="javascript:void(0)" className="menu-toggle">
                                                    <span>menu</span>
                                                </a>
                                            </div>
                                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#navbarSupportedContent"
                                                    aria-controls="navbarSupportedContent"
                                                    aria-expanded="false" aria-label="Toggle navigation">
                                                <i className="fas fa-bars"></i>
                                            </button>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Header */}
        </div>
    );
}

export default Header;