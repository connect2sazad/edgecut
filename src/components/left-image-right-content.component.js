import React from "react";
import { Link } from "react-router-dom";

const LeftImageRightContentLayout = ({ heading, text, image, buttonName, buttonURL }) => {

    return (
        <section className="about_section layout_padding long_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img-box">
                            <img src={image} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2>
                                    {heading}
                                </h2>
                            </div>
                            <p>
                                {text}
                            </p>
                            <Link to={buttonURL}>
                                {buttonName}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default LeftImageRightContentLayout;