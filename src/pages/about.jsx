import React from "react";

import WebHead from "../components/webhead.component";
import MenuBar from "../components/menubar.component";
import LeftImageRightContentLayout from "../components/left-image-right-content.component";

class AboutUsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            head_insiders: {
                page_title: "About",
                keywords: ["Best Site", "Best Site 2", "Best Site 3"],
                description: 'Test Description'
            }
        }
    }

    render() {

        return (
            <>
                <WebHead headInsiders={this.state.head_insiders} />

                <MenuBar/>

                <LeftImageRightContentLayout
                    heading={"About Us"}
                    text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore."}
                    image={process.env.PUBLIC_URL + "assets/images/about-img.png"}
                    buttonName="Read More"
                    buttonURL="/about"
                />
            </>
        );
    }
}

export default AboutUsPage;