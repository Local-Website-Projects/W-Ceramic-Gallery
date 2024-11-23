import React, { useEffect, useRef } from "react";

function Clients() {
    const carouselRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined" && window.jQuery) {
            if (!carouselRef.current.classList.contains('initialized')) {
                window.jQuery(carouselRef.current).owlCarousel({
                    items: 6,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    nav: false,
                    dots: true,
                    margin: 30,
                    responsive: {
                        0: {
                            items: 2,
                        },
                        480: {
                            items: 2,
                        },
                        768: {
                            items: 4,
                        },
                        992: {
                            items: 6,
                        },
                    },
                });
                carouselRef.current.classList.add('initialized');
            }
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
                        <div
                            ref={carouselRef}  // Attaching the ref to the carousel container
                            id="client_slider"
                            className="pq-client-box-slider pq-client-style-1 pq-p-45-90 owl-carousel"
                        >
                            {/* Slider items */}
                            {[...Array(9).keys()].map((i) => (
                                <div className="item" key={i}>
                                    <div className="pq-client-box pq-client-style-1">
                                        <a href="#">
                                            <img
                                                src={`assets/images/client/7.png`}
                                                alt="pq-client-img"
                                                className="pq-client-img"
                                            />
                                            <img
                                                src={`assets/images/client/h7.png`}
                                                alt="pq-client-img"
                                                className="pq-client-hover-img"
                                            />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clients;
