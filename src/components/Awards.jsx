import React from "react";

function Awards() {
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
                                <div className="owl-carousel owl-loaded owl-drag" data-dots="true" data-nav="false"
                                     data-desk_num="4" data-lap_num="3" data-tab_num="2" data-mob_num="1"
                                     data-mob_sm="1" data-autoplay="true" data-loop="true" data-margin="30">
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