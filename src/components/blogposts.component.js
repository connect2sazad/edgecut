import React from "react";

import BlogCard from "./blogcard.component";

class BlogPosts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            heading: "Latest Blog",
            blogs: [
                {
                    title: "Look even slightly believable. If you are",
                    image: process.env.PUBLIC_URL + "assets/images/b1.jpg",
                    text: "alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
                    url: "#"
                },
                {
                    title: "Anything embarrassing hidden in the middle",
                    image: process.env.PUBLIC_URL + "assets/images/b2.jpg",
                    text: "alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
                    url: "#"
                },
                {
                    title: "Molestias magni natus dolores odio commodi.",
                    image: process.env.PUBLIC_URL + "assets/images/b3.jpg",
                    text: "alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
                    url: "#"
                }
            ]
        };
    }

    render() {
        return (
            <section className="blog_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            {this.state.heading}
                        </h2>
                    </div>
                    <div className="row">

                        {
                            this.state.blogs.map((blog, index) => (
                                <BlogCard key={index} blogTitle={blog.title} blogImageURL={blog.image} blogText={blog.text} blogLink={blog.url} />
                            ))
                        }

                    </div>
                </div>
            </section>
        );
    }
}

export default BlogPosts;