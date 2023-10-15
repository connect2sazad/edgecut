import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blogTitle, blogImageURL, blogText, blogLink }) => {

    return (
        <div className="col-md-6 col-lg-4 mx-auto">
            <div className="box">
                <div className="img-box">
                    <img src={blogImageURL} alt="" />
                </div>
                <div className="detail-box">
                    <h5>
                        {blogTitle}
                    </h5>
                    <p>
                        {blogText}
                    </p>
                    <Link to={blogLink}>
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );

}

export default BlogCard;