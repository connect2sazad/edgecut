import React from "react";

import WebHead from "../components/webhead.component";
import MenuBar from "../components/menubar.component";
import BlogCard from "../components/blogcard.component";
import ContactsComponent from "../components/contacts.component";

class ContactUsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            head_insiders: {
                page_title: "Blogs",
                keywords: ["Best Site", "Best Site 2", "Best Site 3"],
                description: 'Test Description'
            },
            heading: "Latest Blogs",
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
        }
    }

    render() {

        return (
            <>
                <WebHead headInsiders={this.state.head_insiders} />

                <MenuBar />

                <ContactsComponent/>
            </>
        );
    }
}

export default ContactUsPage;