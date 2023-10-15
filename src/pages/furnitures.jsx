import React from "react";

import WebHead from "../components/webhead.component";
import MenuBar from "../components/menubar.component";
import LeftImageRightContentLayout from "../components/left-image-right-content.component";
import SampleProducts from "../components/sampleproducts.component";

class FurnituresPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            head_insiders: {
                page_title: "Furnitures",
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

                <SampleProducts/>
            </>
        );
    }
}

export default FurnituresPage;