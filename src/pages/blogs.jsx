import React from "react";

import WebHead from "../components/webhead.component";
import MenuBar from "../components/menubar.component";
import BlogPosts from "../components/blogposts.component";

class BlogsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            head_insiders: {
                page_title: "Blogs",
                keywords: ["Best Site", "Best Site 2", "Best Site 3"],
                description: 'Test Description'
            }
        }
    }

    render() {

        return (
            <>
                <WebHead headInsiders={this.state.head_insiders} />

                <MenuBar />

                <BlogPosts/>
            </>
        );
    }
}

export default BlogsPage;