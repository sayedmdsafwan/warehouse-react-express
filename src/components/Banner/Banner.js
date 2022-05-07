import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <h2 className="text-white display-4 mb-4">
                    We deliver quality service.{" "}
                </h2>
                <a href="#services">
                    <button className="btn btn-danger text-uppercase btn-lg">
                        See inventory items
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Banner;
