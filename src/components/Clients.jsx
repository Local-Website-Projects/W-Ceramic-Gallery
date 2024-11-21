import React, { useEffect } from "react";

function Clients() {
    useEffect(() => {
        if (typeof window !== "undefined" && window.jQuery) {
            // Initialize the client slider
            window.jQuery("#client_slider").owlCarousel({
                items: 6, // Show 6 items at a time
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
        <div className="client pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 wow animated fadeInRight">
                        <div className="pq-section-title pq-style-1">
                            <span className="pq-section-sub-title">Working with</span>
                            <h5 className="pq-section-main-title">Brand in Collection</h5>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="col-lg-12">
                            <div className="divider pq-right-border pq-45"></div>
                        </div>
                    </div>
                    <div className="col-lg-12 wow animated fadeInRight">
                        <div id="client_slider"
                             className="pq-client-box-slider pq-client-style-1 pq-p-45-90 owl-carousel">
                            {/* Slider items here */}
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                    <a>
                                        <img src="assets/images/client/7.png" alt="pq-client-img"
                                             className="pq-client-img"/>
                                        <img src="assets/images/client/h7.png" alt="pq-client-img"
                                             className="pq-client-hover-img"/>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                    <a>
                                        <img src="assets/images/client/7.png" alt="pq-client-img"
                                             className="pq-client-img"/>
                                        <img src="assets/images/client/h7.png" alt="pq-client-img"
                                             className="pq-client-hover-img"/>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                    <a>
                                        <img src="assets/images/client/7.png" alt="pq-client-img"
                                             className="pq-client-img"/>
                                        <img src="assets/images/client/h7.png" alt="pq-client-img"
                                             className="pq-client-hover-img"/>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                    <a>
                                        <img src="assets/images/client/7.png" alt="pq-client-img"
                                             className="pq-client-img"/>
                                        <img src="assets/images/client/h7.png" alt="pq-client-img"
                                             className="pq-client-hover-img"/>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                    <a>
                                        <img src="assets/images/client/7.png" alt="pq-client-img"
                                             className="pq-client-img"/>
                                        <img src="assets/images/client/h7.png" alt="pq-client-img"
                                             className="pq-client-hover-img"/>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                    <a>
                                        <img src="assets/images/client/7.png" alt="pq-client-img"
                                             className="pq-client-img"/>
                                        <img src="assets/images/client/h7.png" alt="pq-client-img"
                                             className="pq-client-hover-img"/>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                    <a>
                                        <img src="assets/images/client/7.png" alt="pq-client-img"
                                             className="pq-client-img"/>
                                        <img src="assets/images/client/h7.png" alt="pq-client-img"
                                             className="pq-client-hover-img"/>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                    <a>
                                        <img src="assets/images/client/7.png" alt="pq-client-img"
                                             className="pq-client-img"/>
                                        <img src="assets/images/client/h7.png" alt="pq-client-img"
                                             className="pq-client-hover-img"/>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                    <a>
                                        <img src="assets/images/client/7.png" alt="pq-client-img"
                                             className="pq-client-img"/>
                                        <img src="assets/images/client/h7.png" alt="pq-client-img"
                                             className="pq-client-hover-img"/>
                                    </a>
                                </div>
                            </div>

                            {/* Repeat for other client items */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clients;
