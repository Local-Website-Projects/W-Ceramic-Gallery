import React, {useEffect} from "react";

function Testimonials() {
    useEffect(() => {
        // Ensure the Owl carousel initializes after the component is rendered
        if (typeof window !== "undefined" && window.jQuery) {
            window.jQuery("#testimonialSlider").owlCarousel({
                items: 1, // Show one testimonial at a time
                loop: true, // Loop through testimonials
                autoplay: true, // Enable autoplay
                autoplayTimeout: 5000, // Set autoplay timeout
                nav: false, // No navigation arrows
                dots: true, // Show dots for navigation
            });
        }
    }, []);

    return (
        <div>
            <section className="testimonial pq-bg-img-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 wow animated fadeInLeft">
                            <div className="pq-section-title pq-style-1">
                                <span className="pq-section-sub-title">our testimonial</span>
                                <h5 className="pq-section-main-title">What Our Clients Say</h5>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="divider pq-left-border pq-45"></div>
                        </div>
                        <div className="col-lg-12 wow animated fadeInUp">
                            <div className="pq-testimonial-box-slider pq-style-2">
                                <div className="owl-carousel owl-loaded owl-drag" id="testimonialSlider">
                                    <div className="item">
                                        <div className="pq-testimonial-box pq-style-2 text-left">
                                            <div className="pq-testimonial-media">
                                                <div className="pq-testimonial-img">
                                                    <img decoding="async" src="assets/images/testimonial/1.jpg"
                                                         alt="Testimonial-image"/>
                                                </div>
                                            </div>
                                            <div className="pq-testimonial-info">
                                                <div className="pq-testimonial-content">
                                                    <p className="pq-testimonial-description">
                                                        There are many variations of passages of Lorem Ipsum available,
                                                        the majority have suffered alter ation in someform, by injected
                                                        humour, or randomised words which don’t look even variations of
                                                        able. Lorem Ipsum available, the majority have sufferedThere are
                                                        many variations of passages of It is a long established fact
                                                        that a reader.
                                                    </p>
                                                </div>
                                                <div className="pq-team-content-info">
                                                    <div className="pq-testimonial-meta">
                                                        <h5 className="pq-testmonial-title">Alex John Martin</h5>
                                                        <span>Manager</span>
                                                    </div>
                                                    <div className="pq-testimonial-icon">
                                                        <i className="fas fa-quote-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="pq-testimonial-box pq-style-2 text-left">
                                            <div className="pq-testimonial-media">
                                                <div className="pq-testimonial-img">
                                                    <img decoding="async" src="assets/images/testimonial/2.jpg"
                                                         alt="Testimonial-image"/>
                                                </div>
                                            </div>
                                            <div className="pq-testimonial-info">
                                                <div className="pq-testimonial-content">
                                                    <p className="pq-testimonial-description">
                                                        There are many variations of passages of Lorem Ipsum available,
                                                        the majority have suffered alter ation in someform, by injected
                                                        humour, or randomised words which don’t look even variations of
                                                        able. Lorem Ipsum available, the majority have sufferedThere are
                                                        many variations of passages of It is a long established fact
                                                        that a reader.
                                                    </p>
                                                </div>
                                                <div className="pq-team-content-info">
                                                    <div className="pq-testimonial-meta">
                                                        <h5 className="pq-testmonial-title">Alex John Martin</h5>
                                                        <span>Manager</span>
                                                    </div>
                                                    <div className="pq-testimonial-icon">
                                                        <i className="fas fa-quote-right"></i>
                                                    </div>
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
        </div>
    );
}

export default Testimonials;
