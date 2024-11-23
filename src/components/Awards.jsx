import React, {useEffect, useRef} from "react";

function Awards() {
    const carouselNewRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined" && window.jQuery) {
            if (!carouselNewRef.current.classList.contains('initialized')) {
                window.jQuery(carouselNewRef.current).owlCarousel({
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
                carouselNewRef.current.classList.add('initialized');
            }
        }
    }, []);
    return (
        <div>
            <section className="award">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 wow animated fadeInRight">
                            <div className="pq-section-title pq-style-1">
                                <span className="pq-section-sub-title">what we achieve</span>
                                <h5 className="pq-section-main-title">Certifications</h5>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="divider pq-right-border pq-45"></div>
                        </div>
                        <div className="col-lg-12 wow animated fadeInLeft">
                            <div className="pq-awardbox-1-slider pq-awardbox-1">
                                <div className="owl-carousel owl-loaded owl-drag" id="awards" ref={carouselNewRef}>
                                    <div className="item">
                                        <div className="pq-awardbox-1">
                                            <a>
                                                <img decoding="async" src="assets/images/award/1.png" alt="pq-award-img"/>
                                                <span className="pq-award-title">employee awards</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="pq-awardbox-1">
                                            <a>
                                                <img decoding="async" src="assets/images/award/2.png" alt="pq-award-img"/>
                                                <span className="pq-award-title">cup trophy awards</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="pq-awardbox-1">
                                            <a>
                                                <img decoding="async" src="assets/images/award/3.png" alt="pq-award-img"/>
                                                <span className="pq-award-title">design well acetech</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="pq-awardbox-1">
                                            <a>
                                                <img decoding="async" src="assets/images/award/4.png" alt="pq-award-img"/>
                                                <span className="pq-award-title">design well acetech</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Awards;