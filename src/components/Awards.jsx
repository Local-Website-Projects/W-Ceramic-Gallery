import React, {useEffect} from "react";

function Awards() {
    useEffect(() => {
        if (typeof window !== "undefined" && window.jQuery) {
            // Initialize the client slider
            window.jQuery("#awards").owlCarousel({
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
                                <div className="owl-carousel owl-loaded owl-drag" id="awards">
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