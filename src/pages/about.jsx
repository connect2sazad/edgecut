import React from "react";
import WebHead from "../components/webhead.component";

class AboutUsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            head_insiders: {
                page_title: "About"
            }
        }
    }

    render() {

        return (
            <>
                <WebHead headInsiders={this.state.head_insiders}/>
                {this.state.head_insiders.page_title}
            </>
        );
    }
}

export default AboutUsPage;