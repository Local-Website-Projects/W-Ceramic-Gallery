import React from "react";
import {Link} from "react-router-dom";

function Breadcrumb(props) {
    return (
        <div>
            {/* Breadcrumb */}
            <div className="pq-breadcrumb">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav aria-label="breadcrumb">
                                <div className="pq-breadcrumb-title">
                                    <h1>{props.title}</h1>
                                </div>
                                <div className="pq-breadcrumb-container">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/"><i className="fas fa-home me-2"></i>Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active">{props.title}</li>
                                    </ol>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb */}
        </div>
    )
}
export default Breadcrumb