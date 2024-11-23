import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import DesignDetails from "./DesignDetails";

function designIdea() {
    return (
        <div>
            <Header></Header>
            <Breadcrumb title="Design Idea"></Breadcrumb>

            <section className="masonry">
                <div className="container">
                    <div className="row">
                        <div className='col-lg-4 col-12'>
                            <div className="pq-masonry-item pq-filter-items  ipt-lg-4 style_2">
                                <div className="pq-portfoliobox-1">
                                    <div className="pq-portfolio-block">
                                        <div className="pq-portfolio-img">
                                            <img decoding="async" src="assets/images/gallery/1.jpg" alt=""/>
                                        </div>
                                        <div className="pq-portfolio-info">
                                            <h5><Link to="/Design-Details?value=Drawing Room">
                                                Drawing Room
                                            </Link></h5>
                                            <span><Link to="/Design-Details?value=Drawing Room">
                                                      Drawing Room
                                                    </Link></span>
                                        </div>
                                        <div className="pq-btn-container">
                                            <Link to="/Design-Details?value=Drawing Room"
                                                  className="pq-button pq-button-link">
                                                <div className="pq-button-block">
                                                    <div className="pq-svg">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             width="64.356"
                                                             height="36.52" viewBox="0 0 64.356 36.52">
                                                            <g transform="translate(-6.444 -1.74)">
                                                                <g data-name="Group 2">
                                                                    <circle data-name="Ellipse 2" cx="17"
                                                                            cy="17.76" r="17.76"
                                                                            transform="translate(34.78 2.24)"
                                                                            fill="none" stroke="#e6af5d"
                                                                            stroke-width="1"
                                                                            opacity="0.5"></circle>
                                                                    <circle data-name="Ellipse 3" cx="17"
                                                                            cy="17.76" r="17.76"
                                                                            transform="translate(34.78 2.24)"
                                                                            fill="none" stroke="#e6af5d"
                                                                            stroke-width="1"></circle>
                                                                </g>
                                                                <path data-name="Path 1"
                                                                      d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                      fill="#e6af5d"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-12'>
                            <div className="pq-masonry-item pq-filter-items  ipt-lg-4 style_2">
                                <div className="pq-portfoliobox-1">
                                    <div className="pq-portfolio-block">
                                        <div className="pq-portfolio-img">
                                            <img decoding="async" src="assets/images/gallery/2.jpg" alt=""/>
                                        </div>
                                        <div className="pq-portfolio-info">
                                            <h5><Link to="/Design-Details?value=Bed Room">Bed Room</Link></h5>
                                            <span><Link to="/Design-Details?value=Bed Room">Design</Link></span>
                                        </div>
                                        <div className="pq-btn-container">
                                            <Link to="/Design-Details?value=Bed Room"
                                                  className="pq-button pq-button-link">
                                                <div className="pq-button-block">
                                                    <div className="pq-svg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="64.356"
                                                             height="36.52" viewBox="0 0 64.356 36.52">
                                                            <g transform="translate(-6.444 -1.74)">
                                                                <g data-name="Group 2">
                                                                    <circle data-name="Ellipse 2" cx="17"
                                                                            cy="17.76" r="17.76"
                                                                            transform="translate(34.78 2.24)"
                                                                            fill="none" stroke="#e6af5d"
                                                                            stroke-width="1"
                                                                            opacity="0.5"></circle>
                                                                    <circle data-name="Ellipse 3" cx="17"
                                                                            cy="17.76" r="17.76"
                                                                            transform="translate(34.78 2.24)"
                                                                            fill="none" stroke="#e6af5d"
                                                                            stroke-width="1"></circle>
                                                                </g>
                                                                <path data-name="Path 1"
                                                                      d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                      fill="#e6af5d"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <div className="pq-masonry-item pq-filter-items  ipt-lg-4 style_2">
                                <div className="pq-portfoliobox-1">
                                    <div className="pq-portfolio-block">
                                        <div className="pq-portfolio-img">
                                            <img decoding="async" src="assets/images/gallery/3.jpg" alt=""/>
                                        </div>
                                        <div className="pq-portfolio-info">
                                            <h5><Link to="/Design-Details?value=Bathroom">Bathroom</Link></h5>
                                            <span><Link to="/Design-Details?value=Bathroom">Design</Link></span>
                                        </div>
                                        <div className="pq-btn-container">
                                            <Link to="/Design-Details?value=Bathroom"
                                                  className="pq-button pq-button-link">
                                                <div className="pq-button-block">
                                                    <div className="pq-svg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="64.356"
                                                             height="36.52" viewBox="0 0 64.356 36.52">
                                                            <g transform="translate(-6.444 -1.74)">
                                                                <g data-name="Group 2">
                                                                    <circle data-name="Ellipse 2" cx="17"
                                                                            cy="17.76" r="17.76"
                                                                            transform="translate(34.78 2.24)"
                                                                            fill="none" stroke="#e6af5d"
                                                                            stroke-width="1"
                                                                            opacity="0.5"></circle>
                                                                    <circle data-name="Ellipse 3" cx="17"
                                                                            cy="17.76" r="17.76"
                                                                            transform="translate(34.78 2.24)"
                                                                            fill="none" stroke="#e6af5d"
                                                                            stroke-width="1"></circle>
                                                                </g>
                                                                <path data-name="Path 1"
                                                                      d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                      fill="#e6af5d"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <div className="pq-masonry-item pq-filter-items  ipt-lg-4 style_2">
                                <div className="pq-portfoliobox-1">
                                    <div className="pq-portfolio-block">
                                        <div className="pq-portfolio-img">
                                            <img decoding="async" src="assets/images/gallery/4.jpg" alt=""/>
                                        </div>
                                        <div className="pq-portfolio-info">
                                            <h5><Link to="/Design-Details?value=Kitchen">Kitchen</Link></h5>
                                            <span><Link to="/Design-Details?value=Kitchen">Design</Link></span>
                                        </div>
                                        <div className="pq-btn-container">
                                            <Link to="/Design-Details?value=Kitchen"
                                                  className="pq-button pq-button-link">
                                                <div className="pq-button-block">
                                                    <div className="pq-svg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="64.356"
                                                             height="36.52" viewBox="0 0 64.356 36.52">
                                                            <g transform="translate(-6.444 -1.74)">
                                                                <g data-name="Group 2">
                                                                    <circle data-name="Ellipse 2" cx="17"
                                                                            cy="17.76" r="17.76"
                                                                            transform="translate(34.78 2.24)"
                                                                            fill="none" stroke="#e6af5d"
                                                                            stroke-width="1"
                                                                            opacity="0.5"></circle>
                                                                    <circle data-name="Ellipse 3" cx="17"
                                                                            cy="17.76" r="17.76"
                                                                            transform="translate(34.78 2.24)"
                                                                            fill="none" stroke="#e6af5d"
                                                                            stroke-width="1"></circle>
                                                                </g>
                                                                <path data-name="Path 1"
                                                                      d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                      fill="#e6af5d"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <div className="pq-masonry-item pq-filter-items  ipt-lg-4 style_2">
                                <div className="pq-portfoliobox-1">
                                    <div className="pq-portfolio-block">
                                        <div className="pq-portfolio-img">
                                            <img decoding="async" src="assets/images/gallery/5.jpg" alt=""/>
                                        </div>
                                        <div className="pq-portfolio-info">
                                            <h5><Link to="/Design-Details?value=Exterior">Exterior</Link></h5>
                                            <span><Link to="/Design-Details?value=Exterior">Design</Link></span>
                                        </div>
                                        <div className="pq-btn-container">
                                            <Link to="/Design-Details?value=Exterior"
                                                  className="pq-button pq-button-link">
                                                <div className="pq-button-block">
                                                    <div className="pq-svg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="64.356"
                                                             height="36.52" viewBox="0 0 64.356 36.52">
                                                            <g transform="translate(-6.444 -1.74)">
                                                                <g data-name="Group 2">
                                                                    <circle data-name="Ellipse 2" cx="17"
                                                                            cy="17.76" r="17.76"
                                                                            transform="translate(34.78 2.24)"
                                                                            fill="none" stroke="#e6af5d"
                                                                            stroke-width="1"
                                                                            opacity="0.5"></circle>
                                                                    <circle data-name="Ellipse 3" cx="17"
                                                                            cy="17.76" r="17.76"
                                                                            transform="translate(34.78 2.24)"
                                                                            fill="none" stroke="#e6af5d"
                                                                            stroke-width="1"></circle>
                                                                </g>
                                                                <path data-name="Path 1"
                                                                      d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                      fill="#e6af5d"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <div className="pq-masonry-item pq-filter-items  ipt-lg-4 style_2">
                                <div className="pq-portfoliobox-1">
                                    <div className="pq-portfolio-block">
                                        <div className="pq-portfolio-img">
                                            <img decoding="async" src="assets/images/gallery/6.jpg" alt=""/>
                                        </div>
                                        <div className="pq-portfolio-info">
                                            <h5><Link to="/Design-Details?value=Commercial Space">Commercial
                                                Space</Link></h5>
                                            <span><Link
                                                to="/Design-Details?value=Commercial Space">Design</Link></span>
                                        </div>
                                        <div className="pq-btn-container">
                                            <Link to="/Design-Details?value=Commercial Space"
                                                  className="pq-button pq-button-link">
                                                <div className="pq-button-block">
                                                    <div className="pq-svg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="64.356"
                                                             height="36.52" viewBox="0 0 64.356 36.52">
                                                            <g transform="translate(-6.444 -1.74)">
                                                                <g data-name="Group 2">
                                                                    <circle data-name="Ellipse 2" cx="17"
                                                                            cy="17.76" r="17.76"
                                                                            transform="translate(34.78 2.24)"
                                                                            fill="none" stroke="#e6af5d"
                                                                            stroke-width="1"
                                                                            opacity="0.5"></circle>
                                                                    <circle data-name="Ellipse 3" cx="17"
                                                                            cy="17.76" r="17.76"
                                                                            transform="translate(34.78 2.24)"
                                                                            fill="none" stroke="#e6af5d"
                                                                            stroke-width="1"></circle>
                                                                </g>
                                                                <path data-name="Path 1"
                                                                      d="M49.525,14.265l-.627.779,5.583,4.5H6.444v1h48.02L48.9,24.954l.621.783L56.7,20.044Z"
                                                                      fill="#e6af5d"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default designIdea;