import React from "react";
import GoogleMapComponent from "./googlemap.component";

class ContactsComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            
            
        };
    }

    componentDidMount() {
        
    }

    render() {

        return (
            <section className="contact_section  long_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form_container">
                                <div className="heading_container">
                                    <h2>
                                        Contact Us
                                    </h2>
                                </div>
                                <form action="">
                                    <div>
                                        <input type="text" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Phone Number" />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div>
                                        <input type="text" className="message-box" placeholder="Message" />
                                    </div>
                                    <div className="btn_box">
                                        <button>
                                            SEND
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="map_container">
                                <div className="map">
                                    <GoogleMapComponent/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );

    }
}

export default ContactsComponent;