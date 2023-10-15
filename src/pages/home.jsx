import React from "react";

import WebHead from "../components/webhead.component";
import MenuBar from "../components/menubar.component";
import HeroSlider from "../components/heroslider.component";
import SampleProducts from "../components/sampleproducts.component";
import LeftImageRightContentLayout from "../components/left-image-right-content.component";
import BlogCard from "../components/blogcard.component";
import BlogPosts from "../components/blogposts.component";
import ContactsComponent from "../components/contacts.component";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            head_insiders: {
                page_title: "Home",
                keywords: ["Best Site", "Best Site 2", "Best Site 3"],
                description: 'Test Description'
            },

        }
    }

    componentDidMount() {
        // Move your side effect code here
    }

    render() {

        return (
            <>
                <WebHead headInsiders={this.state.head_insiders} />

                <div className="hero_area">
                    <MenuBar />
                    <HeroSlider />
                </div>

                <SampleProducts />

                <LeftImageRightContentLayout
                    heading={"About Us"}
                    text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore."}
                    image={process.env.PUBLIC_URL + "assets/images/about-img.png"}
                    buttonName="Read More"
                    buttonURL="/about"
                />

                <BlogPosts/>

                <ContactsComponent/>

            </>
        );
    }
}

export default HomePage;


