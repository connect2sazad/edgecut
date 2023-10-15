import React from "react";
import ProductCard from "./productcard.component";

class SampleProducts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            heading: "Our Furniture",
            text: "which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an",
            products: [
                {
                    name: "BROWN CHAIR DESIGN",
                    image: process.env.PUBLIC_URL + "assets/images/f1.png",
                    price: "100.00",
                    url: "#"
                },
                {
                    name: "DOUBLE BED DESIGN",
                    image: process.env.PUBLIC_URL + "assets/images/f2.png",
                    price: "200.00",
                    url: "#"
                },
                {
                    name: "HOUSE CHAIR DESIGN",
                    image: process.env.PUBLIC_URL + "assets/images/f3.png",
                    price: "200.00",
                    url: "#"
                },
                {
                    name: "BROWN TABLE DESIGN",
                    image: process.env.PUBLIC_URL + "assets/images/f4.png",
                    price: "100.00",
                    url: "#"
                },
                {
                    name: "BLUE CHAIR DESIGN",
                    image: process.env.PUBLIC_URL + "assets/images/f5.png",
                    price: "200.00",
                    url: "#"
                },
                {
                    name: "BROWN TABLE DESIGN",
                    image: process.env.PUBLIC_URL + "assets/images/f6.png",
                    price: "200.00",
                    url: "#"
                }
            ]
        };

    }

    componentDidMount() {

    }

    render() {
        return (
            <section className="furniture_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            {this.state.heading}
                        </h2>
                        <p>
                            {this.state.text}
                        </p>
                    </div>
                    <div className="row">
                        {
                            this.state.products.map((slide, index) => (
                                <ProductCard key={index} productName={slide.name} productImageURL={slide.image} productPrice={slide.price} productLink={slide.url} />
                            ))
                        }
                    </div>
                </div>
            </section>
        );
    }

}

export default SampleProducts;