import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ productName, productImageURL, productPrice, productLink }) => {

    return (
        <div className="col-md-6 col-lg-4">
            <div className="box">
                <div className="img-box">
                    <img src={productImageURL} alt="" />
                </div>
                <div className="detail-box">
                    <h5>
                        {productName}
                    </h5>
                    <div className="price_box">
                        <h6 className="price_heading">
                            <span>₹</span> {productPrice}
                        </h6>
                        <Link to={productLink}>
                            Buy Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProductCard;